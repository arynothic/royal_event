"use client";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

export function LoadingDemo() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Terminal className="w-[95vw] max-w-2xl">
        <TypingAnimation>&gt; pnpm dlx RAJ@latest init</TypingAnimation>

        <AnimatedSpan delay={1500} className="text-green-500">
          <span>✔ Preflight Security checks.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-green-500">
          <span>✔ Verifying framework. Found Next.js.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-green-500">
          <span>✔ Validating Tailwind CSS.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3000} className="text-green-500">
          <span>✔ Validating import alias.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-green-500">
          <span>✔ Writing requirements.json.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-green-500">
          <span>✔ Checking Servers.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4500} className="text-green-500">
          <span>✔ Updating tailwind.config.ts</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5000} className="text-green-500">
          <span>✔ Updating app/globals.css</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5500} className="text-green-500">
          <span>✔ Installing dependencies.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={6000} className="text-blue-500">
          <span>ℹ Updated 1 file:</span>
          <span className="pl-2">- lib/utils.ts</span>
        </AnimatedSpan>

        <TypingAnimation delay={6700} className="text-muted-foreground">
          Success! Project initialization Completed.
        </TypingAnimation>

        <TypingAnimation delay={7200} className="text-muted-foreground">
          You Can Visit Our Website Now.
        </TypingAnimation>
      </Terminal>
    </div>
  );
}
