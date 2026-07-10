import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Official Dermato Planet brand blues — Sky Blue #2E7DCC → Deep Blue #0D47A1
        brand: {
          50: "#eaf2fc",
          100: "#d2e4f8",
          200: "#a9c9f0",
          300: "#71a4e4",
          400: "#3d86d6",
          500: "#2e7dcc", // Sky Blue (official)
          600: "#155fb8",
          700: "#0d47a1", // Deep Blue (official)
          800: "#0b3c87",
          900: "#0a2a63",
        },
        navy: "#0a1e3f", // official Navy
        // Official Teal / Cyan #00ACC1 (Healing · Balance · Growth)
        teal: {
          500: "#00acc1", // Teal (official)
          600: "#0090a6",
          700: "#127b8b",
          800: "#0e5563", // deep teal panels
          900: "#0a3d48",
        },
        charcoal: "#333f48",
        "medium-gray": "#6b7280",
        "light-gray": "#e5e7eb",
        "off-white": "#f8fafc",
        aqua: "#e3f6f8",
        lavender: "#e6e6fa",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(15, 42, 82, 0.18)",
        soft: "0 8px 30px -10px rgba(15, 42, 82, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
