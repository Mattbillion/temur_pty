"use client";
import React from "react";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export const VideoHero = () => {
  return (
    <div className="relative h-fit">
      <div className="absolute inset-0 z-30 bg-black opacity-65 bg-blend-multiply" />
      <CldVideoPlayer
        id="video-hero-section"
        src="https://res.cloudinary.com/dkk8h72mm/video/upload/video-banner/hero-section-video_erkspk.mov"
        width={1920}
        height={1080}
        loop={true}
        muted={true}
        autoplay={true}
        controls={false}
        preload="auto"
      />
    </div>
  );
};
