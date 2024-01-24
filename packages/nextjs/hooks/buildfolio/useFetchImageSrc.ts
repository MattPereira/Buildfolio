import { useEffect, useState } from "react";
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

const ERC721_ABI = [
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

interface UseFetchImageSrcReturn {
  imageUrl: string; // Ensuring imageUrl is always a string
  isLoading: boolean;
  isError: boolean;
}

export function useFetchImageSrc(ensRecord: string | null): UseFetchImageSrcReturn {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const client = createPublicClient({
      chain: mainnet,
      transport: http(),
    });

    async function fetchImageUrl() {
      setIsLoading(true); // Start loading
      if (!ensRecord) {
        setIsLoading(false);
        return;
      }

      // Check if the ENS record is a direct URL (i.e. instead of nft its a direct image upload to ens)
      if (ensRecord.startsWith("http://") || ensRecord.startsWith("https://")) {
        setImageUrl(ensRecord);
        setIsLoading(false);
        return;
      }

      const parts = ensRecord.split(/[:/]+/);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [eip, chainId, tokenStandard, contractAddress, tokenId] = parts;

      if (tokenStandard !== "erc721") {
        throw new Error("Only ERC721 tokens are supported");
      }

      try {
        const tokenURI: any = await client.readContract({
          address: contractAddress,
          abi: ERC721_ABI,
          functionName: "tokenURI",
          args: [tokenId],
        });

        // Convert IPFS URI to HTTP URL if necessary
        const metadataUrl = tokenURI.startsWith("ipfs://")
          ? `https://ipfs.io/ipfs/${tokenURI.split("ipfs://")[1]}`
          : tokenURI;

        // Fetch the metadata JSON
        const metadataResponse = await fetch(metadataUrl);
        const metadata = await metadataResponse.json();

        // Extract image URL from metadata
        let imageUrl = metadata.image;

        // Convert IPFS URI to HTTP URL if necessary
        if (imageUrl.startsWith("ipfs://")) {
          imageUrl = `https://ipfs.io/ipfs/${imageUrl.split("ipfs://")[1]}`;
        }

        setImageUrl(imageUrl);
      } catch (error) {
        console.error("Failed to fetch NFT image:", error);
        setIsError(true);
      } finally {
        setIsLoading(false); // Stop loading whether the fetch succeeded or failed
      }
    }

    fetchImageUrl();
  }, [ensRecord]);

  return { imageUrl, isLoading, isError };
}
