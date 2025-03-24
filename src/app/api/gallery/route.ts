import { NextResponse } from "next/server";

export const revalidate = 21600; // 6 hours

export async function GET(req: Request) {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  try {
    const { searchParams } = new URL(req.url);
    const maxResults = searchParams.get("max_results") || "10"; // Default to 10 if not provided
    const cursor = searchParams.get("next_cursor");
    let tags = searchParams.get("tags") || ""; // Default to empty if not provided

    if (tags === "All") {
      tags = "";
    }

    const apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image${
      tags ? `/tags/${encodeURIComponent(tags)}` : ""
    }?max_results=${encodeURIComponent(maxResults)}${cursor ? `&next_cursor=${encodeURIComponent(cursor)}` : ""}`;

    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString("base64")}`,
      },
      method: "GET",
      cache: "force-cache",
      next: { revalidate: 21600 },
    });

    if (!response.ok) {
      throw new Error(`Cloudinary API error: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}
