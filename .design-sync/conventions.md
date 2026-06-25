# Terraza del Pacífico — design system conventions

A beachfront-resort brand on the Pacific coast of Costa Rica. The look is calm
and warm: deep **ocean blue** + **gold** on a **sand** background, generous
whitespace, serif display headings. This is a **Tailwind preset** design system —
you style with the utility classes below, not with CSS files or styled props.

## Setup

No provider or wrapper is required. Every class below resolves from the bundled
`styles.css` (tokens + utilities + fonts are all in its `@import` closure).
Fonts load from Google Fonts: **Inter** (body), **Manrope** (headings/UI),
**Cormorant** (serif display). Build inside a `<div className="container">`
(centered, 1.5rem gutter, 1280px max) and pad top-level sections with
`py-section`.

## Color tokens

Brand palette — use as `bg-*`, `text-*`, or `border-*`. **No green/teal anywhere.**

| Token | Hex | Use |
|---|---|---|
| `concept-ocean` | #103a4d | Headings, dark surfaces, primary text |
| `concept-gold` | #c9a763 | Accents, primary CTAs, fine rules |
| `concept-gold-muted` | #876528 | Eyebrows, small labels, hairlines |
| `concept-sand` | #faf6ef | Page / section background |
| `concept-sand-muted` | #f5efe5 | Alternating panels |
| `concept-ink` | #2b2620 | Body text on light |
| `concept-ink-strong` | #1a1611 | Text on gold buttons |
| `concept-mist` / `concept-cream` | #bcd0d8 / #f3ead6 | Muted text / labels on ocean |
| `border-concept-border` | #ece5d8 | Warm hairline borders, dividers |

On **ocean / photo** surfaces, use `text-on-dark` (100%), `text-on-dark-muted`
(72%), `text-on-dark-subtle` (55%) instead of `text-white/NN`.

## Typography

Fluid type scale (each token carries size + line-height; clamp-responsive, no
`md:` needed):

`text-display` (hero) · `text-h1` · `text-h2` · `text-h3` · `text-h4` ·
`text-body-lg` · `text-body` · `text-body-sm` · `text-caption` · `text-micro`.

Fonts: **`font-concept`** = Cormorant serif (display headings — the signature
brand look) · **`font-display`** = Manrope (clean modern headings/UI) ·
**`font-sans`** = Inter (body, default). Headings default to Manrope; opt into
the Cormorant serif look with `font-concept` on the heading.

**`.eyebrow`** is a ready-made utility — small uppercase gold-muted label that
sits above section titles (`<p className="eyebrow">Nuestras Suites</p>`).

## Buttons

There is **no `<Button>` component** — buttons are native `<button>` / `<a>` /
`next/link` elements with the className from **`actionButtonVariants(opts)`**
(imported from the bundle). Never hand-roll button classes.

```tsx
import { actionButtonVariants } from "terraza-del-pacifico";

<button className={actionButtonVariants({ variant: "primary" })}>Book your stay</button>
<a className={actionButtonVariants({ variant: "secondary", surface: "dark" })}>Explore the menu</a>
```

Options: `variant` = `primary` (gold solid) | `secondary` (outline) |
`tertiary` (text link + arrow); `surface` = `light` | `dark` (the surface it
sits on — drives secondary/tertiary colors); `size` = `sm` | `default` | `lg`.

## Spacing

`py-section` (56→96px) for standard section rhythm; `py-section-sm` (40→64px)
for tighter; `pt-section-top` for the first section on a header-less page.

## Where the truth lives

Read `styles.css` for the full token/utility set, and `SectionHeading.d.ts` /
`SectionHeading.prompt.md` for the one packaged component (eyebrow + title +
subtitle, with `align` and `tone`).

## Idiomatic example

```tsx
import { SectionHeading } from "terraza-del-pacifico";
import { actionButtonVariants } from "terraza-del-pacifico";

<section className="bg-concept-sand py-section">
  <div className="container">
    <SectionHeading
      eyebrow="Nuestras Suites"
      title="Despierta con el Pacífico"
      subtitle="Cada suite abre al mar con luz natural y el sonido de las olas."
    />
    <div className="mt-8 text-center">
      <button className={actionButtonVariants({ variant: "primary" })}>Reservar</button>
    </div>
  </div>
</section>
```
