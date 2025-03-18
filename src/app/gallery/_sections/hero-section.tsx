import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

export function HeroSection() {
  return (
    <div className="relative flex h-[620px] w-full items-center justify-center overflow-hidden max-md:h-[320px]">
      <div className="absolute -top-[820px] right-0 left-0 mx-auto size-[978px] rounded-full bg-[#F63426] opacity-30 blur-[150px] max-md:-top-[278px] max-md:-left-[109px] max-md:size-[340px]" />
      <div className="absolute -top-[840px] -right-[650px] size-[1200px] rounded-full bg-[#02336E] opacity-30 blur-[96px] max-md:-top-[208px] max-md:-right-[109px] max-md:size-[320px]" />
      <motion.div
        className="absolute flex w-full max-w-[1200px] flex-col"
        initial={{ opacity: 0, y: -32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 1.2,
          bounce: 0.2,
        }}
      >
        <h1 className="text-secondary text-center text-[80px] font-bold uppercase max-md:text-[32px]">
          Gallery
        </h1>
      </motion.div>

      <motion.div
        className="relative h-full w-full md:max-h-[720px] md:max-w-[1080px]"
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
        <Image src="/texture/gallery-texture.svg" alt="texture" fill />
      </motion.div>
    </div>
  );
}
