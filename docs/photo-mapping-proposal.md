# Photo Mapping Proposal — Hotel Terraza del Pacífico

Status: ✅ APPLIED (owner approved "apply everything"). All swaps below were applied across
~14 source files; chosen Expedia avif/webp photos were copied to clean `/images/exp-*` names
(see `scripts`/scratchpad copy step). The two worst over-reused stock photos
(`pool-aerial-day-BveHvOiS.jpg` 24×, `g-family-beach-DHJPEGnp.jpg` 12×) are now at 0 uses in
live source. Verified: `tsc --noEmit` clean, all 184 live image refs resolve on disk,
`next build` succeeds for all routes. This document is kept as the record of what changed.

---

## 1. Summary

### The over-reuse problem

A handful of old scraped/stock-named JPGs carry almost the entire site. Raw usage counts
(`grep` over `components content lib app`):

| # of uses | Image | What it is |
|---|---|---|
| 24× | `/images/pool-aerial-day-BveHvOiS.jpg` | old day-pool aerial — hero, CTA bands, room "pool view", yoga, bars, suites |
| 17× | `/images/g-aerial-beach-property-COogc_9W.jpg` | old beach aerial — hero, about, CTA, nav tile, galleries |
| 12× | `/images/restaurant-dining-nygPbVtS.jpg` | old dining shot — restaurant, bakery, events, gallery |
| 12× | `/images/restaurant-cocktails-ITbgxYoM.jpg` | old cocktails — nav tile, bars, bakery, restaurant |
| 12× | `/images/g-family-beach-DHJPEGnp.jpg` | old family-beach — experiences, about, events, gallery |
| 11× | `/images/villa-living-room-CHkIhyVw.jpg` | old villa lounge — villas room, gallery, about |
| 11× | `/images/g-aerial-pool-overview-CCOWXk2j.jpg` | old pool overview — suites, bars, rooms, gallery |
| 9× | `/images/restaurant-night-DDkbFUTM.jpg` | old restaurant-night |
| 8× | `/images/room-two-beds-D9Pgywgw.jpg` | old generic two-bed |

Note: on `galeria`, `restaurante`, and `sobre-nosotros` the raw count overstates *rendered*
reuse — `components/page-scaffold.tsx → FEATURED_IMAGES` already PREPENDS real-shoot photos
ahead of these, so the old assets are mostly shadowed there (see §2-G/§2-H). The worst
*visible* reuse is on Home (hero, pool, suites, final CTA), Bars (100% old stock), Bakery
(100% TODO placeholders), and the per-type Room galleries.

### What sits unused

- **New Pool (18)** — signature LED night-pool drone set. Mostly only used in galeria/home-pool; ~10 frames idle.
- **Suit photos (16)** — real room shoot. Partly wired; classic-room + villa frames underused.
- **Resturant (105)** — pro food/cocktail/ambiance shoot. ~25 strong frames idle (bakery, bars starve while these sit).
- **Wedding (82)** — only ~10 wired; the hero-grade ceremony frames (`RLR_89012`, `RLR_88882`, `RLR_86342`, `AM5_96762`) are unused.
- **Resort Highlights (65)** — aerials, surf, family, exterior; ~20 keepers idle.
- **Photos from Expedia (≈129 across 9 subfolders)** — almost entirely unused. This is the big new supply: the only **golden-hour establishing aerial**, the **LED night-pool aerial as a clean 16:9 hero**, and — critically — **per-room-type labeled shots with the in-room pool/ocean VIEW and balcony** the prior shoot lacked.

### Headline moves

1. **New hero carousel** — lead with `Photos from Expedia/Exterior/Front of property.avif`
   (golden-hour aerial), `Photos from Expedia/Pool/led pool.webp` (LED night aerial, clean
   16:9), and `Photos from Expedia/Expedia photos/466849d5.jpg` (sunset drone). Retire the
   24× `pool-aerial-day`.
2. **Real per-type room shots** — give Standard / Superior / Junior Suite / Villa their own
   labeled Expedia frames, finally filling the **balcony + pool/ocean-view-from-room** gap
   (`Junior Suite, Pool View/b8986dd5.avif` = rare in-room OCEAN view; `Villa/b6c43cf9.avif`
   = ocean-view balcony; `Standard Room, Pool View/0c1dd7e6.avif` = pool-from-balcony).
