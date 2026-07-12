import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import Logo from "./Logo";

function XIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div>
          <Logo variant="white" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Advanced dermatology and aesthetic care powered by Korean technology.
            Healthy skin, confident you.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/dermatoplanet", label: "Instagram" },
              { Icon: Facebook, href: "https://www.facebook.com/share/1MSpNepcg9/?mibextid=wwXIfr", label: "Facebook" },
              { Icon: XIcon, href: "https://x.com/dermatoplanet", label: "X (Twitter)" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition-colors hover:bg-brand-500"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-bold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", href: "/" },
              { label: "Doctors", href: "/#doctors" },
              { label: "Treatments", href: "/treatments" },
              { label: "Contact Us", href: "/#contact" },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-bold text-white">Treatments</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Hair Transplant", href: "/treatments#hair" },
              { label: "Laser Treatments", href: "/treatments#laser" },
              { label: "Anti-Ageing", href: "/treatments#anti-ageing" },
              { label: "Chemical Peels", href: "/treatments#skin" },
              { label: "Facials", href: "/treatments#facials" },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-bold text-white">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin size={17} className="mt-0.5 shrink-0 text-brand-300" />
              Flat No. 103, Sorrento Bldg, Near Aromas Cafe, Hiranandani Gardens
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={17} className="shrink-0 text-brand-300" />
              <a href="tel:+918433551004" className="transition-colors hover:text-white">
                +91 84335 51004
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={17} className="shrink-0 text-brand-300" />
              <a href="mailto:contact@dermatoplanet.com" className="transition-colors hover:text-white">
                contact@dermatoplanet.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-sm text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Dermato Planet. All rights reserved.</p>
          <p>Healthy Skin. Confident You.</p>
        </div>
      </div>
    </footer>
  );
}
