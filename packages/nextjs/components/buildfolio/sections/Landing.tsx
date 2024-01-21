import Image from "next/image";
import { socials } from "../Socials";

export function Landing() {
  return (
    <section id="landing" className="py-36 xl:py-60">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-6">
        <div className="mb-5">
          <div className="w-72 h-72 xl:w-96 xl:h-96 rounded-full overflow-hidden ">
            <Image priority={true} src="/bufficorn.jpg" width={500} height={500} alt="Picture of Matt Pereira" />
          </div>
        </div>
        <div>
          <h1 className="text-4xl md:text-6xl xl:text-8xl py-4 px-6 rounded-2xl font-cubano text-base-300 bg-base-content mb-3">
            Matt Pereira
          </h1>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-cubano mb-3 text-center lg:text-start text-base-content">
            Full Stack Developer
          </h2>
          <div className="flex justify-center lg:justify-start">
            {socials.map(({ url, icon, id }) => (
              <a
                key={id}
                href={url}
                className="inline-block p-2 mr-3 rounded-full text-base-300 bg-primary hover:bg-accent"
                target="_blank"
                rel="noreferrer"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
