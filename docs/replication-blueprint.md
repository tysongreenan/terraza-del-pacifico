# TDP — Site Replication Blueprint

**Hotel Terraza del Pacífico — terrazadelpacifico.com**
Internal reference for rebuilding the site. Captured 2026-06-22 from the live site (no repo access yet).

> Purpose: if we get the source repo, this verifies it. If we don't, this is what we rebuild from.

---

## 1. Confirmed tech stack

Reverse-engineered from the live bundles, CSS, and headers.

| Layer | What it is | How we know |
|---|---|---|
| Framework | **React** (SPA) | `vendor-react` chunk, `react` in markup |
| Build tool | **Vite** | `/assets/index-[hash].js` + code-split `vendor-*` chunks |
| Styling | **Tailwind CSS** | `--tw-*` vars, HSL token format |
| Components | **shadcn/ui + Radix UI** | full shadcn token set + `--radix-*` vars |
| Backend | Historical captured site used Supabase | `vendor-supabase` chunk, calls to `supabase.co` in the old live bundle |
| Icons | icon set (likely lucide-react) | `vendor-icons` chunk |
| Fonts | **Playfair Display** (headings), **Montserrat** (body) | CSS `font-family` |
| Hosting | **LiteSpeed** (cPanel-style shared hosting) | `server: LiteSpeed` header |
| Deploy | static `dist/` uploaded (no git pipeline detected) | static file serving, SPA fallback on all unknown URLs |

**Likely origin: Lovable** (or Bolt). Vite + React + shadcn/ui + Supabase matched Lovable's default stack in the old captured site. The runtime builder badge was stripped on export, so confirm via `package.json` (`lovable-tagger` dev dependency = Lovable).

**Good news for replication:** shadcn/ui is open-source and the design tokens are all exposed below, so this is highly reproducible even without the repo.

## 2. Page inventory (from sitemap.xml — 17 pages)

URLs are Spanish (primary language es-CR). The site claims `en_US` and `it_IT` alternates but those need verification on render.

| URL | Page |
|---|---|
| `/` | Home |
| `/habitaciones` | Rooms (index) |
| `/habitaciones/superior` | Room — Superior |
| `/habitaciones/estandar` | Room — Standard |
| `/habitaciones/junior-suite` | Room — Junior Suite |
| `/habitaciones/villas` | Room — Villas |
| `/restaurante` | Restaurant |
| `/eventos` | Events (index) |
| `/eventos/bodas` | Events — Weddings |
| `/eventos/otros` | Events — Other |
| `/eventos/surf-nights` | Events — Surf Nights |
| `/experiencias` | Experiences |
| `/galeria` | Gallery |
| `/sobre-nosotros` | About Us |
| `/politicas` | Policies |
| `/blog` | Blog (index) |
| `/blog/newsletter-febrero` | Blog post — Feb newsletter |

## 3. Design system / brand tokens

Colors in shadcn HSL format (`H S% L%`). Two themes present (light + dark).

**Brand palette (custom tokens beyond shadcn defaults):**
- `--gold: 43 53% 54%` — primary accent (the warm gold in CTAs/headings)
- `--ocean: 174 65% 40%` / `--ocean-light: 174 55% 65%` — teal/ocean
- `--earth: 30 35% 35%` — warm brown
- `--sand: 40 35% 85%` — light neutral

**Light theme:** background `45 30% 98%` (warm off-white), foreground `30 25% 20%`, primary `175 37% 16%` (deep teal), accent `43 53% 54%` (gold).
**Dark theme:** background `30 25% 8%`, foreground `40 20% 92%`, primary `153 84% 35%` (green).

**Typography:** Playfair Display (serif) for headings, Montserrat (sans) for body.
**Radius:** `--radius: .5rem`.

## 4. Assets (named so far — full pull pending)

`Logo-nuevo.png`, `baby-turtle.jpg`, `live-music.jpg`, `pool-aerial-night.jpg`, `restaurant-view.jpg`, `room-king-bed.jpg`, `room-toucan-art.jpg`, `room-two-beds.jpg`, `villa-living-room.jpg`, `wedding-ceremony-night.jpg`, `whales-aerial.jpg`, `yoga-class.jpg`.

> These are compressed web versions. Still request the **full-quality originals** (esp. drone/aerial footage) from the client.

## 5. Integrations / third-party

| Service | Status | Action |
|---|---|---|
| Blog data | new build uses local files | add/edit blog files in the repo |
| **Google Analytics 4** | live — `G-0SW8NFFFEV` | get access |
| **Google Tag Manager** | live — `GTM-KRJHXP6D` | get access |
| **Google Maps embed** | live but templated timestamp (sloppy) | rebuild clean |
| **Facebook Pixel** | placeholder only — `YOUR_PIXEL_ID`, never configured | configure or drop |
| **SiteMinder** | not detected on current site | new build — embed booking engine |

## 6. SEO state (the core problem)

- Client-side React SPA — body content rendered in JS, so search engines and AI tools get very little.
- A meta-tag layer is injected (`data-seo` OG/Twitter tags, multilingual `og:locale`), but that's surface only; the actual content is not in the initial HTML.
- robots.txt and sitemap.xml exist and respond 200.
- This is exactly why a rebuild on a server-rendered, SEO-native stack is the recommendation, not on-page tweaks.

## 7. Rendered capture — DONE (2026-06-22)

Full rendered crawl complete. The SPA hides content from plain HTML, so this was captured via Playwright. Artifacts:

- **17/17 pages rendered** — full-page screenshots in `capture/screenshots/<slug>.png`
- **Per-page content** in `capture/content/<slug>.json` (title, meta, H1, full heading outline, all image srcs, button/link labels, complete body text)
- **Readable digest** in `TDP - Rendered Site Capture_062226.md` (one section per page, heading outlines + CTAs)
- **75 image assets** downloaded at served resolution into `capture/assets/` (~27MB)

**Content volume per page (rendered words):** home 479 · habitaciones index 280 · 4 room pages ~265-363 each · restaurante 813 · eventos 438 · bodas 458 · otros 278 · surf-nights 432 · experiencias 324 · galeria 124 (34 imgs) · sobre-nosotros 672 · politicas 160 · blog 93 · blog post 951.

### Historical captured backend

- **Project ref:** `bnlqqbfrapzgrphunwas.supabase.co`
- **Live table seen:** `blog_posts` — columns `id, title, slug, excerpt, cover_image_url, published_at, language, status, translation_group_id`. Query filters `status=published` and `language in (en, es)`.
- The new Next.js rebuild does not depend on this backend. Blog content is file-based in this repo.

> Takeover implication: no Supabase access is required for launch unless the client later asks for a CMS.

## 8. Rebuild recommendation

Two viable paths:

1. **Rebuild on the same modern stack, done right** — Next.js (or Astro) + Tailwind, server-rendered for SEO. Reuses the existing design tokens and component library, so it looks the same but is actually discoverable. Fastest path that keeps the look.
2. **Rebuild on Webflow/WordPress** — matches Sway's usual stack and is easier for the client to maintain, but loses the existing React components (more design rework).

Either way: bilingual EN/ES with hreflang, SiteMinder booking engine embedded, Hotel + LocalBusiness schema, GA4/GTM carried over, 301 map from the Spanish URLs.
