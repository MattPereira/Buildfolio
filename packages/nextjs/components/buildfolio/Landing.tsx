"use client";

import { SmartImage, SocialLinks } from "~~/components/buildfolio/common";

export function Landing() {
  return (
    <section id="landing" className="py-36 xl:py-60">
      <div className="text-center"></div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
        <>
          <div>
            <div className="w-72 h-72 xl:w-96 xl:h-96 rounded-full overflow-hidden ">
              <SmartImage src="/pfp.png" width={500} height={500} alt="Personal Profile Picture" />
            </div>
          </div>

          <div>
            <div className="text-center lg:text-start mb-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://app.ens.domains/matthu.eth`}
                className="text-center md:text-start mb-3"
              >
                <span className="font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-violet-500 to-orange-500 mb-0">
                  matthu.eth
                </span>
              </a>
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-8xl py-4 px-6 rounded-2xl font-cubano text-base-300 bg-base-content mb-3 text-center">
              Matt Pereira
            </h1>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-cubano mb-3 text-center lg:text-start text-base-content">
              Full Stack Developer
            </h2>
            <div className="flex justify-center lg:justify-start">
              <SocialLinks isButtonStyle={true} />
            </div>
          </div>
        </>
      </div>
    </section>
  );
}
