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
  /** Locale-invariant daily opening hours (24h, Mo–Su) for JSON-LD openingHoursSpecification. */
  hours?: { opens: string; closes: string };
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
    hours: { opens: "11:00", closes: "19:00" },
    heroImage: "/images/Resturant/chloemurdochphotography-259.JPG",
    introSlides: [
      { src: "/images/Resturant/DSCF40452.JPG", alt: "Sunset terrace framed by palms" },
      { src: "/images/Resturant/1L6A2634.jpg", alt: "Couples at a terrace table under string lights, ocean beyond" },
      { src: "/images/Resturant/chloemurdochphotography-53.JPG", alt: "Tacos and a cold beer" },
      { src: "/images/Resturant/chloemurdochphotography-48.JPG", alt: "White wine poured poolside" },
    ],
    ctaImage: "/images/Resturant/DSCF4078(1).JPG",
    cardImage: "/images/golden-beach-bar-qN10cbKY.jpg",
    text: {
      en: {
        hero: {
          title: "Golden Beach Bar",
          description:
            "Cocktails and cold beer with your feet in the sand, right where the Pacific meets the shore.",
          meta: ["Daily · 11:00 AM – 7:00 PM", "Playa Hermosa · direct beach access"],
        },
        intro: {
          eyebrow: "The sunset spot",
          titleLines: ["The ultimate", "beachfront experience"],
          body: "A good spot to watch the sunset with a drink in hand and friends nearby. No shoes needed — just the horizon and a cold glass.",
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
            "Cócteles y cerveza fría con los pies en la arena, justo donde el Pacífico toca la orilla.",
          meta: ["Todos los días · 11:00 AM – 7:00 PM", "Playa Hermosa · acceso directo a la playa"],
        },
        intro: {
          eyebrow: "El lugar del atardecer",
          titleLines: ["La experiencia", "frente al mar"],
          body: "Un buen lugar para ver el atardecer con un trago en la mano y amigos cerca. Sin zapatos — solo el horizonte y un vaso frío.",
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
    hours: { opens: "10:00", closes: "18:00" },
    heroImage: "/images/iguanabar-photo-download-1of1/Iguana_Bar_at_night/DSC09526-3.jpg",
    introSlides: [
      { src: "/images/iguanabar-photo-download-1of1/Iguana_Bar_at_day/DSC08652-2.jpg", alt: "Iguana Bar's poolside palapa across the turquoise pool by day" },
      { src: "/images/iguanabar-photo-download-1of1/Iguana_Bar_at_day/DSC08675.jpg", alt: "Iguana Bar counter and barstools beside the pool in daylight" },
      { src: "/images/iguanabar-photo-download-1of1/Iguana_Bar_at_night/DSC09546-2.jpg", alt: "Iguana Bar glowing at dusk with guests relaxing in the pool" },
      { src: "/images/iguanabar-photo-download-1of1/Iguana_Bar_at_night/DSC09544-2.jpg", alt: "Iguana Bar's illuminated sign and barstools at night" },
      { src: "/images/iguanabar-photo-download-1of1/Iguana_Bar_at_night/DSC09526-2.jpg", alt: "Iguana Bar lit up at night beside the pool" },
    ],
    ctaImage: "/images/Resturant/IMG_78472.JPG",
    cardImage: "/images/iguanabar-photo-download-1of1/Iguana_Bar_at_day/DSC08652-2.jpg",
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
          body: "With pool service, your drinks come to you, so you never have to leave the water. The casual, tropical setting keeps guests at Iguana Bar through the afternoon.",
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
          body: "Con servicio en la piscina, tus bebidas llegan a ti y no tienes que salir del agua. El ambiente casual y tropical mantiene a los huéspedes en el Iguana Bar toda la tarde.",
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
    title: "Two bars, both on the resort",
    description:
      "Both bars are right here on the resort: toes in the sand at sunset, or a frozen drink without leaving the pool — each just a few steps from your room.",
    viewCta: "Visit the bar",
  },
  es: {
    eyebrow: "Comer y beber · Bares",
    title: "Dos bares, ambos en el resort",
    description:
      "Ambos bares están aquí en el resort: los pies en la arena al atardecer o un trago frozen sin salir de la piscina, cada uno a pocos pasos de tu habitación.",
    viewCta: "Visitar el bar",
  },
};
