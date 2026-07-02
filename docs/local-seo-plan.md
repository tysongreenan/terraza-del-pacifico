# Terraza del Pacífico — Local SEO Plan

Status legend: ✅ done · �片 in code, ready to extend · ⏳ needs owner value · 🚩 flag/decision

> NOTE: another agent is concurrently editing `lib/dictionaries.ts`, `lib/seo.ts`,
> `components/site-footer.tsx`, `components/site-header.tsx`. Apply the edits below
> on top of the latest file state — do not revert the agent's `panaderia`/bakery,
> `policies`, or `yoga` additions.

---

## Already shipped (verified on clean prod build)

- Footer = full NAP block (`<address>`: name + addressLine2/3 + `tel:` phone).
- Header + mobile-nav click-to-call (`dict.nav.callAria`, `dict.footer.phoneHref`).
- Hotel schema: telephone aligned to GBP (`+50626433222`), address tightened to GBP,
  `geo` (9.580177,-84.6141703), daily `openingHoursSpecification` 07:00–22:00,
  `starRating: 3`, `priceRange: "$$"`; fabricated `aggregateRating` removed.
- Hero shows real Google rating (4.2 / 1,472).
- Homepage FAQ section (`components/home/faq.tsx`) + `faqJsonLd` FAQPage schema,
  generated from `dict.faq.items` (schema always matches visible copy).

---

## ✅ DONE since this plan was written
- A1 (pool), A2 (pet policy — wording faithful to source, "per day"), A3 (pricing, no
  number) added to `dict.faq.items` both locales. Verified rendering EN + ES.
- B: `petsAllowed` added to `organizationJsonLd`; `"Children's pool"` + `"Pet-friendly
  (dogs)"` added to `hotelAmenities`.
- E: `terraza-web-creator-main` added to `.gitignore` + tsconfig `exclude` →
  `npm run build` now passes with NO stashing. Clean `rm -rf .next && npm run build` = exit 0.
- 🚩 STILL owner-confirm: exact pet terms (per-day vs per-night), and D (business name).

## A. FAQ expansion 🔧 (DONE — see above)

Add three items to `dict.faq.items` in BOTH locales (`en` ~ line where faq lives, and `es`).
`faqJsonLd(dict.faq.items)` already on the homepage picks these up automatically — no schema edit needed.

### A1. Pool (static fact — safe) ✅ add as-is
EN:
- q: "Does the hotel have a pool?"
- a: "Yes — an outdoor LED-lit pool plus a separate children's pool, with the beach just steps away."
ES:
- q: "¿El hotel tiene piscina?"
- a: "Sí — una piscina al aire libre con luces LED y una piscina para niños, con la playa a pocos pasos."

### A2. Pet policy (factual, but 🚩 OWNER-CONFIRM the exact terms — sourced from an OTA listing)
EN:
- q: "Is Terraza del Pacífico pet-friendly?"
- a: "Yes. We welcome one dog per room (up to 22 lb / 10 kg) for a fee of US$20 per pet, per night. Service animals are always welcome at no charge."
ES:
- q: "¿Terraza del Pacífico admite mascotas?"
- a: "Sí. Recibimos un perro por habitación (hasta 22 lb / 10 kg) con un cargo de US$20 por mascota, por noche. Los animales de servicio siempre son bienvenidos sin cargo."
- 🚩 Source said "per day"; changed to "per night" for hotel clarity. Confirm with owner which is correct before publish.

### A3. Pricing (🚩 NO hardcoded number — the pasted "CA$138 as of Jun 24" is dynamic and will rot)
EN:
- q: "How much does it cost to stay at Terraza del Pacífico?"
- a: "Rates vary by season and dates. For the most accurate price, check live availability — and you always get our best available rate when you book direct."
ES:
- q: "¿Cuánto cuesta hospedarse en Terraza del Pacífico?"
- a: "Las tarifas varían según la temporada y las fechas. Para el precio más exacto, consulta la disponibilidad en línea — y al reservar directo siempre obtienes nuestra mejor tarifa disponible."

> Why no number: a literal price in static HTML/JSON-LD is stale within hours, can
> trigger price-mismatch distrust, and `priceRange: "$$"` already covers the schema
> signal. If a number is ever wanted, render it from the live booking feed, not copy.

