"use client";

import Link from "next/link";
import { CldImage } from "next-cloudinary";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#E5E5E0] mb-4">
        <CldImage
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div>
        <h3 className="font-serif text-xl font-light">{project.title}</h3>
        <p className="text-xs tracking-wider text-[#6B6B6B] mt-1 uppercase">
          {project.materials} — {project.year}
        </p>
      </div>
    </Link>
  );
}
