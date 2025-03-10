"use client";

import React, { useRef } from "react";
import TemurLogo from "@/components/header/temur-logo";
import Link from "next/link";
import { links } from "./contants";

export const Header = () => {
  const scrollRef = useRef(null);
  console.log(scrollRef, "scroll");

  return (
    <div
      className="fixed z-50 container flex items-center justify-between py-4 max-md:hidden"
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
  );
};
