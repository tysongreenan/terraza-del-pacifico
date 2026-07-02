import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

// Design tokens reverse-engineered from the live site (shadcn/ui convention).
// See docs/replication-blueprint.md. Verify against the source repo when available.
const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand tokens — all alias the CSS vars in globals.css (single source).
        gold: "hsl(var(--gold))",
        ocean: { DEFAULT: "hsl(var(--ocean))", light: "hsl(var(--ocean-light))" },
        earth: "hsl(var(--earth))",
        sand: { DEFAULT: "hsl(var(--sand))", muted: "hsl(var(--sand-muted))" },
        // `concept-*` is the palette pages use most; it now aliases the same
        // vars so there is exactly one definition per brand color.
        concept: {
          ocean: "hsl(var(--ocean))",
          gold: "hsl(var(--gold))",
          "gold-muted": "hsl(var(--gold-muted))",
          sand: "hsl(var(--sand))",
          "sand-muted": "hsl(var(--sand-muted))",
          ink: "hsl(var(--ink))",
          // Auxiliary shades — named so pages stop hand-coding raw [#hex].
          // Values are the exact hexes they replace (zero visual change).
          border: "#ece5d8", // warm hairline border (cards, dividers)
          "border-soft": "#e7dfcf", // softer warm border
          "ink-muted": "#6f6a62", // muted body/label text on light
          "ink-subtle": "#8a8478", // lighter label text on light
          "ink-strong": "#1a1611", // near-black, e.g. text on gold buttons
          mist: "#bcd0d8", // light blue-grey text on ocean surfaces
          cream: "#f3ead6", // pale cream label (on dark/photo)
        },
        // Semantic text colors for dark/ocean surfaces — replaces ad-hoc
        // `text-white/NN`. Use on footer, hero scrims, ocean panels.
        "on-dark": "rgb(255 255 255 / <alpha-value>)",
        "on-dark-muted": "rgb(255 255 255 / 0.72)",
        "on-dark-subtle": "rgb(255 255 255 / 0.55)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // Semantic type scale. Fluid via clamp → responsive without md: variants.
      // Headings carry size + line-height ONLY (no weight/tracking) so they
      // compose with any font — the serif display look (font-concept / Cormorant)
      // and the sans look (font-display / Manrope) both keep their own weight and
      // tracking. `eyebrow` is a fixed style, so it bundles its tracking/weight.
      // See docs/design.md.
      // Maxes are tuned to the site's existing desktop sizes so these tokens
      // ARE the current hierarchy (hero ~70px, section title ~46px, etc.):
      //   micro 11 · caption 13 · body-sm 15 · body 16 · body-lg 18
      //   h4 22 · h3 28 · h2 38 · h1 46 · display 70
      fontSize: {
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.24em", fontWeight: "600" }],
        micro: ["0.6875rem", "1.4"],
        caption: ["0.8125rem", "1.5"],
        "body-sm": ["0.9375rem", "1.6"],
        body: ["1rem", "1.6"],
        "body-lg": ["1.125rem", "1.65"],
        h4: ["1.375rem", "1.3"],
        h3: ["clamp(1.5rem, 1.1rem + 1.3vw, 1.75rem)", "1.2"],
        h2: ["clamp(1.875rem, 1.3rem + 2vw, 2.375rem)", "1.15"],
        h1: ["clamp(2.125rem, 1.4rem + 2.6vw, 2.875rem)", "1.1"],
        display: ["clamp(2.75rem, 1.4rem + 6vw, 4.375rem)", "1.04"],
      },
      spacing: {
        // Standard vertical rhythm for top-level page sections.
        section: "clamp(3.5rem, 2rem + 5vw, 6rem)",
        "section-sm": "clamp(2.5rem, 1.5rem + 3vw, 4rem)",
        // Top padding for the FIRST section on a hero-less / solid-header page,
        // so content clears the fixed header (~72–88px) plus section rhythm.
        // Overlay/hero pages don't need this (their hero sits under the header).
        "section-top": "clamp(7rem, 5.5rem + 4vw, 9rem)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-manrope)", "sans-serif"],
        serif: ["var(--font-manrope)", "sans-serif"],
        concept: ["var(--font-cormorant)", "serif"],
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