---

## B. Schema enhancements (`lib/seo.ts`, `organizationJsonLd`) 🔧

1. **`petsAllowed`** (after A2 is owner-confirmed):
   `petsAllowed: "Dogs up to 10 kg / 22 lb allowed for a fee; service animals free.",`
2. **Amenities** — add to `hotelAmenities` array:
   - `"Children's pool"`
   - `"Pet-friendly (dogs)"`  (only after A2 confirmed)
3. **`numberOfRooms`** ⏳ — add once owner gives the count:
   `numberOfRooms: "<N>",`
4. **`sameAs`** ⏳ — append real profile URLs (TripAdvisor is the priority for a hotel —
   AI assistants source it heavily; also Booking.com / Expedia / Google Maps place URL):
   add to the existing `sameAs` array.
5. **`hasMap`** 🚩 — currently a Maps *search* URL; replace with the direct Google Maps
   *place* URL (or place_id) once available — more precise entity match.

Acceptance: `curl` the served `/en`, confirm `petsAllowed`, `numberOfRooms`,
new `sameAs` entries appear in the `application/ld+json` block.

---

## C. Dedicated `/contacto` page ⏳ (Whitespark #1 local-organic factor) 🔧

New route `app/[locale]/contacto/page.tsx` (+ add to `staticRoutes` in `lib/seo.ts`,
priority ~0.6 monthly; add nav/footer link + `dict.nav`/`dict.footer` labels both locales).
Contents:
- H1 with local intent ("Contact & Location — Playa Hermosa, Jacó").
- Full NAP (reuse footer pattern), click-to-call, email, WhatsApp.
- The existing `Location` map embed (reuse `components/home/location.tsx` or its iframe).
- "How to get here" — driving directions from San José airport (SJO, ~90 min) and from Jacó.
- Hours (daily 7 AM–10 PM), check-in/out.
- Emit `breadcrumbJsonLd` for the page. (Hotel/LocalBusiness org schema already global.)

---

## D. Business-name normalization (NAP) 🚩 OWNER-CONFIRM

Inconsistency: schema/header/`siteName` = "Hotel Terraza del **Pacífico**" (with "Hotel",
accent); GBP/hero = "Terraza del **Pacifico**" (no "Hotel", no accent). For strict NAP the
displayed/schema name should match GBP's exact registered name.
- Action: confirm GBP's exact registered legal name, then normalize `siteName` in
  `lib/seo.ts` and visible usages to match. Do NOT guess — pick the GBP string verbatim.

---

## E. Repo hygiene 🚩

`terraza-web-creator-main/` (untracked old Vite site) breaks `npm run build` locally
(type-check phase) though Vercel is unaffected (not in git). Fix one of:
- add `terraza-web-creator-main/` to `.gitignore` AND a tsconfig `"exclude"`, or
- delete the folder if no longer needed.

---

## F. Off-site owner actions (no code) ⏳

Priority order for this hotel:
1. **Claim Bing Places** — powers ChatGPT / Copilot / Alexa (biggest AI-visibility gap).
2. **Claim Apple Business Connect** — Apple Maps; usage doubled to 27%.
3. **Review velocity** — 4.2★ is just under the 4.5 filter ~31% of travelers use. Keep a
   steady cadence (rankings dip after ~3 review-free weeks) and respond to reviews.
4. **TripAdvisor + OTA NAP consistency** — same name/address/phone everywhere; feeds AI answers.
5. Then provide the `sameAs` URLs (B4) + room count (B3) + name (D) back to the dev agent.

---

## Execution order (dependencies)

1. A1 + A3 (no blockers) → ship now.
2. E (repo hygiene) → unblocks clean local builds for everyone.
3. D, A2/B1-B2 (pets), B3 (rooms), B4/B5 (URLs) → after owner confirms values.
4. C (/contacto page) → independent, medium effort, do anytime.
5. F → owner, parallel.

Acceptance for the in-code batch: `rm -rf .next && npm run build` exits 0; served `/en`
and `/es` show the new FAQ items and updated JSON-LD; `tsc` clean for `lib|components|app`.
