import { Star, Stethoscope, Briefcase } from "lucide-react";

const doctors = [
  {
    name: "Dr. Arjun Sharma",
    rating: "4.8",
    role: "Dermatologist",
    exp: "18+ Years of Experience",
    img: "/doc-arjun.jpg",
  },
  {
    name: "Dr. Priya Mehta",
    rating: "4.7",
    role: "Cosmetologist",
    exp: "12+ Years of Experience",
    img: "/doctor.jpg",
  },
  {
    name: "Dr. Rahul Verma",
    rating: "4.9",
    role: "Dermatologic Surgeon",
    exp: "15+ Years of Experience",
    img: "/doc-rahul.jpg",
  },
  {
    name: "Dr. Neha Kapoor",
    rating: "4.6",
    role: "Trichologist",
    exp: "10+ Years of Experience",
    img: "/doc-neha.jpg",
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((d) => (
            <div
              key={d.name}
              className="rounded-3xl bg-white p-6 text-center shadow-card ring-1 ring-brand-100/70 transition-transform hover:-translate-y-1"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={d.img}
                alt={d.name}
                className="mx-auto h-32 w-32 rounded-full object-cover ring-4 ring-brand-50"
              />
              <div className="mx-auto mt-5 h-1 w-10 rounded-full bg-brand-400" />
              <h3 className="mt-4 text-lg font-bold text-navy">{d.name}</h3>
              <div className="mt-2 flex items-center justify-center gap-2">
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <span className="text-sm font-semibold text-navy/70">{d.rating}</span>
              </div>

              <div className="mt-4 space-y-2 border-t border-brand-100 pt-4 text-left">
                <p className="flex items-center gap-2 text-sm text-navy/70">
                  <Stethoscope size={16} className="text-brand-500" />
                  {d.role}
                </p>
                <p className="flex items-center gap-2 text-sm text-navy/70">
                  <Briefcase size={16} className="text-brand-500" />
                  {d.exp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
