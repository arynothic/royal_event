"use client";

import { MainMenu } from "@/components/reactdev/Components/FlowingMenu/MainMenu";
import { RotatingTextHeader } from "@/components/ui/rotating-text-header";
import { ProjectShowcaseCard } from "@/components/ui/project-showcase-card";
import { projects } from "@/data/projects/index";
export default function ProjectShowcasesPage() {
  return (
    <main className="min-h-screen bg-black text-white relative">
      <MainMenu />
      <div className="relative min-h-screen overflow-hidden flex flex-col">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1/3_1/3,_var(--tw-gradient-from)_0%,_transparent_100%)] from-indigo-500/5 pointer-events-none" />
        
        {/* Content */}
        <div className="relative flex-1 container mx-auto px-4 sm:px-6 flex flex-col items-center justify-center">
          <div className="text-center mb-12 max-w-[90vw] mx-auto">
            <RotatingTextHeader 
              staticText="Project"
              rotatingTexts={["Showcase", "Portfolio", "Gallery", "Collection", "Archive"]}
            />
            <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto px-4">
              Explore our portfolio of innovative solutions and creative implementations.
            </p>
          </div>
          
          <div className="w-full max-w-4xl mx-auto space-y-16 sm:space-y-32 px-4">
            <ProjectShowcaseCard
              title={projects["red-room"].title}
              category={projects["red-room"].category}
              summary={projects["red-room"].summary}
              tags={projects["red-room"].tags}
              slug="red-room"
            />
            <ProjectShowcaseCard
              title={projects["diagram-studio"].title}
              category={projects["diagram-studio"].category}
              summary={projects["diagram-studio"].summary}
              tags={projects["diagram-studio"].tags}
              slug="diagram-studio"
            />
            <ProjectShowcaseCard
              title={projects["helix-plus"].title}
              category={projects["helix-plus"].category}
              summary={projects["helix-plus"].summary}
              tags={projects["helix-plus"].tags}
              slug="helix-plus"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
