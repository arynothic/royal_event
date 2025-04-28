"use client";

import TextPressure from "@/components/reactdev/TextAnimations/TextPressure/TextPressure";

interface TextPressureDemoProps {
  text?: string;
  className?: string;
}

export function TextPressureDemo({ text = "Our Services", className }: TextPressureDemoProps) {
  return (
    <div style={{ position: 'relative', height: '300px' }} className={className}>
      <TextPressure
        text={text}
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#ffffff"
        strokeColor="#ff0000"
        minFontSize={36}
      />
    </div>
  );
}
