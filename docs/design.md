# Design System — Typography & Spacing

Source of truth for fonts and type-level spacing.

**Direction:** Clean modern sans. Minimal, contemporary, highly legible.

**Scope:** Typography and the spacing that lives inside type (line-height,
letter-spacing) only. All existing color tokens in `app/globals.css` /
`tailwind.config.ts` stay untouched (gold, ocean, earth, sand, etc.).

---

## Fonts

Both are Google Fonts (variable — all weights available), loaded via
`next/font/google` in `app/[locale]/layout.tsx` and exposed as CSS variables.

| Role | Font | CSS var | Tailwind | Notes |
|------|------|---------|----------|-------|
| **Display / headings** | **Manrope** | `--font-manrope` | `font-display` (and `font-serif`*) | Modern semi-geometric sans. A touch of character so titles aren't flat. |
| **Body / UI** | **Inter** | `--font-inter` | `font-sans` (default) | The standard for clean, legible UI/body text. |

\* `font-serif` is **aliased to Manrope** so the ~9 existing `font-serif`
headings keep working with zero edits. **Prefer `font-display` in new code.**

> Both fonts have real bold weights, so `font-bold` / `font-semibold` on
> headings render genuine weights — no faux-bold. Use weight freely for emphasis.

---

## Type scale & rhythm

| Element | Suggested size (mobile → desktop) | Line-height | Weight | Letter-spacing |
|---------|-----------------------------------|-------------|--------|----------------|
| H1 | 36px → 56px | 1.2 | 700 | -0.02em |
| H2 | 28px → 40px | 1.2 | 700 | -0.02em |
| H3 | 22px → 28px | 1.2 | 600 | -0.02em |
| H4 | 20px | 1.3 | 600 | -0.02em |
| Body | 16px | 1.6 | 400 | 0 |
| Small / captions | 14px | 1.5 | 400 | 0 |

Key rhythm tokens (set globally in `app/globals.css`):
- **Body `line-height: 1.6`** (Inter).
- **Headings `line-height: 1.2`, `letter-spacing: -0.02em`** (Manrope) — the
  tight negative tracking is the hallmark of the clean modern look.

> **Layout spacing is not encoded here.** Keep the existing section/layout spacing.

---

## The statement treatment: `.display-title`

Opt-in utility for hero / big section titles — bolder, tighter than base headings.

```html
<h2 class="display-title text-4xl text-primary">Nuestras Habitaciones</h2>
```

Defined in `app/globals.css`:

```css
.display-title {
  font-family: var(--font-manrope), sans-serif;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
}
```

Base `h1–h4` already get Manrope + tight tracking; add `.display-title` only
when you want the extra-bold hero statement.

---

## How to build pages with this

- **Body text** → nothing to do; `font-sans` (Inter) is the `<body>` default.
- **Headings** → already Manrope. For hero/section titles add `.display-title`.
- **Emphasis** → real `font-semibold` / `font-bold` are available on both fonts.
- **Buttons / nav** → `font-display` (Manrope) at `font-medium`/`font-semibold`
  reads clean and modern.
- **Colors** → use existing tokens only.
