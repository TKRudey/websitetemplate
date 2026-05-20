import { notFound } from "next/navigation";
import Link from "next/link";
import { ProjectHeroImage, ProjectGalleryImage } from "@/components/ProjectImages";
import { projects, getProject } from "@/lib/projects";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: `${project.materials}, ${project.year}${project.dimensions ? `. ${project.dimensions}` : ""}`,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div>
      {/* Hero image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#E5E5E0]">
        <ProjectHeroImage src={project.images[0]} alt={project.title} />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Title + description */}
          <div className="md:col-span-2">
            <h1 className="font-serif text-4xl md:text-5xl font-light mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-[#6B6B6B] leading-relaxed text-base max-w-prose">
              {project.description}
            </p>
          </div>

          {/* Metadata */}
          <div className="text-sm space-y-5 md:pt-1">
            <div>
              <p className="text-[#6B6B6B] uppercase tracking-widest text-xs mb-1">Year</p>
              <p>{project.year}</p>
            </div>
            <div>
              <p className="text-[#6B6B6B] uppercase tracking-widest text-xs mb-1">Materials</p>
              <p>{project.materials}</p>
            </div>
            {project.dimensions && (
              <div>
                <p className="text-[#6B6B6B] uppercase tracking-widest text-xs mb-1">Dimensions</p>
                <p>{project.dimensions}</p>
              </div>
            )}
          </div>
        </div>

        {/* Additional images */}
        {project.images.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.slice(1).map((image, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden bg-[#E5E5E0]">
                <ProjectGalleryImage src={image} alt={`${project.title}, view ${i + 2}`} />
              </div>
            ))}
          </div>
        )}

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-[#E5E5E0]">
          <Link
            href="/"
            className="text-xs tracking-widest uppercase text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
          >
            ← All Works
          </Link>
        </div>
      </div>
    </div>
  );
}
