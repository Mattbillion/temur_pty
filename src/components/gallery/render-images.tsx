import React from "react";
import { CloudinaryImage, ImageItem } from "@/components/gallery/image-item";

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
      {images.map((image, idx) => (
        <ImageItem image={image} key={idx} />
      ))}
    </div>
  );
}
