import { CloudinaryAPIResponse } from "@/components/gallery/action";
import GalleryClient from "@/app/gallery/client";
import { HeroSection } from "@/app/gallery/_sections/hero-section";

const LIMIT = 20;
const domain =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://www.temursteelfixing.com.au/";
export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{
    tag?: string;
  }>;
}) {
  const tag = (await searchParams).tag || "";
  const params = new URLSearchParams({
    max_results: LIMIT.toString(),
    tags: tag.replace("-n-", "&"),
    resource_type: "image",
  });

  const res = await fetch(`${domain}/api/gallery?${params.toString()}`);
  const data = (await res.json()) as CloudinaryAPIResponse;

  return (
    <div>
      <HeroSection />
      <GalleryClient
        limit={LIMIT}
        initialData={{
          next_cursor: data.next_cursor,
          resources: {
            [tag]: data.resources || [],
          },
        }}
      />
    </div>
  );
}
