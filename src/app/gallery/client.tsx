"use client";

import React, { useEffect, useState } from "react";
import { GalleryFilter } from "@/components/gallery/gallery-filter";
import { RenderImages } from "@/components/gallery/render-images";
import { FetchImages } from "@/components/gallery/action";
import { CloudinaryImage } from "@/components/gallery/image-item";
import { LoadMore } from "@/components/load-more";
import { useQueryString } from "@/hooks/use-query-string";
import { useRouter } from "next/navigation";

export type ImagesDataType = {
  next_cursor?: string;
  resources: Record<string, CloudinaryImage[]>;
};

export default function GalleryClient({
  initialData = { resources: { "": [] } },
  limit,
}: {
  initialData: ImagesDataType;
  limit: number;
}) {
  const [images, setImages] = useState<ImagesDataType>(initialData);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { tag } = useQueryString<{ tag: string }>({ tag: "" });

  useEffect(() => {
    setImages(initialData);
  }, [initialData]);

  const handleFilterChange = (value: string) => {
    setImages({
      next_cursor: images.next_cursor,
      resources: {
        ...images.resources,
        [value]: [],
      },
    });
    router.replace(`/gallery?tag=${value}`);
  };

  if (error) return null;

  return (
    <div className="container mt-[256px] flex w-full flex-col gap-6">
      <GalleryFilter
        handleFilterChange={handleFilterChange}
        initialValue={tag}
      />
      <RenderImages images={images.resources[tag] || []}>
        {!!images.resources[tag]?.length && (
          <LoadMore
            loadMore={async () => {
              try {
                const fetchOptions: Record<string, unknown> = {
                  maxResults: limit,
                  tags: tag,
                  nextCursor: images.next_cursor,
                };

                const data = await FetchImages({ fetchOptions });

                setImages({
                  next_cursor: data.next_cursor,
                  resources: {
                    ...images.resources,
                    [tag]: [
                      ...(images.resources[tag] || []),
                      ...data.resources,
                    ],
                  },
                });
              } catch (error) {
                if (error instanceof Error) {
                  setError(error.message);
                } else {
                  setError(String(error));
                }
              }
            }}
            hasMore={!!images.next_cursor}
            loader={
              <>
                {[...Array(limit)].map((_, index) => (
                  <div
                    key={index}
                    className="h-[400px] w-full animate-pulse bg-slate-900"
                  />
                ))}
              </>
            }
          />
        )}
      </RenderImages>
    </div>
  );
}
