"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";

export default function HeroSearch() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = query.trim()
      ? WA_MESSAGES.concern(query.trim())
      : WA_MESSAGES.general;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-7 flex items-center gap-2 rounded-full bg-white p-2 shadow-card ring-1 ring-brand-100"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-teal-700 text-white">
        <Search size={20} />
      </span>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="What skin or hair concern are you looking for?"
        className="w-full bg-transparent px-2 text-[15px] text-navy placeholder:text-navy/40 focus:outline-none"
      />
      <button
        type="submit"
        className="hidden shrink-0 rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 sm:block"
      >
        Search
      </button>
    </form>
  );
}
