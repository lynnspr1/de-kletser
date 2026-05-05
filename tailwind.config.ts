import type { Config } from "tailwindcss"

/**
 * Tailwind config for De Kletser
 * --------------------------------
 * Extends shadcn's default config with the De Kletser brand palette
 * and typography.  Merge this into your project's tailwind.config.ts.
 */
const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      /* ── De Kletser brand colours ── */
      colors: {
        kletser: {
          terracotta: "#B5522A",   // primary accent
          cream:      "#F5F0E8",   // main background
          blush:      "#FDF6EE",   // elevated surface
          espresso:   "#1E130C",   // dark text / nav
          mocha:      "#7A4035",   // secondary / hover
          sand:       "#D4B98A",   // borders / dividers
        },
      },
      /* ── Brand fonts ── */
      fontFamily: {
        display: ['"Alegreya Sans"', "Georgia", "serif"],
        body:    ['"Space Grotesk"', "system-ui", "sans-serif"],
      },
      /* ── Layered shadows that use the brand dark ── */
      boxShadow: {
        "kletser-sm":  "0 2px 12px rgba(30,19,12,0.07), 0 1px 4px rgba(30,19,12,0.04)",
        "kletser-md":  "0 4px 24px rgba(30,19,12,0.08), 0 1px 6px rgba(30,19,12,0.05)",
        "kletser-lg":  "0 20px 48px rgba(30,19,12,0.12), 0 4px 12px rgba(30,19,12,0.08)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