3. **Kill the 24× repeat** — remove `pool-aerial-day-BveHvOiS.jpg` from hero, final-CTA,
   bars, suites and room "pool-view" slots; replace with varied real frames.
4. **Stock-only pages get real photos** — Bars (×2) and the NEW Bakery currently run 100% on
   old stock / `TODO(photos)` placeholders; both have strong real coverage waiting.

> **Anti-duplication rule applied throughout:** `Photos from Expedia/Expedia photos/<hash>.jpg`
> and the dedicated room/villa folders' `<hash>.avif` are frequently the SAME shot
> (`30bf22cc`, `c947a348`, `649e20e2`, `d282de3c`, `3d380017`, `c9c93316`, `0d81524b`…). Rooms
> are sourced from the **dedicated** `Standard / Superior / Junior Suite / Villa` folders;
> `Expedia photos/` is mined ONLY for its true differentiators (aerials, open-air restaurant,
> lifestyle food, reception, beach). No scene is cited from both its `.avif` and `.jpg`.

---

## 2. Per-page proposal

Path note: Expedia files are `.avif`/`.webp` under `/images/Photos from Expedia/<subfolder>/<name>`.
Subfolder names contain spaces and commas; some filenames contain a literal `|` pipe and one a
trailing space. `next/image` serves these fine (repo already serves spaced paths). Exact paths
are quoted verbatim — copy them literally.

### A. Home

| Slot (target file → field) | Current photo (× reuse) | Recommended photo (exact path) | Why |
|---|---|---|---|
| `content/hero-slides.ts` → slide `pool-day` `.src` | `/images/pool-aerial-day-BveHvOiS.jpg` (24×) | `/images/Photos from Expedia/Exterior/Front of property.avif` | Definitive golden-hour establishing aerial; retires the 24× repeat |
| `content/hero-slides.ts` → slide `pool-night` `.src` | `/images/pool-starry-night-DUYiQ-e6.jpg` (6×) | `/images/Photos from Expedia/Pool/led pool.webp` | LED night-pool aerial as a clean 16:9 hero; signature, unique |
| `content/hero-slides.ts` → slide `beach-property` `.src` | `/images/g-aerial-beach-property-COogc_9W.jpg` (17×) | `/images/Photos from Expedia/Expedia photos/466849d5.jpg` | Sunset drone of whole resort + surf; far stronger than old aerial |
| `hero-slides.ts` → `aerial-beach` `.poster` | `/images/hero-aerial-beach.webp` | keep (video poster) — or `/images/Photos from Expedia/Expedia photos/fe2dbef2.jpg` | Top-down surf-meets-black-sand as a richer fallback poster |
| `components/home/pool.tsx` → big left image (line ~41) | `/images/New Pool/...014010_0648...photo2.JPG` | `/images/New Pool/dji_fly_20241022_013922_0645_1753125628421_photo4.JPG` | The "pool meets ocean" signature LED frame — strongest of the set |
| `components/home/pool.tsx` → 3 thumbs (lines 12–20) | New Pool 0636 / 0642 / 0766 (night only) | keep 0642 (purple) + 0766; swap one for `/images/Photos from Expedia/Pool/Outdoor pool, sun loungers 3.avif` | Adds a DAYTIME pool frame so the strip isn't all-night; variety |
| `components/home/restaurant.tsx` → `src` (line ~20) | `/images/restaurant-sunset-T7wmiQ85.jpg` | `/images/Photos from Expedia/Expedia photos/bf191222.jpg` | Real open-air beachfront restaurant looking through palms to surf |
| `lib/dictionaries.ts` → `restaurant.*` teaser (if image-bound) | n/a (text only) | — | Teaser image lives in `restaurant.tsx`; handled above |
| Home suites strip — `components/home/suites.tsx` (lines 16–30) | `room-king-bed`, `g-aerial-pool-overview` (11×), `room-toucan-art`, `pool-aerial-day` (24×), `villa-bedroom-view`, `g-aerial-beach-property` (17×) | Superior: `/images/Suit photos/RLR_4906.jpg` · Junior: `/images/Suit photos/RLR_48512.JPG` · Villa: `/images/Suit photos/IMG_4757.jpg` (see Rooms §C for the per-type set) | Replace the recycled aerials/king-bed with the real room shoot; aligns home strip with the room pages |
| `components/home/experiences.tsx` ← `dict.experiences.items[].image` (`lib/dictionaries.ts` ~L79–109 / ~L396–426) | whales / yoga / live-music / surf | **Gap — leave as-is** (whale/yoga/live-music have no real photo). Optional: surf card → `/images/Resort Highlights/IMG_22232.JPG` | Surfer-on-black-sand is a real on-brand frame; the other three stay (see §3) |
| `components/home/location.tsx` | Google Maps embed (no photo) | — | No change |
| `components/home/final-cta.tsx` → `src` (line ~15) | `/images/pool-aerial-day-BveHvOiS.jpg` (24×) | `/images/Photos from Expedia/Expedia photos/6cda0197.jpg` | Sunset dining-silhouette with string lights — emotive CTA close; breaks the 24× chain |
| `content/resort-discovery.ts` → `rooms` tile `.image` | `/images/room-toucan-art-n3cC8Tze.jpg` | `/images/Suit photos/RLR_48512.JPG` | Real premium suite (sofa + space) over the old art crop |
| `content/resort-discovery.ts` → `restaurant` tile `.image` | `/images/restaurant-night-DDkbFUTM.jpg` (9×) | `/images/Resturant/DSCF40452.JPG` | Real sunset-through-palms terrace; distinctive |
| `content/resort-discovery.ts` → `bars` tile `.image` | `/images/restaurant-cocktails-ITbgxYoM.jpg` (12×) | `/images/Resturant/chloemurdochphotography-293.JPG` | Real 6-cocktail lineup; signature bar frame |
| `content/resort-discovery.ts` → `about` tile `.image` | `/images/g-aerial-beach-property-COogc_9W.jpg` (17×) | `/images/Photos from Expedia/Exterior/Front of property2.webp` | Polished facade (columns/wood balconies) — premium about anchor |
| `content/resort-discovery.ts` → `gallery` tile `.image` | `/images/pool-starry-night-DUYiQ-e6.jpg` | keep `/images/New Pool/dji_fly_20241022_013726_0642_1753125646863_photo2.JPG` (purple LED) | Real LED frame; varies from the hero night pick |

