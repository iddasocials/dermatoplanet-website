import { Award, Star } from "lucide-react";

const awards = [
  { title: "Excellence in Dermatology Care", year: "2024" },
  { title: "Advanced Technology Excellence Award", year: "2024" },
  { title: "Patient Trust & Satisfaction Award", year: "2024" },
  { title: "Innovative Skin Care Clinic", year: "2023" },
  { title: "Best Aesthetic & Hair Restoration Clinic", year: "2023" },
];

export default function Awards() {
  return (
    <section id="gallery" className="bg-gradient-to-b from-white to-brand-50 py-16 lg:py-20">
      <div className="container-x">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Awards &amp; Recognitions
          </h2>
          <div className="mx-auto mt-3 flex items-center justify-center gap-2 text-brand-400">
            <span className="h-px w-10 bg-brand-300" />
            <Star size={14} fill="currentColor" strokeWidth={0} />
            <span className="h-px w-10 bg-brand-300" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {awards.map((a) => (
            <div
              key={a.title}
              className="relative overflow-hidden rounded-xl bg-white p-5 text-center shadow-soft ring-1 ring-brand-100"
            >
              <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-brand-900/90" />
              <Award
                className="relative mx-auto mb-3 text-amber-400"
                size={34}
                fill="currentColor"
                strokeWidth={1}
              />
              <p className="relative text-sm font-bold leading-snug text-navy">
                {a.title}
              </p>
              <p className="relative mt-2 text-xs font-semibold uppercase tracking-wide text-brand-500">
                Dermato Planet
              </p>
              <p className="relative text-xs text-navy/50">{a.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
