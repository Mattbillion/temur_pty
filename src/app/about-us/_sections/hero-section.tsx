import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";
export function HeroSection() {
  return (
    <div className="relative flex h-dvh w-full items-center justify-center overflow-hidden">
      <div className="absolute -top-[820px] right-0 left-0 mx-auto size-[978px] rounded-full bg-[#F63426] opacity-30 blur-[150px] max-md:-top-[278px] max-md:-left-[109px] max-md:size-[340px]" />
      <div className="absolute -top-[840px] -right-[650px] size-[1200px] rounded-full bg-[#02336E] opacity-30 blur-[96px] max-md:-top-[208px] max-md:-right-[109px] max-md:size-[320px]" />
      <motion.div
        className="absolute flex w-full max-w-[1200px] flex-col"
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            duration: 0.5,
            bounce: 0.2,
          },
        }}
      >
        <h1 className="text-center text-[72px] font-bold text-white uppercase">
          About us
        </h1>
        <p className="text-secondary text-center text-xl">
          Proudly bringing over 9 years of expertise in structural
          reinforcement, we serve our Partners and Clients across New South
          Wales. Extending our skills to Residential, Commercial, and
          Recreational projects of all sizes, we approach every job with
          precision and dedication.
        </p>
      </motion.div>
      <motion.div
        className="relative h-[720px] w-full max-w-[1080px]"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.2,
          },
        }}
      >
        <Image src="/texture/about-us-texture.svg" alt="texture" fill />
      </motion.div>
    </div>
  );
}
