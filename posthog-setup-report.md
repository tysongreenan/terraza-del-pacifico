# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into Terraza del Pacífico. A client-side PostHog instance is initialized via `instrumentation-client.ts` (Next.js 15.3+ pattern), with a reverse proxy configured in `next.config.mjs` to route telemetry through `/ingest`. A server-side client (`lib/posthog-server.ts`) captures the inquiry form submission on the backend. Twelve events are tracked across eight files, covering the full guest journey from suite browsing through booking intent and form submission.

| Event | Description | File |
|---|---|---|
| `inquiry_submitted` | Guest submits an inquiry or event registration form and receives a success response. | `components/info-page/inquiry-form.tsx` |
| `inquiry_whatsapp_fallback_clicked` | Guest clicks the WhatsApp button shown when the inquiry form fails to send. | `components/info-page/inquiry-form.tsx` |
| `booking_cta_clicked` | Guest clicks the primary 'Reserve Now' CTA button in the final booking section. | `components/home/final-cta.tsx` |
| `whatsapp_cta_clicked` | Guest clicks the WhatsApp CTA button in the final booking section. | `components/home/final-cta.tsx` |
| `suite_selected` | Guest selects a room type in the home page suite explorer widget. | `components/home/suites.tsx` |
| `suite_booking_clicked` | Guest clicks the primary booking button on a suite detail page. | `components/rooms/suite-detail.tsx` |
| `suite_whatsapp_clicked` | Guest clicks the WhatsApp button on a suite detail page to ask a question. | `components/rooms/suite-detail.tsx` |
| `suite_gallery_opened` | Guest opens the photo lightbox on a suite detail page. | `components/rooms/suite-detail.tsx` |
| `faq_expanded` | Guest expands an FAQ accordion item to read the answer. | `components/home/faq.tsx` |
| `nav_booking_clicked` | Guest clicks the 'Book' button in the site header navigation. | `components/site-header.tsx` |
| `info_cta_clicked` | Guest clicks the primary CTA on an experience or event detail page. | `components/info-page/info-page.tsx` |
| `server_inquiry_received` | Server successfully sends an inquiry email via Resend after form submission. | `app/api/inquiry/route.ts` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/484988/dashboard/1757609)
- [Booking conversion funnel](https://us.posthog.com/project/484988/insights/yGxC0Ekz)
- [Inquiry submissions over time](https://us.posthog.com/project/484988/insights/TIEjrwNL)
- [Booking intent clicks](https://us.posthog.com/project/484988/insights/vCD2fohZ)
- [Suite engagement](https://us.posthog.com/project/484988/insights/6L6JWqzi)
- [Lead channel breakdown](https://us.posthog.com/project/484988/insights/OdInN4i5)

## Verify before merging

- [ ] Run a full production build (`npm run build`) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` (and any monorepo/bootstrap scripts) so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify in PostHog Error Tracking.

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
