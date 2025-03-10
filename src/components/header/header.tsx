"use client";

import React, { useRef, useState } from "react";
import TemurLogo from "@/components/header/temur-logo";
import Link from "next/link";
import { links } from "./contants";
import { useScroll } from "motion/react";
import { useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export const Header = () => {
  const scrollRef = useRef(null);
  const { scrollY } = useScroll();
  const [scrolled, setSrolled] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 200) {
      setSrolled(true);
    } else {
      setSrolled(false);
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
        className="container flex items-center justify-between py-4 max-md:hidden"
        ref={scrollRef}
      >
        <div>
          <Link href="/">
            <TemurLogo />
          </Link>
        </div>
        <div className="flex items-center gap-8">
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
