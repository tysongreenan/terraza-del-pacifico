# Design-sync notes — Terraza del Pacífico

This repo is a **Next.js application**, not a packaged component library. The
design-sync converter is pointed at a hand-written entry that re-exports only
the Next-free surface; the app's page/section components (31 of 48) import
`next/image` / `next/link` / app-router / i18n dictionaries and are
**intentionally out of scope** — they cannot render in Claude Design's
React-only runtime, and reimplementing them is off-limits.

## Build shape (off-script bridge)

- **No `dist/`** → custom entry at `.design-sync/entry.tsx` (re-exports
  `SectionHeading`, `Reveal`, `actionButtonVariants`). Pass `--entry ./.design-sync/entry.tsx`.
- **`cfg.tsconfig` = `./tsconfig.json`** is REQUIRED — every component imports
  `@/lib/utils` etc.; esbuild resolves `@/` only via the tsconfig paths plugin.
- **CSS is JIT-Tailwind**, not a stylesheet. The brand utilities
  (`text-display`, `bg-concept-ocean`, `.eyebrow`, `py-section`…) are generated,
  so they're compiled to a real stylesheet:
  `npx tailwindcss -c tailwind.config.ts -i .design-sync/css-src/entry.css -o .design-sync/compiled/styles.css`
  Then `cfg.cssEntry` points at that compiled file. **Compile broadly** (content =
  full `app/**` + `components/**` from the config) — `styles.css` is the vocabulary
  EVERY design receives, so never scope it to the synced components.
- **Fonts**: Inter/Manrope/Cormorant are injected by `next/font` at runtime and
  are absent from the bundle. `.design-sync/css-src/entry.css` loads them from
  Google Fonts (`@import url(...)`) and defines `--font-inter/manrope/cormorant`.
  Validate reports `[FONT_REMOTE]` (informational, fonts load at runtime).

## Render-check / browser

- Playwright pinned by `.ds-sync` is **1.61.1**; its chromium build is
  **chromium-1228**, cached at `~/Library/Caches/ms-playwright/` (macOS path,
  not `~/.cache`). `npx playwright install chromium` is a no-op (already present).

## Verified

- **SectionHeading** renders on-brand (gold eyebrow, ocean Manrope title, dark
  variant on ocean). All 4 cells graded good. This confirmed the CSS bridge.

## Known render warns / flakes

- `[RENDER] page.goto: Timeout` on the render check is **transient** — chromium
  cold-start plus the remote Google Fonts fetch occasionally exceeds the goto
  timeout. Simply re-run `package-validate.mjs` (or the driver); it passes on
  retry. Not a real failure.
- `tokens: 98 defined, 65 referenced (2 missing, below threshold)` — informational,
  below threshold, non-blocking.

## Re-sync risks

- The Tailwind compile (`.design-sync/compiled/styles.css`) is a **generated
  artifact** — re-run the `npx tailwindcss` command above before the converter
  whenever `tailwind.config.ts`, `app/globals.css`, or component class usage
  changes, or the synced CSS goes stale.
- Brand fonts depend on a **remote Google Fonts `@import`** — if that host is
  blocked, designs fall back to system fonts (Cormorant→serif loses the brand).
- The scope is deliberately narrow (Next-free components only). Re-running the
  converter without `--entry ./.design-sync/entry.tsx` would synth-bundle the
  whole `components/` tree and fail on `next/*` imports.
