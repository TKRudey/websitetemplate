import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Coming Soon — Wirewood Designs",
  description: "Wirewood Designs — coming soon.",
};

export default function Home() {
  return <ComingSoon />;
}
