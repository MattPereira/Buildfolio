"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import { SectionContainer, SectionHeader } from "~~/components/buildfolio";

const fetcher = (url: string) => fetch(url).then(res => res.json());

interface IProject {
  title: string;
  imageSrc: string;
  description: string;
  urls: {
    demo: string;
    code: string;
  };
}

const web2Projects: IProject[] = [
  {
    title: "Contra Costa Golf Club",
    imageSrc: "/ccgc.png",
    description:
      "A full stack web application that manages all of the tournaments, greenies, members, courses, and standings data for the contra costa golf club. Users are able to input their strokes, putts, and greenies as they play each round. Handicaps and points are automatically calculated to determine individual tournament and season long champions.",
    urls: {
      demo: "https://ccgc.vercel.app/",
      code: "https://github.com/MattPereira/contra-costa-golf-club",
    },
  },
  {
    title: "Tabernacle School",
    description:
      "A single page web application for Tabernacle School that advertises to prospective families and provides current families with requisite documents, calendars, and instructions. Features include forms that allow users to send emails to the school, a FullCalender that fetches data from the school’s google calendar, and a headless CMS for updating the data and photos displayed on the website.",
    imageSrc: "/tabernacle.png",
    urls: {
      demo: "https://tabernacle.school",
      code: "https://github.com/MattPereira/tabernacle-school",
    },
  },
];

export function Projects() {
  const [builds, setBuilds] = useState<IProject[]>([]);
  const { data: profileData, error: profileError } = useSWR(
    "https://buidlguidl-v3.ew.r.appspot.com/builders/0x41f727fA294E50400aC27317832A9F78659476B9",
    fetcher,
  );
  const fetchBuildsData = useCallback(async (builds: any[]) => {
    const promises = builds.map(build => fetcher(`https://buidlguidl-v3.ew.r.appspot.com/builds/${build.id}`));
    return Promise.all(promises);
  }, []);

  useEffect(() => {
    if (profileData && profileData.builds) {
      fetchBuildsData(profileData.builds)
        .then(responses => {
          const formattedBuildsData = responses.map(response => {
            const { branch, demoUrl, desc, image, name } = response;
            return {
              title: name,
              imageSrc: image,
              description: desc,
              urls: {
                demo: demoUrl,
                code: branch,
              },
            };
          });
          setBuilds(formattedBuildsData);
        })
        .catch(err => console.log(err));
    }
  }, [profileData, fetchBuildsData]);

  if (profileError) return <div>Failed to load</div>;
  if (!profileData) return <div>Loading...</div>;
  return (
    <SectionContainer>
      <SectionHeader title="Projects" />

      <h5 className="font-inter font-bold text-4xl mb-5">Web3</h5>

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 mb-10">
        {builds.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <h5 className="font-inter font-bold text-4xl mb-5">Web2</h5>

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10">
        {web2Projects.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </SectionContainer>
  );
}

function ProjectCard({ project }: { project: IProject }) {
  return (
    <div key={project.title} className="border border-base-content rounded-xl flex flex-col bg-base-200">
      <div className="">
        <div className="w-full h-60 lg:h-64 overflow-hidden rounded-xl border-base-content border-b">
          <Image width={2000} height={1000} src={project.imageSrc} alt={project.title} priority={true} />
        </div>
      </div>

      <div className="grow flex flex-col p-5 ">
        <h5 className="text-2xl font-inter font-bold">{project.title}</h5>

        <div className="grow">
          <p className="font-gothic text-xl">{project.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <a
            href={project.urls.demo}
            target="_blank"
            rel="noreferrer"
            className={`btn btn-primary btn-outline  w-full text-xl font-inter font-bold capitalize rounded-lg`}
          >
            Demo
          </a>
          <a
            href={project.urls.code}
            target="_blank"
            rel="noreferrer"
            className={`btn btn-primary btn-outline w-full text-xl font-inter font-bold capitalize rounded-lg`}
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
