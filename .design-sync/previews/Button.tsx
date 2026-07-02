// Authored preview for the canonical button system. There is no <Button>
// component in this DS — buttons are plain <button>/<a> elements with the
// className from `actionButtonVariants(opts)` (cva). These cells show the real
// variants × surfaces × sizes, exactly as the site uses them.
import { actionButtonVariants } from "terraza-del-pacifico";

// Inline arrow (the site uses lucide ArrowRight in tertiary "text link" buttons).
function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function Variants() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
      <button className={actionButtonVariants({ variant: "primary" })}>Book your stay</button>
      <button className={actionButtonVariants({ variant: "secondary", surface: "light" })}>View details</button>
      <button className={actionButtonVariants({ variant: "tertiary", surface: "light" })}>
        More experiences <Arrow />
      </button>
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
      <button className={actionButtonVariants({ variant: "primary", size: "sm" })}>Size sm</button>
      <button className={actionButtonVariants({ variant: "primary", size: "default" })}>Size default</button>
      <button className={actionButtonVariants({ variant: "primary", size: "lg" })}>Size lg</button>
    </div>
  );
}

export function OnDark() {
  return (
    <div style={{ background: "hsl(199 66% 18%)", padding: "32px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
      <button className={actionButtonVariants({ variant: "primary" })}>Book your stay</button>
      <button className={actionButtonVariants({ variant: "secondary", surface: "dark" })}>Explore the menu</button>
      <button className={actionButtonVariants({ variant: "tertiary", surface: "dark" })}>
        All events <Arrow />
      </button>
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
      <button className={actionButtonVariants({ variant: "primary" })} disabled>Disabled</button>
      <button className={actionButtonVariants({ variant: "secondary", surface: "light" })} disabled>Disabled</button>
    </div>
  );
}
