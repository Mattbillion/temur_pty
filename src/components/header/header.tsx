"use client";

import React, { useRef } from "react";
import TemurLogo from "@/components/header/temur-logo";
import Link from "next/link";
import { links } from "./contants";
import { usePathname } from "next/navigation";
import motion from "motion/react";

export const Header = () => {
  const pathname = usePathname();
  const scrollRef = useRef(null);
  console.log(scrollRef, "scroll");

  return (
    <div
      className="fixed z-50 container flex items-center justify-between py-4 max-md:hidden"
      ref={scrollRef}
    >
      <div>
        <Link href="/">
          <TemurLogo className="h-[72px]" />
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
  );
};
