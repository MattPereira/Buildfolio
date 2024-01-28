import { type NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const ownerAddress = searchParams.get("owner");

    const response = await axios.get(`https://api.poap.tech/actions/scan/${ownerAddress}`, {
      headers: {
        accept: "application/json",
        "x-api-key": `${process.env.POAP_API_KEY}`,
      },
    });

    const data = response.data;
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    // Log the error for server-side debugging
    console.error("Failed to fetch NFT data:", error);

    // Send a generic error response to the client
    return NextResponse.json({ error: "Failed to fetch NFT data" }, { status: 500 });
  }
}
