"use client";

import { useState, useEffect, useRef } from "react";
import { CldImage } from "next-cloudinary";

export function ImageItem({ image }: { image: CloudinaryImage }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(300);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div
      ref={containerRef}
      className="group/image h-[400px] cursor-pointer overflow-hidden"
    >
      <CldImage
        src={image.secure_url}
        alt={image.public_id}
        width={containerWidth}
        height={432}
        className="h-full w-full object-cover transition-all duration-200 group-hover/image:scale-105"
      />
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
