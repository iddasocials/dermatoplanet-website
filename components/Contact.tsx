"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";
import {
  waLink,
  WA_MESSAGES,
  PHONE_DISPLAY,
  EMAIL,
  ADDRESS,
  WHATSAPP_NUMBER,
} from "@/lib/whatsapp";

const details = [
  {
    Icon: MapPin,
    label: "Visit Us",
    value: ADDRESS,
    href: undefined as string | undefined,
  },
  {
    Icon: Phone,
    label: "Call Us",
    value: PHONE_DISPLAY,
    href: `tel:+${WHATSAPP_NUMBER}`,
  },
  {
    Icon: Mail,
    label: "Email Us",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [concern, setConcern] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "Hi Dermato Planet, I'd like to book an appointment.",
      name && `Name: ${name}`,
      concern && `Concern: ${concern}`,
      message && `Message: ${message}`,
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-white py-16 lg:py-24"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-brand-100/50 blur-3xl" />
      <div className="container-x relative grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* left: intro + details */}
        <div className="reveal">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-500">
            Get In Touch
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Book Your Consultation
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-navy/70">
            Have a skin or hair concern? Send us a message and our team will get
            back to you on WhatsApp with a personalized plan — usually within a
            few hours.
          </p>

          <div className="mt-8 space-y-4">
            {details.map(({ Icon, label, value, href }) => {
              const inner = (
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-navy">{label}</p>
                    <p className="text-sm text-navy/65">{value}</p>
                  </div>
                </div>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  className="block rounded-2xl p-2 transition-colors hover:bg-brand-50/60"
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className="p-2">
                  {inner}
                </div>
              );
            })}
          </div>

          <a
            href={waLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-ring mt-8 inline-flex items-center gap-2 rounded-full bg-[#25a355] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1f8b48]"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </div>

        {/* right: form */}
        <div className="reveal rounded-3xl border border-brand-100 bg-white p-6 shadow-card sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="c-name"
                className="mb-1.5 block text-sm font-semibold text-navy"
              >
                Your Name
              </label>
              <input
                id="c-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Priya Sharma"
                className="w-full rounded-xl border border-brand-100 bg-brand-50/40 px-4 py-3 text-[15px] text-navy placeholder:text-navy/40 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
              />
            </div>

            <div>
              <label
                htmlFor="c-concern"
                className="mb-1.5 block text-sm font-semibold text-navy"
              >
                Skin / Hair Concern
              </label>
              <select
                id="c-concern"
                value={concern}
                onChange={(e) => setConcern(e.target.value)}
                className="w-full rounded-xl border border-brand-100 bg-brand-50/40 px-4 py-3 text-[15px] text-navy focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
              >
                <option value="">Select a concern</option>
                <option>Acne &amp; Acne Scars</option>
                <option>Pigmentation &amp; Melasma</option>
                <option>Anti-Ageing &amp; Skin Tightening</option>
                <option>Hair Loss &amp; Hair Transplant</option>
                <option>Laser Hair Reduction</option>
                <option>Facials &amp; Glow Treatments</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="c-message"
                className="mb-1.5 block text-sm font-semibold text-navy"
              >
                Message
              </label>
              <textarea
                id="c-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Tell us a little about what you're looking for…"
                className="w-full resize-none rounded-xl border border-brand-100 bg-brand-50/40 px-4 py-3 text-[15px] text-navy placeholder:text-navy/40 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              <Send size={17} /> Send via WhatsApp
            </button>
            <p className="text-center text-xs text-navy/50">
              Opens WhatsApp with your details pre-filled — no data stored.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
