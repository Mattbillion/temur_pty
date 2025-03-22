"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export const VideoHero = () => {
  return (
    <div className="relative h-screen w-full max-md:h-[520px]">
      <div className="absolute inset-0 z-10 bg-black bg-[url('/texture/body-pattern.png')] opacity-75" />
      <Link
        href=""
        className="absolute bottom-5 left-5 z-10 flex size-12 cursor-pointer items-center"
      >
        <Image
          src="/icons/instagram.svg"
          className="aspect-square object-contain"
          height={48}
          width={48}
          alt="instagram"
        />
      </Link>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/hero-section-video.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