### B. Rooms hub (`content/suites-hub.ts`, `content/rooms-compare.ts`)

| Slot (target file → field) | Current photo (× reuse) | Recommended photo (exact path) | Why |
|---|---|---|---|
| Suites hub intro / hero band | `g-aerial-beach-property` (17×) / `villa-living-room` (11×) | `/images/Photos from Expedia/Expedia photos/8c66c942.jpg` | Two-story villa block + lawn opening to ocean; "where you stay" |
| Rooms-compare row images (Standard/Superior/Junior/Villa) | mix of `room-*` stock | use each type's HERO from §C below | One real, view-bearing hero per type; consistent with detail pages |

### C. Room galleries by type (`content/room-galleries.ts`)

Primary = the Expedia labeled per-type shots (they carry the balcony + view). Supporting =
the Suit photos shoot. Bathroom shared from the dedicated Bathroom folder.

**Standard (`slug: "estandar"`)**

| Slot (→ images[] index) | Current | Recommended (exact path) | Why |
|---|---|---|---|
| Hero | `/images/Suit photos/RLR_4906.jpg` | `/images/Photos from Expedia/Standard Room, Pool View/1.avif` | Twin beds + open balcony, sheer curtains — bright labeled Standard hero |
| 2 (view) | `/images/room-standard-wide-DxUYeeXV.jpg` | `/images/Photos from Expedia/Standard Room, Pool View/0c1dd7e6.avif` | Balcony looking DOWN to pool + loungers — fills pool-view-from-room gap |
| 3 | `/images/room-two-beds-D9Pgywgw.jpg` (8×) | `/images/Photos from Expedia/Standard Room, Pool View/303c74a9.avif` | Vaulted-ceiling interior, clean wide |
| 4 (bath) | `/images/room-interior-C3-O8UpA.jpg` | `/images/Photos from Expedia/Bathroom/Standard Room, Pool View \| Bathroom.avif` | Modern glass walk-in shower — cleanest bath of the set |

**Superior (`slug: "superior"`)**

