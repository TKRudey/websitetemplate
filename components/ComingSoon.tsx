"use client";

import { useState, useEffect } from "react";
import { CldImage } from "next-cloudinary";

const SLIDES = [
  "WhatsApp_Image_2026-05-19_at_20.46.06_m3nhun",
  "WhatsApp_Image_2026-05-19_at_20.51.35_efukrp",
  "WhatsApp_Image_2026-05-19_at_20.51.01_wgp6ke",
  "WhatsApp_Image_2026-05-19_at_20.55.37_ugxdkk",
];

export default function ComingSoon() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {SLIDES.map((id, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <CldImage
            src={id}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority={i === 0}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        <p className="text-xs tracking-[0.3em] uppercase mb-6 opacity-60 font-sans">
          Wirewood Designs
        </p>
        <h1 className="font-serif text-7xl md:text-9xl font-light tracking-tight">
          Coming Soon
        </h1>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-opacity duration-300 ${
              i === current ? "bg-white opacity-100" : "bg-white opacity-30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
