"use client";

import { CldImage } from "next-cloudinary";

export default function PortraitImage({ src }: { src: string }) {
  return (
    <CldImage
      src={src}
      alt="Sean Hammett"
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );
}