| Slot | Current | Recommended (exact path) | Why |
|---|---|---|---|
| Hero | `/images/Suit photos/RLR_4906.jpg` | `/images/Photos from Expedia/Superior Room, 2 Double Beds, Pool View/d3dd803f.avif` | Two doubles + floor-to-ceiling glass to balcony w/ pool/sea beyond |
| 2 | `/images/room-two-beds-D9Pgywgw.jpg` (8×) | `/images/Suit photos/RLR_4906.jpg` | Real airy two-bed shoot frame (best-in-set) as the warm interior |
| 3 (view) | `/images/room-interior-C3-O8UpA.jpg` | `/images/Photos from Expedia/Superior Room, 2 Double Beds, Pool View/c4f52a03.avif` | Garden/grounds view through glass wall |
| 4 (terrace) | `/images/g-aerial-pool-overview-CCOWXk2j.jpg` (11×) | `/images/Photos from Expedia/Superior Room, 2 Double Beds, Pool View/be719188.avif` | Private ground-level terrace w/ chairs + flowering hedge |
| 5 (bath) | — | `/images/Photos from Expedia/Bathroom/Junior Suite, Pool View \| Bathroom.avif` | Secondary bath (warm wood accent) — distinct from Standard's |

**Junior Suite (`slug: "junior-suite"`)** — `suite-detail` headline is "the pool from your bed", so lead with the view frame.

| Slot | Current | Recommended (exact path) | Why |
|---|---|---|---|
| Hero | `/images/Suit photos/DSC03703.jpg` | `/images/Photos from Expedia/Junior Suite, Pool View/b8986dd5.avif` | King suite w/ glass balcony doors and CLEAR ocean/beach — the rare in-room view |
| 2 (living) | `/images/Suit photos/DSC03704.jpg` | `/images/Photos from Expedia/Junior Suite, Pool View/76e2f93c.avif` | King + leather loveseat lounge area — shows the suite has living space |
| 3 | `/images/room-junior-suite-wide-D5tbucTk.jpg` | `/images/Suit photos/RLR_48512.JPG` | Real shoot: king + loveseat + space (premium) |
| 4 | `/images/Suit photos/DSC03689.jpg` | `/images/Photos from Expedia/Junior Suite, Pool View/4b509d9a.avif` | Spacious vaulted-wood interior, balcony glass |
| 5 (bath) | `/images/room-king-bed-B58lVEdC.jpg` | `/images/Photos from Expedia/Bathroom/Junior Suite, Pool View \| Bathroom.avif` | Bright white-tile bath w/ vaulted wood ceiling |
| 6 (view) | `/images/pool-aerial-day-BveHvOiS.jpg` (24×) | `/images/Photos from Expedia/Common areas/LEd pool view from room .webp` | Framed room-balcony view over the daytime pool (note trailing space in filename) |

**Villa (`slug: "villas"`)**

| Slot | Current | Recommended (exact path) | Why |
|---|---|---|---|
| Hero | `/images/villa-living-room-CHkIhyVw.jpg` (11×) | `/images/Photos from Expedia/Villa/30bf22cc.avif` | Open-plan villa: kitchenette + dining + bed in one — shows scale/layout |
| 2 (view) | `/images/Suit photos/RLR_48512.jpg` | `/images/Photos from Expedia/Villa/b6c43cf9.avif` | Balcony w/ bistro set + orchid framing a CLEAR ocean view — best of all folders |
| 3 (dine-view) | `/images/Suit photos/IMG_4757.jpg` | `/images/Photos from Expedia/Villa/5a4b367e.avif` | Dining nook, glass doors showing pool + ocean horizon |
| 4 (kitchen) | `/images/Suit photos/IMG_4779.jpg` | `/images/Photos from Expedia/Villa/c947a348.avif` | Full kitchen (cooktop, fridge, coffee maker) — best amenity shot |
| 5 (two-bed) | `/images/Suit photos/IMG_4763.jpg` | `/images/Photos from Expedia/Villa/d6e38e81.avif` | Two-bed villa variant + dining + balcony doors |
| 6 (living detail) | `/images/villa-kitchen-detail-CYiwCD4T.jpg` | `/images/Suit photos/IMG_4757.jpg` | Real shoot lounge/dining-through-doorway (editorial) |
| 7 | `/images/villa-bedroom-view-_Eb74lE7.jpg` | `/images/Suit photos/IMG_4688.JPG` | Kitchenette detail (red pots) — texture/accent |

### D. Restaurant (`content/restaurant-page.ts`, `components/restaurant/*`)

`FEATURED_IMAGES.restaurante` already leads the luxury `/restaurante` mosaic/hero with the real
shoot — that part is GOOD. Improve the bespoke `restaurant-page.ts` slots:

