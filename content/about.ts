import type { Locale } from "@/lib/i18n";

// Bespoke copy for the redesigned About page (Sobre Nosotros).
// The intro statement reuses dict.welcome.body; stats reuse dict.welcome.stats.

type AboutCopy = {
  hero: {
    eyebrow: string;
    titleLines: [string, string];
    description: string;
    meta: string;
    image: string;
  };
  statementEyebrow: string;
  story: {
    eyebrow: string;
    titleLines: [string, string];
    paragraphs: string[];
    slides: { src: string; alt: string }[];
  };
  timeline: {
    eyebrow: string;
    title: string;
    items: { year: string; body: string }[];
  };
  values: {
    eyebrow: string;
    title: string;
    items: { title: string; body: string; image: string; alt: string }[];
  };
  cta: { title: string; primary: string; secondary: string };
};

const en: AboutCopy = {
  hero: {
    eyebrow: "About · Sobre Nosotros",
    titleLines: ["Twenty Years on", "the Same Sand"],
    description:
      "A family-run stretch of the Pacific where the welcome is real and the ocean has never moved.",
    meta: "Playa Hermosa, Jacó · est. 2006",
    image: "/images/g-aerial-beach-property-COogc_9W.jpg",
  },
  statementEyebrow: "Bienvenidos",
  story: {
    eyebrow: "Our story",
    titleLines: ["A small idea that", "never left the beach"],
    paragraphs: [
      "It began with a handful of rooms and a simple belief: that the best of Costa Rica isn't something you visit, it's something you wake up inside of. Two decades later we've grown, but the idea hasn't moved an inch from the water.",
      "Today the resort is still family-run, still on the sand, and still measured by the same thing — whether you leave already planning to come back.",
    ],
    slides: [
      { src: "/images/villa-living-room-CHkIhyVw.jpg", alt: "Villa living room at Terraza del Pacífico" },
      { src: "/images/pool-aerial-day-BveHvOiS.jpg", alt: "Aerial view of the pool by day" },
      { src: "/images/g-aerial-pool-overview-CCOWXk2j.jpg", alt: "Pool and resort overview" },
      { src: "/images/g-aerial-beach-property-COogc_9W.jpg", alt: "Beachfront aerial of the property" },
    ],
  },
  timeline: {
    eyebrow: "The years, in brief",
    title: "How we got here",
    items: [
      { year: "2006", body: "First rooms open on Playa Hermosa — a dozen keys and a dream." },
      { year: "2013", body: "Vivace Beachfront restaurant opens with Chef Luigi at the pass." },
      { year: "2019", body: "The signature LED pool — 1,200 lights — is unveiled." },
      { year: "Today", body: "Four room types, weddings & surf nights — still on the same sand." },
    ],
  },
  values: {
    eyebrow: "What we stand for",
    title: "Three things we won't compromise",
    items: [
      {
        title: "Real hospitality",
        body: "Family-run means the welcome isn't a script. You're a guest in our home.",
        image: "/images/g-family-beach-DHJPEGnp.jpg",
        alt: "A family enjoying the beach",
      },
      {
        title: "The coast, protected",
        body: "Turtle nesting, clean sand, low footprint — we keep the beach worth waking to.",
        image: "/images/turtle-nesting-qhRPIRHR.jpg",
        alt: "Sea turtle nesting on the beach",
      },
      {
        title: "Costa Rica, fully",
        body: "Local hands, local flavor, local adventure — pura vida isn't a slogan here.",
        image: "/images/live-music-U-RLRqGX.jpg",
        alt: "Live music at the resort",
      },
    ],
  },
  cta: {
    title: "Come see why people keep coming back",
    primary: "Book Your Escape",
    secondary: "WhatsApp Us",
  },
};

const es: AboutCopy = {
  hero: {
    eyebrow: "Sobre Nosotros · About",
    titleLines: ["Veinte años sobre", "la misma arena"],
    description:
      "Un tramo del Pacífico de manejo familiar, donde la bienvenida es de verdad y el océano nunca se ha movido.",
    meta: "Playa Hermosa, Jacó · desde 2006",
    image: "/images/g-aerial-beach-property-COogc_9W.jpg",
  },
  statementEyebrow: "Bienvenidos",
  story: {
    eyebrow: "Nuestra historia",
    titleLines: ["Una pequeña idea que", "nunca dejó la playa"],
    paragraphs: [
      "Empezó con un puñado de habitaciones y una creencia sencilla: que lo mejor de Costa Rica no es algo que se visita, es algo en lo que despiertas. Dos décadas después hemos crecido, pero la idea no se ha movido ni un centímetro del agua.",
      "Hoy el resort sigue siendo de manejo familiar, sigue sobre la arena, y se mide por lo mismo de siempre — si te vas ya planeando volver.",
    ],
    slides: [
      { src: "/images/villa-living-room-CHkIhyVw.jpg", alt: "Sala de estar de la villa en Terraza del Pacífico" },
      { src: "/images/pool-aerial-day-BveHvOiS.jpg", alt: "Vista aérea de la piscina de día" },
      { src: "/images/g-aerial-pool-overview-CCOWXk2j.jpg", alt: "Vista general de la piscina y el resort" },
      { src: "/images/g-aerial-beach-property-COogc_9W.jpg", alt: "Vista aérea de la propiedad frente al mar" },
    ],
  },
  timeline: {
    eyebrow: "Los años, en breve",
    title: "Cómo llegamos aquí",
    items: [
      { year: "2006", body: "Abren las primeras habitaciones en Playa Hermosa — una docena de llaves y un sueño." },
      { year: "2013", body: "Abre el restaurante Vivace Beachfront con el Chef Luigi al frente." },
      { year: "2019", body: "Se inaugura la piscina LED insignia — 1.200 luces." },
      { year: "Hoy", body: "Cuatro tipos de habitación, bodas y surf nights — sobre la misma arena." },
    ],
  },
  values: {
    eyebrow: "Lo que defendemos",
    title: "Tres cosas que no negociamos",
    items: [
      {
        title: "Hospitalidad real",
        body: "Manejo familiar significa que la bienvenida no es un guion. Eres un huésped en nuestra casa.",
        image: "/images/g-family-beach-DHJPEGnp.jpg",
        alt: "Una familia disfrutando de la playa",
      },
      {
        title: "La costa, protegida",
        body: "Anidación de tortugas, arena limpia, baja huella — cuidamos que la playa valga la pena al despertar.",
        image: "/images/turtle-nesting-qhRPIRHR.jpg",
        alt: "Tortuga marina anidando en la playa",
      },
      {
        title: "Costa Rica, de verdad",
        body: "Manos locales, sabor local, aventura local — aquí pura vida no es un eslogan.",
        image: "/images/live-music-U-RLRqGX.jpg",
        alt: "Música en vivo en el resort",
      },
    ],
  },
  cta: {
    title: "Ven a ver por qué la gente siempre vuelve",
    primary: "Reserva tu Escape",
    secondary: "WhatsApp",
  },
};

export const aboutContent: Record<Locale, AboutCopy> = { en, es };
