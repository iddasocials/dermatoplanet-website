"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Brush,
  ChevronDown,
  HeartPulse,
  Menu,
  Scissors,
  Smile,
  Sparkles,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Logo from "./Logo";
import { treatmentCategories } from "@/content/treatments";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";

const links = [
  { label: "Home", href: "/" },
  { label: "Doctors", href: "/#doctors" },
  { label: "Treatments", href: "/treatments" },
  { label: "Contact Us", href: "/#contact" },
];

const categoryIcons: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  smile: Smile,
  "heart-pulse": HeartPulse,
  brush: Brush,
  scissors: Scissors,
  zap: Zap,
};

function categoryCount(category: (typeof treatmentCategories)[number]) {
  return category.treatments.reduce(
    (sum, t) => sum + 1 + (t.sub?.length ?? 0),
    0
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMega = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setMegaOpen(true);
  };

  const scheduleCloseMega = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    closeTimeout.current = setTimeout(() => setMegaOpen(false), 130);
  };

  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100/60 bg-white/80 backdrop-blur-md">
      <nav className="container-x flex h-20 items-center justify-between">
        <Logo />

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) =>
            l.label === "Treatments" ? (
              <li
                key={l.href}
                className="relative"
                onMouseEnter={openMega}
                onMouseLeave={scheduleCloseMega}
                onFocus={openMega}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setMegaOpen(false);
                }}
              >
                <Link
                  href={l.href}
                  aria-expanded={megaOpen}
                  aria-haspopup="true"
                  className="flex items-center gap-1 text-[15px] font-semibold text-navy/80 transition-colors hover:text-brand-500"
                >
                  {l.label}
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${
                      megaOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                <div
                  className={`absolute left-1/2 top-full w-[620px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                    megaOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible pointer-events-none -translate-y-1 opacity-0"
                  }`}
                >
                  <nav
                    aria-label="Treatment categories"
                    className="rounded-2xl bg-white p-3 shadow-card ring-1 ring-brand-100"
                  >
                    <div className="grid grid-cols-2 gap-1.5">
                      {treatmentCategories.map((cat) => {
                        const Icon = categoryIcons[cat.icon] ?? Sparkles;
                        const count = categoryCount(cat);
                        const preview = cat.treatments
                          .slice(0, 3)
                          .map((t) => t.name)
                          .join(" · ");

                        return (
                          <Link
                            key={cat.slug}
                            href={`/treatments#${cat.slug}`}
                            onClick={() => setMegaOpen(false)}
                            className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-brand-50/70"
                          >
                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-50 text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                              <Icon size={18} />
                            </span>
                            <span className="min-w-0">
                              <span className="flex items-baseline gap-2">
                                <span className="text-sm font-bold text-navy">
                                  {cat.title}
                                </span>
                                <span className="shrink-0 text-[11px] font-medium text-navy/40">
                                  {count} treatments
                                </span>
                              </span>
                              <span className="mt-0.5 line-clamp-1 text-[11px] text-navy/50">
                                {preview}
                              </span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="mt-2 border-t border-brand-100 pt-2">
                      <Link
                        href="/treatments"
                        onClick={() => setMegaOpen(false)}
                        className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-semibold text-teal-700 transition-colors hover:bg-brand-50/70 hover:text-teal-900"
                      >
                        View all treatments
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </nav>
                </div>
              </li>
            ) : (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[15px] font-semibold text-navy/80 transition-colors hover:text-brand-500"
                >
                  {l.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="hidden lg:block">
          <a
            href={waLink(WA_MESSAGES.book)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-brand-700"
          >
            Book Appointment
          </a>
        </div>

        <button
          className="lg:hidden text-navy"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-brand-100 bg-white">
          <ul className="container-x flex flex-col py-4">
            {links.map((l) =>
              l.label === "Treatments" ? (
                <li key={l.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block flex-1 py-3 text-[15px] font-semibold text-navy/80"
                    >
                      {l.label}
                    </Link>
                    <button
                      onClick={() => setMobileTreatmentsOpen((v) => !v)}
                      aria-expanded={mobileTreatmentsOpen}
                      aria-label="Toggle treatments submenu"
                      className="p-2 text-navy/60"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          mobileTreatmentsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                  {mobileTreatmentsOpen && (
                    <ul className="ml-2 border-l border-brand-100 pb-2 pl-4">
                      {treatmentCategories.map((cat) => (
                        <li key={cat.slug}>
                          <Link
                            href={`/treatments#${cat.slug}`}
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm font-medium text-navy/70"
                          >
                            {cat.title}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link
                          href="/treatments"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm font-semibold text-teal-700"
                        >
                          All treatments
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              ) : (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-[15px] font-semibold text-navy/80"
                  >
                    {l.label}
                  </Link>
                </li>
              )
            )}
            <li>
              <a
                href={waLink(WA_MESSAGES.book)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white"
              >
                Book Appointment
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
