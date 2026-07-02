# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Server-rendered marketing site for **Hotel Terraza del Pacífico** (beachfront resort on Playa Hermosa, Jacó, Costa Rica), built by Sway Advertising. Next.js 15 App Router + React 19 + TypeScript + Tailwind. It replaces a client-rendered SPA — **SEO/discoverability is the whole point**, so keep pages server-rendered and metadata correct. The site is bilingual (Spanish-primary, English-secondary).

## Commands

```bash
npm run dev          # dev server on :3000
npm run dev:clean    # kill stray dev servers, wipe .next, restart (use when dev acts flaky)
npm run build        # production build — the real type-check + route validation gate
npm run start        # serve the production build
npm run lint         # next lint
```

There is **no test suite**. The build is the gate: `npm run build` type-checks everything and validates all routes/metadata. `scripts/verify-luxury-pages.mjs` exists but references pre-rename Spanish paths (`galeria`, `restaurante`, …) and is stale — don't rely on it.

Dev server can flake (stale `.next`, duplicate servers, Playwright writing into `.next`). When a route unexpectedly 404s/500s, prefer `npm run dev:clean` or verify against a real `npm run build && npm run start` rather than debugging the dev server. See the "dev server gotcha" memory.

## Architecture

### Routing & i18n (the load-bearing pattern)

- Every page lives under `app/[locale]/…` where `locale` is `es` | `en` (`lib/i18n.ts`). `es` is the default/primary locale (`es-CR`); `en` is `en-US`.
- `middleware.ts` redirects any locale-less path to `/es` or `/en` (English via `Accept-Language`). Its `matcher` deliberately excludes `_next`, `api`, `ingest`, `styleguide`, and already-localized paths — **if you add a top-level route that must skip locale prefixing, update the matcher.**
- `app/[locale]/layout.tsx` validates the locale (`notFound()` on bad values), loads the dictionary, and mounts header/footer, JSON-LD, analytics, WhatsApp button, and all env-gated pixels/widgets.
- URLs are **English slugs** (`/suites`, `/restaurant`, `/events`). Legacy Spanish segments (`/habitaciones`, `/restaurante`, …) 301 to the English ones via `next.config.mjs` `redirects()`. The English-slug rename was a deliberate SEO migration — treat those redirects as permanent contracts, don't casually rename slugs.

### Content lives in code, not a CMS

There is no runtime CMS. Page content is authored as typed modules and JSON under `content/`, imported directly by pages:

- **`lib/dictionaries.ts`** — the homepage + site-chrome (nav/footer) copy, as one big `en` object whose shape defines the `Dict` type; `es` must structurally match it (compile-enforced). This is the single source for shared/nav copy.
- **`content/*.ts`** — per-section typed content (suites, bars, restaurant, events, experiences, menus, galleries). Bilingual fields are usually `Record<Locale, …>` (see `content/info-pages.ts` `Localized<T>`). Prices are intentionally left blank until confirmed — don't fabricate them.
- **`content/*.json`** — raw captured copy from the old site, used as SEO metadata source and reference.
- Detail pages for events/experiences are **data-driven**: `content/events.ts` / `content/experiences.ts` feed `generateStaticParams` (`localizedParams`) and `byLocalizedSlug` from `content/info-pages.ts`, rendering through a shared `InfoDetailTemplate`. Their slugs differ per locale, so they are **not** in `staticRoutes` — they're handled separately in `app/sitemap.ts`.
- Blog (`lib/blog.ts`) is currently a static in-repo post, not Supabase-backed despite the README's aspiration.

When adding a page, the established pattern is: typed content module → `page.tsx` with `generateMetadata` calling `pageMetadata()` → render server components → emit JSON-LD via `<JsonLd>`.

### SEO is first-class (`lib/seo.ts`)

This file is central and opinionated — read it before touching metadata or structured data.

