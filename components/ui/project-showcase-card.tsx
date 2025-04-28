"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ProjectTag } from "@/data/projects/types";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  category: string;
  summary: string;
  tags: ProjectTag[];
  slug: string;
}

export function ProjectShowcaseCard({ title, category, summary, tags, slug }: ProjectCardProps) {
  return (
    <Card className="group relative bg-black border border-white/10 hover:border-white/20 transition-colors">
      <CardHeader>
        <h3 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-lg text-white/50">{category}</p>
      </CardHeader>
      <CardContent>
        <p className="text-lg text-white/70 mb-6">{summary}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag.name}
              className={`px-3 py-1 rounded-full text-sm ${tag.color}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link
          href={slug === 'helix-plus' ? '/projects/helix' : `/projects/${slug}`}
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
      </CardFooter>
    </Card>
  );
}
