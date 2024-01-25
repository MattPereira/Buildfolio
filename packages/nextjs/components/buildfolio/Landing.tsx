"use client";

import { ensName } from "~~/buildfolio.config";
import { SmartImage, SocialLinks } from "~~/components/buildfolio/common";
import { useFetchImageUrl } from "~~/hooks/buildfolio/useFetchImageUrl";
import { useGlobalState } from "~~/services/store/store";

/**
 * All data fetched from ens records that are stored in global state via ScaffoldEthAppWithProviders.tsx
 */
export function Landing() {
  const ensRecords = useGlobalState(state => state.ensRecords);

  return (
    <section id="landing" className="py-36 xl:py-60">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
        {Object.keys(ensRecords).length === 0 ? (
          <>
            {imageSkeleton}
            {ensDetailsSkeleton}
          </>
        ) : (
          <>
            <div>{ensRecords?.avatar && <ProfilePicture ensAvatarRecord={ensRecords.avatar} />}</div>
            <div>
              <h1 className="text-4xl md:text-6xl xl:text-8xl py-4 px-6 rounded-2xl font-cubano text-base-300 bg-base-content mb-3">
                {ensRecords?.name || ensName}
              </h1>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-cubano mb-3 text-center lg:text-start text-base-content">
                {ensRecords?.title || "Software Engineer"}
              </h2>
              <div className="flex justify-center lg:justify-start">
                <SocialLinks isButtonStyle={true} />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function ProfilePicture({ ensAvatarRecord }: { ensAvatarRecord: string }) {
  const { imageUrl, isLoading } = useFetchImageUrl(ensAvatarRecord);

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
    <div className="mb-5 w-72 h-20 xl:w-[575px] xl:h-28 rounded-xl overflow-hidden bg-base-200 animate-pulse"></div>
    <div className="mb-3 w-72 h-12 xl:w-96 xl:h-16 rounded-xl overflow-hidden bg-base-200 animate-pulse"></div>
    <div className="flex justify-center lg:justify-start gap-2">
      <div className="w-16 h-16 rounded-full overflow-hidden bg-base-200 animate-pulse"></div>
      <div className="w-16 h-16 rounded-full overflow-hidden bg-base-200 animate-pulse"></div>
      <div className="w-16 h-16 rounded-full overflow-hidden bg-base-200 animate-pulse"></div>
    </div>
  </div>
);
