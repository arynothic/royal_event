import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/project-card";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-12">Projects</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(projects).map(([slug, project]) => (
            <ProjectCard
              key={slug}
              slug={slug}
              title={project.title}
              category={project.category}
              summary={project.summary}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
