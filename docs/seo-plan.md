# SEO Plan: Hotel Terraza del Pacifico

This plan is based on the current site copy in `content/*.json`, the bilingual Next.js routes under `app/[locale]`, and Google's current Search Central guidance for crawlability, multilingual pages, structured data, images, and local business information.

## Objectives

- Rank for branded searches: `Hotel Terraza del Pacifico`, `Terraza del Pacifico Playa Hermosa`, `Vivace Beachfront`.
- Rank for high-intent local hotel searches around Playa Hermosa and Jaco: beachfront hotel, oceanfront rooms, family hotel, wedding venue, restaurant, surf events, and Costa Rica Pacific experiences.
- Convert organic visits into direct bookings, WhatsApp leads, event inquiries, restaurant reservations, and newsletter/blog engagement.
- Build topical authority around Playa Hermosa travel, beachfront events, nature experiences, surf, and family stays.

## Current SEO Strengths

- The site is server-rendered with Next.js, so core page copy is available in HTML.
- Most pages already have strong intent-specific copy: rooms, restaurant, weddings, surf nights, experiences, and about.
- The copy has useful local signals: Playa Hermosa, Puntarenas, Costa Rica, Pacific coast, 90 minutes from San Jose, direct beach access.
- The site has bilingual routing (`/es`, `/en`) and layout-level hreflang metadata.
- The resort has strong differentiators that are search-friendly: beachfront location, LED pool, Chef Luigi/Vivace Beachfront, weddings, surf nights, whale watching, turtle nesting, free yoga, live music.

## Priority Fixes Before Launch

1. Add `app/sitemap.ts`.
   - Include every `/es` and `/en` route.
   - Include alternate language links for each route pair.
   - Include local file-based blog posts.

2. Add `app/robots.ts`.
   - Allow crawlers.
   - Point to `https://terrazadelpacifico.com/sitemap.xml`.
   - Block only private or non-public paths if any are added later.

3. Use content JSON metadata consistently.
   - The `content/*.json` files contain richer `title` and `desc` fields than several route files currently expose.
   - Create a shared metadata helper so each static page uses the corresponding JSON `title`, `desc`, canonical URL, Open Graph image, and locale alternates.

4. Fix localized metadata and routing gaps.
   - Blog posts should come from local content files and be included in the sitemap.
   - Blog post metadata must keep locale-aware canonical alternates.
   - Internal blog links should include the active locale, for example `/es/blog/[slug]` or `/en/blog/[slug]`.

5. Remove or replace placeholder content.
   - `content/blog-newsletter-febrero.json` has `title: "Test"` and `url: /blog/test`; do not index this as-is.
   - Homepage testimonials are marked as sample reviews; replace with verified reviews before launch or remove from visible copy and structured data.

6. Add structured data.
   - Sitewide: `Hotel`, `Organization`, `WebSite`, and `BreadcrumbList`.
   - Restaurant page: `Restaurant` for Vivace Beachfront.
   - Event pages: `Event` only for dated events; otherwise use page-level breadcrumb/schema without inventing dates.
   - Blog pages: `Article` once full post bodies are rendered.
   - Keep schema facts aligned with visible page copy and real business details.

7. Improve image SEO and performance.
   - Convert visible `<img>` usage in `PageScaffold` to `next/image` where practical.
   - Add descriptive alt text tied to page intent, not generic labels like `view 1`.
   - Use compressed WebP/AVIF derivatives for large JPEG galleries.
   - Prioritize the hero image and avoid shipping oversized gallery images on initial load.

## Page Keyword Map

| Page | Primary search intent | Main keyword targets | Copy additions to consider |
| --- | --- | --- | --- |
| `/es`, `/en` | Resort discovery and direct booking | beachfront hotel Playa Hermosa Costa Rica; oceanfront hotel near Jaco; Hotel Terraza del Pacifico | Add concise booking benefits, distance from Jaco/San Jose, and a stronger "direct beach access" statement above the fold. |
| `/habitaciones` | Accommodation comparison | rooms in Playa Hermosa Costa Rica; oceanfront rooms Playa Hermosa; family rooms near Jaco | Add room comparison FAQs and internal links to each room type. |
| `/habitaciones/superior` | Ocean/pool-view room booking | superior room Playa Hermosa; hotel room with ocean view Costa Rica | Add bed setup, view details, accessibility/parking proximity, and direct booking CTA. |
| `/habitaciones/estandar` | Value/family accommodation | standard room Playa Hermosa; family hotel room Costa Rica | Add who it is best for, garden-view language, and noise/quiet positioning. |
| `/habitaciones/junior-suite` | Couples/romantic stays | junior suite Playa Hermosa; romantic hotel Costa Rica Pacific | Add couples, honeymoon, sunset, and king-bed phrasing. |
| `/habitaciones/villas` | Families/groups | villas Playa Hermosa Costa Rica; family villa near Jaco; hotel villa with kitchen | Add kitchen/living room details, group capacity, longer-stay use cases. |
| `/restaurante` | Restaurant discovery | beachfront restaurant Playa Hermosa; Mediterranean restaurant Playa Hermosa; Vivace Beachfront | Add menu indexable text, hours, reservation CTA, dietary notes, and chef credibility. |
| `/eventos` | Event venue discovery | beachfront event venue Costa Rica; Playa Hermosa events; private events near Jaco | Add event capacity, venue options, catering, AV, and inquiry CTA. |
| `/eventos/bodas` | Wedding leads | beach wedding Costa Rica; Playa Hermosa wedding venue; beachfront wedding hotel Costa Rica | Add ceremony/reception packages, guest capacity, photo spots, planner support, FAQs. |
| `/eventos/surf-nights` | Surf/event niche | night surfing Playa Hermosa; surf events Costa Rica; Playa Hermosa surf competition | Add schedule/archive, safety details, lighting differentiator, and photos/videos with captions. |
| `/eventos/otros` | Corporate/private events | corporate events Costa Rica beach; private dinner Playa Hermosa; family celebration venue | Add examples of event types, group sizes, food packages, and inquiry form. |
| `/experiencias` | Things to do | things to do Playa Hermosa Costa Rica; whale watching Playa Hermosa; turtle nesting Costa Rica; yoga Playa Hermosa | Split future detail pages for whale watching, turtle nesting, yoga, and live music if search volume supports it. |
| `/galeria` | Visual validation | Playa Hermosa hotel photos; Terraza del Pacifico gallery | Organize gallery by room, restaurant, wedding, pool, beach, and experiences with crawlable captions. |
| `/sobre-nosotros` | Trust and brand | Hotel Terraza del Pacifico history; Playa Hermosa beachfront resort | Add verified business details, awards/press if available, staff/team credibility, and review snippets. |
| `/politicas` | Support/trust | hotel policies Terraza del Pacifico; pet friendly hotel Playa Hermosa | Add clear pet policy, cancellation terms, check-in/out, privacy, accessibility, and payment info. |
| `/blog` | Topical authority | Playa Hermosa travel guide; Costa Rica Pacific travel; hotel newsletter | Replace empty state with seeded posts before launch. |

