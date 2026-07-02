import { cva, type VariantProps } from "class-variance-authority";

/**
 * Canonical brand button system — THE single source of truth for every button
 * on the site. See docs/design.md › Buttons. Apply the className to a
 * <button>, <a>, or next/link <Link>. Three variants, surface-aware for light
 * vs dark/photo backgrounds:
 *   - primary   gold solid (main action)
 *   - secondary outline (ocean on light, white on dark)
 *   - tertiary  text link + arrow (quiet inline action; no padding/border)
 *
 * Edit the shared base string or any variant here and EVERY button updates.
 */
export const actionButtonVariants = cva(
  // font-sans is explicit so buttons never inherit Cormorant from a page that
  // sets font-concept on a wrapper (buttons are always the Inter UI font).
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans text-caption font-semibold uppercase tracking-[0.1em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        // Matches the homepage gold CTA exactly (RESERVE / CHECK AVAILABILITY).
        primary: "bg-concept-gold text-concept-ink-strong transition-opacity hover:opacity-90",
        secondary: "border",
        tertiary: "gap-1.5",
      },
      surface: { light: "", dark: "" },
      size: {
        sm: "px-5 py-2.5",
        default: "px-7 py-3.5",
        lg: "px-8 py-4 md:px-10",
      },
    },
    compoundVariants: [
      // Primary sits on gold, so its focus ring must be ocean to be visible.
      { variant: "primary", class: "focus-visible:ring-concept-ocean" },
      // Light secondary = warm hairline that darkens to ocean on hover, NO fill
      // (homepage "VIEW DETAILS").
      {
        variant: "secondary",
        surface: "light",
        class: "border-[#cdbfa6] text-concept-ocean hover:border-concept-ocean",
      },
      // Dark secondary = white hairline, faint white fill on hover
      // (homepage "EXPLORE THE MENU" / "JOIN").
      {
        variant: "secondary",
        surface: "dark",
        class: "border-white/60 font-medium text-white hover:bg-white/10",
      },
      { variant: "tertiary", surface: "light", class: "text-concept-ocean hover:text-concept-gold" },
      { variant: "tertiary", surface: "dark", class: "text-white hover:text-concept-gold" },
      // Tertiary is a text link — strip the box padding regardless of size.
      { variant: "tertiary", size: "sm", class: "px-0 py-0" },
      { variant: "tertiary", size: "default", class: "px-0 py-0" },
      { variant: "tertiary", size: "lg", class: "px-0 py-0" },
    ],
    defaultVariants: { variant: "primary", surface: "light", size: "default" },
  }
);

export type ActionButtonVariants = VariantProps<typeof actionButtonVariants>;
