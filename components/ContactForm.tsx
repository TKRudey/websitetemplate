"use client";

import { useState } from "react";

const EMAIL = "sean@seanhammett.com"; // Replace with your actual email

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-xs tracking-widest uppercase text-[#6B6B6B] mb-2"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-[#E5E5E0] focus:border-[#1A1A1A] outline-none py-2 text-sm transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs tracking-widest uppercase text-[#6B6B6B] mb-2"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-[#E5E5E0] focus:border-[#1A1A1A] outline-none py-2 text-sm transition-colors"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs tracking-widest uppercase text-[#6B6B6B] mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-[#E5E5E0] focus:border-[#1A1A1A] outline-none py-2 text-sm transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="text-xs tracking-widest uppercase border border-[#1A1A1A] px-8 py-3 hover:bg-[#1A1A1A] hover:text-[#FAFAF8] transition-colors"
      >
        {status === "sent" ? "Opening email client…" : "Send Message"}
      </button>
    </form>
  );
}
