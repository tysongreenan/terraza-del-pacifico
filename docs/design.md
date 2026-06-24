# Design System — Colors, Type & Spacing

Single source of truth for the visual system. Tokens live in
`app/globals.css` (CSS vars) and `tailwind.config.ts` (Tailwind theme).
**Build new pages with these tokens — avoid arbitrary `[...]` values.**

**Direction:** Barefoot luxury. Cormorant serif display + clean Inter body,
a deep ocean blue, warm gold, and sand. Calm, photography-forward.

---

## Colors

Every brand color is defined **once** as an HSL CSS var in `app/globals.css`,
then exposed through Tailwind. The `concept-*` palette and the shadcn semantic
tokens both alias the same vars, so there is no duplication.

| Token (Tailwind) | CSS var | Value | Use |
|------------------|---------|-------|-----|
| `concept-ocean` / `primary` | `--ocean` / `--primary` | `#103a4d` deep ocean blue | Headings, dark surfaces, primary buttons |
| `concept-gold` / `accent` | `--gold` / `--accent` | `#c9a763` gold | Accents, CTAs, fine rules |
| `concept-gold-muted` | `--gold-muted` | `#876528` | Eyebrows, small labels, hairlines |
| `concept-sand` / `background` | `--sand` / `--background` | `#faf6ef` warm off-white | Page / section surfaces |
| `concept-sand-muted` | `--sand-muted` | `#f5efe5` | Alternating panels |
| `concept-ink` / `foreground` | `--ink` | `#2b2620` warm near-black | Body text on light |

> **No green-teal anywhere.** The brand cool color is the ocean blue `#103a4d`.
> The only teal allowed is the wave glyph baked into the logo image. The
> WhatsApp button green (`#1f7a4d`) is intentional (WhatsApp's brand).

### Text on dark / ocean surfaces

Use the semantic tokens instead of new `text-white/NN` one-offs:

| Token | Alpha | Use |
|-------|-------|-----|
| `text-on-dark` | 100% | Primary text on ocean/photo backgrounds |
| `text-on-dark-muted` | 72% | Secondary text, captions on dark |
| `text-on-dark-subtle` | 55% | De-emphasized labels on dark |

Borders/overlays on dark still use `border-white/NN` · `bg-white/NN` (those
opacities mean surface tint, not text).

---

## Type scale

Fonts (loaded via `next/font/google` in `app/layout.tsx`):

| Role | Font | CSS var | Tailwind |
|------|------|---------|----------|
| **Display / headings (serif)** | **Cormorant** | `--font-cormorant` | `font-concept` |
| **Headings (sans, alt)** | **Manrope** | `--font-manrope` | `font-display` (and `font-serif`*) |
| **Body / UI** | **Inter** | `--font-inter` | `font-sans` (default) |

\* `font-serif` is aliased to Manrope for legacy headings. Prefer `font-concept`
for the luxury serif look, `font-sans` for body.

**Sizes are fluid** (`clamp()`), so they scale with the viewport — **no `md:`
size variants needed.** Each token carries only **size + line-height**, so it
composes with any font weight/tracking (the serif and sans looks keep their own).

| Token | Size (mobile → desktop) | Typical use |
|-------|-------------------------|-------------|
| `text-display` | 44 → 70px | Hero titles |
| `text-h1` | 34 → 46px | Section titles |
| `text-h2` | 30 → 38px | Sub-section titles |
| `text-h3` | 24 → 28px | Card titles |
| `text-h4` | 22px | Small headings |
| `text-body-lg` | 18px | Lead paragraphs |
| `text-body` | 16px | Body (default) |
| `text-body-sm` | 15px | Dense body |
| `text-caption` | 13px | Captions, meta |
| `text-micro` | 11px | Tiny labels |
| `text-eyebrow` | 12px, 0.24em, 600 | Overline/eyebrow (full style) |

There is also an `.eyebrow` utility (`text-eyebrow uppercase text-concept-gold-muted`)
for the standard gold overline.

**Conventions:** serif titles → `font-concept font-medium` + a `text-h*`/`text-display`
token. Body → nothing to do (`font-sans` is the `<body>` default). Real bold weights
exist on all three fonts — use `font-semibold`/`font-bold` freely.

---

## Spacing

Layout uses Tailwind's default spacing scale. For **top-level section vertical
rhythm**, use the fluid tokens instead of ad-hoc `py-16/20/24/28`:

| Token | Size (mobile → desktop) | Use |
|-------|-------------------------|-----|
| `py-section` | 56 → 96px | Standard section padding |
| `py-section-sm` | 40 → 64px | Tighter sections (lists, info hubs) |

Container is centered, `1.5rem` gutter, `1280px` max (`tailwind.config.ts`).

---

## How to build a new section

```tsx
<section className="py-section">
  <div className="container">
    <p className="eyebrow">Nuestras Suites</p>
    <h2 className="mt-3 font-concept font-medium text-h1 text-concept-ocean">
      Despierta con el Pacífico
    </h2>
    <p className="mt-4 text-body text-concept-ink/80">…</p>
  </div>
</section>
```

On an ocean/photo background, swap text colors for `text-on-dark` /
`text-on-dark-muted` and keep the same type + spacing tokens.
