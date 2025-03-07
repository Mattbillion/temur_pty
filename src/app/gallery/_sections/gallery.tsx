"use client";
import React, { useMemo, useState } from "react";
import { filterButtons } from "../../../components/sections/gallery-swiper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { galleryData } from "@/components/contants";
import { FullscreenIcon } from "lucide-react";
import Image from "next/image";
import ImageLightBox from "@/components/lightbox";

export function Gallery() {
  const [filter, setFilter] = React.useState("");
  const [open, setOpen] = useState<boolean>(false);
  const [slides, setSlides] = useState([]);

  const filteredData = useMemo(() => {
    return filter
      ? galleryData.filter((data) => data.type === filter)
      : galleryData;
  }, [filter]);

  return (
    <div className="container w-full space-y-6 max-md:px-4 md:mb-[144px]">
      <h1 className="text-secondary text-start text-3xl font-bold">Gallery</h1>
      <div className="mb-6 flex snap-x snap-mandatory items-center gap-1.5 overflow-y-scroll">
        {filterButtons.map((btn, idx) => (
          <Button
            className={cn(
              filter === btn.value
                ? "bg-primary border-transparent"
                : "bg-background",
              "snap-start rounded-full border border-slate-700 px-4 py-2",
            )}
            onClick={() => setFilter(btn.value)}
            key={idx}
          >
            {btn.label}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 max-md:gap-1 sm:grid-cols-3 md:grid-cols-4">
        {filteredData.map((d, idx) => (
          <div
            className="group/item relative aspect-square overflow-hidden"
            key={idx}
          >
            <Button
              variant="ghost"
              className="text-secondary absolute top-2 right-2 z-10"
              onClick={() => {
                setOpen(true), setSlides(d.images as any);
              }}
            >
              <FullscreenIcon size={24} />
            </Button>
            <Image
              src={d.masterImage.src}
              alt={d.masterImage.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover/item:scale-110"
            />
            <div className="bg-background absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/item:opacity-50">
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover/item:opacity-100">
                <p className="text-lg font-semibold text-white">Image</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ImageLightBox
        open={open}
        setOpen={() => setOpen((prevState) => !prevState)}
        images={slides}
      />
    </div>
  );
}
