// Central WhatsApp contact config + link builder.
// All "book" / enquiry CTAs across the site funnel here with prefilled text.

export const WHATSAPP_NUMBER = "918433551004"; // +91 84335 51004
export const PHONE_DISPLAY = "+91 84335 51004";
export const EMAIL = "contact@dermatoplanet.com";
export const ADDRESS =
  "Flat No. 103, Sorrento Bldg, Near Aromas Cafe, Hiranandani Gardens";

/** Build a wa.me link with an optional prefilled message. */
export function waLink(text?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

// Reusable default messages
export const WA_MESSAGES = {
  book: "Hi Dermato Planet, I'd like to book an appointment.",
  treatmentPlan:
    "Hi Dermato Planet, I'd like to get a personalized treatment plan.",
  general: "Hi Dermato Planet, I have a question about your treatments.",
  concern: (q: string) =>
    `Hi Dermato Planet, I'm looking for help with: ${q}`,
  treatment: (name: string) =>
    `Hi Dermato Planet, I'd like to know more about ${name}.`,
};
