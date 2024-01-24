"use client";

import { useEffect, useState } from "react";
import { createEnsPublicClient } from "@ensdomains/ensjs";
import { getAddressRecord, getTextRecord } from "@ensdomains/ensjs/public";
import { http } from "viem";
import { mainnet } from "viem/chains";
import { SmartImage } from "~~/components/buildfolio/SmartImage";
import { useFetchImageSrc } from "~~/hooks/buildfolio/useFetchImageSrc";
import GithubIcon from "~~/public/socials/github.svg";
import TelegramIcon from "~~/public/socials/telegram.svg";
import TwitterIcon from "~~/public/socials/twitter.svg";

const ensName = "matthu.eth";

/**
 *
 */
export function Landing() {
  const [records, setRecords] = useState<any>(null);

  useEffect(() => {
    const client = createEnsPublicClient({
      chain: mainnet,
      transport: http(),
    });

    async function fetchAddress() {
      try {
        const [ethAddress, twitterUsername, githubUsername, telegramUsername, title, name, description, avatar] =
          await client.ensBatch(
            getAddressRecord.batch({ name: "ensName" }),
            getTextRecord.batch({ name: ensName, key: "com.twitter" }),
            getTextRecord.batch({ name: ensName, key: "com.github" }),
            getTextRecord.batch({ name: ensName, key: "org.telegram" }),
            getTextRecord.batch({ name: ensName, key: "title" }),
            getTextRecord.batch({ name: ensName, key: "name" }),
            getTextRecord.batch({ name: ensName, key: "description" }),
            getTextRecord.batch({ name: ensName, key: "avatar" }),
          );
        const records = {
          ethAddress,
          twitterUsername,
          githubUsername,
          telegramUsername,
          title,
          name,
          description,
          avatar,
        };
        setRecords(records);
      } catch (error) {
        console.error("Error fetching address:", error);
        // Handle the error appropriately
      }
    }

    fetchAddress();
  }, []);

  return (
    <section id="landing" className="py-36 xl:py-60">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
        {!records ? (
          <>
            {imageSkeleton}
            {ensDetailsSkeleton}
          </>
        ) : (
          <>
            <div>{records?.avatar && <ProfilePicture ensAvatarRecord={records.avatar} />}</div>
            <div>
              <h1 className="text-4xl md:text-6xl xl:text-8xl py-4 px-6 rounded-2xl font-cubano text-base-300 bg-base-content mb-3">
                {records?.name}
              </h1>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-cubano mb-3 text-center lg:text-start text-base-content">
                {records?.title}
              </h2>
              <div className="flex justify-center lg:justify-start">
                <a
                  href={`https://twitter.com/${records?.twitterUsername}`}
                  className="inline-block p-2 mr-3 rounded-full text-base-300 bg-primary hover:bg-accent"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterIcon width={35} height={35} alt="twitter icon" />
                </a>
                <a
                  href={`https://t.me//${records?.telegramUsername}`}
                  className="inline-block p-2 mr-3 rounded-full text-base-300 bg-primary hover:bg-accent"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TelegramIcon width={35} height={35} alt="twitter icon" />
                </a>

                <a
                  href={`https://github.com/${records?.githubUsername}`}
                  className="inline-block p-2 mr-3 rounded-full text-base-300 bg-primary hover:bg-accent"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon width={35} height={35} alt="twitter icon" />
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function ProfilePicture({ ensAvatarRecord }: { ensAvatarRecord: string }) {
  const { imageUrl, isLoading } = useFetchImageSrc(ensAvatarRecord);

  if (isLoading || imageUrl === "") {
    return imageSkeleton;
  }

  return (
    <div className="w-72 h-72 xl:w-96 xl:h-96 rounded-full overflow-hidden ">
      <SmartImage src={imageUrl} width={500} height={500} alt="Picture of Matt Pereira" />
    </div>
  );
}

/*** Skeleton Loaders ***/
const imageSkeleton = (
  <div className="w-72 h-72 xl:w-96 xl:h-96 rounded-full overflow-hidden bg-base-200 animate-pulse"></div>
);

const ensDetailsSkeleton = (
  <div>
    <div className="mb-5 w-72 h-20 xl:w-[550px] xl:h-28 rounded-xl overflow-hidden bg-base-200 animate-pulse"></div>
    <div className="mb-3 w-72 h-12 xl:w-96 xl:h-20 rounded-xl overflow-hidden bg-base-200 animate-pulse"></div>
    <div className="flex justify-center lg:justify-start gap-2">
      <div className="w-16 h-16 rounded-full overflow-hidden bg-base-200 animate-pulse"></div>
      <div className="w-16 h-16 rounded-full overflow-hidden bg-base-200 animate-pulse"></div>
      <div className="w-16 h-16 rounded-full overflow-hidden bg-base-200 animate-pulse"></div>
    </div>
  </div>
);
