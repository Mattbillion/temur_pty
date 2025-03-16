import React, { ReactNode, useState } from "react";
import { ImageItem } from "@/components/gallery/image-item";
import ImageLightBox from "@/components/lightbox";

export function RenderImages({
  images,
  loading,
  children,
}: {
  images: CloudinaryImage[];
  loading?: boolean;
  children?: ReactNode;
}) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = (value: boolean) => {
    setOpen(value);
  };
  if (loading) return <ImagesSkeleton />;
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image, idx) => (
          <div
            key={idx}
            onClick={() => {
              setOpen(true);
              setIndex(idx);
            }}
          >
            <ImageItem image={image} />
          </div>
        ))}

        {children}
      </div>
      <ImageLightBox
        open={open}
        setOpen={handleOpen}
        images={images}
        index={index}
      />
    </div>
  );
}

export function ImagesSkeleton() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
