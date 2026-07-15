"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Adds an `.in` class to any `.reveal` / `.reveal-group` element once it
 * scrolls into view, driving the CSS fade-up animations. No-ops gracefully
 * (reveals everything) if IntersectionObserver is unavailable.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-group")
    );
    if (els.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));

    // safety net: if anything is missed, reveal it after a moment
    const fallback = window.setTimeout(
      () => els.forEach((el) => el.classList.add("in")),
      3500
    );

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}
