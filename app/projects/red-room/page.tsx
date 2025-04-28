"use client";

import { MainMenu } from "@/components/reactdev/Components/FlowingMenu/MainMenu";
import { redRoomProject } from "@/data/projects/red-room";
import Link from "next/link";

import { ProjectTag as Tag, ProjectSection as Section } from "@/data/projects/types";

export default function RedRoomPage() {
  const project = redRoomProject;

  return (
    <main className="min-h-screen bg-black text-green-400 relative overflow-x-hidden font-mono">
      <MainMenu />
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] from-green-900/30 animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_var(--tw-gradient-from)_0%,_transparent_100%)] from-red-900/20" />
      </div>
      <div className="relative min-h-screen">
        
        {/* Back Link */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link 
            href="/project-showcases"
            className="inline-flex items-center text-sm text-green-400/70 hover:text-green-400/90 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            _return
          </Link>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12 sm:mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-red-500">{project.title}</h1>
              <p className="text-lg sm:text-xl text-green-400/50">{project.category}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag: Tag) => (
                  <span 
                    key={tag.name}
                    className={`px-3 py-1 rounded-full text-sm ${tag.color}`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-12 sm:space-y-16">
              {project.sections.map((section: Section) => (
                <section 
                  key={section.title || 'action-section'} 
                  className={`group ${section.style || 'border border-green-500/20 rounded-lg p-6'}`}
                >
                  {section.title && (
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-red-400">{section.title}</h2>
                  )}
                  <div 
                    className={`text-lg ${section.highlight ? '' : 'text-green-400/70'}`}
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
