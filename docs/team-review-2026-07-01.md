# Team review tracker — Markup.io export 2026-07-01

Source: `~/Downloads/terraza-del-pacifico-vercel-app-export-2026-07-01.json`
Reviewers: Laura, Zac, Khera Alexander, Sway. 79 comments (71 unresolved, 8 resolved at export time).

Status legend: ✅ done · 🔧 in progress · ⬜ todo · 👁 needs visual check · ⏭ already handled before export

## Recurring bugs (cross-page)
- ✅ #1/#7/#16/#20 — Transparent nav/logo overlapped hero text on first load. Root cause: heroes had a scrim only *over the image*, so before the image painted the backdrop was the page's light cream. Fixed by adding `bg-concept-ocean` dark base to every hero container. Verified via throttled early-paint capture (nav stays legible white).
- 🔧 #24/#26/#27/#42/#43/#44 — Events galleries show "Image 1/2/3…" captions. Source: auto alt in `lib/luxury-gallery.ts:148-149`, surfaced as `caption` in `event-info-page.tsx:79` + `events-hub.tsx:39`. Fix: drop redundant captions.
- ⬜ #29/#34 — Nav doesn't appear immediately on /experiences and /contact. Those are `solid` variant in `resolveVariant`; team wants consistency. Decide: keep solid (fine per Zac) but ensure it's present on load.

## Copy — em-dash removal + rephrases (Khera) — DONE (EN only; ES mirror left for a Spanish reviewer)
- ✅ #35 suites intro rephrase (suites-hub.ts:70)
- ✅ #37 semicolon / #38 colon / #39 rephrase — suites essentials grid (LED pool, yoga, Wi-Fi cards). Mapped by grammatical fit since export has no pin coords; the 3 cards Khera didn't flag keep their em-dashes.
- ✅ #40 junior-suite "Adults only. Children…" (suite-detail.ts)
- ✅ #41 bakery blurb em-dash→period (bakery.ts)
- ✅ #45 comma / #46/#47 remove "south of Jaco" / #52 the→This / #54 comma / #57 add "yoga" (experiences.ts)
- ✅ #67 experiences hub rephrase (keeps Khera's em-dash) (experiences.ts:15)
- ✅ #68 welcome/statement rephrase (dictionaries.ts:57 — shared with homepage)
- ✅ #69/#70/#71/#72/#73/#74/#75/#76/#77 about page rephrases (about.ts; typo "advanture"→"adventure" fixed)
- ✅ #78 about location card em-dash→colon (whale card; turtle left per one-comment-one-swap)
- ✅ #79 contact intro rephrase (dictionaries.ts:264)
- ⏭ #48/#49/#53/#56/#58/#59/#60/#61/#62/#63/#64/#65/#66 — already satisfied in current repo copy (live site was an older build). Verified spot checks; mark resolved in Markup.
- 🟡 #50/#55 — Khera's rephrases drop "Costa Rica"/"south of Jaco" from SEO meta descriptions; left as-is to preserve geo keywords. Confirm with her.

## Copy — repetition / wording (Zac)
- ⏭ #10 — remove "One" from Beachfront headline → done in 40fdf71
- ⏭ #15 — "Welcome" too low → reframed "Our story" in 40fdf71
- ⬜ #13 — overuse of "steps from"/"at your doorstep"/"Beachfront" section titles (home)
- ⬜ #22/#23/#31 — drop "in Playa Hermosa" from repeated titles (events, experiences)
- ✅ #33 — reworded weddings title to "Celebrate right on the sand" (about.ts) so it no longer parallels "rainforest meets the tide"

## Design / UX
- ⏭ #4 — "drag to explore" hint confusing → hidden on desktop in 40fdf71
- ⏭ #30 — Beachfront Yoga first + mark FREE → reordered in 40fdf71 (verify FREE label shown)
- 🔧 #12 — inconsistent CTAs (Reserve/Sign up/Enquire). Carousel unified in 40fdf71; audit remaining buttons site-wide.
- ✅ #8 — KEEP the 4.2★ by the booking button (client decision, keep as-is)
- ✅ #9 — KEEP clickable hero pics — client likes the interaction (won't-fix)
- ✅ #11 — "Included"/yoga card already moved to lead position in 40fdf71
- ✅ #30 — yoga chip now says "Free"/"Gratis" (dictionaries.ts) + already leads
- ✅ #80 — LanguageToggle rebuilt as a flag dropdown (🇨🇷 Español / 🇺🇸 English) in language-toggle.tsx
- ✅ #19 — suites floating spec panel no longer bleeds over the next room's image (md:min-h-[640px] on the room container). Verified visually.
- ✅ #5 — "0 m to the sand" card renamed "On the sand" (serif zero read as O)
- ✅ #6/#17 — hero description paragraphs now carry text-shadow-hero (legible over bright bar counter / pool)
- 👁 #12 — audit remaining CTA labels site-wide (Reserve/Sign up/Enquire) — needs a pass
- 👁 #18 — suites: photo-over-copy→gallery interaction — client likes the hero version (#9); confirm this is a different spot before changing
- 🟡 #13/#23/#31 — title repetition ("steps from"/"Beachfront"/"in Playa Hermosa"). Deferred: these overlap on-page headings AND SEO meta titles — needs a careful pass to avoid dropping geo keywords.

## Photos — need assets from the team (can't fix in code)
- ⬜ #2/#14 — blurry photos / blur on left of image (home)
- ⬜ #21/#25 — weak wedding photos; #25 "roadside memorial" dinner shot (events)
- ⬜ #32 — too many pool images (gallery)
- 🟡 #3 — slider loop vs back-and-forth: still a decision for Laura

## Photos
- ⬜ #2 — four blurry photos (home)
- ⬜ #14 — remove blur on left of image (home)
- ⬜ #21/#25 — weak wedding photos (events); #25 "roadside memorial" dinner shot
- ⬜ #32 — too many pool images (gallery)
- ⏭ #3 — slider loop vs back-and-forth: decision needed (Laura). Currently back-and-forth.

## Small polish
- ⬜ #5 — "0 vs O" glyph ambiguity (suites)
- ⬜ #6/#17 — text hard to read over image (bars, suites)
