import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

/**
 * Canonical brand button system — the single source of truth for site CTAs.
 * See docs/design.md › Buttons. Apply the className to a <button>, <a>, or
 * next/link <Link>. Three variants, surface-aware for light vs dark/photo
 * backgrounds:
 *   - primary   gold solid (main action)
 *   - secondary outline (ocean on light, white on dark)
 *   - tertiary  text link + arrow (quiet inline action; no padding/border)
 *
 * NOTE: `buttonVariants` above is the legacy shadcn cva, still used by a few
 * core-chrome files (header, nav, hero, pool, page-scaffold, not-found). It is
 * being migrated onto `actionButtonVariants` and will be removed afterward.
 */
export const actionButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-caption font-semibold uppercase tracking-[0.1em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        // Matches the homepage gold CTA exactly (RESERVE / CHECK AVAILABILITY).
        primary: "bg-concept-gold text-[#1a1611] transition-opacity hover:opacity-90",
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

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
