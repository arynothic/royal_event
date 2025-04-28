"use client";

import DecryptedText from "@/components/reactdev/TextAnimations/DecryptedText/DecryptedText";

interface DecryptedTextDemoProps {
  text: string;
  className?: string;
}

export function DecryptedTextDemo({ text, className }: DecryptedTextDemoProps) {
  return (
    <div className={className}>
      <DecryptedText
        text={text}
        animateOn="view"
        revealDirection="center"
      />
    </div>
  );
}
