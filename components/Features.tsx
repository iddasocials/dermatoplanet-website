import { BadgeCheck, Cpu, Plane, Building2, Headset } from "lucide-react";

const features = [
  { icon: BadgeCheck, title: "Expert Dermatologists", sub: "& Trichologists" },
  { icon: Cpu, title: "Advanced Korean", sub: "Technology" },
  { icon: Plane, title: "Medical Travel", sub: "Assistance" },
  { icon: Building2, title: "Premium Stay", sub: "Options" },
  { icon: Headset, title: "End-to-End", sub: "Support" },
];

export default function Features() {
  return (
    <section className="bg-white pb-10">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-6 rounded-2xl border border-brand-100 bg-brand-50/40 px-6 py-7 sm:grid-cols-3 lg:grid-cols-5">
          {features.map(({ icon: Icon, title, sub }) => (
            <div key={title} className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-brand-600 shadow-soft">
                <Icon size={22} />
              </span>
              <div>
                <p className="text-sm font-bold leading-tight text-navy">{title}</p>
                <p className="text-sm leading-tight text-navy/60">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
