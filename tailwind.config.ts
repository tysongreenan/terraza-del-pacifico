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
        // Brand tokens (custom, from the live site)
        gold: "hsl(var(--gold))",
        ocean: { DEFAULT: "hsl(var(--ocean))", light: "hsl(var(--ocean-light))" },
        earth: "hsl(var(--earth))",
        sand: "hsl(var(--sand))",
        concept: {
          ocean: "#103a4d",
          gold: "#c9a763",
          "gold-muted": "#876528",
          sand: "#faf6ef",
          "sand-muted": "#f5efe5",
          ink: "#2b2620",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
