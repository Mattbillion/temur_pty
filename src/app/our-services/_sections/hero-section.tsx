"use client";
import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function HeroSection() {
  return (
    <div className="relative flex h-dvh w-full items-center justify-center overflow-hidden max-md:mb-6 md:mb-[24px]">
      <div className="absolute -top-[500px] -left-[520px] size-[978px] rounded-full bg-[#F63426] opacity-30 blur-[250px]" />
      <div className="absolute -top-[500px] -right-[450px] size-[1200px] rounded-full bg-[#02336E] opacity-30 blur-[96px]" />
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
        <Image
          src="/texture/our-service-texture.png"
          alt="texture"
          fill
          className="object-contain"
        />
      </motion.div>
      <div className="absolute flex w-full max-w-[1200px] flex-col max-md:px-6">
        <motion.h1
          className="text-center text-[56px] font-bold text-white max-md:text-[32px]"
          initial={{ opacity: 0, y: -32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 1.2,
            bounce: 0.2,
          }}
        >
          OUR SERVICES
        </motion.h1>
        <motion.p
          className="text-secondary text-center text-xl max-md:text-base"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 1.2,
            bounce: 0.2,
          }}
        >
          Temur possesses the expertise and capability to deliver efficient,
          effective, and reliable services across the residential, commercial,
          and industrial sectors, specializing in the structural elements listed
          below.
        </motion.p>
      </div>
      <DotLottieReact
        src="https://lottie.host/d99fc093-282c-47fc-ac14-2b96b0d3587c/SgDvgX74eA.lottie"
        loop
        autoplay
        className="absolute bottom-0 z-10 size-[176px]"
      />
    </div>
  );
}
