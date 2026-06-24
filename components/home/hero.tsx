import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { HeroCarousel } from "@/components/home/hero-carousel";

export function Hero({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return <HeroCarousel locale={locale} dict={dict} />;
}