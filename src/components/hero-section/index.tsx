"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import * as motion from "motion/react-client";

export function HeroSection({ wrapperClass, imgSrc }: HeroSectionPropsType) {
  return (
    <div
      className={cn(
        wrapperClass,
        "relative flex h-dvh w-full items-center justify-center overflow-hidden",
      )}
    >
      <div className="absolute -top-[372px] -left-[240px] size-[600px] rounded-full bg-[#F63426] opacity-60 blur-[122px] md:-top-[560px] md:-left-[520px] md:size-[978px] md:opacity-60 md:blur-[188px]" />
      <div className="absolute -top-[388px] -right-[284px] size-[720px] rounded-full bg-[#02336E] opacity-80 blur-[72px] md:-top-[640px] md:-right-[520px] md:size-[978px] md:opacity-100 md:blur-[188px]" />
      {imgSrc && (
        <div className="relative h-full w-full max-md:max-h-[180px]">
          <Image
            src={imgSrc}
            alt="bg-texture"
            fill
            className="object-contain max-md:object-cover"
          />
        </div>
      )}
      <motion.div
        className="absolute flex flex-col items-center gap-2 p-4 md:py-6"
        initial={{ opacity: 0, y: -32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
        }}
      >
        <h1 className="text-secondary text-center text-[32px] font-bold sm:text-[40px] md:text-[72px]">
          STEELFIXING YOU CAN TRUST
        </h1>
        <div className="md:bg-primary text-secondary rounded-md max-sm:max-w-[320px] max-sm:min-w-[280px] md:px-3 md:py-1 md:text-center md:text-lg">
          <h6 className="text-center">
            Reinforcement installation with expertise and reliability
          </h6>
        </div>
      </motion.div>
      \
      <DotLottieReact
        src="https://lottie.host/d99fc093-282c-47fc-ac14-2b96b0d3587c/SgDvgX74eA.lottie"
        loop
        autoplay
        className="absolute bottom-0 z-10 size-[96px] md:size-[176px]"
      />
    </div>
  );
}

type HeroSectionPropsType = {
  wrapperClass?: string;
  imgSrc?: string;
};
