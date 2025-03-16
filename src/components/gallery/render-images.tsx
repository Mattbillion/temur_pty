import React from "react";
import { ImageItem } from "@/components/gallery/image-item";

export function RenderImages({
  images,
  loading,
}: {
  images: CloudinaryImage[];
  loading?: boolean;
}) {
  if (loading) return <Skeleton />;
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {images.map((image, idx) => (
        <ImageItem image={image} key={idx} />
      ))}
    </div>
  );
}

export function Skeleton() {
  return (
    <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="h-[400px] w-full animate-pulse bg-slate-900"
        />
      ))}
    </div>
  );
}

export type CloudinaryImage = {
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
