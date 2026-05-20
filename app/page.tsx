import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-20">
        <h1 className="font-serif text-5xl md:text-6xl font-light tracking-tight mb-5">
          Sean Hammett
        </h1>
        <p className="text-[#6B6B6B] text-sm tracking-wider max-w-xs leading-relaxed">
          Sculptor working in bronze, stone, steel, and found materials.
          Based in Melbourne, Australia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
