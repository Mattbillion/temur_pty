"use client";

import { useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Gallery() {
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-[256px] flex flex-col gap-6">
      <div className="flex items-center gap-1">
        {filterTags.map((tag, idx) => (
          <Button
            key={idx}
            onClick={() => setFilterValue(tag.value)}
            className={cn(
              filterValue === tag.value
                ? "bg-primary border-transparent"
                : "bg-background",
              "snap-start rounded-full border border-slate-700 px-4 py-2",
            )}
          >
            {tag.label}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image: CloudinaryImage) => (
          <div key={image.asset_id} className="h-[400px]">
            <CldImage
              src={image.secure_url}
              alt={image.public_id}
              width={image.width}
              height={image.height}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

async function FetchImages({
  fetchOptions,
}: {
  fetchOptions?: fetchOptionsType;
}): Promise<CloudinaryAPIResponse> {
  // Default to empty parameters if fetchOptions are not provided
  const params = new URLSearchParams({
    max_results: fetchOptions?.maxResults || "10", // Default to 10
    tags: fetchOptions?.tags || "", // Default to empty string (no tags)
    resource_type: fetchOptions?.resourceType || "image", // Default to 'image'
  });

  const apiUrl = `/api/gallery?${params.toString()}`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }

  return response.json();
}

interface fetchOptionsType {
  maxResults?: string;
  tags?: string;
  resourceType?: string;
}

interface fetchOptionsType {
  max_results?: string;
  tags?: string;
}

type CloudinaryImage = {
  asset_id: string;
  public_id: string;
  format: string;
  resource_type: string;
  type: string;
  created_at: string;
  bytes: number;
  width: number;
  height: number;
  folder: string;
  version: number;
  url: string;
  secure_url: string;
};
type CloudinaryAPIResponse = {
  resources: CloudinaryImage[];
};

const filterTags = [
  { value: "", label: "All" },
  { value: "capping-beam", label: "Capping Beam" },
  { value: "ramp-installation", label: "Ramp Installation" },
  { value: "wall&columns", label: "Walls & Columns" },
  { value: "Conventional-slab", label: "Conventional Slab" },
];
