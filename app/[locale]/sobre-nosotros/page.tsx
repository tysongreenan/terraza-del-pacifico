import type { Metadata } from "next";
import data from "@/content/sobre-nosotros.json";
import { AboutPage } from "@/components/about/about-page";
import { ElfsightWidget } from "@/components/elfsight-widget";
import { JsonLd } from "@/components/json-ld";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const path = "sobre-nosotros";

export function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return pageMetadata({ params, path, content: data });
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
        <section className="home-concept bg-concept-sand-muted py-14 md:py-16">
          <div className="container">
            <ElfsightWidget appId={elfsightId} />
          </div>
        </section>
      )}
    </>
  );
}
