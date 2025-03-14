"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { TypeAnimate } from "@/components/type-animate";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function HeroSection({ wrapperClass, imgSrc }: HeroSectionPropsType) {
  return (
    <div
      className={cn(
        wrapperClass,
        "relative flex h-screen w-full items-center justify-center overflow-hidden max-md:h-[480px]",
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

      <TypeAnimate
        sequence={[
          "STEELFIXING YOU CAN TRUST",
          5000,
          "TEMUR REINFORCEMENT",
          5000,
        ]}
        speed={50}
        customClass="text-[28px] sm:text-[40px] text-start md:text-[72px] text-center"
      />

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
