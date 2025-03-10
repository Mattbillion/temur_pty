"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const HeroSection = () => (
  <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
    <div className="absolute -top-[500px] -left-[520px] size-[978px] rounded-full bg-[#F63426] opacity-30 blur-[250px]" />
    <div className="absolute -top-[500px] -right-[450px] size-[1200px] rounded-full bg-[#02336E] opacity-30 blur-[96px]" />
    <motion.div
      className="absolute flex w-full max-w-[1200px] flex-col items-center justify-center max-md:px-6"
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.2,
        },
      }}
    >
      <AnimatedType />
      <div className="bg w-fit rounded-md bg-[#F63426] px-6 py-2 max-md:bg-transparent max-md:px-4 max-md:py-1">
        <p className="text-secondary text-center max-md:text-base md:text-lg">
          Reinforcement installation with expertise and reliability
        </p>
      </div>
    </motion.div>

    <motion.div
      className="relative h-full w-full md:max-h-[720px] md:max-w-[1280px]"
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
        src="/texture/text-texture-home.png"
        alt="texture"
        fill
        className="object-contain"
      />
    </motion.div>

    <DotLottieReact
      src="https://lottie.host/d99fc093-282c-47fc-ac14-2b96b0d3587c/SgDvgX74eA.lottie"
      loop
      autoplay
      className="absolute bottom-0 z-10 size-[176px]"
    />
  </div>
);

export function AnimatedType() {
  return (
    <TypeAnimation
      sequence={[
        "STEELFIXING YOU CAN TRUST",
        5000,
        "REINFORCEMENT INSTALL",
        5000,
      ]}
      speed={50}
      className="text-secondary text-center text-[72px] font-bold max-md:text-[48px]"
      repeat={Infinity}
    />
  );
}
