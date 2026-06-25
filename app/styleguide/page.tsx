import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { actionButtonVariants } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { getDictionary } from "@/lib/dictionaries";

// Standalone internal design-system reference. Lives OUTSIDE the [locale] tree
// (see middleware matcher) so it renders with the root layout only — no site
// header/footer, no WhatsApp button, no analytics. Renders every live token
// from docs/design.md so the visual system can be verified at a glance.
export const metadata: Metadata = {
  title: "Design System — Terraza del Pacífico",
  robots: { index: false, follow: false },
};

// --- Token tables (kept in sync with docs/design.md) -----------------------

const COLORS: { token: string; hex: string; use: string; dark?: boolean }[] = [
  { token: "concept-ocean / primary", hex: "#103a4d", use: "Headings, dark surfaces, primary buttons", dark: true },
  { token: "concept-gold / accent", hex: "#c9a763", use: "Accents, CTAs, fine rules" },
  { token: "concept-gold-muted", hex: "#876528", use: "Eyebrows, small labels, hairlines", dark: true },
  { token: "concept-sand / background", hex: "#faf6ef", use: "Page / section surfaces" },
  { token: "concept-sand-muted", hex: "#f5efe5", use: "Alternating panels" },
  { token: "concept-ink / foreground", hex: "#2b2620", use: "Body text on light", dark: true },
];

const DARK_TEXT = [
  { token: "text-on-dark", alpha: "100%", use: "Primary text on ocean / photo" },
  { token: "text-on-dark-muted", alpha: "72%", use: "Secondary text, captions" },
  { token: "text-on-dark-subtle", alpha: "55%", use: "De-emphasized labels" },
];

// Cormorant (font-concept) is reserved for headings only: display + h1–h4.
const HEADINGS: { cls: string; size: string; use: string }[] = [
  { cls: "text-display", size: "44 → 70", use: "Hero titles" },
  { cls: "text-h1", size: "34 → 46", use: "Section titles" },
  { cls: "text-h2", size: "30 → 38", use: "Sub-section titles" },
  { cls: "text-h3", size: "24 → 28", use: "Card titles" },
  { cls: "text-h4", size: "22", use: "Small headings" },
];

// Everything below is Inter (font-sans) — never Cormorant.
const TEXT: { cls: string; size: string; use: string }[] = [
  { cls: "text-body-lg", size: "18", use: "Lead paragraphs" },
  { cls: "text-body", size: "16", use: "Body (default)" },
  { cls: "text-body-sm", size: "15", use: "Dense body" },
  { cls: "text-caption", size: "13", use: "Captions, meta" },
  { cls: "text-micro", size: "11", use: "Tiny labels" },
];

const NAV_LINKS = [
  { id: "colors", label: "Colors" },
  { id: "type", label: "Type" },
  { id: "buttons", label: "Buttons" },
  { id: "nav", label: "Navigation" },
  { id: "spacing", label: "Spacing" },
];

const SAMPLE = "Despierta con el Pacífico";

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-concept-ink/10 py-section-sm">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 font-concept font-medium text-h2 text-concept-ocean">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

// Token name label used above each specimen.
function TokenLabel({ cls, size, use }: { cls: string; size: string; use: string }) {
  return (
    <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
      <span className="font-mono text-caption font-semibold text-concept-gold-muted">{cls}</span>
      <span className="font-mono text-caption text-concept-ink/50">{size}px</span>
      <span className="text-caption text-concept-ink/50">— {use}</span>
    </div>
  );
}

