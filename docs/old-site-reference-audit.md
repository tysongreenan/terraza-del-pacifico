# Old Site Reference Audit — Copy & Photo Organization

**What this is:** A reference check against the original developer's site (`terraza-web-creator-main/`, a Vite/React build of the live `terrazadelpacifico.com`). The old site's rendered copy was captured as crawler snapshots in `content/*.json` (see `content/_crawler.js`). This document compares that **client-approved copy** against our current Next.js rebuild and maps how the old site organized photos.

**We are NOT adopting the old site.** This is a gap-check only — what approved copy/info did the rebuild drop, and what photo themes did it surface that we may be under-using.

**Method:** Each page-group was compared old→new and classified **Missing** (in old, absent in new — the priority), **Rewritten** (same info, reworded for SEO — not a gap), or **Present** (carried over). Reworded sentences are *not* flagged; our SEO rewrite was deliberate. Italian was on the old site but is **out of scope** (new site is es/en).

---

## Executive summary — priority missing copy

Ranked by client impact. "Rewritten" sections are intentional and excluded.

| # | Page | Missing item | Why it matters |
|---|------|--------------|----------------|
| 1 | About | **"Our Facilities" amenity grid dropped** — 9 tiles: 62 rooms, 2 pools, direct beach access, pet-friendly, high-speed WiFi, 24h secure parking, EV charger, kids club, bakery | Hard inventory facts guests/SEO rely on; no home anywhere on new About |
| 2 | Events / Surf Nights | **Hard facts stripped** — $300/$200/$100 cash prizes, Canal 33/Trivisión TV broadcast, narrator Freddy "Salsiboy" Camacho, certified intl judges, "crocodile-free safe zone" | Old page was concrete and credible; new reads generic |
| 3 | Events / Weddings | **4 named venues dropped** (Beachfront Garden, Evening Ceremony, Vivace Terrace, Starlit Pool w/ 1,200 LEDs) + wedding email `mercadeo1@terrazadelpacifico.com` | Venue specifics drive wedding inquiries |
| 4 | Restaurant | **Bar & bakery sections dropped** — Iguana Bar, Golden Beach Bar (distinct hours/location), Artisan Bakery, per-meal hours block, "Live Music — weekends" | Verify whether these moved to `/bares` or were lost |
| 5 | Home / Footer | **Legal/policy links gone** from footer — Cancellation, Pet, Privacy, Terms | Trust + compliance; old footer had them |
| 6 | Home / Newsletter | Newsletter signup ("Stay Connected" / Subscribe) absent | Old site had nav + footer capture |
| 7 | About | **LED-pool story** stripped to one timeline line (Italian artist, 1,200 LEDs "starry sky," nightly spectacle, sustainability) + `pool-starry-night` photo unused | Signature differentiator reduced to a date |
| 8 | About | "Privileged Location" wildlife prose (howler monkeys, tropical birds) + Weddings/Events block + CTA dropped from About | — |
| 9 | Restaurant | **Hours conflict** — new hero "7 AM–10 PM" vs old dinner close 9 PM | Factual error to reconcile, not just a gap |
| 10 | Rooms / Villa | Two small drops: kitchen **rice cooker**, **"recently renovated"** selling point | Minor; rooms otherwise a near-complete carry-over |

**Cross-cutting issues found (not copy gaps, but worth flagging):**
- **Policies render in English on the Spanish route** — only SEO meta is translated; policy bodies are English-only.
- **Check-out time conflict** carried over from old site: policy says 12:00 PM, footer says 1:00 PM.
- **Gallery captions lost** — old `/galeria` had 8 albums with per-photo Spanish captions + photo counts; new uses 5 bands with generic alt text + numeric index.

## Executive summary — photo organization

The old site organized photos by **theme** (7 folders: `drone`, `eventos`, `experiencias`, `familias`, `hotel`, `piscina-nocturna`, `restaurante`) and exposed **8 browsable gallery albums**. The new site organizes by **shoot** (`Resort Highlights`, `Wedding`, `New Pool`, `Suit photos`, `Resturant` ≈ 286 files) and curates ~40 into **5 gallery bands**.

**Four old photo themes are under-used / have no gallery home in the rebuild:**
- **Drone / aerial** — old had a dedicated 11-image album; no new gallery category
- **Families** — dedicated old album; no new category
- **Pool by night** — dedicated 12-image album; folded into "Pool", night-specific framing lost
- **Experiences** — dedicated old album; scattered across per-page supplements

The new shoot folders clearly contain matching material, so this is a **curation gap, not a sourcing gap** — the photos exist, they're just not surfaced.

## Structural notes (out of scope, flagged for completeness)
- `/bares` is **new** — it did not exist on the old site, so there's no reference copy for it (and the missing restaurant bar sections may have intentionally moved here — verify).
- Old `/encuesta` (Survey) and Unsubscribe pages have no new equivalent — these are newsletter/survey *infrastructure*, not marketing copy.
- Old site had a full Supabase-backed admin + blog CMS; not part of this copy audit.

---

# Page-by-page detail
## Home (`/`)

Source of truth for NEW copy: `lib/dictionaries.ts` (all homepage section text, both es/en), plus `content/hero-slides.ts`, `content/resort-discovery.ts`, `content/experiences.ts`, and `components/home/*.tsx`. No user-facing copy was found hardcoded outside the dictionary — every section reads from `dict.*`. OLD content is the crawler snapshot at `content/home.json` (`text`, `outline`, `imgs`, `ctas`).

### Missing copy

| OLD item | detail | where it lived (OLD) |
|---|---|---|
| **Free Yoga full schedule** | OLD lists three specific weekly sessions: `SUN 8:00 AM, SAT 4:00 PM, WED 8:00 AM` (repeated in footer as `DOM 8:00 AM / SAB 4:00 PM / MIE 8:00 AM`). NEW collapses this to a single generic line "Daily · 7:00 AM" / "Included" in the Experiences card, and **drops it entirely from the footer Schedule**. The "Free" framing is also lost. | Experiences section (H3 "Free Yoga") + footer "Schedule" block |
| **Footer "Quick Links" → Cancellation Policy** | Policy link, gone from NEW footer entirely | Footer "Quick Links" (H3) |
| **Footer "Quick Links" → Pet Policy** | Policy link, gone from NEW footer | Footer "Quick Links" |
| **Footer "Quick Links" → Privacy** | Policy link, gone from NEW footer | Footer "Quick Links" |
| **Footer "Quick Links" → Terms and Conditions** | Policy link, gone from NEW footer | Footer "Quick Links" |
| **Newsletter / "Stay Connected" / Subscribe** | OLD has a "Newsletter" nav item, a footer "Stay Connected" (H3) heading, and a "Subscribe" CTA. NEW has no newsletter signup anywhere on the homepage or footer. | Nav ("Newsletter"), footer "Stay Connected" + "Subscribe" CTA |
| **"Welcome to Paradise" eyebrow** | OLD welcome eyebrow/heading "Welcome to Paradise". NEW eyebrow is just "Welcome" / "Bienvenidos". | Welcome section (H2) |
| **"sanctuary" / "whisper of the mountains" framing** | OLD Welcome body: *"between the constant sound of waves and the whisper of the mountains, there's a place where time stands still... we are a sanctuary that celebrates the real beauty of Playa Hermosa."* The mountains/sanctuary/"time stands still" imagery is gone — NEW body is a different (whale-song/sunset) rewrite. Borderline REWRITTEN, but the specific value-prop language was dropped. | Welcome section body |
| **Hero tri-line value props** | OLD hero subline: *"Oceanfront Luxury • Unforgettable Sunsets • Authentic Costa Rican Hospitality"*. Not present anywhere in NEW (verified by grep). NEW hero uses a single rewritten subtitle. Classify as REWRITTEN/dropped — the three crisp pillars are gone. | Hero |
| **Hero subhead** | OLD: *"Discover One of Costa Rica's Most Extraordinary Beachfront Escapes"*. Not present in NEW (grep confirmed). REWRITTEN into the new hero subtitle, but the literal line is gone. | Hero |
| **Restaurant "perfect harmony" framing** | OLD Vivace intro: *"a beachfront space where tropical architecture, salty breeze, and culinary art come together in perfect harmony."* NEW restaurant body is a different rewrite (fresh catch / handmade pasta). Info largely REWRITTEN; the "tropical architecture / salty breeze" phrasing dropped. | Vivace Beachfront section |
| **Turtle "conservation" descriptor** | OLD: "Turtle Nesting — Unique conservation experience." NEW says "A quiet, protected ritual under the stars" — the explicit *conservation* positioning is softened/lost. Minor. | Experiences (H3 Turtle Nesting) |
| **Whale season exact months** | PRESENT but verify: OLD "Season from July to October"; NEW "July – October" / "Jul – Oct". Carried over. (Not missing — listed for completeness.) | Experiences |

