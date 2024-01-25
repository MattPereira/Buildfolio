import { useEffect, useState } from "react";
import { createPublicClient, http, parseAbi } from "viem";
import { mainnet } from "viem/chains";

const ERC721_ABI = parseAbi(["function tokenURI(uint256 tokenId) external view returns (string)"]);
const ERC1155_ABI = parseAbi(["function uri(uint256 _id) external view returns (string)"]);

interface IuseFetchImageUrl {
  imageUrl: string; // Ensuring imageUrl is always a string
  isLoading: boolean;
  isError: boolean;
}

/**
 * @param ensAvatarRecord looks different depending on how user set their ens avatar record
 * for direct image upload... https://euc.li/woogity.eth
 * for erc721... "eip155:1/erc721:0x1e988ba4692e52bc50b375bcc8585b95c48aad77/8941"
 * for erc1155... "eip155:1/erc1155:0x495f947276749ce646f68ac8c248420045cb7b5e/70259757321654187579724657227123643114717020056989902699269827354508241403905"
 * @returns imageUrl, isLoading, isError
 */
export function useFetchImageUrl(ensAvatarRecord: string | null): IuseFetchImageUrl {
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
      if (!ensAvatarRecord) {
        setIsLoading(false);
        return;
      }

      // Check if the ENS record is a direct URL (i.e. instead of nft its a direct image upload to ens)
      if (ensAvatarRecord.startsWith("http://") || ensAvatarRecord.startsWith("https://")) {
        setImageUrl(ensAvatarRecord);
        setIsLoading(false);
        return;
      }

      const parts = ensAvatarRecord.split(/[:/]+/);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [eip, chainId, tokenStandard, contractAddress, tokenId] = parts;

      try {
        let tokenURI: any;

        // Determine whether the token is ERC-721 or ERC-1155 and fetch the URI accordingly
        if (tokenStandard === "erc721") {
          tokenURI = await client.readContract({
            address: contractAddress,
            abi: ERC721_ABI,
            functionName: "tokenURI",
            args: [BigInt(tokenId)],
          });
        } else if (tokenStandard === "erc1155") {
          tokenURI = await client.readContract({
            address: contractAddress,
            abi: ERC1155_ABI,
            functionName: "uri",
            args: [BigInt(tokenId)],
          });
          // Some ERC-1155 contracts might require replacing {id} in the URI with the token ID
          tokenURI = tokenURI.replace("{id}", tokenId);
          console.log("tokenURI", tokenURI);
        } else {
          throw new Error("Unsupported token standard");
        }

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
  }, [ensAvatarRecord]);

  return { imageUrl, isLoading, isError };
}
