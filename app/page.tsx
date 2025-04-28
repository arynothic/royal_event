"use client";

import { useEffect, useState } from "react";
import { MainMenu } from "@/components/reactdev/Components/FlowingMenu/MainMenu";
import { SplineSceneDemo } from "@/components/spline-scene-demo";
import GlobeDemo from "@/components/globe-demo";
import { BackgroundPathsDemo } from "@/components/background-paths-demo";
import { FeatureStepsDemo } from "@/components/feature-steps-demo";
import { AnimatedHeroDemo } from "@/components/animated-hero-demo";
import { QuoteDemo } from "@/components/quote-demo";
import { TestimonialsDemo } from "@/components/testimonials-demo";
import { BoxRevealDemo } from "@/components/box-reveal-demo";
import { LoadingDemo } from "@/components/loading-demo";
import { FlipTextDemo } from "@/components/flip-text-demo";
import { SignInPrompt } from "@/components/SignInPrompt";
import { ExpandableChatDemo } from "@/components/expandable-chat-demo";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const lastLoadTime = localStorage.getItem('lastLoadTime');
    const fiveHoursInMs = 5 * 60 * 60 * 1000;
    
    if (lastLoadTime) {
      const hasExpired = Date.now() - parseInt(lastLoadTime) > fiveHoursInMs;
      if (!hasExpired) {
        setIsLoading(false);
      }
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized || !isLoading) return;

    const timer = setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('lastLoadTime', Date.now().toString());
    }, 8000);

    return () => clearTimeout(timer);
  }, [isLoading, isInitialized]);

  if (!isInitialized || isLoading) {
    return <LoadingDemo />;
  }

  return (
    <main className="flex flex-col">
      <MainMenu />
      <section className="h-screen [&>div]:h-full">
        <SplineSceneDemo />
        <ExpandableChatDemo />
      </section>
      <section className="h-screen">
        <BackgroundPathsDemo />
      </section>
      <section className="min-h-screen">
        <AnimatedHeroDemo />
      </section>
      <section className="min-h-screen">
        <FeatureStepsDemo />
      </section>
      <section className="min-h-screen">
        <QuoteDemo />
      </section>
      <section className="min-h-screen">
        <TestimonialsDemo />
      </section>
      <section className="min-h-screen overflow-y-auto">
        <BoxRevealDemo />
      </section>
      <section className="min-h-screen">
        <GlobeDemo />
      </section>
      <section className="min-h-screen">
        <FlipTextDemo />
      </section>
      <SignInPrompt />
    </main>
  );
}
// this is unstable branch