Notes on items that are NOT missing (to avoid false flags):
- **Main hotel phone** `+506 2643 3222` is an *addition* in NEW (footer) — OLD homepage only exposed the WhatsApp number `+506 8431 9953`. Both numbers present in NEW. Good.
- Room occupancy counts (Superior 4, Standard 4, Junior Suite 2, Villa 6) all carried over.
- Pool stat "1,200 LED lights" + "designed by an Italian artist" + "1 of 1 / Única" carried over.
- Check-in 3:00 PM, Check-out 1:00 PM, Pools 8:30 AM–8:30 PM all carried over.
- Email `info@terrazadelpacifico.com`, "90 minutes from San José", "Playa Hermosa, Puntarenas, Costa Rica" all carried over.
- `<title>` and meta `desc` from OLD live in page metadata (`lib/seo.ts` / page exports), out of scope for the dictionary content sources — not audited here.

### Photos OLD homepage used (`imgs` array)

| OLD image | NEW equivalent? |
|---|---|
| `/assets/Logo-nuevo-B86U915-.png` (x2, nav + footer) | YES — NEW uses `/images/logo-light.png` (footer) + full-color logo in nav. |
| `/hero-aerial-beach-mobile.webp` | YES — NEW hero uses a video (`/videos/hero.mp4`) with poster `/images/hero-aerial-beach.webp` + aerial beach slides. |
| `/assets/room-two-beds-D9Pgywgw.jpg` (Superior) | YES — `/images/room-two-beds-D9Pgywgw.jpg` (Superior suite card). |
| `/assets/room-toucan-art-n3cC8Tze.jpg` (Standard) | YES — used in resort-discovery "Rooms" tile (`/images/room-toucan-art-n3cC8Tze.jpg`). |
| `/assets/room-king-bed-B58lVEdC.jpg` (Junior Suite) | PARTIAL — NEW homepage Junior Suite card uses a different file (`room-junior-suite-wide-D5tbucTk.jpg`), but `room-king-bed-B58lVEdC.jpg` still exists elsewhere (room galleries / suites). Not lost, just repositioned. |
| `/assets/villa-living-room-CHkIhyVw.jpg` (Villa) | YES — `/images/villa-living-room-CHkIhyVw.jpg` (Villa card). |
| `/assets/pool-aerial-night-BvFgNxHn.jpg` | YES — NEW uses several New Pool aerials + `pool-starry-night-DUYiQ-e6.jpg` / `pool-aerial-day-BveHvOiS.jpg`. Equivalent night-pool imagery present and expanded. |
| `/assets/whales-aerial-Bx8BrmsB.jpg` | YES — `/images/whales-aerial-Bx8BrmsB.jpg` (Whale Watching). |
| `/assets/baby-turtle-DGA7PRRL.jpg` | YES — `/images/baby-turtle-DGA7PRRL.jpg` (Turtle Nesting). |
| `/assets/yoga-class-1Z8S9ilZ.jpg` | YES — `/images/yoga-class-1Z8S9ilZ.jpg` (Yoga). |
| `/assets/wedding-ceremony-night-BS1EmGIk.jpg` | YES — `/images/wedding-ceremony-night-BS1EmGIk.jpg` (Weddings). |
| `/assets/live-music-U-RLRqGX.jpg` | YES — `/images/live-music-U-RLRqGX.jpg` (Live Music). |
| `/assets/restaurant-view-WsRnSUPN.jpg` | PARTIAL — NEW homepage Restaurant section uses `restaurant-sunset-T7wmiQ85.jpg`; `restaurant-view-WsRnSUPN.jpg` still exists in the repo (restaurant page / galleries). Not lost, just repositioned. |

Net: all OLD homepage photo *subjects* (logo, hero aerial, 4 room types, night pool, whales, turtle, yoga, wedding, live music, restaurant) have NEW equivalents. NEW also adds a Surf Nights image and a richer New Pool aerial set. No photo subject was dropped.

### Aggregate note

OLD homepage had ~13 H2/H3 content blocks. Mapping OLD → NEW:
- **Carried over (PRESENT, often rewritten for SEO):** Hero, Welcome, Our Rooms (4 types), Pool (LED/Italian artist/1,200 stat), Experiences (Whale, Turtle, Yoga, Weddings, Live Music — NEW adds Surf Nights), Vivace/Chef Luigi, Testimonials, Instagram, Find Us/Location, footer Contact + Schedule core hours. That is essentially every OLD section.
- **Rewritten (same info, new wording):** roughly **9–10 sections** were deliberately reworded for SEO (hero subline, welcome body, pool body, restaurant body, experiences blurbs, location distance). Not flagged as gaps per the brief.
- **Genuinely MISSING (priority):**
  1. **Free Yoga's specific 3-session weekly schedule** (dropped from both Experiences card and footer; "Free" framing lost).
  2. **Footer "Quick Links" legal/policy pages** — Cancellation Policy, Pet Policy, Privacy, Terms and Conditions — all four removed.
  3. **Newsletter signup** — nav item, "Stay Connected" heading, and "Subscribe" CTA all removed.
  4. Minor: "Welcome to Paradise" eyebrow, the "sanctuary / whisper of the mountains / time stands still" Welcome imagery, the hero "Oceanfront Luxury • Unforgettable Sunsets • Authentic Costa Rican Hospitality" tri-line, and the Turtle "conservation experience" label.

**Verdict:** The NEW homepage is a faithful, content-complete rebuild — every OLD section and photo subject survives, mostly rewritten for SEO. The only substantive losses are operational/structural rather than narrative: the **policy/legal links**, the **newsletter subscribe**, and the **detailed Free Yoga schedule**. Of these, the four legal-page links (Cancellation, Pet, Privacy, Terms) are the most important to restore, followed by the newsletter and the yoga times.
# Copy Gap Audit — About Us & Experiences (OLD vs NEW)

OLD = client-approved crawler snapshots (`content/sobre-nosotros.json`, `content/experiencias.json`).
NEW = `content/about.ts` + `components/about/about-page.tsx` + `app/[locale]/sobre-nosotros/page.tsx`; `content/experiences.ts` + `app/[locale]/experiencias/`.
NEW copy was deliberately SEO-rewritten — reworded sentences are NOT flagged. Italian ignored (site is es/en).

---

## About Us

The NEW About page is a bespoke redesign: hero → statement band (reuses `dict.welcome.body`) → "Our Story" split → dark **timeline** (2006 / 2013 / 2019 / Today) → **values trio** (Real hospitality / Coast protected / Costa Rica fully) → **stats strip** (`dict.welcome.stats`: 20+, 0 m, 90 min, 1,200 LED) → CTA. Contact + Schedule live in the shared footer; testimonials render via an Elfsight widget appended after `<AboutPage>`.

### Missing copy (present in OLD About, absent from NEW About)

