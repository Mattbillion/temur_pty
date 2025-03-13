import { TypeAnimation } from "react-type-animation";
import React from "react";
import { TypeAnimationProps } from "react-type-animation/dist/cjs/components/TypeAnimation/index.types";
import { cn } from "@/lib/utils";

export function TypeAnimate({
  sequence,
  speed,
  customClass,
}: ExtendedTypeAnimationProps) {
  return (
    <TypeAnimation
      wrapper="div"
      sequence={sequence}
      speed={speed}
      className={cn(customClass ? customClass : "", "text-secondary font-bold")}
      repeat={Infinity}
    />
  );
}

interface ExtendedTypeAnimationProps extends TypeAnimationProps {
  customClass?: string;
}
