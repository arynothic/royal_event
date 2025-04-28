"use client";

import RotatingText from "@/components/reactdev/TextAnimations/RotatingText/RotatingText";

interface RotatingTextHeaderProps {
  staticText: string;
  rotatingTexts: string[];
  className?: string;
}

export function RotatingTextHeader({
  staticText,
  rotatingTexts,
  className = ""
}: RotatingTextHeaderProps) {
  return (
    <h1 className={`flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-4xl sm:text-5xl lg:text-6xl font-bold ${className}`}>
      <span className="text-center">{staticText}</span>
      <RotatingText
        texts={rotatingTexts}
        mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-3xl sm:text-4xl lg:text-5xl"
        staggerFrom="last"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      />
    </h1>
  );
}
