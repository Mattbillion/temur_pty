import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper } from "swiper";

export function SwiperNavigation({
  swiperRef,
}: {
  swiperRef: React.RefObject<Swiper | null>;
}) {
  return (
    <div className="">
      <Button
        type="button"
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute top-0 bottom-0 -left-4 z-10 my-auto rounded-full"
        size="icon"
      >
        <ChevronLeft size={24} />
      </Button>

      <Button
        type="button"
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute top-0 -right-4 bottom-0 z-10 my-auto rounded-full"
        size="icon"
      >
        <ChevronRight size={24} />
      </Button>
    </div>
  );
}
