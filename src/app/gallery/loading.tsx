import React from "react";
import { ImagesSkeleton } from "@/components/gallery/render-images";
import { GalleryFilterSkeleton } from "@/components/gallery/gallery-filter";

export default function LoadingGallery() {
  return (
    <div className="container mt-[256px] flex w-full flex-col">
      <GalleryFilterSkeleton />
      <ImagesSkeleton />
    </div>
  );
}
