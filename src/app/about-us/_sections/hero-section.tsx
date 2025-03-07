import Image from "next/image";
import React from "react";
export function HeroSection() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden max-md:h-[320px]">
      <div className="absolute -top-[820px] right-0 left-0 mx-auto size-[978px] rounded-full bg-[#F63426] opacity-30 blur-[150px] max-md:-top-[278px] max-md:-left-[109px] max-md:size-[340px]" />
      <div className="absolute -top-[840px] -right-[650px] size-[1200px] rounded-full bg-[#02336E] opacity-30 blur-[96px] max-md:-top-[208px] max-md:-right-[109px] max-md:size-[320px]" />
      <div className="absolute inset-0 z-10 flex h-full w-full flex-col items-center justify-center">
        <h1 className="text-secondary text-[80px] font-bold uppercase max-md:text-5xl">
          About us
        </h1>
        <p className="text-secondary w-10/12 text-center text-lg">
          Proudly bringing over 9 years of expertise in structural
          reinforcement, we serve our Partners and Clients across New South
          Wales. Extending our skills to Residential, Commercial, and
          Recreational projects of all sizes, we approach every job with
          precision and dedication.
        </p>
      </div>
      <div className="relative h-full w-[1480px] max-md:w-[620px]">
        <Image
          src="/texture/about-us-texture.svg"
          alt="about-us-texture"
          fill
        />
      </div>
    </div>
  );
}
