"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import { buidlGuidlWalletAddress, web2ProjectsData } from "~~/buildfolio.config";
import { SectionContainer, SectionHeader } from "~~/components/buildfolio/common";

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

export function Projects() {
  const [builds, setBuilds] = useState<IProject[]>([]);

  const {
    data: profileData,
    error: profileError,
    isLoading: profileDataIsLoading,
  } = useSWR(`https://buidlguidl-v3.ew.r.appspot.com/builders/${buidlGuidlWalletAddress}`, fetcher);

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

  if (profileError) {
    console.log(profileError);
  }
  return (
    <SectionContainer>
      <SectionHeader title="Projects" />

      <h5 className="font-cubano text-4xl mb-5">Decentralized</h5>

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 mb-10">
        {profileDataIsLoading || profileError
          ? projectCardSkeletons
          : builds.map(project => <ProjectCard key={project.title} project={project} />)}
      </div>

      <h5 className="font-cubano text-4xl mb-5">Centralized</h5>

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10">
        {web2ProjectsData.map(project => (
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
            className={`btn btn-accent btn-outline w-full text-xl font-inter font-bold capitalize rounded-lg`}
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

const projectCardSkeletons = Array.from(Array(3).keys()).map((_, idx) => (
  <div key={idx} className="skeleton animate-pulse bg-base-100 rounded-xl w-full h-[500px]"></div>
));
