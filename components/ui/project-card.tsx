"use client";
import Link from "next/link";

interface Tag {
  name: string;
  color?: string;
}

interface ProjectCardProps {
  title: string;
  category: string;
  summary: string;
  tags: Tag[];
  slug: string;
}

export function ProjectCard({ title, category, summary, tags, slug }: ProjectCardProps) {
  return (
<div className="group relative p-6 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 hover:from-neutral-800 hover:to-neutral-900 transition-all duration-300">
      {/* Glowing Border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
      <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-white/20 transition-colors" />
      
      <div className="space-y-6 flex-grow">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="mt-2 text-lg text-white/50">{category}</p>
        </div>

        {/* Summary */}
        <p className="text-lg text-white/70">{summary}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag.name}
              className={`px-3 py-1 rounded-full text-sm ${
                tag.color || 'bg-white/5 text-white/90 group-hover:bg-white/10'
              } transition-colors`}
            >
              {tag.name}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <Link
            href={
              slug === 'helix-plus' ? '/projects/helix' : 
              slug === 'red-room' ? '/projects/red-room' : 
              slug === 'diagram-studio' ? '/projects/diagram-studio' : 
              '#'
            }
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold relative overflow-hidden group/button"
          >
            <span className="relative z-10 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              View Project
            </span>
            <svg 
              className="w-4 h-4 relative z-10 stroke-cyan-300 group-hover/button:stroke-purple-300 transition-colors" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-950 to-purple-950 group-hover/button:from-cyan-900 group-hover/button:to-purple-900 transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
}
