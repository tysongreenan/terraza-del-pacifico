# Hotel Terraza del Pacífico — Website Rebuild

Next.js rebuild of [terrazadelpacifico.com](https://terrazadelpacifico.com), built by Sway Advertising. Server-rendered for SEO (the current site is a client-rendered SPA, which is the discoverability problem we're fixing).

## Stack

- **Next.js 15** (App Router, server-rendered) + **React 19** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** conventions (matches the old site's component system)
- **Supabase** backend (blog content; project ref `bnlqqbfrapzgrphunwas`)
- Fonts: **Playfair Display** (headings) + **Montserrat** (body)

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the keys from the handover
npm run dev                  # http://localhost:3000
```

You need the **`.env`** values from whoever built the current site (Supabase anon key especially) — the blog won't load without them. Everything else runs out of the box.

## What's already set up

- **Design system** — brand tokens (gold / ocean / earth / sand), light + dark themes, and fonts reverse-engineered from the live site, in `app/globals.css` and `tailwind.config.ts`.
- **All 17 routes scaffolded** under `app/`, matching the existing Spanish URLs (`/habitaciones`, `/restaurante`, `/eventos/...`, etc.). Each page renders the **captured copy from the old site** as a starting reference (see `components/page-scaffold.tsx`) — redesign from there.
- **Blog wired to Supabase** — `app/blog` lists `blog_posts` (status=published, es); `app/blog/[slug]` renders a post. Multilingual (es/en) via the `language` + `translation_group_id` columns.
- **Header + footer** with the real nav.
- **75 images** from the old site in `public/images/`.

## Reference material (in `docs/`)

- `replication-blueprint.md` — full stack analysis, design tokens, integrations, page inventory.
- `rendered-capture.md` — per-page content digest (headings, copy, CTAs).
- `reference-screenshots/` — full-page screenshot of every page of the old site.
- `../content/*.json` — raw per-page capture (full text, images, button labels).

## Still to do

- [ ] Get the original repo + `.env` (Supabase keys, etc.) and confirm the real stack (`package.json` → `lovable-tagger` = Lovable).
- [ ] Embed the **SiteMinder** booking engine (the "Reserva tu Escape" buttons are placeholders).
- [ ] Design each page properly (the scaffold just dumps captured copy).
- [ ] Bilingual EN/ES routing + hreflang.
- [ ] Hotel + LocalBusiness schema, sitemap, robots.
- [ ] Carry over GA4 (`G-0SW8NFFFEV`) + GTM (`GTM-KRJHXP6D`).
- [ ] Get full-quality original photos/video (the `public/images/` set is compressed web versions).
- [ ] 301 map from old URLs at launch.

## Note on the design tokens

The tokens were reverse-engineered from the compiled CSS of the live site, so light/dark assignments are best-effort. Verify against the source repo once we have it.
