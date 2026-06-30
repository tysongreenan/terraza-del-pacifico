# Image library

Photos are organized by area so updated shots are easy to drop in.

```
images/
├── suites/        Room/suite photography
│   ├── junior/      Junior Suite
│   ├── standard/    Standard Room
│   ├── superior/    Superior Room
│   ├── villa/       Villa
│   ├── general/     Generic room shots (not tied to one suite type)
│   └── originals/   Raw suite shoot files
├── experiences/   Guest experiences & recurring events
│   ├── surf-nights/
│   ├── yoga/
│   ├── turtle-nesting/
│   └── whale-watching/
├── resort/        Property & amenity photography
│   ├── pool/
│   ├── dining/        Restaurant, food, chef
│   ├── bars/          Iguana Bar / beach bar
│   ├── beach-aerial/  Beach, ocean, drone/aerial
│   ├── grounds/       Facade, entry, reception, gardens
│   ├── events/        Private-event marketing shots
│   ├── weddings/
│   └── highlights/    Mixed "best of" property shots
├── brand/         Logos, og/social-share image
└── _archive/      Unused originals (not loaded by the site)
```

## Adding or updating a photo

1. Drop the file into the matching folder above (e.g. an updated villa shot → `suites/villa/`).
2. Reference it so a page actually shows it. Image lists live in:
   - `components/page-scaffold.tsx` → `FEATURED_IMAGES` (hero/mosaic per gallery page)
   - `lib/luxury-gallery.ts` and `content/*.json` (page galleries)
   - `content/room-galleries.ts`, `content/suites-hub.ts`, etc. (suite pages)
   Use the full path from `/images/...`, e.g. `/images/suites/villa/my-new-photo.jpg`.

A reference must point at a file that exists or the image 404s at runtime
(Next serves `/public` on demand — a missing path is NOT caught by `next build`).
