export interface Project {
  slug: string;
  title: string;
  year: number;
  materials: string;
  dimensions?: string;
  description: string;
  images: string[]; // Cloudinary public IDs — replace with your actual IDs
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "form-study-i",
    title: "Form Study I",
    year: 2024,
    materials: "Cast bronze, natural patina",
    dimensions: "48 × 22 × 18 cm",
    description:
      "An investigation into the relationship between negative and positive space, this work emerged from extended studies of the human torso reduced to its essential geometric tensions. The bronze surface is left unpolished, allowing the natural patina to develop over time.",
    images: ["IMG_2171_zzmsmc"],
    featured: true,
  },
  {
    slug: "accumulation",
    title: "Accumulation",
    year: 2024,
    materials: "Found river stones, steel armature",
    dimensions: "120 × 40 × 40 cm",
    description:
      "Gathered from a single river bend over the course of a year, these stones are arranged in a precarious column that speaks to time, weight, and the slow violence of erosion. The steel armature remains visible — an admission of intervention.",
    images: ["samples/animals/reindeer"],
    featured: true,
  },
  {
    slug: "threshold",
    title: "Threshold",
    year: 2023,
    materials: "Carved Carrara marble",
    dimensions: "30 × 60 × 8 cm",
    description:
      "A relief carving that treats the stone's surface as a boundary — shallow enough to suggest depth without penetrating through. The title refers equally to the physical threshold of the material and to psychological thresholds.",
    images: ["samples/coffee"],
  },
  {
    slug: "untitled-2023",
    title: "Untitled",
    year: 2023,
    materials: "Welded mild steel, beeswax",
    dimensions: "65 × 65 × 90 cm",
    description:
      "Structural steel members, cut and rewelded into a configuration that resists its own industrial logic. The beeswax coating preserves a warmth at odds with the material's origin.",
    images: ["samples/ecommerce/accessories-bag"],
  },
  {
    slug: "study-in-red",
    title: "Study in Red",
    year: 2022,
    materials: "Terracotta, iron oxide glaze",
    dimensions: "22 × 22 × 34 cm",
    description:
      "Hand-built terracotta fired at low temperature to retain the coarse texture of the clay body. The iron oxide glaze pools in the recesses, highlighting the work's topography.",
    images: ["samples/coffee"], // TODO: replace with your image
    featured: true,
  },
  {
    slug: "weight-of-air",
    title: "Weight of Air",
    year: 2022,
    materials: "Blown glass, copper wire",
    dimensions: "Variable installation, approx. 80 × 50 × 50 cm",
    description:
      "Three hand-blown glass forms suspended by fine copper wire at varying heights. The glass traps small air pockets that appear solid from certain angles and disappear from others.",
    images: ["samples/animals/reindeer"], // TODO: replace with your image
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
