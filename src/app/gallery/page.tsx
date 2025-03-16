"use client";

import React, { useEffect, useState } from "react";
import { GalleryFilter } from "@/components/gallery/gallery-filter";
import { RenderImages } from "@/components/gallery/render-images";
import { FetchImages } from "@/components/gallery/action";
import { CloudinaryImage } from "@/components/gallery/image-item";
import { LoadMore } from "@/components/load-more";

const LIMIT = 24;

export default function Gallery() {
  const [images, setImages] = useState<{
    next_cursor?: string;
    resources: Record<string, CloudinaryImage[]>;
  }>({ resources: { "": [] } });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (value: string) => {
    setImages({
      next_cursor: images.next_cursor,
      resources: {
        ...images.resources,
        [value]: [],
      },
    });
    setFilterValue(value);
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [filterValue]);

  const fetchData = async (cursor?: string) => {
    try {
      const fetchOptions: Record<string, unknown> = {
        maxResults: LIMIT,
        tags: filterValue,
      };

      if (cursor) fetchOptions.nextCursor = cursor;

      const data = await FetchImages({ fetchOptions });

      setImages({
        next_cursor: data.next_cursor,
        resources: {
          ...images.resources,
          [filterValue]: [
            ...(images.resources[filterValue] || []),
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
    } finally {
      setLoading(false);
    }
  };

  console.log(loading, "loading...");

  if (error) return null;

  return (
    <div className="container mt-[256px] flex w-full flex-col gap-6">
      <GalleryFilter handleFilterChange={handleFilterChange} />
      <RenderImages
        images={images.resources[filterValue] || []}
        loading={loading}
      >
        {!!images.resources[filterValue]?.length && (
          <LoadMore
            loadMore={() => fetchData(images.next_cursor)}
            hasMore={!!images.next_cursor}
            loader={
              <>
                {[...Array(LIMIT)].map((_, index) => (
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
