import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with sculptor Sean Hammett",
};

const EMAIL = "sean@seanhammett.com"; // Replace with your actual email

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="font-serif text-4xl md:text-5xl font-light mb-3 leading-tight">
        Contact
      </h1>
      <p className="text-[#6B6B6B] mb-12 text-sm leading-relaxed">
        For enquiries about works, commissions, or exhibitions.
      </p>

      <div className="mb-12 pb-12 border-b border-[#E5E5E0]">
        <p className="text-xs tracking-widest uppercase text-[#6B6B6B] mb-2">Email</p>
        <a
          href={`mailto:${EMAIL}`}
          className="font-serif text-lg hover:opacity-60 transition-opacity"
        >
          {EMAIL}
        </a>
      </div>

      <ContactForm />
    </div>
  );
}
