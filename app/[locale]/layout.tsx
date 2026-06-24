import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { MetaPixel } from "@/components/meta-pixel";
import { locales, isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { JsonLd } from "@/components/json-ld";
import {
  defaultOgImage,
  languageAlternates,
  organizationJsonLd,
  siteName,
  siteUrl,
  websiteJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: isEn
        ? `${siteName} | Playa Hermosa, Costa Rica`
        : `${siteName} | Playa Hermosa, Costa Rica`,
      template: `%s | ${siteName}`,
    },
    description: isEn
      ? "Beachfront hotel in Playa Hermosa, Costa Rica. Ocean-view rooms, a one-of-a-kind LED pool, Mediterranean dining and unforgettable experiences."
      : "Hotel frente al mar en Playa Hermosa, Costa Rica. Habitaciones con vista, piscina LED única, restaurante mediterráneo y experiencias inolvidables.",
    alternates: {
      canonical: `/${locale}`,
      languages: languageAlternates(),
    },
    openGraph: {
      type: "website",
      siteName,
      locale: isEn ? "en_US" : "es_CR",
      alternateLocale: isEn ? ["es_CR"] : ["en_US"],
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      images: [defaultOgImage],
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[1000] rounded-sm bg-concept-ocean px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {locale === "en" ? "Skip to content" : "Saltar al contenido"}
      </a>
      <SiteHeader locale={locale as Locale} dict={dict} />
      <main id="main">{children}</main>
      <SiteFooter locale={locale as Locale} dict={dict} />
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={websiteJsonLd(locale as Locale)} />

      <WhatsAppButton
        label={locale === "en" ? "Chat on WhatsApp" : "Escríbenos por WhatsApp"}
      />

      {/* Elfsight platform loader — hydrates every <ElfsightWidget> on the page. */}
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

      {/* Analytics. GTM owns the container; GA4 is added standalone too.
          VERIFY: if the GTM container (GTM-KRJHXP6D) already has a GA4 config
          tag for G-0SW8NFFFEV, drop NEXT_PUBLIC_GA_ID so pageviews don't
          double-count. See .env.example. */}
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}

      {/* Disabled until NEXT_PUBLIC_FB_PIXEL_ID is set (no-op otherwise). */}
      <MetaPixel />
    </>
  );
}
