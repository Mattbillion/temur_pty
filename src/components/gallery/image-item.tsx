"use client";

import { useState, useEffect, useRef } from "react";
import { CldImage, getCldImageUrl } from "next-cloudinary";

export function ImageItem({ image }: { image: CloudinaryImage }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [placeholder, setPlaceholder] = useState("data:png;base64,a");
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

  useEffect(() => {
    getPlaceholder().then((c) => setPlaceholder(c));
  }, [image]);

  const getPlaceholder = async () => {
    const imageUrl = getCldImageUrl({
      src: image.public_id,
      width: 10,
      blur: "5",
      quality: "auto:low",
    });
    const response = await fetch(imageUrl);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64 = buffer.toString("base64");
    return `data:${response.type};base64,${base64}`;
  };

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
        quality="auto:low"
        placeholder="blur"
        blurDataURL={placeholder}
        className="h-full w-full bg-slate-900 object-cover transition-all duration-200 group-hover/image:scale-105"
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