| Slot (→ field) | Current | Recommended (exact path) | Why |
|---|---|---|---|
| `hero.image` | `/images/restaurant-night-DDkbFUTM.jpg` (9×) | `/images/Resturant/IMG_0964.JPG` | Signature ocean-view dining room framing palms + waves |
| `chef.image` | (current chef shot) | `/images/Resturant/RLR_3857.JPG` | Twilight string-light dining — best pure ambiance frame |
| `menus.cards[food].image` | `restaurant-dining` (12×) | `/images/Resturant/chloemurdochphotography-314.JPG` | Clean signature steak entrée |
| `menus.cards[drinks].image` | `restaurant-cocktails` (12×) | `/images/Resturant/chloemurdochphotography-293.JPG` | 6-cocktail lineup |
| `ambiance.slides[]` | mixed stock | `/images/Resturant/RLR_37603.JPG`, `/images/Resturant/RLR_40112.JPG`, `/images/Photos from Expedia/Expedia photos/6cda0197.jpg`, `/images/Resturant/DSCF4078(1).JPG` | Real al-fresco string-light ambiance set |
| `reserve.image` | `restaurant-sunset` | `/images/Resturant/chloemurdochphotography-95.JPG` | Luxe seafood platter + pool — aspirational close |
| Improve `FEATURED_IMAGES.restaurante` (`page-scaffold.tsx`) | includes `1L6A2554.jpg`, `1L6A2572.jpg` (both on the catalog SKIP list) | swap to `/images/Resturant/1L6A2547.jpg` + `/images/Resturant/chloemurdochphotography-320.JPG` | Replace skip-listed weak frames with keeper heroes |

### E. Bars (`content/bars.ts`) — currently 100% old stock

**Golden Beach Bar (`slug: "golden-beach-bar"`)**

| Slot (→ field) | Current | Recommended (exact path) | Why |
|---|---|---|---|
| `heroImage` / `cardImage` | `/images/golden-beach-bar-qN10cbKY.jpg` (7×) | `/images/Resturant/chloemurdochphotography-259.JPG` | Styled pink-spritz bar hero w/ garnish |
| `introSlides[0]` | `/images/pool-aerial-day-BveHvOiS.jpg` (24×) | `/images/Resturant/DSCF40452.JPG` | Sunset terrace through palms |
| `introSlides[1]` | `restaurant-cocktails` (12×) | `/images/Resturant/1L6A2634.jpg` | Couples at terrace table, string lights, ocean |
| `introSlides[2]` | `restaurant-sunset` | `/images/Resturant/chloemurdochphotography-53.JPG` | Tacos + beer (bar food) |
| `introSlides[3]` | `restaurant-view` | `/images/Resturant/chloemurdochphotography-48.JPG` | White-wine pour, pool behind (poolside) |
| `ctaImage` | `restaurant-sunset-silhouette` | `/images/Resturant/DSCF4078(1).JPG` | Sunset toast silhouette |

**Iguana Bar (`slug: "iguana-bar"`)**

| Slot (→ field) | Current | Recommended (exact path) | Why |
|---|---|---|---|
| `heroImage` / `cardImage` | `/images/iguana-bar-pool-CP3k5v8t.jpg` (4×) | `/images/Resturant/chloemurdochphotography-255.JPG` | Red/orange spritz, moody bar bokeh |
| `introSlides[0]` | `pool-starry-night` | `/images/Photos from Expedia/Pool/led pool.webp` *(if not used as hero)* or `/images/New Pool/dji_fly_20241022_013636_0636_1753125648022_photo2.JPG` | LED pool detail (poolside bar) |
| `introSlides[1]` | `g-aerial-pool-overview` (11×) | `/images/Photos from Expedia/Pool/Outdoor pool, sun loungers 3.avif` | DAYTIME pool w/ foliage — variety vs. all-night |
| `introSlides[2]` | `pool-aerial-day` (24×) | `/images/Resturant/chloemurdochphotography-342.JPG` | Layered frozen signature cocktail |
| `introSlides[3]` | `g-pool-night-1` | `/images/Resturant/chloemurdochphotography-267.JPG` | Blue-curaçao tropical cocktail |
| `ctaImage` | `pool-aerial-night` | `/images/Resturant/IMG_78472.JPG` | Joyful margarita-toast candid |

### F. Bakery (`content/bakery.ts`) — replace ALL `TODO(photos)` placeholders

