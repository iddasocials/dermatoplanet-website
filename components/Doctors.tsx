import { Stethoscope, Briefcase, GraduationCap, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const doctors = [
  {
    name: "Dr. Rajeev Dhir",
    qualifications: "MBBS, MD (Dermatology, Venereology & Leprosy)",
    role: "Consultant Dermatologist — Dermocosmetology",
    exp: "30+ Years of Experience",
    expertise: ["Hair", "Acne", "Psoriasis", "PRP", "Anti-Ageing"],
    img: "/dr-rajeev-dhir.jpg",
    cutout: false,
  },
  {
    name: "Dr. Shweta Tripathi",
    qualifications: "MBBS, DDV · CDSI Member",
    role: "Dermatologist & Cosmetologist",
    exp: "6+ Years of Experience",
    expertise: ["Acne", "Pigmentation", "Melasma", "Botox", "Laser"],
    img: "/dr-shweta-tripathi.jpg",
    cutout: false,
  },
  {
    name: "Dr. Lalit Rajpal",
    qualifications: "MBBS, MS, MCh (Plastic Surgery)",
    role: "Cosmetic & Plastic Surgeon",
    exp: "10+ Years of Experience",
    expertise: ["Hair Transplant", "Rhinoplasty", "Fillers", "Body Contouring"],
    img: "/dr-lalit-rajpal.jpg",
    // photo has a plain white studio background — tint it to match the others
    cutout: true,
  },
];

export default function Doctors() {
  return (
    <section
      id="doctors"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white py-16 lg:py-24"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_top_right,rgba(75,155,222,0.12),transparent_60%)]" />
      <div className="container-x relative">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl">
            Connect With The Best
            <br />
            <span className="text-brand-500">Specialists For Your Treatment</span>
          </h2>
          <p className="mt-4 text-lg text-navy/60">
            Expert care. Advanced solutions. Healthier skin, every day.
          </p>
          <div className="mt-5 h-1 w-16 rounded-full bg-brand-400" />
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((d) => (
            <article
              key={d.name}
              className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-brand-100/70 transition-transform hover:-translate-y-1"
            >
              {/* photo */}
              <div
                className={`aspect-[4/5] w-full overflow-hidden ${
                  d.cutout
                    ? "bg-gradient-to-b from-[#eef3f9] to-[#d9e5f1]"
                    : "bg-brand-50"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={d.img}
                  alt={d.name}
                  className={`h-full w-full object-cover object-top ${
                    d.cutout ? "mix-blend-multiply" : ""
                  }`}
                />
              </div>

              {/* details */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-navy">{d.name}</h3>
                <p className="mt-1 flex items-start gap-1.5 text-xs font-medium text-brand-600">
                  <GraduationCap size={14} className="mt-0.5 shrink-0" />
                  {d.qualifications}
                </p>

                <div className="mt-4 space-y-2 border-t border-brand-100 pt-4">
                  <p className="flex items-center gap-2 text-sm text-navy/75">
                    <Stethoscope size={16} className="shrink-0 text-brand-500" />
                    {d.role}
                  </p>
                  <p className="flex items-center gap-2 text-sm text-navy/75">
                    <Briefcase size={16} className="shrink-0 text-brand-500" />
                    {d.exp}
                  </p>
                </div>

                <div className="mb-6 mt-4 flex flex-wrap gap-1.5">
                  {d.expertise.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={waLink(`Hi Dermato Planet 👋, I'd like to consult ${d.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                >
                  <MessageCircle size={16} /> Consult
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
