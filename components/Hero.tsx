import { Star } from "lucide-react";
import HeroSearch from "./HeroSearch";

const avatars = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=faces",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-100"
    >
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-brand-100/60 blur-3xl" />

      <div className="container-x relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
        {/* left */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-6xl">
            Healthy Skin.
            <br />
            <span className="text-brand-500">Confident You.</span>
          </h1>

          <p className="mt-5 font-serif text-2xl font-medium text-navy/90 sm:text-3xl">
            Advanced Dermatology &amp; Aesthetic Care.
          </p>

          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-navy/70">
            Experience world-class dermatology treatments powered by advanced
            Korean technology. From acne and pigmentation to anti-aging and hair
            restoration, our experts deliver personalized care with exceptional
            results.
          </p>

          {/* rating */}
          <div className="mt-7 flex items-center gap-4">
            <div className="flex -space-x-3">
              {avatars.map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt="Happy patient"
                  className="h-11 w-11 rounded-full border-2 border-white object-cover shadow-sm"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="flex text-brand-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <span className="text-sm font-bold text-navy">4.9/5 Rating</span>
              </div>
              <p className="text-sm font-semibold text-navy/80">
                Trusted by 10,000+ Happy Patients
              </p>
            </div>
          </div>

          <p className="mt-3 text-sm text-navy/60">
            Real transformations. Personalized treatments. Exceptional care.
          </p>

          {/* search */}
          <HeroSearch />
        </div>

        {/* right image */}
        <div className="relative">
          <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-[2rem] bg-brand-200/40" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-portrait.jpg"
            alt="Healthy, radiant skin — Dermato Planet"
            className="h-[420px] w-full rounded-[2rem] object-cover object-top shadow-card sm:h-[540px]"
          />
          <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-5 py-3 shadow-soft backdrop-blur">
            <p className="text-xs font-medium text-navy/60">Trusted by</p>
            <p className="text-lg font-extrabold text-brand-600">10,000+ Patients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