| Slot (→ field) | Current placeholder | Recommended (exact path) | Why |
|---|---|---|---|
| `heroImage` | `/images/restaurant-dining-nygPbVtS.jpg` | `/images/Resturant/chloemurdochphotography-241.JPG` | Dessert lineup w/ resort POOL behind — pastries + brand story |
| `introSlides[0]` | `restaurant-cocktails` | `/images/Resturant/chloemurdochphotography-224.JPG` | Chocolate cake slice + layered latte (cake + coffee) |
| `introSlides[1]` | `restaurant-dining` | `/images/Resturant/IMG_0693_jpg2.JPG` | Costa Rican breakfast + black coffee, garden view |
| `introSlides[2]` | `restaurant-view` | `/images/Resturant/chloemurdochphotography-225.JPG` | Layered latte macchiato held by staff |
| `introSlides[3]` | `restaurant-view-2` | `/images/Resturant/chloemurdochphotography-234.JPG` | Dessert lineup (banner shape) |
| `ctaImage` | `restaurant-dining` | `/images/Photos from Expedia/Expedia photos/89a6b00b.jpg` | Gallo pinto breakfast plated against the ocean |
| `cardImage` | `restaurant-cocktails` | `/images/Resturant/chloemurdochphotography-2473.JPG` | Dessert-slice close-up on slate |

### G. Events (`content/events.ts`, `lib/luxury-gallery.ts`)

`EVENT_SUPPLEMENTS.weddings` already pulls real `Wedding/` frames — GOOD, but the event hero +
inline galleries still use weak/skip-listed frames.

| Slot (→ field) | Current | Recommended (exact path) | Why |
|---|---|---|---|
| `eventHub.heroImage.src` | `/images/Wedding/AM5_93842.JPG` | `/images/Wedding/RLR_89012.JPG` | Wide beachfront ceremony, guests, string lights, ocean — hero-grade |
| weddings `heroImage.src` | `/images/Wedding/AM5_93842.JPG` | `/images/Wedding/RLR_88882.JPG` | Couple at altar, veil train, rose-petal aisle, ocean |
| weddings `gallery[0]` | `/images/Wedding/AM5_92552.JPG` (SKIP: vendor QR card) | `/images/Wedding/RLR_86342.JPG` | Full Beachfront-Garden setup (the "setting" shot) |
| weddings `gallery[1]` | `/images/Wedding/AM5_93492.JPG` (SKIP: redundant cake) | `/images/Wedding/AM5_96762.JPG` | Golden-hour bride + string lights (Evening Ceremony) |
| weddings `gallery[2]` | `/images/Wedding/RLR_8704.JPG` (SKIP: signage) | `/images/Wedding/AM5_92602.JPG` | Beachfront-garden arch beauty shot |
| weddings `gallery[4]` | `/images/Wedding/IMG_7293.JPG` (SKIP: runway dup) | `/images/Wedding/RLR_8676.JPG` | Draped arch w/ gold starfish + florals (decor hero) |
| weddings — Starlit-Pool venue (text-only today) | none | add `/images/New Pool/dji_fly_20241022_013726_0642_1753125646863_photo2.JPG` (purple LED) | The copy markets a "Starlit Pool" venue with no image — pair the LED aerial (see §3) |
| surf-nights `gallery[]` | surf stock | keep (`surf-nights-*` are the only real surf assets) + `/images/Resort Highlights/IMG_22232.JPG` | Real surfer-on-black-sand reinforces the surf story |
| `otherEventsHub.heroImage` | `events-outdoor-dining` | `/images/Resturant/RLR_40112.JPG` | Real warm social al-fresco group dinner |
| private-dinners `gallery[]` | `1L6A2555.jpg` (SKIP) | `/images/Resturant/chloemurdochphotography-37.JPG` | Whole grilled lobster, ocean-view window |

### H. Experiences (`content/experiences.ts`, `lib/luxury-gallery.ts`)

The four experiences (whale/turtle/yoga/live-music) have NO real subject photos — heroes stay
(see §3). Improve only the *grounds/context* supplement frames that currently repeat old aerials:

| Slot (→ field) | Current | Recommended (exact path) | Why |
|---|---|---|---|
| `experienceHub.heroImage` | `/images/Resort Highlights/DJI_20250526154631_0071_D.JPG` | `/images/Resort Highlights/IMG_3170.JPG` | Postcard rocky-coast + turquoise surf — strongest "place" frame |
| yoga `gallery` grounds frames | `IMG_3712` (skip-listed picket fence) | `/images/Resort Highlights/IMG_5978.JPG` | Real joyful poolside family (lifestyle) |
| live-music `gallery` | mixed | keep `Resturant/RLR_3857.JPG`, `chloemurdochphotography-293.JPG` (already real) | Already good — no change |

