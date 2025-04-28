'use client'

import { SplineScene } from "@/components/ui/spline-scene"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneDemo() {
  return (
    <div className="relative w-full h-full bg-black/[0.96] overflow-hidden">
      <Spotlight
        className="-top-40 left-[28%] md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex flex-col md:flex-row h-full items-center">
        {/* Left content */}
        <div className="w-full md:w-[40%] p-8 md:p-16 relative z-10">
          <div className="space-y-2 animate-fade-in">
            {/* <h2 className="text-xl md:text-2xl font-medium text-red-500">
              सृजन Labs
            </h2> */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-slide-up">
              <span className="text-white">From MVP to</span>{" "}
              <span className="text-blue-500">Market Leader</span>
            </h1>
            <p className="mt-6 text-lg animate-[slide-up_1s_ease-out_0.3s_forwards]">
              <span className="text-white">For Engineers, By Engineers: </span>
              <span className="text-blue-500 font-semibold">Build Startups</span>
              <span className="text-white"> That Outgrow the Code</span>
            </p>
          </div>
        </div>

        {/* Right content */}
        <div className="w-full md:w-[60%] h-[60vh] md:h-screen">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}
