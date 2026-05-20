"use client";

import { useState, useEffect } from "react";

// Replace these with your image paths or Cloudinary public IDs when ready
const SLIDES = [
  { placeholder: "#2A2418" },
  { placeholder: "#1E232A" },
  { placeholder: "#1E2A1E" },
  { placeholder: "#2A1E22" },
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
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundColor: slide.placeholder }}
        />
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
