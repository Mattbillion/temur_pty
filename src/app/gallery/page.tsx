"use client";

import { useEffect, useState } from "react";
import { GalleryFilter } from "@/components/gallery/gallery-filter";
import {
  CloudinaryImage,
  RenderImages,
} from "@/components/gallery/render-images";
import { FetchImages } from "@/components/gallery/action";

export default function Gallery() {
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (value: string) => {
    setFilterValue(value);
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const fetchOptions = {
          maxResults: "500",
          tags: filterValue,
        };

        const data = await FetchImages({ fetchOptions });
        setImages(data?.resources);
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

    fetchData();
  }, [filterValue]);

  console.log(loading, "loading...");

  if (error) return null;

  return (
    <div className="container mt-[256px] flex w-full flex-col gap-6">
      <GalleryFilter handleFilterChange={handleFilterChange} />
      <RenderImages images={images} loading={loading} />
    </div>
  );
}
