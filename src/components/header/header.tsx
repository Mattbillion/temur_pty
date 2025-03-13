"use client";

import React, { useRef, useState } from "react";
import TemurLogo from "@/components/header/temur-logo";
import Link from "next/link";
import { links } from "./contants";
import { useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";
import { SideMenu } from "@/components/header/side-menu";

export const Header = () => {
  const scrollRef = useRef(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <div
      className={cn(
        scrolled ? "bg-[rgba(0,0,0,0.7)]" : "bg-transparent",
        "fixed z-50 w-full transition-colors duration-200",
      )}
    >
      <div
        className="container flex items-center justify-between py-2 max-md:p-2 max-md:px-4"
        ref={scrollRef}
      >
        <Link
          href="/"
          className={cn(
            scrolled ? "size-[80px]" : "size-[124px]",
            "transition-all duration-300 max-md:size-[72px]",
          )}
        >
          <TemurLogo customClass="w-full h-full" />
        </Link>
        <SideMenu />
        <div className="flex items-center gap-8 max-md:hidden">
          {links.map((link, idx) => (
            <Link
              href={link.href}
              key={idx}
              className="text-secondary text-xl transition-colors duration-100 hover:text-[#FFB63F]"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
