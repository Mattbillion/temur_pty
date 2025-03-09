"use client";
import React from "react";
import Image from "next/image";
import * as motion from "framer-motion/client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function HeroSection() {
  return (
    <div className="relative mb-[144px] flex h-screen w-full items-center justify-center overflow-hidden">
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
        <Image src="/texture/our-service-texture.png" alt="texture" fill />
      </motion.div>
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
        <h1 className="text-center text-[72px] font-bold text-white">
          OUR SERVICES
        </h1>
        <p className="text-secondary text-center text-xl">
          Temur possesses the expertise and capability to deliver efficient,
          effective, and reliable services across the residential, commercial,
          and industrial sectors, specializing in the structural elements listed
          below.
        </p>
      </motion.div>
      <DotLottieReact
        src="https://lottie.host/d99fc093-282c-47fc-ac14-2b96b0d3587c/SgDvgX74eA.lottie"
        loop
        autoplay
        className="absolute bottom-0 z-10 size-[176px]"
      />
    </div>
  );
}
