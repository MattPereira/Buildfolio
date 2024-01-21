import { NextResponse } from "next/server";

export async function GET() {
  try {
    const address = "0x41f727fA294E50400aC27317832A9F78659476B9";
    // Base URL
    const url = `https://arb-mainnet.g.alchemy.com/nft/v3/${process.env.ALCHEMY_API_KEY}/getNFTsForOwner?owner=${address}&withMetadata=true`;

    // Fetch data
    const response = await fetch(url);

    // Check if the response was successful
    if (!response.ok) {
      throw new Error(`API responded with status code ${response.status}`);
    }

    const data = await response.json();
    const nfts = data.ownedNfts;

    return NextResponse.json({ nfts }, { status: 200 });
  } catch (error) {
    // Log the error for server-side debugging
    console.error("Failed to fetch NFT data:", error);

    // Send a generic error response to the client
    return NextResponse.json({ error: "Failed to fetch NFT data" }, { status: 500 });
  }
}
