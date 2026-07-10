import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  CalendarDays,
  Sparkles,
  ShieldPlus,
  Droplet,
  Atom,
  Dna,
  Syringe,
  Grid2x2,
  Zap,
  Smile,
  Droplets,
  HeartPulse,
  ScanFace,
} from "lucide-react";

const treatments = [
  { icon: Sparkles, title: "Hair Transplant" },
  { icon: Droplet, title: "GFC", sub: "Growth Factor Concentrate" },
  { icon: Atom, title: "Exosomes Therapy" },
  { icon: Grid2x2, title: "QR678 Therapy" },
  { icon: Dna, title: "PRO", sub: "Polynucleotide Therapy" },
  { icon: Droplets, title: "MISO", sub: "Microinfusion Solution" },
  { icon: ScanFace, title: "Microneedling Therapy" },
  { icon: Zap, title: "Laser Treatments" },
  { icon: Smile, title: "Medi Facials", sub: "Carbon · Vampire Facial" },
  { icon: Syringe, title: "Skin Boosters", sub: "PDRN Therapy" },
  { icon: HeartPulse, title: "Anti-Ageing Therapy", sub: "PRP" },
  { icon: ShieldPlus, title: "Korean Skin Treatments", sub: "Premium Machines" },
];

const peels = {
  left: ["Brightening & Glow Peel", "Acne Control Peel", "Pigmentation Peel"],
  right: ["Anti-Ageing Peel", "Salicylic Peel", "De-Tan Peel"],
};

export default function Treatments() {
  return (
    <section id="treatments" className="bg-white py-16 lg:py-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        {/* left copy */}
        <div>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl">
            Unlock your
            <br />
            all-in-one{" "}
            <span className="text-teal-700">treatment</span>
            <br />
            package today
          </h2>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-navy/70">
            Advanced care. Expert doctors. World-class technology. Everything you
            need for healthy, beautiful skin &amp; hair — all in one place.
          </p>

          <div className="mt-8 inline-flex items-start gap-3 rounded-2xl bg-brand-50 px-5 py-4">
            <ShieldPlus className="mt-0.5 shrink-0 text-brand-600" size={26} />
            <div>
              <p className="font-bold text-navy">Safe. Effective. Personalized.</p>
              <p className="text-sm text-navy/60">
                Trusted by thousands of happy patients.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 rounded-full bg-teal-800 px-6 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-teal-900"
            >
              View All Treatments
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* doctor + tooltip */}
          <div className="relative mt-10 hidden max-w-sm lg:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/doctor.jpg"
              alt="Dermato Planet doctor"
              className="h-72 w-72 rounded-full object-cover object-top shadow-card ring-8 ring-brand-50"
            />
            <div className="absolute -right-4 top-4 max-w-[220px] rounded-2xl bg-teal-800 p-4 text-white shadow-card">
              <Sparkles size={18} className="mb-1 text-brand-200" />
              <p className="text-sm font-bold">Comprehensive Care, Seamless Experience</p>
              <p className="mt-1 text-xs text-white/70">
                From advanced treatments to travel and stays — we&apos;ve got you
                covered.
              </p>
            </div>
          </div>
        </div>

        {/* booking card */}
        <div className="rounded-3xl bg-white p-2 shadow-card ring-1 ring-brand-100">
          <div className="rounded-t-[1.35rem] bg-teal-800 px-6 py-5 text-white">
            <p className="flex items-center justify-center gap-2 text-lg font-bold">
              <CalendarDays size={20} className="text-brand-200" />
              Book Your Medical Treatment!
            </p>
            <p className="mt-1 text-center text-sm text-white/70">
              Choose from our most trusted treatments
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3">
            {treatments.map(({ icon: Icon, title, sub }) => (
              <div
                key={title}
                className="group flex flex-col items-center rounded-xl border border-brand-100 bg-white p-4 text-center transition-all hover:-translate-y-0.5 hover:border-teal-700 hover:shadow-soft"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-50 text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                  <Icon size={22} />
                </span>
                <p className="mt-2.5 text-[13px] font-bold leading-tight text-navy">
                  {title}
                </p>
                {sub && (
                  <p className="mt-0.5 text-[11px] leading-tight text-navy/50">
                    {sub}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* chemical peel */}
          <div className="mx-4 mb-4 rounded-xl border border-brand-100 bg-brand-50/50 p-4">
            <div className="flex items-center gap-2">
              <ScanFace className="text-teal-700" size={20} />
              <p className="font-bold text-brand-600">Chemical Peel</p>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1">
              {[...peels.left, ...peels.right].map((p) => (
                <p key={p} className="text-[12px] text-navy/70">
                  • {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
