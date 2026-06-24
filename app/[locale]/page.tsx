import type { Metadata } from "next";
import { notFound } from "next/navigation";
import data from "@/content/home.json";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/hero";
import { ResortDiscovery } from "@/components/home/resort-discovery";
import { Welcome } from "@/components/home/welcome";
import { Experiences } from "@/components/home/experiences";
import { Suites } from "@/components/home/suites";
import { Restaurant } from "@/components/home/restaurant";
import { Testimonials } from "@/components/home/testimonials";
import { Instagram } from "@/components/home/instagram";
import { Location } from "@/components/home/location";
import { FinalCta } from "@/components/home/final-cta";

export function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return pageMetadata({ params, path: "", content: data });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);

  return (
    <div className="home-concept">
      <Hero locale={l} dict={dict} />
      <ResortDiscovery locale={l} dict={dict} />
      <Experiences locale={l} dict={dict} />
      <Suites locale={l} dict={dict} />
      <Restaurant locale={l} dict={dict} />
      <Testimonials dict={dict} />
      <Welcome dict={dict} />
      <Location dict={dict} />
      <Instagram dict={dict} />
      <FinalCta dict={dict} />
    </div>
  );
}