## Content Expansion Plan

### Phase 1: Launch Content

- Publish one polished page per current route in both Spanish and English.
- Add 5-8 FAQs to the highest-intent pages: home, rooms, weddings, restaurant, experiences.
- Add crawlable restaurant menu text instead of relying only on images/PDFs.
- Replace sample reviews with verified Google/Tripadvisor reviews, or remove review-like claims until they are verified.
- Add a short "near Jaco" section where appropriate, since Playa Hermosa searches often overlap with Jaco travel planning.

### Phase 2: Blog Cluster

Publish articles that support the commercial pages and internally link back to them:

- Best Things to Do in Playa Hermosa, Costa Rica
- Where to Stay in Playa Hermosa Near Jaco
- Playa Hermosa Whale Watching Season Guide
- Sea Turtle Nesting in Playa Hermosa: What Guests Should Know
- Planning a Beach Wedding in Costa Rica
- A Guide to Surf Nights in Playa Hermosa
- Family-Friendly Beachfront Stays on Costa Rica's Pacific Coast
- Where to Eat in Playa Hermosa: Vivace Beachfront and Local Favorites

### Phase 3: Authority and Local Signals

- Build location-specific landing sections for Playa Hermosa, Jaco proximity, San Jose airport access, and Puntarenas/Pacific coast travel.
- Add event recaps with photos for surf nights, weddings, live music, and seasonal activities.
- Add a press/media page if the resort has coverage, awards, partnerships, conservation work, or chef features.

## Technical Implementation Checklist

- `app/sitemap.ts` with static routes, locale alternates, and future blog URLs.
- `app/robots.ts` with sitemap link.
- Shared metadata helper for static content pages.
- Canonical URLs should include locale prefixes consistently.
- Add `openGraph` and `twitter` metadata per page.
- Add JSON-LD components for `Hotel`, `Restaurant`, `BreadcrumbList`, `Article`, and real `FAQPage` where visible FAQs exist.
- Use one H1 per page and preserve logical H2/H3 structure.
- Include active-locale internal links across nav, cards, CTAs, and blog links.
- Add a custom 404 page with links to rooms, restaurant, events, and WhatsApp.
- Verify mobile rendering because Google primarily indexes mobile content.
- Run Lighthouse/PageSpeed before launch and compress large media assets.

## Local SEO Checklist

- Ensure name, address, phone, email, WhatsApp, map URL, and opening/check-in details are consistent across website, Google Business Profile, social profiles, booking platforms, and directories.
- Add an embedded map or clear map link on contact/location sections.
- Add real business hours for the hotel, restaurant, bars, pool, yoga, and events where applicable.
- Encourage post-stay review collection with direct review links.
- Add local backlinks from tourism directories, wedding vendors, surf/community partners, restaurants, travel blogs, and conservation partners.

## Measurement Plan

- Google Search Console: submit sitemap, monitor indexing, coverage, international targeting/hreflang issues, and queries by page.
- GA4: track booking clicks, WhatsApp clicks, restaurant/menu clicks, event inquiry clicks, blog engagement, and language switching.
- Monthly review:
  - Pages indexed.
  - Organic clicks/impressions by landing page.
  - Queries that are close to page one.
  - Conversion rate from organic traffic.
  - Technical issues from Search Console.

## 30-Day Action Plan

1. Week 1: sitemap, robots, metadata helper, canonicals, locale-safe links.
2. Week 1: remove test blog content and sample testimonials or replace with verified content.
3. Week 2: add structured data and breadcrumbs.
4. Week 2: optimize image alt text, dimensions, and compression.
5. Week 3: add FAQs and copy expansions to rooms, weddings, restaurant, and experiences.
6. Week 4: publish 3-4 launch blog posts and submit sitemap in Search Console.

## Official References

- Google SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Essentials: https://developers.google.com/search/docs/essentials
- Sitemaps: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Localized pages and hreflang: https://developers.google.com/search/docs/specialty/international/localized-versions
- Structured data intro: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Local business structured data: https://developers.google.com/search/docs/appearance/structured-data/local-business
- Mobile-first indexing: https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing
