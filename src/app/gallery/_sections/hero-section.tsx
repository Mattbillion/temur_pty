import Image from "next/image";
import React from "react";

export function HeroSection() {
  return (
    <div className="relative flex h-[620px] w-full items-center justify-center overflow-hidden max-md:h-[320px]">
      <div className="absolute -top-[820px] right-0 left-0 mx-auto size-[978px] rounded-full bg-[#F63426] opacity-30 blur-[150px] max-md:-top-[278px] max-md:-left-[109px] max-md:size-[340px]" />
      <div className="absolute -top-[840px] -right-[650px] size-[1200px] rounded-full bg-[#02336E] opacity-30 blur-[96px] max-md:-top-[208px] max-md:-right-[109px] max-md:size-[320px]" />
      <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center">
        <h1 className="text-secondary text-[80px] font-bold max-md:text-5xl">
          Gallery
        </h1>
      </div>
      <div className="relative h-full w-full max-w-[1280px] max-md:max-w-[720px]">
        <Image
          src="/texture/gallery-texture.svg"
          alt="gallery-texture"
          className="object-contain"
          fill
        />
      </div>
    </div>
  );
}
