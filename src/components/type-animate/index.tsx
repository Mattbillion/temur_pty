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
    <div className="absolute flex w-full flex-col gap-1 px-4 py-2 sm:items-center md:justify-center">
      <TypeAnimation
        wrapper="div"
        sequence={sequence}
        speed={speed}
        className={cn(
          customClass ? customClass : "",
          "text-secondary font-bold",
        )}
        repeat={Infinity}
      />
      <div className="md:bg-primary text-secondary rounded-md md:px-3 md:py-1 md:text-center md:text-lg">
        <h6 className="text-center">
          Reinforcement installation with expertise and reliability
        </h6>
      </div>
    </div>
  );
}

interface ExtendedTypeAnimationProps extends TypeAnimationProps {
  customClass?: string;
}
