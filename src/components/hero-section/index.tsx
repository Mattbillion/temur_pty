"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import * as motion from "motion/react-client";
import { VideoHero } from "@/components/hero-section/video-hero";

export function HeroSection({ wrapperClass }: HeroSectionPropsType) {
  return (
    <div
      className={cn(
        wrapperClass,
        "relative flex h-fit w-full items-center justify-center overflow-hidden",
      )}
    >
      <div className="h-fit w-full">
        <VideoHero />
      </div>
      <div className="absolute z-30 flex flex-col items-center gap-2 p-4 md:py-6">
        <motion.h1
          className="text-secondary text-center text-[32px] font-bold sm:text-[40px] md:text-[72px]"
          initial={{ opacity: 0, y: -32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 1.2,
            bounce: 0.2,
          }}
        >
          STEELFIXING YOU CAN TRUST
        </motion.h1>
        <motion.div
          className="md:bg-primary text-secondary rounded-md max-sm:max-w-[320px] max-sm:min-w-[280px] md:px-3 md:py-1 md:text-center md:text-lg"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 1.2,
            bounce: 0.2,
          }}
        >
          <h6 className="text-center">
            Reinforcement installation with expertise and reliability
          </h6>
        </motion.div>
      </div>
      \
      <DotLottieReact
        src="https://lottie.host/d99fc093-282c-47fc-ac14-2b96b0d3587c/SgDvgX74eA.lottie"
        loop
        autoplay
        className="absolute bottom-0 z-30 size-[96px] md:size-[176px]"
      />
    </div>
  );
}

type HeroSectionPropsType = {
  wrapperClass?: string;
  imgSrc?: string;
};
