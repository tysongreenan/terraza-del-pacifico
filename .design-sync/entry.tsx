// Design-sync bundle entry. Re-exports ONLY the Next-free, renderable surface
// of the design system (the app's page/section components are coupled to
// next/image, next/link, app-router and i18n dictionaries and are intentionally
// out of scope). esbuild bundles from here; @/ aliases resolve via cfg.tsconfig.
export { SectionHeading } from "@/components/home/section-heading";
export { Reveal } from "@/components/home/reveal";
export { actionButtonVariants } from "@/components/ui/button";
