import type { Metadata } from "next";
import PortraitImage from "@/components/PortraitImage";

export const metadata: Metadata = {
  title: "About",
  description: "Biography and practice of sculptor Reed Hammett",
};

// Replace with your Cloudinary public ID for a studio or portrait photo
const PORTRAIT_IMAGE = "IMG_2171_zzmsmc"; // TODO: replace with your portrait/studio photo

const exhibitions = [
  {
    year: 2024,
    title: "Form and Void",
    venue: "Neon Parc, Melbourne",
    type: "Solo",
  },
  {
    year: 2023,
    title: "New Acquisitions",
    venue: "TarraWarra Museum of Art, Healesville",
    type: "Group",
  },
  {
    year: 2022,
    title: "Weight",
    venue: "Sarah Scout Presents, Melbourne",
    type: "Solo",
  },
  {
    year: 2022,
    title: "Australian Sculpture Triennial",
    venue: "La Trobe Art Institute, Bendigo",
    type: "Group",
  },
];

export default function BioPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
        {/* Portrait */}
        <div className="relative aspect-[3/4] overflow-hidden bg-[#E5E5E0] order-last md:order-first">
          <PortraitImage src={PORTRAIT_IMAGE} />
        </div>

        {/* Bio text */}
        <div className="flex flex-col justify-center">
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-8 leading-tight">
            Reed Hammett
          </h1>
          <div className="space-y-4 text-[#6B6B6B] leading-relaxed">
            <p>
              Reed Hammett is an artist based in the Pacific Northwest.
            </p>
            <p>
              He works from Vancouver, Washington
            </p>
          </div>
        </div>
      </div>

      {/* Exhibitions */}
      <div className="border-t border-[#E5E5E0] pt-12">
        <h2 className="text-xs tracking-widest uppercase text-[#6B6B6B] mb-8">
          Selected Exhibitions
        </h2>
        <div className="space-y-4">
          {exhibitions.map((ex, i) => (
            <div
              key={i}
              className="grid grid-cols-[3rem_1fr_auto] gap-4 text-sm items-baseline"
            >
              <span className="text-[#6B6B6B]">{ex.year}</span>
              <div>
                <span className="font-serif text-base italic mr-2">{ex.title}</span>
                <span className="text-[#6B6B6B]">{ex.venue}</span>
              </div>
              <span className="text-xs tracking-widest uppercase text-[#6B6B6B]">
                {ex.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import PortraitImage from "@/components/PortraitImage";

export const metadata: Metadata = {
  title: "About",
  description: "Biography and practice of sculptor Reed Hammett",
};

// Replace with your Cloudinary public ID for a studio or portrait photo
const PORTRAIT_IMAGE = "IMG_2171_zzmsmc"; // TODO: replace with your portrait/studio photo

const exhibitions = [
  {
    year: 2024,
    title: "Form and Void",
    venue: "Neon Parc, Melbourne",
    type: "Solo",
  },
  {
    year: 2023,
    title: "Material Witness",
    venue: "1301SW, Melbourne",
    type: "Group",
  },
  {
    year: 2023,
    title: "New Acquisitions",
    venue: "TarraWarra Museum of Art, Healesville",
    type: "Group",
  },
  {
    year: 2022,
    title: "Weight",
    venue: "Sarah Scout Presents, Melbourne",
    type: "Solo",
  },
  {
    year: 2022,
    title: "Australian Sculpture Triennial",
    venue: "La Trobe Art Institute, Bendigo",
    type: "Group",
  },
];

export default function BioPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
        {/* Portrait */}
        <div className="relative aspect-[3/4] overflow-hidden bg-[#E5E5E0] order-last md:order-first">
          <PortraitImage src={PORTRAIT_IMAGE} />
        </div>

        {/* Bio text */}
        <div className="flex flex-col justify-center">
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-8 leading-tight">
            Reed Hammett
          </h1>
          <div className="space-y-4 text-[#6B6B6B] leading-relaxed">
            <p>
              Reed Hammett is an artist based in the Pacific Northwest.
            </p>
            <p>
              He works from Vancouver, Washington
            </p>
          </div>
        </div>
      </div>

      {/* Exhibitions */}
      <div className="border-t border-[#E5E5E0] pt-12">
        <h2 className="text-xs tracking-widest uppercase text-[#6B6B6B] mb-8">
          Selected Exhibitions
        </h2>
        <div className="space-y-4">
          {exhibitions.map((ex, i) => (
            <div
              key={i}
              className="grid grid-cols-[3rem_1fr_auto] gap-4 text-sm items-baseline"
            >
              <span className="text-[#6B6B6B]">{ex.year}</span>
              <div>
                <span className="font-serif text-base italic mr-2">{ex.title}</span>
                <span className="text-[#6B6B6B]">{ex.venue}</span>
              </div>
              <span className="text-xs tracking-widest uppercase text-[#6B6B6B]">
                {ex.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
