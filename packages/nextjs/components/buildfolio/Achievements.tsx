"use client";

import Image from "next/image";
import useSWR from "swr";
import { achievementNftsInfo, poapsWalletAddress } from "~~/buildfolio.config";
import { SectionContainer, SectionHeader } from "~~/components/buildfolio/common";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function Achievements() {
  return (
    <SectionContainer>
      <SectionHeader title="Achievements" />
      <PoapsDataFetcher />
      {achievementNftsInfo.map((info, idx) => (
        <GenericNftDataFetcher
          key={idx}
          title={info.title}
          ownerWalletAddress={info.ownerWalletAddress}
          collectionContractAddress={info.collectionContractAddress}
        />
      ))}
    </SectionContainer>
  );
}

const PoapsDataFetcher = () => {
  const fetchPoapsUrl = `/api/get-poaps?owner=${poapsWalletAddress}`;
  const { data: poaps, error: poapsError, isLoading: poapsIsLoading } = useSWR(fetchPoapsUrl, fetcher);

  console.log("poaps", poaps);

  const nfts = poaps
    ? poaps.data
        .map((nft: any) => ({
          tokenId: nft.tokenId,
          image: nft.event.image_url,
          description: nft.event.description,
          name: nft.event.name,
        }))
        .filter((nft: any) => nft.tokenId !== "6983794") // filter out any POAPs you don't want to display
    : [];

  return <CollectionDisplay nfts={nfts} title="POAPs" isLoading={poapsIsLoading} error={poapsError} />;
};

interface IGenericNftFetcherProps {
  ownerWalletAddress: string;
  collectionContractAddress: string[];
  title: string;
}

const GenericNftDataFetcher = ({ ownerWalletAddress, collectionContractAddress, title }: IGenericNftFetcherProps) => {
  const createQueryURL = (ownerWalletAddress: string, collectionContractAddresses: string[]) => {
    let baseURL = `/api/get-nfts?owner=${encodeURIComponent(ownerWalletAddress)}`;
    collectionContractAddresses.forEach((address: string) => {
      baseURL += `&collection=${encodeURIComponent(address)}`;
    });
    return baseURL;
  };

  const queryURL = createQueryURL(ownerWalletAddress, collectionContractAddress);

  const { data, error, isLoading } = useSWR(queryURL, fetcher);

  // Process the data only if it's available
  const nfts = data
    ? data.nfts.map((nft: any) => ({
        image: nft.image?.originalUrl,
        description: nft.description,
        name: nft.raw.metadata.attributes[0].trait_type,
      }))
    : [];

  return <CollectionDisplay nfts={nfts} title={title} isLoading={isLoading} error={error} />;
};

const CollectionDisplay = ({
  nfts,
  title,
  isLoading,
  error,
}: {
  nfts: any;
  title: string;
  isLoading: boolean;
  error: any;
}) => {
  return (
    <div className="mb-10">
      <h2 className="text-4xl font-cubano mb-5">{title}</h2>
      {isLoading || error ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {Array.from(Array(4).keys()).map((_, idx) => (
            <div key={idx} className="skeleton animate-pulse bg-base-100 rounded-xl w-full h-72"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 rounded-xl">
          {nfts.map((nft: any, idx: number) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center border border-base-content rounded-xl p-3 bg-base-200 overflow-hidden cursor-pointer group hover:bg-primary hover:text-primary-content"
            >
              <Image width={500} height={500} src={nft.image} alt={nft.name} className="w-48 h-48 group-hover:hidden" />
              <p className="text-xl hidden group-hover:block">{nft.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
