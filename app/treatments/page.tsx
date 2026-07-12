import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Smile,
  HeartPulse,
  Brush,
  Scissors,
  Zap,
  ArrowRight,
  Check,
  MessageCircle,
  Droplets,
  Syringe,
  ScanFace,
  LayoutGrid,
  Waves,
  Spline,
  Dna,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBar from "@/components/CtaBar";
import TreatmentsSectionNav from "@/components/TreatmentsSectionNav";
import { treatmentCategories } from "@/content/treatments";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Treatments — Dermato Planet",
  description:
    "Explore our full range of dermatology, aesthetic, and hair treatments — skin, facials, anti-ageing, cosmetic procedures, hair restoration, and laser.",
};

const categoryIcons: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  smile: Smile,
  "heart-pulse": HeartPulse,
  brush: Brush,
  scissors: Scissors,
  zap: Zap,
};

/** Keyword-match a treatment name to a lucide icon. */
const iconRules: [RegExp, LucideIcon][] = [
  [/peel/i, Droplets],
  [/laser|\bLHR\b|PICO|photo/i, Zap],
  [/analyzer|analysis/i, ScanFace],
  [/microneedl/i, LayoutGrid],
  [/PRP|GFC|booster|inject|botox|filler|PDRN/i, Syringe],
  [/HIFU|\bRF\b|radio/i, Waves],
  [/thread/i, Spline],
  [/makeup|eyeliner|blush|microblading|brow/i, Brush],
  [/exosome|stem|QR678|mesosome/i, Dna],
  [/nutrition/i, Leaf],
  [/facial/i, Smile],
  [/hair|transplant/i, Sparkles],
];

function resolveTreatmentIcon(name: string): LucideIcon {
  for (const [pattern, icon] of iconRules) {
    if (pattern.test(name)) return icon;
  }
  return Sparkles;
}

const totalTreatments = treatmentCategories.reduce(
  (sum, cat) =>
    sum +
    cat.treatments.reduce((s, t) => s + 1 + (t.sub?.length ?? 0), 0),
  0
);
const roundedTreatments = Math.floor(totalTreatments / 10) * 10;

const stats = [
  { value: `${treatmentCategories.length}`, label: "Specialities" },
  { value: `${roundedTreatments}+`, label: "Treatments" },
  { value: "Korean", label: "Technology" },
];

