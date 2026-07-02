import type { Metadata } from "next";
import data from "@/content/sobre-nosotros.json";
import { AboutPage } from "@/components/about/about-page";
import { ElfsightWidget } from "@/components/elfsight-widget";
import { JsonLd } from "@/components/json-ld";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const path = "about";

// Localized title/description so the Spanish route does not inherit the
// English-only strings stored in sobre-nosotros.json. The OG/Twitter/canonical
// and hreflang alternates still come from pageMetadata(). The about hero image
// is used for OG so social shares match the page instead of the generic default.
const seoCopy: Record<Locale, { title: string; desc: string }> = {
  es: {
    title: "Sobre nosotros | Hotel Terraza del Pacífico",
    desc: "Más de 20 años creando estancias frente al Pacífico costarricense en Playa Hermosa de Jacó. Conoce nuestra historia, instalaciones y forma de recibir.",
  },
  en: {
    title: "About us | Hotel Terraza del Pacífico",
    desc: "More than 20 years of beachfront stays on the Costa Rican Pacific at Playa Hermosa de Jacó. Read our story, facilities and how we welcome guests.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = (locale === "en" ? "en" : "es") as Locale;
  return pageMetadata({
    params: Promise.resolve({ locale }),
    path,
    content: { ...data, ...seoCopy[l] },
    image: "/images/resort/beach-aerial/g-aerial-beach-property-COogc_9W.jpg",
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = locale as Locale;
  const dict = getDictionary(l);
  const elfsightId = process.env.NEXT_PUBLIC_ELFSIGHT_ABOUT_ID;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd({
          locale: l,
          path,
          title: l === "en" ? "About Us" : "Sobre Nosotros",
        })}
      />
      <AboutPage locale={l} dict={dict} />
      {elfsightId && (
        <section className="home-concept bg-concept-sand-muted py-14 md:py-section-sm">
          <div className="container">
            <ElfsightWidget appId={elfsightId} />
          </div>
        </section>
      )}
    </>
  );
}