### I. Gallery bands (`components/luxury/gallery-sections.tsx → CATEGORIES`)

Already real-shoot-heavy and GOOD. Targeted upgrades only — replace the few stock/skip frames:

| Band → index | Current | Recommended (exact path) | Why |
|---|---|---|---|
| Pool → has `pool-aerial-night`, `g-aerial-pool-overview` (11×), `pool-starry-night` | mixed stock | replace those 3 with `/images/Photos from Expedia/Pool/led pool.webp` *(if not hero)*, `/images/Photos from Expedia/Pool/Outdoor pool, sun loungers 3.avif` (daytime), `/images/New Pool/dji_fly_20241022_013726_0642_1753125646863_photo2.JPG` | All-real, adds a daytime frame, drops 11× overview |
| Weddings → `AM5_92742` (SKIP: retro phone) | weak | `/images/Wedding/AM5_96762.JPG` | Golden-hour veil — hero-grade |
| Dining → `1L6A2526`, `1L6A2544` (SKIP), `restaurant-night`, `golden-beach-bar`, `restaurant-dining` | weak/stock | `/images/Resturant/chloemurdochphotography-972.JPG`, `/images/Resturant/IMG_09632.JPG`, `/images/Resturant/chloemurdochphotography-314.JPG`, `/images/Resturant/IMG_0964.JPG` | Real keepers replace skip-listed + stock |
| Suites → `DSC03813` (SKIP: face-painting detail), `room-king-bed`, `room-toucan-art` | weak/stock | `/images/Photos from Expedia/Junior Suite, Pool View/b8986dd5.avif`, `/images/Photos from Expedia/Villa/b6c43cf9.avif`, `/images/Suit photos/DSC03704.jpg` | Real view-bearing suite frames |
| Beach → `hero-aerial-beach`, `g-aerial-beach-property` (17×), `g-aerial-mountains`, `AM5_93882` (SKIP) | stock | `/images/Photos from Expedia/Expedia photos/fe2dbef2.jpg`, `/images/Photos from Expedia/Common areas/Garden lawn2.avif`, `/images/Photos from Expedia/Expedia photos/052dcf05.jpg`, `/images/Resort Highlights/IMG_6128.JPG` | Real beach/grounds, drops the 17× aerial |

### J. About (`content/about.ts`, `FEATURED_IMAGES.sobre-nosotros`)

`FEATURED_IMAGES.sobre-nosotros` already leads with the real shoot — GOOD. But it includes
`DSC03681.jpg` (catalog SKIP: bland room block) and `IMG_3748.JPG` (SKIP: heavy flower bokeh).

| Slot (→ field) | Current | Recommended (exact path) | Why |
|---|---|---|---|
| `FEATURED_IMAGES.sobre-nosotros` `DSC03681.jpg` (skip) | weak | `/images/Photos from Expedia/Common areas/Reception.avif` | Characterful lobby — vaulted beams, art, surfboard (sense of place) |
| `FEATURED_IMAGES.sobre-nosotros` `IMG_3748.JPG` (skip) | weak | `/images/Photos from Expedia/Exterior/Building design walk way.avif` | Entry walkway w/ Costa Rica flag — arrival/identity |
| `about.ts` story-band images using `g-aerial-beach-property` (17×) | reused | `/images/Photos from Expedia/Exterior/Front of property2.webp` | Polished facade anchor |
| about timeline `image` (turtle/family/music rows ~L113–125) | leave wildlife rows | family row `g-family-beach` → `/images/Resort Highlights/IMG_6128.JPG` | Real family-on-black-sand-beach |

---

## 3. Gaps — slots with no ideal photo even now

These have **no real subject photo in any folder**; keep existing assets or leave as documented
gaps. Do NOT fabricate swaps.

