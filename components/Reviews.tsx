import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "The team at Dermato Planet is incredible! They transformed my skin with the right treatment and care. Highly recommended!",
    name: "Priya Sharma",
    when: "2 weeks ago",
    img: "/review-priya.jpg",
  },
  {
    text: "Advanced technology and expert doctors! My acne treatment results have been amazing. Thank you, Dermato Planet!",
    name: "Rahul Verma",
    when: "3 weeks ago",
    img: "/review-rahul.jpg",
  },
  {
    text: "I had an excellent experience with laser hair reduction. Professional staff and great results!",
    name: "Neha Kapoor",
    when: "1 month ago",
    img: "/review-neha.jpg",
  },
  {
    text: "The best dermatology clinic I've visited. They truly care about their patients and deliver real results.",
    name: "Arjun Malhotra",
    when: "1 month ago",
    img: "/review-arjun.jpg",
  },
];

function GoogleG({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
      <path fill="#4285F4" d="M45 24c0-1.6-.1-3.1-.4-4.6H24v9h11.8c-.5 2.7-2 5-4.3 6.6v5.5h7C42.6 36.7 45 30.9 45 24z" />
      <path fill="#34A853" d="M24 46c5.9 0 10.8-2 14.4-5.3l-7-5.5c-2 1.3-4.5 2.1-7.4 2.1-5.7 0-10.5-3.8-12.2-9H4.5v5.7C8.1 41.6 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.8 28.3c-.4-1.3-.7-2.7-.7-4.3s.3-3 .7-4.3v-5.7H4.5C3 17 2 20.4 2 24s1 7 2.5 10z" />
      <path fill="#EA4335" d="M24 10.7c3.2 0 6.1 1.1 8.4 3.3l6.3-6.3C34.8 4.1 29.9 2 24 2 15.4 2 8.1 6.4 4.5 14l7.3 5.7c1.7-5.2 6.5-9 12.2-9z" />
    </svg>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-brand-50 py-16 lg:py-20">
      <div className="container-x">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Our Happy Patients
          </h2>
          <div className="mx-auto mt-5 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 shadow-soft">
            <GoogleG />
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="text-sm font-bold text-navy">
              4.9/5 <span className="font-normal text-navy/60">from 300+ reviews</span>
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-soft ring-1 ring-brand-100/70"
            >
              <div className="flex items-center justify-between">
                <div className="flex text-brand-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <GoogleG size={18} />
              </div>
              <Quote className="mt-4 text-brand-200" size={26} fill="currentColor" strokeWidth={0} />
              <p className="mt-1 flex-1 text-[14px] leading-relaxed text-navy/70">
                {r.text}
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-brand-100 pt-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={r.img}
                  alt={r.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-bold text-navy">{r.name}</p>
                  <p className="text-xs text-navy/50">{r.when}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
