"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Works" },
  { href: "/bio", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8]/90 backdrop-blur-sm border-b border-[#E5E5E0]">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-lg tracking-wide hover:opacity-70 transition-opacity"
        >
          Sean Hammett
        </Link>
        <ul className="flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-xs tracking-widest uppercase transition-colors ${
                  pathname === href
                    ? "text-[#1A1A1A]"
                    : "text-[#6B6B6B] hover:text-[#1A1A1A]"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
