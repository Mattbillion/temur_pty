"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { galleryData } from "../contants";
import ImageLightBox from "@/components/lightbox";
import { FullscreenIcon } from "lucide-react";
import { Navigation, Autoplay } from "swiper/modules";

import * as motion from "motion/react-client";
import { Swiper as NavigationType } from "swiper";
import { SwiperNavigation } from "@/components/swiper/swiper-navigation";

const ImageGallery = () => {
  const [filter, setFilter] = useState<string>("");
  const swiperRef = useRef<NavigationType | null>(null);
  const [slides, setSlides] = useState<{ src: string; alt: string }[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const filteredData =
    filter === ""
      ? galleryData
      : galleryData.filter((data) => data.type === filter);

  return (
    <motion.div>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
      >
        <div className="mb-6 flex items-center justify-between">
          <h4 className="text-secondary text-3xl font-bold">Gallery</h4>
          <Button className="rounded-md">See all</Button>
        </div>
        <div className="mb-6 flex items-center gap-1.5">
          {filterButtons.map((btn, idx) => (
            <Button
              className={cn(
                filter === btn.value
                  ? "bg-primary border-transparent"
                  : "bg-background",
                "rounded-full border border-slate-700 px-4 py-2",
              )}
              onClick={() => setFilter(btn.value)}
              key={idx}
            >
              {btn.label}
            </Button>
          ))}
        </div>
        <div className="relative">
          <Swiper
            slidesPerView={4}
            spaceBetween={24}
            navigation={true}
            modules={[Autoplay, Navigation]}
            onBeforeInit={(swiper) => (swiperRef.current = swiper)}
            className="relative"
          >
            {filteredData.map((d, idx) => (
              <SwiperSlide
                className="group/item relative aspect-[3/4] overflow-hidden"
                key={idx}
              >
                <Button
                  variant="ghost"
                  className="text-secondary absolute top-2 right-2 z-10"
                  onClick={() => {
                    setOpen(true);
                    setSlides(d.images);
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
              </SwiperSlide>
            ))}
          </Swiper>
          <SwiperNavigation swiperRef={swiperRef} />
        </div>

        <ImageLightBox
          open={open}
          setOpen={() => setOpen((prevState) => !prevState)}
          images={slides}
        />
      </motion.div>
    </motion.div>
  );
};

export default ImageGallery;

export const filterButtons = [
  {
    label: "All",
    value: "",
  },
  {
    label: "Ramp installation",
    value: "ramps",
  },
  {
    label: "Wall & Columns",
    value: "walls-columns",
  },
  {
    label: "Conventional slabs",
    value: "conventional-slabs",
  },
  {
    label: "Post-tension slabs",
    value: "pt-slabs",
  },
  {
    label: "Drill & Epoxy",
    value: "drill-epoxy",
  },
  {
    label: "Beams",
    value: "beams",
  },
  {
    label: "Groundwork",
    value: "groundwork",
  },
];