- `pageMetadata()` builds canonical URLs + `hreflang` alternates (`es-CR`/`en-US`/`x-default`) + OG/Twitter. Use it; don't hand-roll `Metadata`.
- `staticRoutes` drives `app/sitemap.ts` for same-path-in-both-locales routes; locale-varying slugs are appended from the content modules.
- JSON-LD builders (`organizationJsonLd`, `restaurantJsonLd`, `roomsJsonLd`/`hotelRoomJsonLd`, `barsItemListJsonLd`, `faqJsonLd`, `breadcrumbJsonLd`) emit only **verifiable** facts. **Never fabricate structured data** — no invented prices, room counts, or `aggregateRating` (the last was deliberately removed; on-page reviews are still placeholders). Fabricated schema is a Google penalty risk and the code comments say so repeatedly.
- **NAP consistency matters**: phone/address must match the Google Business Profile exactly. The main hotel line is `+506 2643 3222`; the WhatsApp booking line (`+506 8431 9953`) is separate and only appears in CTAs/footer, not in schema `telephone`.

### Design system

Brand tokens are a single source of truth in `app/globals.css` (CSS vars) aliased by `tailwind.config.ts`. Build with the semantic tokens, **not** ad-hoc `[#hex]` values:

- Colors: `concept-*` palette (ocean/gold/sand/ink + named auxiliaries like `concept-border`, `concept-ink-muted`), plus `on-dark`/`on-dark-muted` for text on dark/photo surfaces. Brand is **ocean blue + gold — no green/teal.**
- Type: fluid `clamp()` scale via `text-display/h1/h2/h3/h4/body*/eyebrow` (size + line-height only on headings so they compose with either font).
- Spacing: `py-section` / `section-sm` / `section-top` for vertical rhythm (`section-top` clears the fixed header on hero-less pages).
- Fonts: Cormorant (`font-concept`, serif display), Manrope (`font-display`), Inter (`font-sans`), wired in `app/layout.tsx`.
- Use `cn()` from `lib/utils.ts` for class merging. `/styleguide` is a standalone internal token reference (outside the `[locale]` tree).

See `docs/design.md` for rationale.

### Integrations (all env-gated, fail-safe)

Every analytics/widget integration is gated on its `NEXT_PUBLIC_*` var — a blank value silently disables it, no errors. Configure via `.env.local` (copy `.env.example`); restart dev after changes.

- GA4 (`NEXT_PUBLIC_GA_ID`) + GTM (`NEXT_PUBLIC_GTM_ID`): **double-count risk** — if GTM already has a GA4 config tag, leave `NEXT_PUBLIC_GA_ID` blank.
- Meta Pixel, Sojern travel pixel, Elfsight widgets (reviews/instagram/about) — all off until their IDs are set.
- Booking CTAs route to the Orbe booking engine (`bookingHref` in `lib/site.ts`, override via `NEXT_PUBLIC_BOOKING_URL`).
- Contact/inquiry forms (`app/api/contact`, `app/api/inquiry`) send via **Resend** and capture to PostHog server-side. Both have a honeypot (`company` field) and **fall back silently to WhatsApp/email if `RESEND_API_KEY` is unset** — never surface a hard error to guests. PostHog is proxied through `/ingest/*` rewrites (`next.config.mjs`).

See `INTEGRATIONS.md` and `docs/embeds-and-integrations.md`.

## Conventions & gotchas

- Path alias `@/*` → repo root (`tsconfig.json`). `strict` TS is on.
- **`terraza-web-creator-main/`** is the legacy imported Vite site kept for reference only — it's excluded from `tsconfig`/git and must not be imported or built.
- Progressive enhancement: `app/layout.tsx` adds a `js` class pre-paint so scroll-reveal content stays visible for no-JS clients and scrapers (`suppressHydrationWarning` is intentional there). Don't break this — it's for crawler access.
- Images are static in `public/images/` (restructured into `suites/`/`experiences/`/`resort/`/`brand/` + `_archive`; multiple ref namespaces exist). `next build` cannot catch image 404s, so verify image paths against disk when moving files. `remotePatterns` is empty — external image hosts won't load without adding them.
- `docs/` holds the reference material: old-site capture, replication blueprint, SEO/local-SEO plans, design audit, photo mapping. Consult before redesigning a page or reworking copy.
- `.design-sync/`, `.ds-sync/`, `ds-bundle/` are the claude.ai/design sync workspace (gitignored, generated) — not part of the app.
