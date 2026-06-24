import type { Locale } from "@/lib/i18n";

// Two beachfront/poolside bars built from one venue template. Images and
// palette are locale-invariant; copy is bilingual. Drink prices are
// intentionally left blank until confirmed — set `price` per item to show one.

export type PourItem = { name: string; price?: string };

type VenueText = {
  hero: { title: string; description: string; meta: string[] };
  intro: { eyebrow: string; titleLines: [string, string]; body: string; cta: string };
  pours: { eyebrow: string; title: string; blurb: string; items: PourItem[] };
  cta: { title: string; primary: string; secondary: string };
  /** Card copy for the /bares index. */
  card: { tagline: string };
};

export type Venue = {
  slug: string;
  palette: "amber" | "ocean";
  heroImage: string;
  introSlides: { src: string; alt: string }[];
  ctaImage: string;
  cardImage: string;
  text: Record<Locale, VenueText>;
};

export const bars: Venue[] = [
  {
    slug: "golden-beach-bar",
    palette: "amber",
    heroImage: "/images/golden-beach-bar-qN10cbKY.jpg",
    introSlides: [
      { src: "/images/pool-aerial-day-BveHvOiS.jpg", alt: "Aerial of the beach and pool" },
      { src: "/images/restaurant-cocktails-ITbgxYoM.jpg", alt: "Craft cocktails" },
      { src: "/images/restaurant-sunset-T7wmiQ85.jpg", alt: "Sunset over the Pacific" },
      { src: "/images/restaurant-view-WsRnSUPN.jpg", alt: "Beachfront seating" },
    ],
    ctaImage: "/images/restaurant-sunset-silhouette-CBBvMTsI.jpg",
    cardImage: "/images/golden-beach-bar-qN10cbKY.jpg",
    text: {
      en: {
        hero: {
          title: "Golden Beach Bar",
          description:
            "Feet in the sand, waves as your soundtrack — craft cocktails and cold beer, right where the Pacific meets the shore.",
          meta: ["Daily · 11:00 AM – 7:00 PM", "Playa Hermosa · direct beach access"],
        },
        intro: {
          eyebrow: "The sunset spot",
          titleLines: ["The ultimate", "beachfront experience"],
          body: "The ideal place to watch the sunset with a drink in hand, share with friends, or simply take in the Pacific in all its splendor. No shoes, no rush — just the horizon and a cold glass.",
          cta: "See the drinks",
        },
        pours: {
          eyebrow: "Pour list",
          title: "Sundown signatures",
          blurb: "Craft cocktails, cold beer, and zero-proof coolers — all served barefoot.",
          items: [
            { name: "Pacific Sunset" },
            { name: "Guaro Sour" },
            { name: "Coconut Mojito" },
            { name: "Imperial · cold draft" },
            { name: "Michelada Tica" },
            { name: "Agua de Sandía" },
          ],
        },
        cta: { title: "Meet us for sunset", primary: "Find the Bar", secondary: "WhatsApp Us" },
        card: { tagline: "Beachfront · sunset cocktails" },
      },
      es: {
        hero: {
          title: "Golden Beach Bar",
          description:
            "Pies en la arena, las olas como banda sonora — cócteles de autor y cerveza fría, justo donde el Pacífico toca la orilla.",
          meta: ["Todos los días · 11:00 AM – 7:00 PM", "Playa Hermosa · acceso directo a la playa"],
        },
        intro: {
          eyebrow: "El lugar del atardecer",
          titleLines: ["La experiencia", "frente al mar"],
          body: "El lugar ideal para ver el atardecer con un trago en la mano, compartir con amigos o simplemente contemplar el Pacífico en todo su esplendor. Sin zapatos, sin prisa — solo el horizonte y un vaso frío.",
          cta: "Ver los tragos",
        },
        pours: {
          eyebrow: "Carta de tragos",
          title: "Clásicos del atardecer",
          blurb: "Cócteles de autor, cerveza fría y refrescos sin alcohol — todo servido descalzo.",
          items: [
            { name: "Pacific Sunset" },
            { name: "Guaro Sour" },
            { name: "Mojito de coco" },
            { name: "Imperial · barril frío" },
            { name: "Michelada tica" },
            { name: "Agua de sandía" },
          ],
        },
        cta: { title: "Nos vemos al atardecer", primary: "Cómo llegar", secondary: "WhatsApp" },
        card: { tagline: "Frente al mar · cócteles al atardecer" },
      },
    },
  },
  {
    slug: "iguana-bar",
    palette: "ocean",
    heroImage: "/images/iguana-bar-pool-CP3k5v8t.jpg",
    introSlides: [
      { src: "/images/pool-starry-night-DUYiQ-e6.jpg", alt: "The LED pool at night" },
      { src: "/images/g-aerial-pool-overview-CCOWXk2j.jpg", alt: "Pool overview" },
      { src: "/images/pool-aerial-day-BveHvOiS.jpg", alt: "Pool by day" },
      { src: "/images/g-pool-night-1-WgdE2JvM.jpg", alt: "Poolside at night" },
    ],
    ctaImage: "/images/pool-aerial-night-BvFgNxHn.jpg",
    cardImage: "/images/iguana-bar-pool-CP3k5v8t.jpg",
    text: {
      en: {
        hero: {
          title: "Iguana Bar",
          description:
            "Right beside the main pool — tropical cocktails, cold drinks and light bites without ever leaving the water.",
          meta: ["Daily · 10:00 AM – 6:00 PM", "Next to the main pool · pool service"],
        },
        intro: {
          eyebrow: "Cool off, stay in",
          titleLines: ["Relax without", "leaving the water"],
          body: "With direct pool service, your favorite drinks come to you — no need to interrupt the moment. The casual, tropical atmosphere makes Iguana Bar a guest favorite all day long.",
          cta: "See the drinks",
        },
        pours: {
          eyebrow: "Pour list",
          title: "Poolside coolers",
          blurb: "Tropical cocktails, frozen drinks and light snacks — straight to your lounger.",
          items: [
            { name: "Frozen Piña Colada" },
            { name: "Mango Daiquiri" },
            { name: "Watermelon Cooler" },
            { name: "Nachos & guac" },
            { name: "Ceviche cup" },
            { name: "Agua de Maracuyá" },
          ],
        },
        cta: { title: "Order from the pool", primary: "Find the Bar", secondary: "WhatsApp Us" },
        card: { tagline: "Poolside · pool service" },
      },
      es: {
        hero: {
          title: "Iguana Bar",
          description:
            "Justo al lado de la piscina principal — cócteles tropicales, bebidas frías y bocadillos sin salir nunca del agua.",
          meta: ["Todos los días · 10:00 AM – 6:00 PM", "Junto a la piscina principal · servicio en piscina"],
        },
        intro: {
          eyebrow: "Refréscate sin salir",
          titleLines: ["Relájate sin", "salir del agua"],
          body: "Con servicio directo en la piscina, tus bebidas favoritas llegan a ti — sin interrumpir el momento. El ambiente casual y tropical hace del Iguana Bar un favorito de los huéspedes todo el día.",
          cta: "Ver los tragos",
        },
        pours: {
          eyebrow: "Carta de tragos",
          title: "Refrescos de piscina",
          blurb: "Cócteles tropicales, bebidas frozen y bocadillos ligeros — directo a tu camastro.",
          items: [
            { name: "Piña colada frozen" },
            { name: "Daiquiri de mango" },
            { name: "Refresco de sandía" },
            { name: "Nachos con guacamole" },
            { name: "Vasito de ceviche" },
            { name: "Agua de maracuyá" },
          ],
        },
        cta: { title: "Pide desde la piscina", primary: "Cómo llegar", secondary: "WhatsApp" },
        card: { tagline: "En la piscina · servicio en camastro" },
      },
    },
  },
];

export function getVenue(slug: string) {
  return bars.find((b) => b.slug === slug);
}

export const barsIndexCopy: Record<Locale, { eyebrow: string; title: string; description: string; viewCta: string }> = {
  en: {
    eyebrow: "Eat & Drink · Bars",
    title: "Two bars, both on the water",
    description:
      "Whether you want toes in the sand at sunset or a frozen drink without leaving the pool, there's a bar a few steps away.",
    viewCta: "Visit the bar →",
  },
  es: {
    eyebrow: "Comer y beber · Bares",
    title: "Dos bares, ambos sobre el agua",
    description:
      "Ya sea con los pies en la arena al atardecer o un trago frozen sin salir de la piscina, hay un bar a pocos pasos.",
    viewCta: "Visitar el bar →",
  },
};
