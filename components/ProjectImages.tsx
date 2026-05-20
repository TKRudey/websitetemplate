"use client";

import { CldImage } from "next-cloudinary";

export function ProjectHeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <CldImage
      src={src}
      alt={alt}
      fill
      className="object-cover"
      priority
      sizes="100vw"
    />
  );
}

export function ProjectGalleryImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <CldImage
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );
}
