# Dermato Planet

Landing page for **Dermato Planet** — an advanced dermatology & aesthetic care clinic. Built from the provided mockups.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom brand/navy/teal palette)
- **lucide-react** icons
- Google fonts via `next/font` (Poppins + Playfair Display)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Sections (from the mockups)

| Component | Mockup | Content |
|-----------|--------|---------|
| `Navbar` | 1 | Logo, nav links, Book Appointment CTA |
| `Hero` | 1–2 | "Healthy Skin. Confident You.", rating, search bar |
| `Treatments` | 3 | "Unlock your all-in-one treatment package" + booking card grid |
| `Features` | 3 | Expert dermatologists, Korean tech, travel, stay, support |
| `Doctors` | 4 | 4 specialist cards with rating & experience |
| `Awards` | 5 | Awards & Recognitions |
| `Reviews` | 5 | Google reviews from happy patients |
| `CtaBar` | 3 | Sticky "Get Treatment Plan" / "WhatsApp Now" bar |
| `Footer` | — | Links, treatments, contact |

## Notes

- Photos are placeholder Unsplash images (allow-listed in `next.config.mjs`). Swap the URLs in each component for real clinic assets.
- The logo is an inline SVG in `components/Logo.tsx` — replace with the official brand asset when available.
- WhatsApp number is a placeholder (`components/CtaBar.tsx`) and contact details in `components/Footer.tsx`.