| OLD item | Detail | Where in OLD / status in NEW |
|---|---|---|
| **"Our Facilities" grid — 9 amenity tiles** | 62 Rooms ("variety of options"), 2 Pools (outdoor), Direct Access (to the beach), Pet Friendly, High-Speed WiFi (throughout hotel), Secure Parking (24h surveillance), EV Charger, Kids Club (children's activities), Bakery (specialty coffee) | OLD H2 "Our Facilities" + H3×9. **Entire section dropped.** No facilities grid, room count, pool count, parking/WiFi/EV/kids-club/pet-friendly facts anywhere in NEW About content or component. (`62 rooms`, `kids club`, `EV charger`, `bakery`, `pet friendly` grep = 0 hits in About files.) **HIGHEST-PRIORITY GAP.** |
| **LED pool narrative** | "Designed by a renowned **Italian artist**… 1,200 LED lights integrated into the bottom… evokes a **starry sky underwater**… visual spectacle every night… **low-energy LED, commitment to sustainability**." | OLD H2 "A Unique Pool in Central America" (3 paragraphs). In NEW survives only as one timeline line: *"2019 — The signature LED pool — 1,200 lights — is unveiled."* The Italian-artist authorship, starry-sky imagery, night-swim spectacle and sustainability angle are all **MISSING**. |
| **"Privileged Location" wildlife paragraph** | "Surrounded by mountains covered in tropical vegetation… Costa Rican biodiversity in all its splendor. **Tropical birds, howler monkeys**, and a variety of local fauna make every day an adventure of discovery." | OLD H2 "Privileged Location" intro prose. **MISSING** from NEW About (no wildlife/howler-monkey/biodiversity copy; "Coast protected" value tile covers turtles only). |
| **Whale Watching blurb (on About)** | "During the season (July–October), majestic humpback whales visit our shores…" | OLD H3 under Privileged Location. Not on NEW About page. *Covered site-wide* on the Experiences whale-watching page — so MISSING-from-About but not lost from site. |
| **Turtle Nesting blurb (on About)** | "Playa Hermosa is a protected area where sea turtles come to nest, a unique conservation experience." | OLD H3 under Privileged Location. Echoed by the "Coast protected" value tile + full Experiences turtle page. MISSING-from-About, not lost from site. |
| **"Weddings and Beachfront Events" section + CTA** | "Celebrate the most important moments of your life in our beachfront space. Discover all our options for events, weddings, and special celebrations." + **"View Events Page"** button. | OLD H2 with dedicated CTA. NEW About has no weddings section/CTA — survives only as the timeline phrase *"weddings & surf nights."* Likely covered by the separate `/eventos` page, but the **About-page weddings block + its CTA are MISSING** (no events link from About). |

### Present / Rewritten (not gaps)

- **"Our Story" narrative** — REWRITTEN (OLD ~6 long paragraphs → NEW shorter 2-paragraph "small idea that never left the beach" + 4-item timeline). Core facts (20+ years, family-run, on the sand, return guests) carried. Not flagged.
- **20+ years / beachfront / 90 min from San José** — PRESENT (stats strip + statement band).
- **Contact** (info@terrazadelpacifico.com, WhatsApp +506 8431 9953, Playa Hermosa/Puntarenas address, 90 min from San José) — PRESENT in shared footer (`site-footer.tsx`).
- **Schedule** (Check-in 3:00 PM, Check-out 1:00 PM, Pools 8:30 AM–8:30 PM) — PRESENT in footer. Note: OLD footer also lists **Free Yoga DOM 8 / SAB 4 / MIE 8** — those times are NOT in the NEW footer schedule block, but are PRESENT on the Experiences yoga page; minor.
- **"What Our Guests Say" (testimonials)** — PRESENT via Elfsight widget (`NEXT_PUBLIC_ELFSIGHT_ABOUT_ID`) appended after the About component.
- **"Ready to Live the Experience?" CTA** — PRESENT (rewritten as "Come see why people keep coming back" CTA band).

### Photos OLD used (About)

| OLD image | Reused in NEW About? |
|---|---|
| `/assets/Logo-nuevo-B86U915-.png` (nav + footer logo) | Yes (logo, different file). |
| `/assets/hero-aerial-beach-QbQLfxOv.jpg` (hero) | No — NEW hero is `g-aerial-beach-property-COogc_9W.jpg`. OLD hero file not reused. |
| `/assets/pool-starry-night-DUYiQ-e6.jpg` (LED pool at night) | **No — OLD-only.** This is the only image illustrating the 1,200-LED starry-sky pool story; with both the copy and the photo dropped, the LED-pool feature has no visual on NEW About. |
| `/assets/whale-watching-VSLDwvTY.jpg` | Reused on Experiences (whale gallery), not on About. |
| `/assets/turtle-nesting-qhRPIRHR.jpg` | Reused (NEW About "Coast protected" value tile + Experiences). |

### Aggregate note (About)

OLD About ≈ 9 content units (Story, LED Pool, Privileged Location incl. Whale/Turtle/wildlife, Weddings, 9-tile Facilities grid, Testimonials, CTA, Contact, Schedule).
**MISSING from About: 4 substantive units** — Facilities grid (9 amenities/stats), LED-pool narrative detail, Privileged-Location wildlife prose, Weddings section + Events CTA. (Whale/Turtle blurbs also dropped from About but covered elsewhere on site.)
**REWRITTEN: 2** (Story narrative, CTA). **PRESENT/carried (incl. footer + widget): Contact, Schedule, Testimonials, 20+/90-min/1,200-LED stats.**
The facilities grid is the biggest single loss — it carried the only hard amenity/inventory facts (room count, two pools, pet-friendly, EV charger, kids club, bakery, parking, WiFi) and they appear nowhere in the new About route.

---

## Experiences

OLD Experiences featured **4** experiences. NEW Experiences is a hub (`experienceHub`) + 4 detail pages (`experiences[]` in `content/experiences.ts`), each expanded into 5 SEO sections with galleries and a facts strip.

| OLD experience | OLD detail | In NEW? |
|---|---|---|
| **Whale Watching** | "Season July–October. Humpback whales migrate to warm Pacific waters to mate and give birth; viewable from Playa Hermosa." | **PRESENT** — `whale-watching` page, REWRITTEN + expanded (Overview, Season, What you may see, Why Playa Hermosa, Family-friendly). Season Jul–Oct retained. |
| **Turtle Nesting** | "Main nesting site; witness nesting ritual + baby-turtle release; works with local conservation projects; endangered species; educational, family." | **PRESENT** — `turtle-nesting` page, REWRITTEN + expanded (Overview, Conservation, Nesting/release, Responsible viewing, Educational value). Conservation + release + family-education themes all retained. |
| **Free Yoga** | "Sundays 8 AM · Saturdays 4 PM · Wednesdays 8 AM. Free, by the sea, all levels, open to guests." | **PRESENT** — `beachfront-yoga` page. Schedule (Sun & Wed 8 AM, Sat 4 PM), all-levels, free-for-guests all retained in facts + Schedule section. |
| **Live Music** | "Weekends at the restaurant; local artists; open-air dinner; tropical cocktails + Mediterranean cuisine; under the stars." | **PRESENT** — `live-music` page, REWRITTEN + expanded; ties to Vivace / Iguana Bar / Golden Beach Bar; weekends, local artists, cocktails, Mediterranean, sunset all retained. |

### Photos OLD used (Experiences)

| OLD image | Reused in NEW? |
|---|---|
| `/assets/whales-aerial-Bx8BrmsB.jpg` | Yes — whale-watching hero (`/images/whales-aerial-Bx8BrmsB.jpg`). |
| `/assets/baby-turtle-DGA7PRRL.jpg` | Yes — turtle-nesting hero. |
| `/assets/yoga-class-1Z8S9ilZ.jpg` | Yes — beachfront-yoga hero. |
| `/assets/live-music-U-RLRqGX.jpg` | Yes — live-music hero (also reused on About "Costa Rica fully" tile). |
| `/assets/Logo-nuevo-...png` | Yes (logo). |

All four OLD hero images carried over. NEW additionally adds galleries (Resort Highlights / Resturant photos).

### Aggregate note (Experiences)

**Clean page — 0 MISSING units.** All 4 OLD experiences (whale watching, turtle nesting, free yoga, live music) carried over, each REWRITTEN and substantially expanded; all 4 hero photos reused. Every OLD fact (whale season Jul–Oct, yoga schedule, conservation/release, weekend live music) is preserved. No content gap on Experiences.

---

## Bottom-line priority gaps

1. **About "Our Facilities" grid is gone** — 62 rooms, 2 pools, pet-friendly, high-speed WiFi, secure parking (24h), EV charger, kids club, bakery, direct beach access. These hard amenity facts appear nowhere on the new About route. (Top priority.)
2. **LED-pool story stripped to one timeline line** — lost: Italian-artist design, 1,200-LED "starry sky underwater," night-swim spectacle, low-energy/sustainability angle, AND the `pool-starry-night` photo.
3. **"Privileged Location" wildlife paragraph dropped** — howler monkeys, tropical birds, biodiversity prose gone.
4. **Weddings/Events block + "View Events Page" CTA missing from About** — only survives as a timeline phrase; no link to events from About.
5. **Experiences: no gaps** — all 4 experiences and photos fully carried and expanded.
# Restaurant Copy Audit — OLD vs NEW

Sources:
- OLD: `content/restaurante.json` (crawler snapshot of live `/restaurante`).
- NEW: `content/restaurant-page.ts`, `content/menu-vivace.ts`, `components/restaurant/restaurant-page.tsx`, `components/restaurant/vivace-menu.tsx`.

Note on scope: the OLD page's full dish list is **not** in the snapshot — the OLD menu was delivered as download-only PDFs ("View Menu in Spanish / Download", "View Menu in English / Download"). So the dish-level diff is OLD page text + PDFs vs NEW `menu-vivace.ts`. The NEW `menu-vivace.ts` is a structured transcription of those same EN/ES menus, so the actual à-la-carte items are now richer on NEW, not poorer. The real losses are in the **page body sections** that the redesign condensed or dropped.

## Restaurant (`/restaurante`)

### Missing copy

| OLD item | Detail (from OLD snapshot) | Where it lived | Status |
|---|---|---|---|
| **Iguana Bar** (full section) | "Located next to the main pool… tropical cocktails, cold drinks, and light snacks… direct pool service… casual and tropical atmosphere." **Hours: 10:00 AM – 6:00 PM** | OLD H2 "Iguana Bar" | **MISSING** — no Iguana Bar section anywhere in NEW restaurant page. (Bars now live on a separate `/bares` template — verify it's carried there, not lost.) |
| **Golden Beach Bar** (full section) | "Directly on the beach… feet in the sand… craft cocktails and cold beer… watch the sunset." **Hours: 11:00 AM – 7:00 PM. Location: Playa Hermosa, direct access.** | OLD H2 "Golden Beach Bar" | **MISSING** from restaurant page. (Same `/bares` caveat.) |
| **Artisan Bakery** (full section) | "specialty coffee and freshly baked products every morning… aroma of freshly baked bread and highland coffee… buttery croissants, artisan breads, homemade pastries." | OLD H2 "Artisan Bakery" | **MISSING** — no bakery copy in NEW page or menu. |
| **Per-meal opening hours** | Breakfast 7:00–10:00 AM · Lunch 12:00–3:00 PM · Dinner 6:00–9:00 PM | OLD H2 "Hours" | **MISSING as a structured block.** NEW only states hero meta "Open daily · 7 AM – 10 PM" + "Breakfast · Lunch · Dinner". The specific per-service windows (and the real 9 PM dinner close vs NEW's "10 PM") are gone. **Factual conflict: NEW hero says "7 AM – 10 PM"; OLD dinner closes 9 PM.** |
| **Chef Luigi long-form bio** | ~6 paragraphs: "A Taste of Sicily. A Passion Without Limits", born/raised in Sicily, "best meals aren't measured by complexity", "Every sauce is crafted with purpose. Every dish tells a story", "the soul of a chef…". | OLD H2/H3 "Chef Luigi" | **MISSING as on-page copy.** NEW chef section is a 2-sentence teaser + a `bioCta` link ("Read Chef Luigi's story →"). Confirm the linked bio page actually contains the full OLD narrative; if the CTA is a placeholder, the entire approved bio is lost. |
| **"Vivace Experience" four pillars** | Chef Luigi / Mediterranean Cuisine / **Wine Selection** ("Carefully curated list") / **Live Music** ("Weekends with special ambiance") | OLD H2 "Vivace Experience" | **PARTIAL/MISSING.** NEW folds chef + cuisine + wine into prose, but **"Live Music — Weekends with special ambiance" is dropped entirely** (special-night info). Wine survives only as "a wine list that knows its way around the Mediterranean." |
| **"Did You Know?" / Jacó Vivace tie-in** | "In the heart of Jacó… authentic Italian eatery and pizzeria with over 70,000 followers that inspired the Mediterranean cuisine… Both restaurants led by Chef Luigi… don't miss the original Vivace experience." | OLD body block | **MISSING.** Not in NEW page. (Note: prior SEO pass deliberately *distanced* the brand from Jacó, so this drop may be intentional — flag for client, do not auto-restore.) |
| **Reservation phone number** | "You can also call us at **+506 2643 3222**" | OLD "Reserve Your Table" | **MISSING from reserve section.** NEW reserve block offers "Reserve a Table" + "WhatsApp Us" only; the direct phone line is not surfaced there (it appears site-wide in header/footer, but the page-level reservation phone prompt is gone). |
| **Gallery caption labels** | "Magic Nights / Shared Moments / Creative Mixology / Unforgettable Sunsets / Spectacular View" | OLD H2 "Vivace Gallery" | **REWRITTEN/MISSING.** NEW "Day to Night" ambiance slider uses different alt text ("Beachfront dining by day", etc.); the five evocative OLD caption labels are not carried. Low priority (decorative). |

### Menu comparison (OLD vs NEW)

The OLD snapshot exposes **no inline dish list** — the menu was PDF download only. The NEW `menu-vivace.ts` is a full structured transcription of the EN/ES menus and is the new source of truth. So at the dish level NEW is a net **gain**, not a loss. Catalog of NEW `menu-vivace.ts` (7 categories, ~64 items):

- **Appetizers / Entradas (13):** Tuna Carpaccio, Salmon Carpaccio, Salmon Tartare, Beef Carpaccio, Tuna Tartare, Chicken Caesar Salad, Mixed Ceviche, Shrimp Ceviche, Fish Ceviche, Shrimp Tacos, Fried Calamari, Caprese Salad, Terraza Salad.
- **Pizzas (4):** Margherita, Prosciutto Crudo, Margherita w/ Shrimp, Porcini Mushrooms.
- **Pastas (13):** Fettuccine w/ Lobster, Fettuccine Seafood, Spaghetti Salmon+Shrimp, Spaghetti Mussels+Shrimp, Fettuccine Porcini, Spaghetti Pesto, Fettuccine Bolognese, Rigatoni alla Norma, Ravioli (Bolognese / Tomato / White), Gnocchi (Bolognese / Pesto).
- **Fish / Pescado (12):** Seafood Platter for Two, Grilled Lobster, Grilled Octopus, Sea Bass in Shrimp Sauce, Sicilian Sea Bream, Sesame Tuna, Salmon Yogurt-Lemon, Tempura Sea Bream, Fried Red Snapper, Fried Calamari, Shrimp Rice, Fish Fingers. *(side-dish note included)*
- **Meat / Carne (9):** Ossobuco, Pork Tenderloin, Cordon Bleu, Chicken Escalopes, Angus Burger, Pizzaiola Chicken, Grilled Chicken Breast, Chicken Rice, Chicken Fingers. *(side-dish note included)*
- **Drinks / Bebidas (10):** Juices, Smoothies, Soft Drinks, Imperial, Imported Beer, House Wine, Bottle of Wine, Cocktails, Coffee/Espresso, Water.
- **Dessert / Postres (7):** Display desserts, Carrot Cake, Chocolate Cake, Tiramisù, Panna Cotta, Gelato 6oz, Gelato 3oz.

**Drops (OLD → NEW):** none verifiable from the snapshot (OLD dishes lived only in the PDFs). **Adds:** the entire structured à-la-carte menu is new on the web page (OLD only had PDF download). **Action item:** the two OLD PDFs (`menu-vivace-es.pdf`, `menu-vivace-en.pdf`) still exist in `public/pdfs/` — confirm `menu-vivace.ts` matches the latest PDF and that no PDF-only dish/category (e.g., a kids' menu or breakfast list) was omitted. Breakfast/bakery items in particular appear in NEW menu **only** indirectly — no dedicated breakfast menu category exists.

### Photos OLD used
From OLD `imgs[]` (filenames preserved in NEW under `/images/`):
- `Logo-nuevo-B86U915-.png` (header + footer)
- `restaurant-view-WsRnSUPN.jpg` — used in NEW (ambiance slide)
- `chef-luigi-BOxS8-8w.jpg` — used in NEW (chef section)
- `iguana-bar-pool-CP3k5v8t.jpg` — **NOT used** on NEW restaurant page (Iguana Bar section dropped)
- `golden-beach-bar-qN10cbKY.jpg` — **NOT used** on NEW restaurant page (Golden Beach Bar section dropped)
- `restaurant-night-DDkbFUTM.jpg` — used in NEW (hero + ambiance)
- `restaurant-dining-nygPbVtS.jpg` — used in NEW (menus card + ambiance)
- `restaurant-cocktails-ITbgxYoM.jpg` — used in NEW (drinks card, ambiance, reserve)
- `restaurant-sunset-silhouette-CBBvMTsI.jpg` — **NOT referenced** in NEW restaurant-page.ts (gallery photo dropped)
- `restaurant-view-2-Cv55rCA1.jpg` — **NOT referenced** in NEW restaurant-page.ts (gallery photo dropped)

### Aggregate note
- **MISSING (priority):** Iguana Bar section + hours, Golden Beach Bar section + hours/location, Artisan Bakery section, structured per-meal hours, full Chef Luigi bio (now teaser+CTA — verify link), "Live Music — weekends" special-night line, page-level reservation phone, "Did You Know?" Jacó tie-in (likely intentional). = **~8 distinct content losses.**
- **REWRITTEN (acceptable SEO rework):** Hero intro, chef teaser, menu card blurbs, ambiance/gallery section, reserve CTA — ~5 sections reworded. Not flagged.
- **PRESENT/IMPROVED:** Full à-la-carte menu (NEW gain), bilingual menu CTAs, WhatsApp/phone in footer, core chef-Sicily positioning.
- **Highest-risk items to confirm with client:** (1) hours conflict (NEW "7 AM–10 PM" vs OLD dinner-closes-9 PM + per-service windows), (2) whether bars/bakery moved to `/bares` or were lost, (3) whether the Chef Luigi bio CTA resolves to the full approved narrative.
# Rooms Copy Audit — OLD (approved) vs NEW (rebuild)

Scope: `/habitaciones` hub + 4 room types (Standard, Superior, Junior Suite, Villas).
NEW copy was deliberately SEO-rewritten, so reworded prose is NOT flagged. Italian ignored (es/en only).

OLD sources: `content/habitaciones*.json`
NEW sources: `content/suites-hub.ts`, `content/suite-detail.ts`, `content/rooms-compare.ts`, `content/room-galleries.ts`, `lib/dictionaries.ts` (`suites.items`).

---

## Rooms (`/habitaciones`)

### Hub — missing copy

The OLD hub was a compact card grid + comparison table + "Ready to Book?" band. NEW hub is a cinematic editorial layout. All hard specs and the comparison table carried over; the NEW hub adds material (an "Included in every room" block, intro band, LinkPreviews) rather than dropping it.

| Unit | OLD | NEW | Class |
|---|---|---|---|
| Hub H1 / intro | "Our Rooms" / "Find the perfect accommodation…" | "Wake to the Pacific, Four Ways" + intro band | REWRITTEN |
| 4 room cards w/ capacity + sqm + beds | Yes | Yes (`dict.suites.items` + hub editorial) | PRESENT |
| Per-card feature bullets (pool/garden view, floor, A/C, TV, WiFi) | Yes | Folded into kickers/descriptions + "Included" block | REWRITTEN |
| Room comparison table (Capacity/Size/Beds/Kitchen/Pool View) | Yes | Yes (rooms-compare + comparar page) | PRESENT |
| "Ready to Book?" amenities-included line | Yes | "Included in every room" 6-item block (expanded) | PRESENT (expanded) |
| Best-rate-direct guarantee | Yes | Yes | PRESENT |

No hub-level facts dropped. (Aggregate reworded units on hub ≈ 6.)

---

## Per room type — spec checklist (OLD vs NEW) + missing items

Legend: ✓ = present in NEW, — = absent in OLD, ✗ = dropped from NEW.

### Standard Room (`estandar`)

| Spec / feature | OLD | NEW | Status |
|---|---|---|---|
| Capacity | 4 persons | 4 (`guests:"4"`) | ✓ PRESENT |
| Size | 32 m² | 32 m² | ✓ PRESENT |
| Beds | 2 Double | 2 Double | ✓ PRESENT |
| View | Tropical garden | Gardens / "Tropical gardens" | ✓ PRESENT |
| Floor | Ground or upper | Ground or upper | ✓ PRESENT |
| Air Conditioning | ✓ | ✓ | ✓ PRESENT |
| Flat-screen TV | ✓ | ✓ | ✓ PRESENT |
| Free WiFi | ✓ | ✓ | ✓ PRESENT |
| Hot Water Shower | ✓ | ✓ | ✓ PRESENT |
| Hair Dryer | ✓ | ✓ | ✓ PRESENT |
| Refrigerator | ✓ | ✓ | ✓ PRESENT |
| Children policy (3 tiers: 0–3 free / 4–11 child / 12+ adult) | ✓ | ✓ | ✓ PRESENT |

Dropped facts: **none.** "Quiet atmosphere" → reworded into kicker "Quiet & serene" (REWRITTEN).

### Superior Room (`superior`)

| Spec / feature | OLD | NEW | Status |
|---|---|---|---|
| Capacity | 4 persons | 4 | ✓ PRESENT |
| Size | 32 m² | 32 m² | ✓ PRESENT |
| Beds | 2 Double | 2 Double | ✓ PRESENT |
| View | Main pool | Main pool / Pool | ✓ PRESENT |
| Floor | Ground or upper | Ground or upper | ✓ PRESENT |
| A/C, TV, WiFi, Hot Water Shower, Hair Dryer, Refrigerator | ✓ (all 6) | ✓ (all 6) | ✓ PRESENT |
| Children policy (3 tiers) | ✓ | ✓ | ✓ PRESENT |

Dropped facts: **none.** "Close to restaurant and ocean" → reworded into descriptions (REWRITTEN).

### Junior Suite (`junior-suite`)

| Spec / feature | OLD | NEW | Status |
|---|---|---|---|
| Capacity | 2 persons | 2 | ✓ PRESENT |
| Size | 32 m² | 32 m² | ✓ PRESENT |
| Beds | 1 King Size | 1 King | ✓ PRESENT |
| View | Main pool (privileged) | Main pool | ✓ PRESENT |
| Floor | Upper floor | Upper floor | ✓ PRESENT |
| Scarcity: only 2 available | "Only 2 rooms available" | "Only 2 suites" | ✓ PRESENT |
| Private balcony w/ armchairs | ✓ ("balcony with armchairs") | ✓ "Private balcony with armchairs" | ✓ PRESENT |
| A/C, TV, WiFi, Hot Water Shower, Hair Dryer | ✓ | ✓ | ✓ PRESENT |
| Refrigerator **and Minibar** | ✓ | ✓ "Refrigerator & minibar" | ✓ PRESENT |
| Children policy | "Children not accepted" (adults only) | "Adults only — children not accepted" | ✓ PRESENT |

Dropped facts: **none.** (Note: 3-tier child policy correctly does NOT apply here — Junior is adults-only in both.)

### Villas (`villas`)

| Spec / feature | OLD | NEW | Status |
|---|---|---|---|
| Capacity | 6 persons | 6 | ✓ PRESENT |
| Size | 72 m² | 72 m² | ✓ PRESENT |
| Beds | "Multiple options" | "Multiple" | ✓ PRESENT |
| Villa 216 config | King + double + trundle, upper level | "King + double + trundle · upper" | ✓ PRESENT |
| Villa 116 config | Three double beds, ground floor | "Three double beds · ground" | ✓ PRESENT |
| View | Partial ocean view | Partial ocean (detail) / "Ocean" (compare facet) | ✓ PRESENT (minor inconsistency, see below) |
| Air Conditioning | ✓ | ✓ | ✓ PRESENT |
| Cable TV | ✓ | ✓ | ✓ PRESENT |
| Free WiFi | ✓ | ✓ | ✓ PRESENT |
| Full Kitchen | ✓ | ✓ | ✓ PRESENT |
| Living room / dining | ✓ "Spacious living room" | ✓ "Living & dining area" | ✓ PRESENT |
| Refrigerator | ✓ | ✓ (implied in full kitchen) | ✓ PRESENT |
| Coffee maker | ✓ | ✓ | ✓ PRESENT |
| Electric kettle | ✓ | ✓ | ✓ PRESENT |
| Microwave | ✓ | ✓ | ✓ PRESENT |
| Blender | ✓ | ✓ | ✓ PRESENT |
| **Rice cooker** | ✓ | ✗ | **MISSING** |
| Complete kitchenware (plates/glasses/cutlery) | ✓ | ✓ | ✓ PRESENT |
| Cooking utensils | ✓ | ✓ (folded into kitchenware) | ✓ PRESENT |
| **"Recently renovated"** selling point | ✓ (in tagline) | ✗ | **MISSING (minor)** |
| Children policy (3 tiers) | ✓ | ✓ | ✓ PRESENT |

Dropped facts:
- **MISSING — Rice cooker.** OLD's explicit "Fully Equipped Kitchen" bullet list named a rice cooker; NEW villa amenities list it out (coffee maker, kettle, microwave, blender, kitchenware) but drops the rice cooker. The only concrete in-room feature actually removed.
- **MISSING (minor) — "Recently renovated."** OLD villa header/body claimed recent renovation; NEW has no renovation claim. A factual selling point lost, not a spec.

---

## Photos OLD used per room

(`imgs` from OLD JSON; logo entries omitted.)

- **Hub:** room-two-beds, room-standard-wide, room-junior-suite-wide, villa-living-room.
- **Standard:** Suit photos/RLR_4906, room-standard-wide, room-interior-C3, room-two-beds.
- **Superior:** Suit photos/RLR_4906, room-two-beds, room-interior-C3, room-standard-wide, g-aerial-pool-overview.
- **Junior Suite:** Suit photos/DSC03704, DSC03703, room-junior-suite-wide, DSC03689, room-king-bed, pool-aerial-day.
- **Villas:** villa-living-room, Suit photos/RLR_48512, IMG_4757, IMG_4779, IMG_4763, IMG_4762, villa-kitchen-detail.

NEW `room-galleries.ts` coverage vs OLD:
- Superior: NEW 4 photos — OLD's room-interior + g-aerial-pool kept; OLD's standard-wide swapped for pool-aerial. Effectively parity.
- Standard: NEW 4 photos — same pool of images. Parity.
- Junior Suite: NEW 6 photos — matches OLD set (DSC03703/04/689, junior-suite-wide, king-bed, pool-aerial). Parity.
- Villas: NEW 7 photos — adds villa-bedroom-view; **OLD's `IMG_4762.jpg` is not in the NEW gallery** (NEW uses IMG_4757/4779/4763 + RLR_48512 + 2 villa stock). One OLD villa photo dropped; net count higher.

Photo note: only OLD villa `IMG_4762.jpg` is absent from NEW; everything else carried or expanded.

---

## Aggregate note

- **Specs (sqm / capacity / beds / view / floor):** 100% carried across all 4 room types. No size, occupancy, or bed-config fact was lost. Villa 216/116 per-unit bed layouts preserved verbatim.
- **Amenities:** Standard, Superior, Junior all carry their full amenity lists (incl. Junior's minibar and balcony-with-armchairs, and the "only 2 suites" scarcity). Only the **Villa rice cooker** is genuinely dropped.
- **Children policy:** 3-tier policy preserved on Standard/Superior/Villas; Junior's adults-only preserved.
- **Prices:** OLD shows **no price points anywhere** on any rooms page; NEW `dict.suites.perNight` is empty. Nothing dropped — confirming absence, not omission.
- **Real MISSING units: 2** — (1) Villa rice cooker [amenity], (2) Villa "recently renovated" [selling point, minor]. Plus 1 OLD villa photo (`IMG_4762`) not in NEW gallery.
- **REWRITTEN (aggregate):** ~6 hub units + per-room selling phrases ("quiet atmosphere," "close to restaurant and ocean," "privileged pool view," "spacious living room," "ideal for families") reworded into SEO descriptions/kickers — expected, not flagged as gaps.
- **Minor inconsistency to note (not a drop):** Villa view is "Partial ocean" in OLD and in NEW `suite-detail`/`dict`, but the NEW compare-page facet labels it plain "Ocean view." Worth aligning to "Partial ocean" for accuracy.

**Bottom line:** Rooms section is a near-complete carry-over. Fix list: re-add **rice cooker** to villa amenities, optionally restore the **"recently renovated"** villa note, align the villa view label, and (optional) restore OLD villa photo `IMG_4762`.
# Events (`/eventos`)

Audit of OLD client-approved live pages vs NEW Next.js rebuild.
OLD sources: `content/eventos.json`, `content/eventos-bodas.json`, `content/eventos-surf-nights.json`, `content/eventos-otros.json`.
NEW source: `content/events.ts` (all event copy is data-driven; `components/info-page/event-info-page.tsx`, `info-hub.tsx`, `info-page.tsx`, and the `app/[locale]/eventos/*` routes only render that data — no hardcoded facts).

Method note: NEW copy was deliberately SEO-rewritten (heavy Playa Hermosa / Jaco / beachfront framing), so reworded prose is NOT flagged. Only concrete dropped facts (capacities, named venues, pricing, vendor/media credits, schedules, specific bullet inclusions) are flagged MISSING.

---

## Hub — missing copy

OLD hub (`eventos.json`) was a short teaser linking out to 3 sub-pages (Weddings, Surf Nights, Other). NEW hub (`eventHub` in events.ts) carries the same role with rewritten intro. Almost everything transferred or moved into sub-pages. Hub-level gaps:

| Unit | Status | Notes |
|---|---|---|
| "Your Perfect Event Here" intro (spacious gardens, natural privacy, dedicated professional team) | REWRITTEN | Reframed into hub description + per-page overviews |
| Wedding teaser block | PRESENT | Now its own page |
| Surf Nights 3-bullet teaser (competition-grade lighting / safe open-sea / world-class) | REWRITTEN | Folded into surf-nights page prose |
| Other Events teaser ("personalized catering from Chef Luigi, audiovisual technology, live entertainment, tropical decoration") | PARTIAL — see Other page | Chef Luigi catering kept; "audiovisual technology" + "tropical decoration" as explicit phrases largely dropped |
| Footer "Schedule" block (Check-in 3PM, Check-out 1PM, Pools 8:30AM–8:30PM, Free Yoga DOM/SAB/MIE times) | OUT OF SCOPE | Global footer, not events-specific; verify it exists in NEW `site-footer.tsx` separately |

The hub itself has **no material MISSING copy** beyond what is covered per-page below.

---

## Per page

### Weddings (OLD `/eventos/bodas` → NEW `bodas` / `weddings`)

OLD offered **4 explicitly named, described venues**. NEW replaced these with generic, unnamed "ceremony locations / reception options" prose. This is the single biggest content loss in the events section.

| OLD unit | Status | NEW equivalent |
|---|---|---|
| **Venue 01 — Beachfront Garden**: "tropical garden directly facing the Pacific Ocean. White chairs, rose petals, sound of waves as background music" | **MISSING** (name + specifics) | Generic "oceanfront areas, gardens and outdoor spaces" |
| **Venue 02 — Evening Ceremony**: "Beneath Costa Rican stars, professional lighting and a floral arch as backdrop… intimate atmosphere" | **MISSING** (name + floral arch detail) | "Most couples choose a sunset ceremony" — arch/lighting detail dropped |
| **Venue 03 — Vivace Terrace**: "perfect beachfront reception. Gourmet dinner by Chef Luigi as the sun sets. String lights, tropical breeze, Mediterranean cuisine" | **MISSING** (named venue) | Vivace cuisine kept generically; "Vivace Terrace" as a named reception space + "string lights" dropped |
| **Venue 04 — Starlit Pool**: "Unique in Central America, pool with **1,200 LED lights** creates a starry sky beneath the water. Ideal for a welcome cocktail or reception" | **MISSING** (high-value) | The 1,200-LED pool is NOT offered as a wedding venue/cocktail space anywhere in events.ts |
| Section heading "Our Venues" + "Every corner… is a perfect setting for your love story" | **MISSING** (as a structured venue showcase) | No venue-cards section in NEW |
| Planning form fields: Couple's names / Tentative date / Approximate number of guests / "Tell us about your dream wedding" | REWRITTEN | NEW "Planning inquiry" section asks for "tentative date, approximate guest count, type of celebration" as prose (no form) |
| Contact: `mercadeo1@terrazadelpacifico.com` + "wedding coordinators" + "Send via WhatsApp" | **MISSING** (specific email) | NEW CTA uses generic events email/WhatsApp; the dedicated `mercadeo1@` wedding address is dropped |
| Hero "Your Perfect Beach Wedding" + main narrative (Pacific backdrop, gold/pink/crimson sunset) | REWRITTEN | Kept in spirit, reworded |
| **Capacity** | n/a both | OLD never stated a numeric guest capacity; NEW also does not. No regression, but neither quantifies capacity. |

OLD vs NEW summary — Weddings:
- **Ceremony/reception spaces**: OLD = 4 named, distinct spaces (Garden / Evening / Vivace Terrace / Starlit Pool). NEW = unnamed "oceanfront areas, gardens, terraces, poolside, restaurant-connected" prose. Recommend restoring the 4 named venues.
- **Catering**: OLD "Chef Luigi… Mediterranean." NEW "Vivace… Mediterranean, Chef Luigi." PRESENT.
- **Packages/pricing**: Neither OLD nor NEW lists wedding packages or prices.
- **Signature 1,200-LED pool as a wedding space**: OLD highlighted it; NEW omits it for weddings. MISSING.
- **Dedicated wedding email (`mercadeo1@`)**: MISSING in NEW.

### Surf Nights (OLD `/eventos/surf-nights` → NEW `surf-nights`)

OLD was rich with concrete, factual, promotable details. NEW rewrote into softer, hedged prose ("format may vary", "registration announced before each date") and **dropped most hard facts**.

| OLD unit | Status | Notes |
|---|---|---|
| "First **live televised** night surfing event in Central America" | **MISSING** | NEW never mentions TV broadcast at all |
| "one of only **4 places in the world** with professional infrastructure to illuminate the open ocean" | **MISSING** | Strong differentiator dropped |
| TV coverage by **Canal 33 / Trivisión**, "broadcast live nationwide… thousands of homes" | **MISSING** | Vendor/media credit dropped |
| Narration by **Freddy "Salsiboy" Camacho** + "certified judges" / "international certified judges" | **MISSING** | Named talent + judge credential dropped |
| **Cash prizes**: 1st `$300`, 2nd `$200`, 3rd `$100` USD | **MISSING** (high-value pricing) | NEW only says "Free for competitors"; no prize purse |
| "**100% Free Registration** — no registration fee, only your passion and your board" | PRESENT (as fact "Free for competitors") + REWRITTEN | Kept in spirit |
| Competition Details — Format bullets (night surf under pro lighting / intl certified judges / live narration / live TV broadcast) | **MISSING** | Bullet list of credentials dropped |
| Environment bullets: "**Safe zone in open sea (crocodile-free)**", "Consistent waves at Playa Hermosa", "**Music and gastronomy festival**", "Community of professional surfers" | **MISSING** | "Crocodile-free" safety claim + "music & gastronomy festival" framing dropped |
| Pull-quote: "Surf Nights is not just a competition… the whole world watches." | **MISSING** | Testimonial/quote dropped |
| "Professional Infrastructure / lighting transforms Playa Hermosa into a world-class stage" | REWRITTEN | Kept as "Professional lighting" section |
| NEW additions (not in OLD): "Spectator experience", "Sponsor opportunities / brands & activations" sections | (NEW-only) | Net-new content, fine |

OLD vs NEW summary — Surf Nights: the recurring-event credentials that made it newsworthy (live TV / Canal 33-Trivisión, named narrator, certified intl judges, $300/$200/$100 prize purse, "4 places in the world", "crocodile-free", "music & gastronomy festival") are **all absent in NEW**. NEW is accurate but generic/forward-looking; it dropped the proof-points of the last edition.

### Other Events (OLD `/eventos/otros` → NEW `otros` / `other-events` hub + 4 sub-pages)

OLD was one page with 4 event-type blocks, each carrying a **5-item inclusion bullet list**, plus a 3-item "What We Offer" block. NEW expanded each type into its own full page (corporate-events, family-celebrations, private-dinners, parties-and-celebrations) with rewritten prose — but the **specific inclusion bullets were converted to general prose and several concrete items were dropped.**

| OLD type / bullets | Status in NEW |
|---|---|
| **Corporate**: Versatile/modern spaces; **complete audiovisual technology**; personalized executive catering; professional coordination team; **team building options** | Mostly REWRITTEN. "Audiovisual technology" survives only as vague "technical needs"; explicit bullet list dropped. Team-building PRESENT (own section). |
| **Family Celebrations**: Private/secure spaces; personalized menus all ages; **activities for children and adults**; **themed decoration**; warm atmosphere | REWRITTEN. "Activities for children/adults" + "themed decoration" dropped as explicit items. |
| **Private Dinners**: Personalized Chef Luigi; **gourmet tasting menu**; premium attentive service; romantic/elegant atmosphere; ocean views | REWRITTEN. "Gourmet tasting menu" as a named offering dropped; Chef Luigi/Vivace + ocean views PRESENT. |
| **Parties & Celebrations**: DJ & live entertainment; creative decoration; varied catering; spaces to dance; festive atmosphere | REWRITTEN (own page). DJ/music/catering PRESENT; "creative decoration" dropped. |
| **What We Offer** triad: Versatile Spaces / Gourmet Catering by Chef Luigi / Entertainment (live music, DJ, activities) | REWRITTEN across pages — PRESENT in substance. |
| "audiovisual technology" (appears on hub + corporate) | **MISSING** as an explicit selling point — only vaguely referenced. |

OLD vs NEW summary — Other: no whole event type was lost (all 4 carried over, in fact promoted to dedicated pages). The losses are **granular inclusion bullets**: audiovisual/AV technology, themed/creative decoration, kids+adults activities, gourmet tasting menu. Classify as low-to-medium priority MISSING (specific amenities), since the SEO rewrite intentionally generalized them.

---

## Photos OLD used

OLD `/assets/*` filenames referenced by the events pages (for asset-parity checking against NEW `/images/`):

**Hub:** wedding-beach-ceremony-NqUR8iSS.jpg, surf-nights-C5MPn3sY.jpg, events-corporate-CUI1lTmu.jpg
**Weddings:** events-aerial-sunset-DjFbPbt1.jpg, wedding-venue-wtXbsJOx.jpg, wedding-ceremony-night-BS1EmGIk.jpg, restaurant-sunset-T7wmiQ85.jpg, events-pool-night-lights-BcHsd1B9.jpg, wedding-beach-ceremony-NqUR8iSS.jpg, wedding-couple-BUFflCio.jpg, wedding-setup-BpzA9vBd.jpg
**Surf Nights:** surf-nights-hero-Cp_0Sh9X.png, surf-nights-shirt-jqYD2ns3.jpg, surf-nights-C5MPn3sY.jpg, surf-nights-winners-B4pwft7w.jpg
**Other:** events-corporate-CUI1lTmu.jpg, events-pool-aerial-DuNYfspA.jpg, events-romantic-setup-CdyCZVZj.jpg, events-outdoor-dining-DZwFtwJD.jpg, events-beach-lounge-BX7jVZUA.jpg, events-pool-party-D_ez1wdr.jpg, events-party-IPZcQeS1.jpg, events-aerial-sunset-DjFbPbt1.jpg, events-pool-night-lights-BcHsd1B9.jpg, events-building-Bvc9tdB1.jpg

NEW reuses most of these (now under `/images/`) plus new real-shoot photos (`/images/Wedding/*.JPG`, `/images/Resturant/*`, `/images/Resort Highlights/*`). OLD-only images not clearly carried into NEW events galleries: `wedding-venue-wtXbsJOx.jpg`, `wedding-couple-BUFflCio.jpg`, `wedding-setup-BpzA9vBd.jpg`, `restaurant-sunset-T7wmiQ85.jpg`, `events-pool-aerial-DuNYfspA.jpg`, `surf-nights-winners-B4pwft7w.jpg` is kept (surf), `events-corporate-CUI1lTmu.jpg` kept. The displaced wedding-specific stock shots are largely superseded by real `/images/Wedding/` photography — not a content gap.

---

## Aggregate note

- **REWRITTEN (count): ~14 units** — hub teasers, wedding hero narrative + planning form, surf-nights lighting section, all 4 "Other" event-type blocks and the "What We Offer" triad were reworded but retain their substance.
- **PRESENT: core offering intact** — all event categories carried over; Other Events was *expanded* from one page into 4 dedicated SEO pages.
- **MISSING — priority items to restore (client-approved facts the rebuild dropped):**
  1. **Surf Nights — Cash prize purse ($300 / $200 / $100 USD).** High priority; concrete, promotable.
  2. **Surf Nights — media/credentials**: live TV broadcast, **Canal 33 / Trivisión**, narrator **Freddy "Salsiboy" Camacho**, international certified judges, "**4 places in the world**", "**crocodile-free** safe zone", "music & gastronomy festival". Differentiators that made the event newsworthy.
  3. **Weddings — 4 named venues** (Beachfront Garden, Evening Ceremony, **Vivace Terrace**, **Starlit Pool w/ 1,200 LED lights** as a cocktail/reception space). Currently genericized.
  4. **Weddings — dedicated coordinator email `mercadeo1@terrazadelpacifico.com`** (NEW only uses the generic events address).
  5. **Other Events — explicit inclusion bullets** (audiovisual/AV technology, themed/creative decoration, kids+adults activities, gourmet tasting menu). Lower priority.
- **Not lost / no regression:** Chef Luigi/Vivace catering, free surfer registration, Mediterranean cuisine, all 4 "Other" event categories, ocean/sunset framing.
- **NEW-only additions:** Surf Nights "Spectator experience" + "Sponsor opportunities" sections; per-type dedicated pages with `facts` strips and related-event cross-links.
# Audit 06 — Gallery, Policies, Photo Organization

OLD (client-approved) site: `/Users/tyson/terraza-del-pacifico/terraza-web-creator-main/` (React/Vite, re-imported under cwd `src/`).
NEW rebuild: `/Users/tyson/terraza-del-pacifico/` (Next.js, `app/[locale]`, es/en).
Crawler snapshots of the OLD rendered copy: `content/galeria.json`, `content/politicas.json` (these were imported verbatim into the NEW repo and, for `/politicas`, are still the live data source).

---

## Gallery (`/galeria`) — missing copy

The OLD `/galeria` (rendered in `content/galeria.json` outline/text; album logic in `terraza-web-creator-main/src/pages/Gallery.tsx`) exposed **8 named albums** with photo counts. The NEW `/galeria` (`components/luxury/gallery-sections.tsx`, 5 `CATEGORIES`) consolidates these into **5 bands**. Mapping OLD album → NEW section:

| OLD album (label · count) | NEW section | Status |
|---|---|---|
| HOTEL · 19 | (folded into **Pool** / **Beach & Grounds**) | REWRITTEN/merged |
| ROOMS · 7 | **Suites & Rooms** | PRESENT (renamed) |
| RESTAURANT · 20 | **Dining** (Vivace Beachfront) | PRESENT (renamed) |
| EVENTS · 24 | **Weddings** only | PARTIAL — events narrowed to weddings |
| EXPERIENCES · 6 | — | **MISSING** as a gallery category |
| DRONE · 11 | — (aerials scattered into Pool/Beach) | **MISSING** as a category |
| POOL BY NIGHT · 12 | **Pool** (2 night frames only) | **MISSING** as a dedicated category |
| FAMILIES · 7 | — (1 family photo in Beach) | **MISSING** as a category |

Missing / changed copy units:
- **Category labels gone:** "Experiences", "Drone", "Pool by Night", "Families" no longer exist as gallery headings. NEW headings are Pool / Weddings / Dining / Suites & Rooms / Beach & Grounds.
- **Photo-count captions dropped.** OLD showed "· N photos" per album; NEW bands do not surface a count.
- **Per-image alt text / captions rewritten.** OLD had specific Spanish alts per photo (e.g. "Iguana Bar piscina", "Chef con pasta al nero", "Limpieza de playa", "Ceviche con vino blanco", "Surf Nights ganadores"). NEW uses one generic bilingual `alt` per category plus a numeric index `(1)…(8)` — individual descriptive captions are LOST. This also thins the `ImageGallery` JSON-LD captions vs. what OLD photos implied.
- **Gallery intro line** "Explore the spaces and moments of Terraza del Pacífico" → replaced by the bilingual hero "Galería / Fotos del hotel…" (REWRITTEN, acceptable).
- **Volume:** OLD surfaced ~106 curated gallery images across 8 albums; NEW `/galeria` shows 5 bands × 8 = **40 images**. The new shoot folders hold far more (see Part B), so this is a curation choice, not a sourcing limit.

Net: gallery structure REWRITTEN (8→5), 4 OLD categories effectively MISSING as browsable sections, per-photo captions MISSING.

---

## Policies (`/politicas`) — missing-policies table

The NEW `/politicas` page (`app/[locale]/politicas/page.tsx`) renders `PageScaffold` (default variant) driven directly by **`content/politicas.json` — which is the OLD crawler snapshot itself**. `buildSections` turns each OLD `H2:` heading into a section with its body text, so the policy bodies survive. BUT the snapshot is **English-only**; no Spanish translation of the policy bodies exists anywhere in `content/`, `components/`, or `app/` (grep for "48 horas"/"mascotas"/"3:00 PM" finds none). Only the SEO `<title>/<desc>` are localized.

| OLD policy (from `politicas.json`) | OLD content | NEW status |
|---|---|---|
| **Booking & Cancellation** | "Reservations must be made in advance. Cancellations must be notified at least **48 hours** in advance to avoid charges." | PRESENT (renders), **English-only on `/es`** |
| **Pet Policy** | "We accept pets in certain rooms. Check with reception for availability and additional fees." | PRESENT, **English-only on `/es`** |
| **Check-in & Check-out** | Check-in 3:00 PM / Check-out **12:00 PM** | PRESENT, **English-only**. ⚠ Conflicts with footer Schedule which says **Check-out 1:00 PM** — same discrepancy carried over from OLD. |
| **Terms and Conditions** | "By making a reservation, you agree to our terms and conditions of service." | PRESENT, English-only (stub sentence — no actual T&C detail in either site) |
| **Privacy Policy** | "We protect your personal information in accordance with applicable privacy laws." | PRESENT, English-only (stub sentence — no detail in either site) |

Findings:
- **No policy is fully MISSING** — all 5 render because the page is literally fed the OLD snapshot.
- **Real gap = localization:** every policy body displays in English even on the Spanish (primary) route. This is the substantive regression to flag.
- Pre-existing thinness carried over: Terms and Privacy are one-sentence placeholders in both sites (no cancellation-fee schedule, no GDPR/data-handling specifics, no deposit terms).
- **Check-out time inconsistency** (12:00 PM in policy vs 1:00 PM in footer) is inherited from OLD and still unresolved in NEW.

---

## Photo Organization — OLD themes vs NEW shoots

### 1. OLD theme folders → file count → OLD page/category usage

OLD photos live in `terraza-web-creator-main/src/assets/gallery/<theme>/` (plus loose files in `src/assets/`). Cross-referenced against `Gallery.tsx` albums and the `imgs` arrays in the crawler snapshots.

| OLD theme folder | files | OLD gallery album(s) it fed | Also surfaced on |
|---|---:|---|---|
| `drone/` | 11 | **DRONE** album (all 11) | hero/aerial accents site-wide |
| `eventos/` | 9 | **EVENTS** album (couples, wedding arch/aisle/ceremony) | events pages |
| `experiencias/` | 2 | **EXPERIENCES** album (baby turtle, beach cleanup) | experiences |
| `familias/` | 7 | **FAMILIES** album (all 7) | — |
| `hotel/` | 13 | **HOTEL** album (pool, villas, rooms-garden, reception, sign) | home/about |
| `piscina-nocturna/` | 12 | **POOL BY NIGHT** album (all 12) | — |
| `restaurante/` | 14 | **RESTAURANT** album (ceviche, chef-pasta, lobster, desserts, sea-view) | restaurant page |
| **theme total** | **68** | + ~38 loose `src/assets/*` (rooms, wedding, surf-nights, whales, yoga, live-music) used by ROOMS/EVENTS/EXPERIENCES | |

OLD gallery total surfaced ≈ 106 images across 8 albums.

### 2. NEW shoot folders → NEW gallery sections

NEW photos live in `public/images/<Shoot Name>/` (organized by photo SHOOT, not theme) plus loose `public/images/*.jpg` (the OLD loose/hashed assets carried over).

| NEW shoot folder | files | NEW `/galeria` section(s) it feeds (`gallery-sections.tsx`) | Other NEW use |
|---|---:|---|---|
| `Resort Highlights/` | 65 | **Beach & Grounds** (aerials, AM5_9388) | experience supplements (whale/turtle/yoga), hero/about |
| `Wedding/` | 82 | **Weddings** (8 of 82) | event "weddings" supplements (`lib/luxury-gallery.ts`) |
| `New Pool/` | 18 | **Pool** (4 drone-pool frames of 18) | — |
| `Suit photos/` | 16 | **Suites & Rooms** (4 of 16) | suite-detail pages |
| `Resturant/` | 105 | **Dining** (1L6A25xx, 3 of 105) | live-music + private-dinner supplements |
| **shoot total** | **286** | only ~30 of 286 surfaced in `/galeria`; rest reachable via per-page supplements or unused | |

So NEW org is shoot-centric and far larger (286 in folders + loose), but `/galeria` curates only ~40. Theme intent is now implicit (you infer "pool night" from filenames inside `New Pool/`), not an explicit folder or category.

### Theme gap analysis (which OLD photo themes the NEW site under-uses)

Verified against the 5 NEW `CATEGORIES` and the supplement maps in `lib/luxury-gallery.ts`:

- **Drone / aerial — PARTIALLY ORPHANED.** OLD had a dedicated 11-photo DRONE album. NEW has **no Drone category**; aerials survive only as scattered single frames (a few `g-aerial-*`, `DJI_*` in Pool/Beach + `New Pool` drone shots). The OLD site's strongest "wow" set (vertical aerials, coast, sunset aerials, mountains) is largely **not surfaced** in `/galeria`. Under-used.
- **Families — ORPHANED.** OLD had a 7-photo FAMILIES album (kids in pool, family beach, pool portraits). NEW has **no Families category**; only one `g-family-beach` appears (in Beach & Grounds) and a few family shots live in the event "family-celebrations" supplement. The family-travel angle the approved site sold is **effectively dropped** from the gallery. Most under-used theme.
- **Pool by Night — DOWNGRADED.** OLD had a dedicated 12-photo POOL BY NIGHT album (the illuminated-pool signature). NEW folds pool into one "Pool" band with only ~2 night frames (`pool-aerial-night`, `pool-starry-night`); the other ~10 night images (`g-pool-night-3…12`) are **not surfaced** in `/galeria` (a couple appear only inside the "parties" event supplement). Signature night-pool content under-used.
- **Experiences — ORPHANED from gallery.** OLD EXPERIENCES album (turtles, beach cleanup, whales, yoga) has **no NEW gallery category**. These images now live only inside per-experience info-page supplements, so a gallery visitor never sees the conservation/wellness story as a browsable set.
- **Events (non-wedding) — NARROWED.** OLD EVENTS album spanned weddings + corporate + surf-nights + romantic/party setups (24 photos). NEW gallery keeps only a **Weddings** band; corporate, surf-nights, and party imagery are pushed to event-page supplements, not the gallery.
- **Well-covered / improved:** Dining, Suites & Rooms, and beachfront/wedding coverage are equal-or-better in NEW (the new `Resturant/` (105) and `Wedding/` (82) shoots dwarf the OLD sets — sourcing is abundant; the gap is purely curation into `/galeria`).

**Bottom line for client:** the approved site surfaced 8 browsable photo themes; the rebuild's gallery surfaces 5 and drops **Drone, Families, Pool-by-Night, and Experiences** as dedicated, browsable categories — even though the new shoots contain plenty of matching material. These four are the photographic stories the rebuild is under-using.
