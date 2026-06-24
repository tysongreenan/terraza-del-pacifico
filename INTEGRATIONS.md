# Integrations & Embeds — Implementation Brief

Single source of truth for every third-party integration to add to the rebuild. All IDs/sources were captured from the live site (terrazadelpacifico.com) on 2026-06-22. Hand this to the dev/agent and add them in.

Stack: Next.js 15 (App Router) + TypeScript + Tailwind. Add `@next/third-parties` for GA4/GTM:
```bash
npm i @next/third-parties
```

---

## 0. Environment variables

Add to `.env.local` (and `.env.example`). Values marked TODO come from the client handover.

```bash
# Analytics (live on current site)
NEXT_PUBLIC_GA_ID=G-0SW8NFFFEV
NEXT_PUBLIC_GTM_ID=GTM-KRJHXP6D

# Meta Pixel — NOT configured on current site. Get real ID or leave blank to disable.
NEXT_PUBLIC_FB_PIXEL_ID=

# Elfsight widgets (one account holds all three)
NEXT_PUBLIC_ELFSIGHT_REVIEWS_ID=d1917f6b-3683-47c5-b84b-86ba2c12f365
NEXT_PUBLIC_ELFSIGHT_INSTAGRAM_ID=515ff663-a805-49e8-a69f-7352c2057bab
NEXT_PUBLIC_ELFSIGHT_ABOUT_ID=8a247cda-f474-4a67-aca0-394bedb7584e

# Contact / social
NEXT_PUBLIC_WHATSAPP=50684319953

# SiteMinder booking engine (NEW — from SiteMinder account) TODO
NEXT_PUBLIC_SITEMINDER_PROPERTY_ID=
```

---

## 1. Google Analytics 4 + Google Tag Manager

- **GA4 Measurement ID:** `G-0SW8NFFFEV`
- **GTM Container ID:** `GTM-KRJHXP6D`
- Both are live on the current site. Request access to keep history. Note: GA may already be fired *inside* GTM — audit the container so you don't double-count. If GTM owns GA, only add GTM.

Add to `app/layout.tsx` (inside `<body>`, after `{children}` is fine):
```tsx
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

// in the component, inside <html> ... :
{process.env.NEXT_PUBLIC_GTM_ID && (
  <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
)}
{process.env.NEXT_PUBLIC_GA_ID && (
  <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
)}
```

---

## 2. Elfsight widgets (reviews, Instagram, about)

All three load from one script. Add the loader once, then drop a widget `<div>` wherever each belongs.

**Loader** — add once in `app/layout.tsx`:
```tsx
import Script from "next/script";
// inside <body>:
<Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
```

**Reusable widget component** — `components/elfsight-widget.tsx`:
```tsx
export function ElfsightWidget({ appId }: { appId: string }) {
  return <div className={`elfsight-app-${appId}`} data-elfsight-app-lazy />;
}
```

**Place each widget:**

| Widget | Where | Usage |
|---|---|---|
| Booking.com reviews (the testimonials) | home page | `<ElfsightWidget appId={process.env.NEXT_PUBLIC_ELFSIGHT_REVIEWS_ID!} />` |
| Instagram feed (`@terrazadelpacificocr`) | home page | `<ElfsightWidget appId={process.env.NEXT_PUBLIC_ELFSIGHT_INSTAGRAM_ID!} />` |
| About-page widget (confirm type in dashboard) | `/sobre-nosotros` | `<ElfsightWidget appId={process.env.NEXT_PUBLIC_ELFSIGHT_ABOUT_ID!} />` |

- Reviews source: Booking.com (`booking.com/Share-omHEql2`, min rating 5).
- **Needs the Elfsight account login.** Elfsight is a paid SaaS; the widgets only render for the account that owns these app IDs. Alternative: rebuild the reviews/feed natively to drop the subscription (also better for SEO — add Review schema). For launch, keep Elfsight.

---

## 3. Google Maps embed

Hotel location. The current embed had a fake timestamp — use a clean one.

- Place: **Terraza del Pacifico**, Playa Hermosa, Costa Rica
- Coordinates: lat `9.580177`, lng `-84.6141703`
- Place ID: `0x8fa1c74c5da4283f:0x5de1442924fec384`

```tsx
<iframe
  title="Hotel Terraza del Pacífico — Playa Hermosa"
  src="https://www.google.com/maps?q=9.580177,-84.6141703&z=15&output=embed"
  width="100%" height="400" loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  style={{ border: 0 }}
/>
```
Place on `/contact` (or footer / home location section). No account needed.

---

## 4. WhatsApp click-to-chat

- Number: **+506 8431 9953** → `https://wa.me/50684319953` (confirm current with client)
- Floating button, all pages.

`components/whatsapp-button.tsx`:
```tsx
import { MessageCircle } from "lucide-react";
export function WhatsAppButton() {
  const n = process.env.NEXT_PUBLIC_WHATSAPP;
  if (!n) return null;
  return (
    <a href={`https://wa.me/${n}`} target="_blank" rel="noopener noreferrer"
       aria-label="WhatsApp"
       className="fixed bottom-5 right-5 z-50 rounded-full bg-[#25D366] p-3 text-white shadow-lg">
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
```
Render once in `app/layout.tsx`.

---

## 5. Facebook / Meta Pixel

- **Not configured on the current site** (placeholder `YOUR_PIXEL_ID`). Confirm with the client whether they run Meta ads.
- If yes, set `NEXT_PUBLIC_FB_PIXEL_ID` and add the standard pixel via `next/script`. If no, skip it.

---

## 6. Social profile links (footer / header)

- Instagram: `https://www.instagram.com/terrazadelpacificocr/`
- Facebook: `https://www.facebook.com/TerrazadelPacifico`
- TikTok: `https://www.tiktok.com/@terrazadelpacifico`

---

## 7. SiteMinder booking engine (NEW)

- Not on the current site. The "Reserva tu Escape" / booking buttons are placeholders pointing to `#booking`.
- Add the SiteMinder booking engine embed once the account is set up (`NEXT_PUBLIC_SITEMINDER_PROPERTY_ID`). Replace the `#booking` anchor targets with the SiteMinder widget or booking-engine link.
- We SEO the marketing pages and funnel into SiteMinder; the booking funnel itself lives on SiteMinder.

---

## 8. Stripe — verify, probably remove

- Stripe code is in the current bundle (~7 references) but **no key and nothing loads at runtime** — looks like unused AI-builder scaffolding.
- Confirm the client takes no online payments/deposits. If confirmed, do not add Stripe.

---

## Accounts/logins to request from the client

| Integration | Request |
|---|---|
| Elfsight | Account login (reviews + Instagram + About widgets) |
| Google Analytics 4 | Add user to property `G-0SW8NFFFEV` |
| Google Tag Manager | Add user to container `GTM-KRJHXP6D` |
| Meta / Facebook | Real Pixel ID, or confirm to drop |
| WhatsApp | Confirm `+506 8431 9953` |
| SiteMinder | Booking engine login (for the embed) |
| Stripe | Confirm no online payments (then drop) |
