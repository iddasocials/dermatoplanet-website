"use client";

import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  Smile,
  HeartPulse,
  Brush,
  Scissors,
  Zap,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  smile: Smile,
  "heart-pulse": HeartPulse,
  brush: Brush,
  scissors: Scissors,
  zap: Zap,
};

export type SectionNavItem = {
  slug: string;
  title: string;
  icon: string;
};

export default function TreatmentsSectionNav({
  items,
}: {
  items: SectionNavItem[];
}) {
  const [active, setActive] = useState<string>(items[0]?.slug ?? "");
  const pillRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.slug))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    // rootMargin trims the top by the two sticky bars (~10rem) and most of the
    // lower viewport, so the section sitting just below the bars wins.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-160px 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    pillRefs.current[active]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }, [active]);

  return (
    <div className="sticky top-20 z-40 border-b border-brand-100 bg-white/85 backdrop-blur">
      <div className="container-x">
        <div className="hide-scrollbar flex items-center gap-2 overflow-x-auto py-3">
          {items.map((item) => {
            const Icon = icons[item.icon] ?? Sparkles;
            const isActive = active === item.slug;
            return (
              <a
                key={item.slug}
                href={`#${item.slug}`}
                ref={(el) => {
                  pillRefs.current[item.slug] = el;
                }}
                aria-current={isActive ? "true" : undefined}
                className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-teal-800 text-white shadow-soft"
                    : "text-navy/70 hover:bg-brand-50 hover:text-brand-600"
                }`}
              >
                <Icon size={15} />
                {item.title}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