export default function TreatmentsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ============ Hero header ============ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-100 py-16 lg:py-24">
          {/* decorative blobs */}
          <div className="pointer-events-none absolute -right-24 -top-16 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-teal-700/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-brand-300/20 blur-3xl" />

          {/* faint molecule / arc decoration */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 top-6 hidden h-[420px] w-[420px] opacity-10 sm:block"
            viewBox="0 0 420 420"
            fill="none"
          >
            <circle cx="210" cy="210" r="160" stroke="#1c4f8a" strokeWidth="1.5" strokeDasharray="6 10" />
            <circle cx="210" cy="210" r="110" stroke="#14595b" strokeWidth="1.5" />
            <path d="M60 210a150 150 0 0 1 150-150" stroke="#2a7ccb" strokeWidth="3" strokeLinecap="round" />
            <circle cx="210" cy="60" r="10" fill="#2a7ccb" />
            <circle cx="320" cy="210" r="7" fill="#14595b" />
            <circle cx="210" cy="320" r="5" fill="#1c4f8a" />
            <circle cx="100" cy="140" r="6" fill="#2a7ccb" />
            <line x1="210" y1="60" x2="320" y2="210" stroke="#1c4f8a" strokeWidth="1.5" />
            <line x1="320" y1="210" x2="210" y2="320" stroke="#14595b" strokeWidth="1.5" />
            <line x1="100" y1="140" x2="210" y2="60" stroke="#2a7ccb" strokeWidth="1.5" />
          </svg>

          <div className="container-x relative">
            <nav className="mb-5 flex items-center gap-2 text-sm text-navy/50">
              <Link href="/" className="transition-colors hover:text-brand-500">
                Home
              </Link>
              <span>/</span>
              <span className="font-semibold text-navy/70">Treatments</span>
            </nav>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl">
              Our <span className="text-brand-500">Treatments</span>
            </h1>
            <p className="mt-2 font-serif text-lg italic text-teal-700 sm:text-xl">
              Clinical science, delivered with care.
            </p>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-navy/70">
              Advanced, evidence-based care across skin, hair, and aesthetics —
              powered by Korean technology and delivered by expert doctors.
              Explore our full menu of personalized treatments below.
            </p>

            {/* stats chips */}
            <div className="mt-8 flex flex-wrap gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 shadow-soft ring-1 ring-brand-100"
                >
                  <span className="text-base font-extrabold text-brand-600">
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium text-navy/70">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Sticky section nav ============ */}
        <TreatmentsSectionNav
          items={treatmentCategories.map((c) => ({
            slug: c.slug,
            title: c.title,
            icon: c.icon,
          }))}
        />

        {/* ============ Category sections ============ */}
        {treatmentCategories.map((cat, idx) => {
          const CatIcon = categoryIcons[cat.icon] ?? Sparkles;
          const index = String(idx + 1).padStart(2, "0");
          const subTreatments = cat.treatments.filter((t) => t.sub?.length);

          return (
            <section
              key={cat.slug}
              id={cat.slug}
              className={`relative scroll-mt-36 overflow-hidden py-14 lg:py-20 ${
                idx % 2 === 1 ? "bg-brand-50/50" : "bg-white"
              }`}
            >
              <div className="container-x">
                {/* section header */}
                <div className="relative max-w-3xl">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-8 left-0 select-none text-7xl font-extrabold leading-none text-brand-900/5 sm:text-8xl"
                  >
                    {index}
                  </span>
                  <div className="relative">
                    <div className="flex items-center gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-teal-800 text-white">
                        <CatIcon size={24} />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-brand-500">
                          Speciality {index}
                        </p>
                        <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                          {cat.title}
                        </h2>
                      </div>
                    </div>
                    <p className="mt-4 text-[15px] leading-relaxed text-navy/70">
                      {cat.intro}
                    </p>
                  </div>
                </div>

                {/* AI skin-analysis feature (skin section only) */}
                {cat.slug === "skin" && (
                  <div className="mt-10 grid items-center gap-6 overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-brand-900 p-6 sm:p-8 lg:grid-cols-2 lg:gap-10">
                    <div>
                      <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-teal-500">
                        <ScanFace size={14} /> AI Technology
                      </p>
                      <h3 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
                        Advanced AI Skin Analysis
                      </h3>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
                        Our digital diagnostic tool maps your skin in depth —
                        pigmentation, texture, pores, and hydration — to build a
                        highly personalized treatment plan backed by data, not
                        guesswork.
                      </p>
                      <ul className="mt-5 grid gap-2 text-sm text-white/80">
                        {[
                          "Deep, layer-by-layer skin mapping",
                          "Objective, measurable results tracking",
                          "Personalized, science-led treatment plans",
                        ].map((point) => (
                          <li key={point} className="flex items-center gap-2">
                            <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-teal-500 text-navy">
                              <Check size={11} strokeWidth={3} />
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl ring-1 ring-white/15">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/skin-analysis.jpg"
                        alt="AI-powered facial skin analysis"
                        className="h-full w-full object-cover"
                      />
                      {/* AI scan mesh overlay */}
                      <svg
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 h-full w-full text-teal-500 opacity-50 mix-blend-screen"
                        viewBox="0 0 200 250"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <pattern id="mesh" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M20 0H0V20" fill="none" stroke="currentColor" strokeWidth="0.4" />
                          </pattern>
                        </defs>
                        <rect width="200" height="250" fill="url(#mesh)" />
                        {[40, 90, 150, 200].map((cy) => (
                          <circle key={cy} cx={(cy % 100) + 60} cy={cy} r="1.6" fill="currentColor" />
                        ))}
                      </svg>
                      {/* scanning line + gradient */}
                      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-16 -translate-y-1/2 bg-gradient-to-b from-transparent via-teal-500/25 to-transparent" />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                      {/* corner brackets */}
                      <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-teal-500/70" />
                      <span className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-teal-500/70" />
                      <span className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-teal-500/70" />
                      <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-teal-500/70" />
                    </div>
                  </div>
                )}

                {/* treatment cards */}
                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.treatments.map((t) => {
                    const TreatIcon = resolveTreatmentIcon(t.name);
                    return (
                      <div
                        key={t.name}
                        className="group flex flex-col rounded-2xl bg-white p-6 shadow-soft ring-1 ring-brand-100 transition-all hover:-translate-y-1 hover:shadow-card hover:ring-brand-300"
                      >
                        <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                          <TreatIcon size={21} />
                        </span>
                        <h3 className="mt-4 text-lg font-bold text-navy">
                          {t.name}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/65">
                          {t.description}
                        </p>
                        {t.sub && t.sub.length > 0 && (
                          <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-600">
                            {t.sub.length} specialized{" "}
                            {/peel/i.test(t.name) ? "peels" : "options"} ↓
                          </span>
                        )}
                        <span className="mt-5 block h-0.5 w-0 rounded-full bg-gradient-to-r from-brand-400 to-teal-700 transition-all duration-300 group-hover:w-full" />
                      </div>
                    );
                  })}
                </div>

                {/* sub-treatment panels (e.g. Chemical Peels) */}
                {subTreatments.map((t) => {
                  const PanelIcon = resolveTreatmentIcon(t.name);
                  const isPeel = /peel/i.test(t.name);
                  return (
                    <div
                      key={`${t.name}-panel`}
                      className="mt-8 rounded-3xl bg-gradient-to-br from-brand-50 to-white p-6 ring-1 ring-brand-100 sm:p-8"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal-800 text-white">
                          <PanelIcon size={21} />
                        </span>
                        <div>
                          <h3 className="text-xl font-extrabold text-navy">
                            {t.name} —{" "}
                            <span className="text-brand-500">
                              {t.sub!.length} Specialized{" "}
                              {isPeel ? "Peels" : "Options"}
                            </span>
                          </h3>
                          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-navy/65">
                            {t.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {t.sub!.map((s) => (
                          <div
                            key={s.name}
                            className="rounded-xl bg-white p-4 ring-1 ring-brand-100/70 transition-all hover:shadow-soft hover:ring-brand-300"
                          >
                            <div className="flex items-start gap-2.5">
                              <Droplets
                                size={15}
                                className="mt-0.5 shrink-0 text-teal-700"
                              />
                              <div>
                                <p className="text-sm font-bold text-navy">
                                  {s.name}
                                </p>
                                <p className="mt-1 text-[12px] leading-snug text-navy/55">
                                  {s.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}

        {/* ============ Bottom CTA ============ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-teal-800 to-brand-900 py-16 text-white lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-36 -right-24 h-96 w-96 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-12 h-64 w-64 rounded-full border border-white/10"
          />
          <div className="container-x relative flex flex-col items-center text-center">
            <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              Not sure which treatment is right for you?
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              Book a consultation with our experts and get a personalized
              treatment plan tailored to your skin and hair goals.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#doctors"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-teal-800 transition-colors hover:bg-brand-50"
              >
                Meet Our Specialists <ArrowRight size={17} />
              </Link>
              <a
                href={waLink(WA_MESSAGES.treatmentPlan)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25a355] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1f8b48]"
              >
                <MessageCircle size={17} /> WhatsApp Now
              </a>
            </div>
            <p className="mt-6 text-sm text-white/50">
              Trusted by 10,000+ patients · Doctor-led consultations · Korean
              technology
            </p>
          </div>
        </section>

        <Footer />
      </main>
      <CtaBar />
    </>
  );
}
