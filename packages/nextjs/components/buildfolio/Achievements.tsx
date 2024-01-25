"use client";

import Image from "next/image";
import useSWR from "swr";
import { achievementNftsInfo } from "~~/buildfolio.config";
import { SectionContainer, SectionHeader } from "~~/components/buildfolio/common";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function Achievements() {
  return (
    <SectionContainer>
      <SectionHeader title="Achievements" />
      {achievementNftsInfo.map((info, idx) => (
        <CollectionDisplay
          key={idx}
          title={info.title}
          ownerWalletAddress={info.ownerWalletAddress}
          collectionContractAddress={info.collectionContractAddress}
        />
      ))}
    </SectionContainer>
  );
}

interface ICollectionDisplayProps {
  ownerWalletAddress: string;
  collectionContractAddress: string[];
  title: string;
}

const CollectionDisplay = ({ ownerWalletAddress, collectionContractAddress, title }: ICollectionDisplayProps) => {
  const createQueryURL = (ownerWalletAddress: string, collectionContractAddresses: string[]) => {
    let baseURL = `/api/get-nfts?owner=${encodeURIComponent(ownerWalletAddress)}`;
    collectionContractAddresses.forEach((address: string) => {
      baseURL += `&collection=${encodeURIComponent(address)}`;
    });
    return baseURL;
  };

  const queryURL = createQueryURL(ownerWalletAddress, collectionContractAddress);
  console.log("queryURL", queryURL);

  const { data, error, isLoading } = useSWR(queryURL, fetcher);
  console.log("nftData", data);

  // Process the data only if it's available
  const nfts = data
    ? data.nfts.map((nft: any) => ({
        image: nft.image?.originalUrl,
        description: nft.description,
        name: nft.raw.metadata.attributes[0].trait_type,
      }))
    : [];

  return (
    <div className="mb-10">
      <h2 className="text-4xl font-cubano mb-5">{title}</h2>
      {isLoading || error ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {Array.from(Array(10).keys()).map((_, idx) => (
            <div key={idx} className="skeleton animate-pulse bg-base-100 rounded-xl w-full h-72"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 rounded-xl">
          {nfts.map((nft: any, idx: number) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center border border-base-content rounded-xl p-3 bg-base-200 overflow-hidden"
            >
              <Image width={500} height={500} src={nft.image} alt={nft.name} className="w-48 h-48" />
              <p className="text-xl whitespace-nowrap overflow-hidden">{nft.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
