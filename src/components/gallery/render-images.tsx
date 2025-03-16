import React from "react";
import { CldImage } from "next-cloudinary";

export function RenderImages({
  images,
  loading,
}: {
  images: CloudinaryImage[];
  loading?: boolean;
}) {
  if (loading) return "loading...";
  return (
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
