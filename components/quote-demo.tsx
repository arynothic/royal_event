"use client";

import { DotPattern } from "@/components/ui/dot-pattern";

export function QuoteDemo() {
  return (
    <div className="mx-auto mb-10 max-w-7xl px-6 md:mb-20 xl:px-0">
      <div className="relative flex flex-col items-center border border-red-500">
        <DotPattern width={5} height={5} />

        <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-red-500 text-white" />
        <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-red-500 text-white" />
        <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-red-500 text-white" />
        <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-red-500 text-white" />

        <div className="relative z-20 mx-auto max-w-7xl rounded-[40px] py-6 md:p-10 xl:py-20">
          <p className="md:text-md text-xs text-red-500 lg:text-lg xl:text-2xl">
            Raj believes
          </p>
          <div className="space-y-2 text-2xl tracking-tighter md:space-y-4 md:text-4xl lg:space-y-6 lg:text-6xl xl:space-y-8 xl:text-7xl">
            <p className="text-center whitespace-nowrap">
              <span className="font-semibold">&ldquo;Why let </span>
              <span className="font-thin">software be </span>
              <span className="font-semibold">the brake?&rdquo;</span>
            </p>
            <p className="text-center whitespace-nowrap">
              <span className="font-thin">When it can be </span>
              <span className="font-semibold">the engine.</span>
            </p>
            <p className="text-center whitespace-nowrap">
              <span className="font-semibold">We design automation that</span>
            </p>
            <p className="text-center whitespace-nowrap">
              <span className="font-thin">turns your </span>
              <span className="font-semibold">hustle </span>
              <span className="font-thin">into</span>
            </p>
            <p className="text-center whitespace-nowrap">
              <span className="font-semibold">hypergrowth</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
