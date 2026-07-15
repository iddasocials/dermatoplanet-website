"use client";

import { useCallback, useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

type Item = { img: string; label: string; tag: string };

const items: Item[] = [
  { img: "/result-1.jpg", label: "Acne & Acne Scars", tag: "Skin Clarity" },
  { img: "/result-2.jpg", label: "Pigmentation & Melasma", tag: "Even Tone" },
  { img: "/result-3.jpg", label: "Anti-Ageing & Glow", tag: "Youthful Glow" },
];

// "Before" look — duller, slightly aged/uneven vs the clean "after".
const BEFORE_FILTER =
  "[filter:brightness(0.92)_contrast(1.1)_saturate(0.78)_sepia(0.14)]";

function BeforeAfter({ img, label, tag }: Item) {
  const [pos, setPos] = useState(52);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  return (
    <figure className="overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-brand-100/70">
      <div
        ref={ref}
        className="relative aspect-square w-full cursor-ew-resize touch-none select-none"
        onPointerDown={(e) => {
          dragging.current = true;
          try {
            e.currentTarget.setPointerCapture(e.pointerId);
          } catch {
            /* setPointerCapture can throw for non-active pointers */
          }
          update(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && update(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        {/* AFTER (clean, base layer) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          alt={`${label} — after treatment`}
          draggable={false}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
        />
        <span className="absolute right-3 top-3 rounded-full bg-brand-600 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-soft">
          After
        </span>

        {/* BEFORE (dulled, clipped to the left portion) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          alt={`${label} — before treatment`}
          draggable={false}
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          className={`pointer-events-none absolute inset-0 h-full w-full object-cover object-top ${BEFORE_FILTER}`}
        />
        <span
          className="absolute left-3 top-3 rounded-full bg-navy/80 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-soft transition-opacity"
          style={{ opacity: pos > 14 ? 1 : 0 }}
        >
          Before
        </span>

        {/* divider + handle */}
        <div
          className="absolute inset-y-0 z-10 flex items-center"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-white/90" />
          <div className="grid h-9 w-9 place-items-center rounded-full bg-white text-brand-600 shadow-card ring-1 ring-brand-100">
            <ChevronsLeftRight size={18} />
          </div>
        </div>
      </div>

      <figcaption className="flex items-center justify-between gap-3 p-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand-500">
            {tag}
          </p>
          <p className="mt-0.5 font-bold text-navy">{label}</p>
        </div>
        <span className="shrink-0 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold text-brand-700">
          Drag ⇄
        </span>
      </figcaption>
    </figure>
  );
}

export default function Results() {
  return (
    <section id="results" className="scroll-mt-24 bg-white py-16 lg:py-24">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-500">
            Real Results
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Before &amp; After Transformations
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-navy/70">
            Real, visible improvements from personalized treatment plans. Drag
            the slider on each result to see the difference for yourself.
          </p>
        </div>

        <div className="reveal-group mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <BeforeAfter key={item.label} {...item} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-navy/40">
          *Results are illustrative and may vary from person to person.
        </p>
      </div>
    </section>
  );
}
