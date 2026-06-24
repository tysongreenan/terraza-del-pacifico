# Embeds & Integrations — to carry over to the rebuild

Everything third-party detected on the live site (terrazadelpacifico.com), captured 2026-06-22. Each row: what it is, the ID/source, where it lives, and what we need.

## 1. Testimonial / reviews widget — Elfsight (Booking.com reviews)

- **What:** Elfsight "Booking Reviews" widget. Pulls 5-star reviews from the hotel's Booking.com page and displays them as testimonials.
- **Elfsight app ID:** `d1917f6b-3683-47c5-b84b-86ba2c12f365`
- **Review source:** `booking.com/Share-omHEql2` (min rating 5)
- **Where:** home page (scrolls into view, lazy-loaded)
- **Need:** the **Elfsight account login** to re-embed the same widget, OR rebuild natively from the Booking.com source. (Elfsight is a paid SaaS, ~$6-25/mo.)

## 2. Instagram feed — Elfsight (InstaShow)

- **What:** Elfsight Instagram feed widget.
- **Elfsight app ID:** `515ff663-a805-49e8-a69f-7352c2057bab`
- **Source:** Instagram `@terrazadelpacificocr` (profile id `d0c2be6a-12e7-4431-8024-bcf2e024899a`)
- **Where:** home page
- **Need:** same Elfsight account, or rebuild.

## 3. Third Elfsight widget — About page

- **Elfsight app ID:** `8a247cda-f474-4a67-aca0-394bedb7584e`
- **Where:** `/sobre-nosotros`
- **Type:** unconfirmed (likely another reviews or a feature/team widget) — confirm in the Elfsight dashboard.

> All three run off one Elfsight loader: `https://elfsightcdn.com/platform.js`. One account holds all widgets.

## 4. Google Maps embed

- **What:** Google Maps iframe showing the hotel location.
- **Place:** "Terraza del Pacifico" — lat `9.580177`, lng `-84.6141703`, place id `0x8fa1c74c5da4283f:0x5de1442924fec384`
- **Note:** the current embed URL has a templated/fake timestamp — regenerate a clean embed from Google Maps. No account needed.

## 5. Google Analytics 4

- **Measurement ID:** `G-0SW8NFFFEV`
- **Need:** add Tyson to the GA4 property (so we keep history rather than starting fresh).

## 6. Google Tag Manager

- **Container ID:** `GTM-KRJHXP6D`
- **Where:** loaded site-wide in the HTML head.
- **Need:** GTM account access. Worth auditing what tags fire inside the container (the pixel/GA may be managed here).

## 7. Facebook Pixel

- **Status:** present but NOT configured — the code literally still says `id=YOUR_PIXEL_ID`.
- **Need:** the real Pixel ID from the client's Meta Business account, or drop it. (Confirm whether they run Meta ads.)

## 8. WhatsApp click-to-chat

- **Number:** `+506 8431 9953` → `https://wa.me/50684319953`
- **Where:** contact / floating button.
- **Need:** nothing — it's just a link. Confirm the number is current.

## 9. Social profile links

- Instagram: `https://www.instagram.com/terrazadelpacificocr/`
- Facebook: `https://www.facebook.com/TerrazadelPacifico`
- TikTok: `https://www.tiktok.com/@terrazadelpacifico`

## 10. Stripe — verify (possibly dormant)

- **What:** Stripe code appears in the JS bundle (~7 references), but **no live/test key and no `js.stripe.com` load** fired at runtime. Likely scaffolded by the AI builder and never used (no real payment flow on the site).
- **Need:** ask the client if they take any payment/deposit online. If not, drop it.

## 11. SiteMinder — NOT present yet (new for the rebuild)

- Not on the current site. The booking buttons are placeholders. We add the SiteMinder booking engine embed in the rebuild.

---

## Accounts/logins to request (summary)

| Integration | What to request |
|---|---|
| Elfsight | Account login (holds the reviews + Instagram + About widgets) |
| Google Analytics 4 | Add as user to property `G-0SW8NFFFEV` |
| Google Tag Manager | Add as user to container `GTM-KRJHXP6D` |
| Facebook/Meta | Real Pixel ID (or confirm to drop) |
| WhatsApp | Confirm `+506 8431 9953` is current |
| Stripe | Confirm whether online payments are used (likely not) |
| SiteMinder | Booking engine login (new — for the embed) |

## Recommendation on Elfsight

Elfsight is a paid widget tool. Two paths for the rebuild:
1. **Keep it** — get the account login, re-paste the same widget embeds. Fastest, keeps the exact look, but carries the subscription.
2. **Rebuild native** — the reviews come from Booking.com and the feed from Instagram `@terrazadelpacificocr`; we can build both directly and drop the dependency + the monthly fee. Cleaner long-term.

Lean: keep Elfsight short-term to launch fast, revisit replacing the reviews widget later (native reviews schema also helps SEO).