export default function StyleguidePage() {
  // Real dictionary so the embedded SiteHeader renders exactly as on the site.
  const dict = getDictionary("es");

  return (
    <div className="min-h-screen bg-concept-sand">
      {/* Sticky in-page nav — the only chrome on this standalone page. */}
      <div className="sticky top-0 z-50 border-b border-concept-ink/10 bg-concept-sand/85 backdrop-blur supports-[backdrop-filter]:bg-concept-sand/70">
        <div className="container flex h-14 items-center justify-between gap-4">
          <span className="font-concept text-h4 font-medium text-concept-ocean">
            Design System
          </span>
          <nav className="flex items-center gap-1 overflow-x-auto">
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="whitespace-nowrap rounded-sm px-3 py-1.5 text-caption font-medium uppercase tracking-[0.1em] text-concept-ink/70 transition-colors hover:bg-concept-sand-muted hover:text-concept-ocean"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="py-section-sm">
        <div className="container">
          <p className="eyebrow">Terraza del Pacífico</p>
          <h1 className="mt-3 font-concept font-medium text-display text-concept-ocean">
            Design System
          </h1>
          <p className="mt-4 max-w-2xl text-body-lg text-concept-ink/80">
            Live reference for every token in{" "}
            <code className="rounded-sm bg-concept-sand-muted px-1.5 py-0.5 text-body-sm">
              docs/design.md
            </code>
            . If anything here looks wrong, the system is wrong — these are the
            real classes, not screenshots.
          </p>
          {/* Meta row */}
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-concept-ink/10 pt-6">
            {[
              { k: "Source", v: "tailwind.config.ts" },
              { k: "Colors", v: `${COLORS.length} brand tokens` },
              { k: "Type", v: `${HEADINGS.length + TEXT.length} size tokens` },
              { k: "Fonts", v: "3 — Cormorant · Manrope · Inter" },
              { k: "Buttons", v: "1 system · 3 variants" },
            ].map((m) => (
              <div key={m.k}>
                <dt className="text-micro uppercase tracking-[0.18em] text-concept-gold-muted">{m.k}</dt>
                <dd className="mt-1 text-body-sm font-medium text-concept-ink">{m.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* ---- Colors ---- */}
      <Section id="colors" eyebrow="Colors" title="Brand palette">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COLORS.map((c) => (
            <div key={c.token} className="overflow-hidden rounded-sm border border-concept-ink/15 bg-white">
              {/* ring-inset keeps near-white swatches visible on the sand page */}
              <div
                className="flex h-28 items-end p-3 ring-1 ring-inset ring-black/10"
                style={{ backgroundColor: c.hex }}
              >
                <span
                  className={`font-mono text-caption font-semibold ${c.dark ? "text-white" : "text-concept-ink"}`}
                >
                  {c.hex}
                </span>
              </div>
              <div className="p-3">
                <p className="font-mono text-body-sm font-semibold text-concept-ink">{c.token}</p>
                <p className="mt-1 text-caption text-concept-ink/60">{c.use}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-body-sm text-concept-ink/70">
          No green-teal anywhere. The only teal is the wave glyph in the logo;
          the WhatsApp green <code className="text-caption">#1f7a4d</code> is
          intentional (WhatsApp brand).
        </p>

        {/* Text on dark */}
        <h3 className="mt-12 font-concept font-medium text-h3 text-concept-ocean">
          Text on dark / ocean surfaces
        </h3>
        <div className="mt-4 rounded-sm bg-concept-ocean p-8">
          <div className="space-y-3">
            {DARK_TEXT.map((t) => (
              <div key={t.token} className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span
                  className={
                    t.token === "text-on-dark"
                      ? "text-on-dark text-h4"
                      : t.token === "text-on-dark-muted"
                        ? "text-on-dark-muted text-h4"
                        : "text-on-dark-subtle text-h4"
                  }
                >
                  {SAMPLE}
                </span>
                <span className="font-mono text-caption text-on-dark-subtle">
                  {t.token} · {t.alpha}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ---- Type scale ---- */}
      <Section id="type" eyebrow="Typography" title="Type scale (fluid clamp)">
        <p className="mb-8 max-w-2xl text-body text-concept-ink/70">
          Size tokens carry size + line-height only.{" "}
          <strong className="font-semibold text-concept-ink">
            Cormorant (<code className="text-caption">font-concept</code>) is for
            headings only — display + h1–h4.
          </strong>{" "}
          Everything else (body, labels, captions) is{" "}
          <code className="text-caption">font-sans</code> (Inter).
        </p>

        {/* Headings — Cormorant */}
        <p className="eyebrow mb-4">Headings · Cormorant (font-concept)</p>
        <div className="space-y-8">
          {HEADINGS.map((t) => (
            <div key={t.cls} className="border-b border-concept-ink/10 pb-8 last:border-0">
              <TokenLabel {...t} />
              <p className={`font-concept font-medium text-concept-ocean ${t.cls}`}>{SAMPLE}</p>
            </div>
          ))}
        </div>

        {/* Body & labels — Inter */}
        <p className="eyebrow mb-4 mt-12">Body &amp; labels · Inter (font-sans)</p>
        <div className="space-y-8">
          {TEXT.map((t) => (
            <div key={t.cls} className="border-b border-concept-ink/10 pb-8 last:border-0">
              <TokenLabel {...t} />
              <p className={`font-sans text-concept-ink/80 ${t.cls}`}>{SAMPLE}</p>
            </div>
          ))}

          {/* Eyebrow + utility */}
          <div className="border-concept-ink/10 pb-2">
            <div className="mb-2 flex flex-wrap items-center gap-x-3">
              <span className="font-mono text-caption font-semibold text-concept-gold-muted">
                .eyebrow
              </span>
              <span className="text-caption text-concept-ink/50">
                — text-eyebrow + uppercase + gold-muted
              </span>
            </div>
            <p className="eyebrow">Nuestras Suites</p>
          </div>
        </div>

        <div className="mt-10 rounded-sm bg-concept-sand-muted p-6">
          <p className="eyebrow">Fonts</p>
          <div className="mt-3 grid gap-6 sm:grid-cols-3">
            <div>
              <p className="font-concept text-h3 text-concept-ocean">Cormorant</p>
              <p className="mt-1 font-mono text-caption text-concept-ink/60">font-concept · headings only</p>
            </div>
            <div>
              <p className="font-display text-h3 text-concept-ocean">Manrope</p>
              <p className="mt-1 font-mono text-caption text-concept-ink/60">font-display · alt sans (non-heading)</p>
            </div>
            <div>
              <p className="font-sans text-h3 text-concept-ocean">Inter</p>
              <p className="mt-1 font-mono text-caption text-concept-ink/60">font-sans · body (default)</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ---- Buttons ---- */}
      <Section id="buttons" eyebrow="Buttons" title="actionButtonVariants">
        <p className="mb-8 max-w-2xl text-body text-concept-ink/70">
          The one canonical button system. Three variants ×{" "}
          <code className="text-caption">surface</code> (light/dark) ×{" "}
          <code className="text-caption">size</code> (sm/default/lg). Never
          hand-roll button classes.
        </p>

        {/* Light surface */}
        <div className="rounded-sm border border-concept-ink/15 bg-white p-8">
          <p className="mb-4 font-mono text-caption text-concept-ink/50">surface: light</p>
          <div className="flex flex-wrap items-center gap-4">
            <button type="button" className={actionButtonVariants({ variant: "primary" })}>Book your stay</button>
            <button type="button" className={actionButtonVariants({ variant: "secondary", surface: "light" })}>
              View details
            </button>
            <button type="button" className={actionButtonVariants({ variant: "tertiary", surface: "light" })}>
              More experiences <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button type="button" className={actionButtonVariants({ variant: "primary", size: "sm" })}>Size sm</button>
            <button type="button" className={actionButtonVariants({ variant: "primary", size: "default" })}>
              Size default
            </button>
            <button type="button" className={actionButtonVariants({ variant: "primary", size: "lg" })}>Size lg</button>
          </div>
        </div>

        {/* Dark surface */}
        <div className="mt-4 rounded-sm bg-concept-ocean p-8">
          <p className="mb-4 font-mono text-caption text-on-dark-subtle">surface: dark</p>
          <div className="flex flex-wrap items-center gap-4">
            <button type="button" className={actionButtonVariants({ variant: "primary" })}>Book your stay</button>
            <button type="button" className={actionButtonVariants({ variant: "secondary", surface: "dark" })}>
              Explore the menu
            </button>
            <button type="button" className={actionButtonVariants({ variant: "tertiary", surface: "dark" })}>
              All events <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>

        {/* Interaction states */}
        <h3 className="mt-12 font-concept font-medium text-h3 text-concept-ocean">States</h3>
        <p className="mt-2 max-w-2xl text-body-sm text-concept-ink/70">
          Hover any button above and tab to it to see the gold focus ring — those
          are live. Disabled is shown below (60% opacity, no pointer).
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-4 rounded-sm border border-concept-ink/15 bg-white p-8">
          <div className="flex flex-col items-center gap-2">
            <button type="button" className={actionButtonVariants({ variant: "primary" })}>Enabled</button>
            <span className="font-mono text-micro text-concept-ink/50">resting</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <button type="button" disabled className={actionButtonVariants({ variant: "primary" })}>
              Disabled
            </button>
            <span className="font-mono text-micro text-concept-ink/50">disabled</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <button type="button" disabled className={actionButtonVariants({ variant: "secondary", surface: "light" })}>
              Disabled
            </button>
            <span className="font-mono text-micro text-concept-ink/50">secondary disabled</span>
          </div>
        </div>
      </Section>

      {/* ---- Navigation ---- */}
      <Section id="nav" eyebrow="Navigation" title="Header variants">
        <p className="mb-8 max-w-2xl text-body text-concept-ink/70">
          These are the <strong className="font-semibold text-concept-ink">real{" "}
          <code className="text-caption">SiteHeader</code> component</strong> —
          not mockups — rendered in each variant. Pick by whether the page opens
          with a full-bleed dark hero. Wrong pairing = an invisible white nav on a
          light page (the bug we&apos;re fixing).
          {/* transform on the stage wrappers contains SiteHeader's `fixed`
              positioning so it sits inside the preview instead of the viewport. */}
        </p>

        {/* Solid — the new variant for hero-less pages */}
        <p className="eyebrow mb-3">
          Solid · <code className="text-caption normal-case tracking-normal">variant=&quot;solid&quot;</code> · hero-less / light pages
        </p>
        <div
          className="relative h-72 overflow-hidden rounded-sm border border-concept-ink/15 bg-concept-sand"
          style={{ transform: "translateZ(0)" }}
        >
          <SiteHeader locale="es" dict={dict} variant="solid" />
          <div className="px-6 pt-28 lg:px-10">
            <p className="eyebrow">Nuestras Suites</p>
            <p className="mt-2 font-concept text-h2 font-medium text-concept-ocean">
              Despierta con el mar
            </p>
          </div>
        </div>
        <p className="mt-3 max-w-2xl text-body-sm text-concept-ink/70">
          Solid surface, ocean logo, dark text, hairline border from the top —
          readable on a light page immediately. Use on suites, policies, gallery.
        </p>

        {/* Overlay — the existing homepage header */}
        <p className="eyebrow mb-3 mt-12">
          Overlay · <code className="text-caption normal-case tracking-normal">variant=&quot;overlay&quot;</code> (default) · over a dark hero
        </p>
        <div
          className="relative h-96 overflow-hidden rounded-sm border border-concept-ink/15 bg-concept-ocean"
          style={{ transform: "translateZ(0)" }}
        >
          <SiteHeader locale="es" dict={dict} variant="overlay" />
          <div className="px-6 pt-48 lg:px-10">
            <p className="text-eyebrow uppercase tracking-[0.24em] text-concept-gold">Playa Hermosa</p>
            <p className="mt-2 font-concept text-h2 font-medium text-white">Frente al Pacífico</p>
          </div>
        </div>
        <p className="mt-3 max-w-2xl text-body-sm text-concept-ink/70">
          Transparent white nav that solidifies on scroll — for home, restaurant,
          about, event detail.{" "}
          <span className="text-concept-ink/55">
            Its transparent state appears at the very top of a page; since this
            preview is mid-scroll it may already show the solid state. See it live
            over the real hero on the{" "}
            <a href="/" className="text-concept-gold-muted underline">homepage</a>.
          </span>
        </p>
      </Section>

      {/* ---- Spacing ---- */}
      <Section id="spacing" eyebrow="Spacing" title="Section vertical rhythm">
        <p className="mb-8 max-w-2xl text-body text-concept-ink/70">
          Use the fluid tokens for top-level section padding instead of ad-hoc{" "}
          <code className="text-caption">py-16/20/24</code>. Bars below show the
          rendered top+bottom padding at the current viewport.
        </p>
        <div className="space-y-4">
          <div className="overflow-hidden rounded-sm border border-concept-ink/15 bg-white">
            <div className="bg-concept-gold/15 py-section">
              <p className="text-center font-mono text-body-sm text-concept-ink">
                py-section — 56 → 96px
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-sm border border-concept-ink/15 bg-white">
            <div className="bg-concept-gold/15 py-section-sm">
              <p className="text-center font-mono text-body-sm text-concept-ink">
                py-section-sm — 40 → 64px
              </p>
            </div>
          </div>
          {/* section-top: top-only padding that clears the fixed header */}
          <div className="overflow-hidden rounded-sm border border-concept-ink/15 bg-white">
            <div className="bg-concept-gold/15 pb-4 pt-section-top">
              <p className="text-center font-mono text-body-sm text-concept-ink">
                pt-section-top — 112 → 144px (first section on hero-less / solid-header pages)
              </p>
            </div>
          </div>
        </div>
        <p className="mt-6 text-body-sm text-concept-ink/70">
          Container: centered, 1.5rem gutter, 1280px max.
        </p>

        {/* Composed example */}
        <h3 className="mt-12 font-concept font-medium text-h3 text-concept-ocean">
          Putting it together
        </h3>
        <div className="mt-4 rounded-sm border border-concept-ink/15 bg-white">
          <section className="py-section">
            <div className="container">
              <p className="eyebrow">Nuestras Suites</p>
              <h2 className="mt-3 font-concept font-medium text-h1 text-concept-ocean">
                Despierta con el Pacífico
              </h2>
              <p className="mt-4 max-w-xl text-body text-concept-ink/80">
                Cada suite abre al mar con luz natural, materiales cálidos y el
                sonido constante de las olas de Playa Hermosa.
              </p>
              <button type="button" className={`mt-6 ${actionButtonVariants({ variant: "primary" })}`}>
                Reservar
              </button>
            </div>
          </section>
        </div>
      </Section>

      <footer className="border-t border-concept-ink/10 py-section-sm">
        <div className="container">
          <p className="text-caption text-concept-ink/50">
            Source of truth: <code>docs/design.md</code> · tokens in{" "}
            <code>app/globals.css</code> + <code>tailwind.config.ts</code>
          </p>
        </div>
      </footer>
    </div>
  );
}
