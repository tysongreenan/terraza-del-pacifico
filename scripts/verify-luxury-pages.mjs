import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const scratch = process.env.SCRATCH_DIR;

const PAGE_FILES = [
  "app/[locale]/galeria/page.tsx",
  "app/[locale]/restaurante/page.tsx",
  "app/[locale]/sobre-nosotros/page.tsx",
  "app/[locale]/experiencias/page.tsx",
  "app/[locale]/eventos/page.tsx",
  "app/[locale]/experiencias/[slug]/page.tsx",
  "app/[locale]/eventos/[slug]/page.tsx",
];

const COMPONENT_FILES = [
  "components/luxury/primitives.tsx",
  "components/page-scaffold.tsx",
  "components/info-page/info-hub.tsx",
  "components/info-page/info-page.tsx",
  "lib/luxury-gallery.ts",
];

function grepCount(file, pattern) {
  const text = readFileSync(join(root, file), "utf8");
  const re = new RegExp(pattern, "g");
  return (text.match(re) ?? []).length;
}

function hasAll(file, patterns) {
  const text = readFileSync(join(root, file), "utf8");
  return patterns.every((p) => text.includes(p));
}

const lines = ["=== LUXURY PAGE VERIFICATION ===", `Date: ${new Date().toISOString()}`, ""];

lines.push("--- Step 1: Page file luxury markers ---");
for (const file of PAGE_FILES) {
  const ok =
    hasAll(file, ["bg-concept-sand", "font-concept", "object-cover"]) &&
    grepCount(file, "<Image") >= 1;
  lines.push(`${ok ? "PASS" : "FAIL"} ${file}`);
  lines.push(
    `  sand=${grepCount(file, "bg-concept-sand")} concept=${grepCount(file, "font-concept")} cover=${grepCount(file, "object-cover")} images=${grepCount(file, "<Image")}`
  );
}

lines.push("");
lines.push("--- Step 2: Build ---");
try {
  execSync("npm run build", { cwd: root, stdio: "pipe" });
  lines.push("PASS npm run build (exit 0)");
} catch (error) {
  lines.push("FAIL npm run build");
  lines.push(String(error.stdout ?? error.message));
}

lines.push("");
lines.push("--- Step 3: Component structure ---");
for (const file of COMPONENT_FILES) {
  lines.push(
    `${file}: grid=${grepCount(file, "grid-cols")} row-span=${grepCount(file, "row-span")} cover=${grepCount(file, "object-cover")} hover-scale=${grepCount(file, "group-hover:scale")}`
  );
}

lines.push("");
lines.push("--- Step 3b: Hover scale on split/image bands ---");
const primitives = readFileSync(join(root, "components/luxury/primitives.tsx"), "utf8");
const splitHasHover = /LuxurySplitBand[\s\S]*group-hover:scale/.test(primitives);
const bandHasHover = /LuxuryImageBand[\s\S]*group-hover:scale/.test(primitives);
lines.push(`${splitHasHover ? "PASS" : "FAIL"} LuxurySplitBand hover scale`);
lines.push(`${bandHasHover ? "PASS" : "FAIL"} LuxuryImageBand hover scale`);

lines.push("");
lines.push("--- Step 3c: Runtime image counts (info pages) ---");
const experiences = readFileSync(join(root, "content/experiences.ts"), "utf8");
const events = readFileSync(join(root, "content/events.ts"), "utf8");
const galleryLib = readFileSync(join(root, "lib/luxury-gallery.ts"), "utf8");

const expIds = [...experiences.matchAll(/id: "([^"]+)"/g)].map((m) => m[1]);
const eventIds = [...events.matchAll(/id: "([^"]+)"/g)].map((m) => m[1]);

function supplementCount(id, type) {
  const key = type === "experience" ? "EXPERIENCE_SUPPLEMENTS" : "EVENT_SUPPLEMENTS";
  const block = galleryLib.slice(galleryLib.indexOf(key));
  const entry = block.match(new RegExp(`"${id}":\\s*\\[([\\s\\S]*?)\\]`));
  if (!entry) return 0;
  return (entry[1].match(/\/images\//g) ?? []).length;
}

for (const id of expIds.slice(0, 4)) {
  const galleryCount = (experiences.match(new RegExp(`id: "${id}"[\\s\\S]*?gallery: \\[([\\s\\S]*?)\\]`, "m"))?.[1].match(/src:/g) ?? []).length;
  const supp = supplementCount(id, "experience");
  lines.push(`experience ${id}: content gallery=${galleryCount} supplements=${supp} expanded≈${galleryCount + supp + 1}`);
}

for (const id of eventIds.slice(0, 3)) {
  const galleryCount = (events.match(new RegExp(`id: "${id}"[\\s\\S]*?gallery: \\[([\\s\\S]*?)\\]`, "m"))?.[1].match(/src:/g) ?? []).length;
  const supp = supplementCount(id, "event");
  lines.push(`event ${id}: content gallery=${galleryCount} supplements=${supp} expanded≈${galleryCount + supp + 1}`);
}

lines.push("");
lines.push("--- Step 4: Hero + mosaic structure ---");
lines.push(`primitives min-h vh: ${grepCount("components/luxury/primitives.tsx", "min-h-\\[")}`);
lines.push(`mosaic row-span: ${grepCount("components/luxury/primitives.tsx", "row-span")}`);
lines.push(`info-page uses LuxuryImageBand (no split prose): ${readFileSync(join(root, "components/info-page/info-page.tsx"), "utf8").includes("LuxuryImageBand") && !readFileSync(join(root, "components/info-page/info-page.tsx"), "utf8").includes("LuxurySplitBand")}`);

lines.push("");
lines.push("--- Step 5: Page-specific intro + Elfsight placement ---");
const scaffold = readFileSync(join(root, "components/page-scaffold.tsx"), "utf8");
lines.push(`PAGE_INTRO keys: ${(scaffold.match(/galeria|restaurante|sobre-nosotros/g) ?? []).length >= 3 ? "PASS" : "FAIL"}`);
const sobre = readFileSync(join(root, "app/[locale]/sobre-nosotros/page.tsx"), "utf8");
lines.push(`Elfsight inside scaffold afterContent: ${sobre.includes("afterContent") && sobre.includes("bg-concept-sand-muted") ? "PASS" : "FAIL"}`);

const output = lines.join("\n");
console.log(output);

if (scratch) {
  writeFileSync(join(scratch, "verification-evidence.txt"), output);
  writeFileSync(join(scratch, "verify-luxury-pages.log"), output);
}