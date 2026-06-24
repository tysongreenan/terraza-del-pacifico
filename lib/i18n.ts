// Bilingual config (EN/ES). The live site is Spanish-primary (es-CR), so `es`
// is the default locale; `en` is the secondary for international guests.
export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Map our app locales to BCP-47 tags for <html lang> and hreflang.
export const htmlLang: Record<Locale, string> = {
  es: "es-CR",
  en: "en-US",
};
