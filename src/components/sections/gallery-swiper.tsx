"use client";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Button } from "@/components/ui/button";

import { Navigation, Autoplay } from "swiper/modules";

import * as motion from "motion/react-client";
import { Swiper as NavigationType } from "swiper";
import { SwiperNavigation } from "@/components/swiper/swiper-navigation";
import { CldImage } from "next-cloudinary";
import { GalleryFilter } from "@/components/gallery/gallery-filter";
import { CloudinaryImage } from "@/components/gallery/render-images";
import { FetchImages } from "@/components/gallery/action";
import { useRouter } from "next/navigation";

const ImageGallery = () => {
  const swiperRef = useRef<NavigationType | null>(null);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [filterValue, setFilterValue] = useState("");
  const router = useRouter();

  const handleFilterChange = (value: string) => {
    setFilterValue(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchOptions = {
          maxResults: "50",
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
    <div>
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
          <Button
            className="rounded-md"
            onClick={() => router.push(`/gallery?tag=${filterValue}`)}
          >
            See all
          </Button>
        </div>
        <GalleryFilter
          handleFilterChange={handleFilterChange}
          forceScroll={false}
        />
        <div className="relative">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            slidesPerView={4}
            spaceBetween={24}
            navigation={true}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 4000,
            }}
            onBeforeInit={(swiper) => (swiperRef.current = swiper)}
            className="relative"
          >
            {images.map((d, idx) => (
              <SwiperSlide
                className="group/item relative aspect-[3/4] overflow-hidden"
                key={idx}
              >
                <ImageItem image={d} />
              </SwiperSlide>
            ))}
          </Swiper>
          <SwiperNavigation swiperRef={swiperRef} />
        </div>
      </motion.div>
    </div>
  );
};

export default ImageGallery;

function ImageItem({ image }: { image: CloudinaryImage }) {
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
    <div ref={containerRef} className="h-full w-full">
      <CldImage
        src={image.secure_url}
        alt={image.public_id}
        width={containerWidth}
        height={containerWidth * (3 / 4)}
        quality="auto:low"
        className="h-full w-full object-cover transition-transform duration-300 group-hover/item:scale-110"
      />
    </div>
  );
}

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
