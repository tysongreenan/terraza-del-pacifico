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
      // Semantic type scale (fluid via clamp → responsive without md: variants).
      // Pairs size with its line-height / tracking / weight so headings are
      // consistent everywhere. See docs/design.md.
      fontSize: {
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.24em", fontWeight: "600" }],
        caption: ["0.8125rem", { lineHeight: "1.5" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.6" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        h4: ["1.25rem", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" }],
        h3: ["clamp(1.375rem, 1.05rem + 1.4vw, 1.75rem)", { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "600" }],
        h2: ["clamp(1.75rem, 1.15rem + 2.6vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }],
        h1: ["clamp(2.25rem, 1.3rem + 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        display: ["clamp(2.75rem, 1.2rem + 6.4vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "700" }],
      },
      spacing: {
        // Standard vertical rhythm for top-level page sections.
        section: "clamp(3.5rem, 2rem + 5vw, 6rem)",
        "section-sm": "clamp(2.5rem, 1.5rem + 3vw, 4rem)",
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
