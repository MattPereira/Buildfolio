import Image from "next/image";
import { githubReadmeUrl } from "~~/buildfolio.config";
import { SectionContainer, SectionHeader } from "~~/components/buildfolio/common";

interface IVideo {
  title: string;
  videoId: string;
  url: string;
}

interface IPlaylist {
  title: string;
  url: string;
  videos: IVideo[];
}

// Cache the README for an hour so pushing to the profile repo updates the site without a redeploy
const README_REVALIDATE_SECONDS = 3600;

export async function Videos() {
  const playlists = await fetchVideoPlaylists();

  if (playlists.length === 0) return null;

  return (
    <SectionContainer>
      <SectionHeader title="Videos" />

      {playlists.map(playlist => (
        <div key={playlist.url} className="mb-10 last:mb-0">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
            {playlist.videos.map(video => (
              <a
                key={video.videoId}
                href={video.url}
                target="_blank"
                rel="noreferrer"
                className="border border-base-content rounded-xl overflow-hidden"
              >
                <Image
                  width={1280}
                  height={720}
                  src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-auto"
                />
              </a>
            ))}
          </div>
        </div>
      ))}
    </SectionContainer>
  );
}

async function fetchVideoPlaylists(): Promise<IPlaylist[]> {
  try {
    const response = await fetch(githubReadmeUrl, { next: { revalidate: README_REVALIDATE_SECONDS } });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    return parseVideosSection(await response.text());
  } catch (error) {
    console.error("Failed to fetch github readme:", error);
    return [];
  }
}

/**
 * Pulls playlists out of the "Videos" heading of the github profile README
 *
 * @dev expects each playlist to be a markdown list item followed by a table of
 * anchor tags wrapping youtube thumbnails, i.e.
 * - [Playlist Title](playlist url)
 * | <a href="...watch?v=VIDEO_ID..."><img src="..." alt="Video Title"></a> | ...
 */
export function parseVideosSection(markdown: string): IPlaylist[] {
  const section = markdown.split(/^#{1,6} .*Videos.*$/m)[1]?.split(/^#{1,6} /m)[0];
  if (!section) return [];

  const playlists: IPlaylist[] = [];

  for (const line of section.split("\n")) {
    const playlistMatch = line.match(/^-\s*\[([^\]]+)\]\(([^)]+)\)\s*[–-]?\s*(.*)$/);
    if (playlistMatch) {
      const [, title, url] = playlistMatch;
      playlists.push({ title, url, videos: [] });
      continue;
    }

    const currentPlaylist = playlists[playlists.length - 1];
    if (!currentPlaylist) continue;

    const anchors = line.matchAll(/<a href="([^"]*[?&]v=([\w-]+)[^"]*)"[^>]*>[\s\S]*?alt="([^"]*)"/g);
    for (const [, url, videoId, title] of anchors) {
      if (currentPlaylist.videos.some(video => video.videoId === videoId)) continue;
      currentPlaylist.videos.push({ title, videoId, url: url.replace(/&amp;/g, "&") });
    }
  }

  return playlists.filter(playlist => playlist.videos.length > 0);
}