- **Whale watching** — no whale photo in the real shoots; `whales-aerial-Bx8BrmsB.jpg` stays.
- **Turtle nesting** — no turtle photo; `baby-turtle` / `turtle-nesting` stays.
- **Beachfront yoga** — no yoga photo; `yoga-class-1Z8S9ilZ.jpg` stays (context frames can be real grounds shots).
- **Live music** — no musician/stage photo; `live-music-U-RLRqGX.jpg` stays (ambiance frames already real).
- **Surf Nights** — no night-surf-in-action photo in the real folders; surf-nights stock stays; daytime surf can borrow `Resort Highlights/IMG_22232.JPG`.
- **Starlit-Pool wedding venue** — no wedding-at-LED-pool photo exists. **Pair the venue with a `New Pool` LED aerial** — recommend `/images/New Pool/dji_fly_20241022_013726_0642_1753125646863_photo2.JPG` (purple) or `/images/New Pool/dji_fly_20241022_013922_0645_1753125628421_photo4.JPG` (pool-meets-ocean). This is a presentation pairing, not a true match.
- **Swim-up / pool bar in use, daytime people-in-pool, true Vivace-terrace reception** — partial coverage only (`Resort Highlights/DSC03775.jpg` is the lone swim-up-bar frame; `IMG_59363`/`IMG_5978` are the only pool-family frames). Use sparingly; flag for a future shoot.

---

## 4. Apply plan (once approved)

Mechanical, file-by-file. No code logic changes — only string values in data/content files
(plus four hard-coded `src` strings in home components).

**Files to edit (data/content):**
1. `content/hero-slides.ts` — 3 `.src` (+ optional poster).
2. `content/resort-discovery.ts` — 5 tile `.image`.
3. `content/room-galleries.ts` — `estandar`, `superior`, `junior-suite`, `villas` image arrays.
4. `content/restaurant-page.ts` — `hero.image`, `chef.image`, `menus.cards[].image`, `ambiance.slides[]`, `reserve.image`.
5. `content/bars.ts` — both venues' `heroImage`, `cardImage`, `introSlides[]`, `ctaImage`.
6. `content/bakery.ts` — `heroImage`, `introSlides[]`, `ctaImage`, `cardImage` (removes all `TODO(photos)`).
7. `content/events.ts` — hub + weddings `heroImage`/`gallery[]`, `otherEventsHub`, private-dinners gallery.
8. `content/experiences.ts` — `experienceHub.heroImage`, yoga grounds frames.
9. `lib/luxury-gallery.ts` — wedding/dining supplement swaps (optional, low priority).
10. `components/luxury/gallery-sections.tsx` — `CATEGORIES[].images` per §I.
11. `components/page-scaffold.tsx` — `FEATURED_IMAGES.restaurante` + `.sobre-nosotros` skip-frame swaps.
12. `lib/dictionaries.ts` — only if home experiences/suites image fields are bound there (suites strip lives in `components/home/suites.tsx`).

**Files to edit (home components — hard-coded `src`):**
13. `components/home/pool.tsx` (lines ~12–20, ~41) · `restaurant.tsx` (~20) · `final-cta.tsx` (~15) · `suites.tsx` (~16–30).

**Path-format handling (do NOT fat-finger these):**
- avif/webp serve fine through `next/image` (avif/webp already in the project's image pipeline).
- Spaced + comma'd folders are fine (repo already uses `/images/New Pool/...`). Keep paths **unquoted-but-exact** inside the TS string literals — the literal already quotes them, e.g.
  `"/images/Photos from Expedia/Standard Room, Pool View/1.avif"`.
- **Pipe character:** `"/images/Photos from Expedia/Bathroom/Standard Room, Pool View | Bathroom.avif"` — the ` | ` (space-pipe-space) is part of the real filename; copy verbatim.
- **Trailing space:** `"/images/Photos from Expedia/Common areas/LEd pool view from room .webp"` — there IS a space before `.webp`. Copy verbatim.
- **Lowercase:** `"/images/Photos from Expedia/Pool/led pool.webp"` — lowercase `led`, lowercase `pool`, single space.
- Expedia room hashes are case-sensitive lowercase `.avif`; Suit/Resturant/Wedding/Resort Highlights/New Pool keep their original `.jpg`/`.JPG` casing exactly as on disk.

**Verification after apply:**
- `grep -rhoE "/images/[^\"']+\.(jpg|jpeg|png|webp|avif|JPG|PNG)" components content lib app | sort | uniq -c | sort -rn | head` — confirm `pool-aerial-day` and `g-aerial-beach-property` counts have dropped sharply and no single new image repeats across unrelated slots.
- Prod build + cache-buster (per the dev-server gotcha) to visually confirm hero, rooms, bars, bakery render the new frames.
- Confirm every cited Expedia path resolves (404 check on the spaced/pipe/trailing-space paths specifically).
