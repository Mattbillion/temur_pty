"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

export const HeroSection = () => (
  <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
    <div className="absolute -top-[500px] -left-[520px] size-[978px] rounded-full bg-[#F63426] opacity-30 blur-[250px]" />
    <div className="absolute -top-[500px] -right-[450px] size-[1200px] rounded-full bg-[#02336E] opacity-30 blur-[96px]" />
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute right-0 left-0 z-10 mx-auto flex flex-col items-center justify-center"
    >
      <div className="pointer-events-none flex flex-col items-center">
        <AnimatedType />
        <div className="bg w-fit rounded-md bg-[#F63426] px-6 py-2">
          <p className="text-secondary text-lg">
            Reinforcement installation with expertise and reliability
          </p>
        </div>
      </div>
    </motion.div>
    <div className="relative aspect-auto h-[420px] w-full">
      <Image
        src="/texture/text-texture-home.png"
        alt="dada"
        fill
        className="object-contain"
      />
    </div>

    <div className="absolute right-0 bottom-20 left-0 z-20"></div>
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
      style={{ fontSize: "80px", fontWeight: "bold", color: "white" }}
      repeat={Infinity}
    />
  );
}
