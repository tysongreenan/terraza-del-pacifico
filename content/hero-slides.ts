export type HeroSlide =
  | {
      id: string;
      type: "video";
      src: string;
      webm?: string;
      poster: string;
      alt: { es: string; en: string };
    }
  | {
      id: string;
      type: "image";
      src: string;
      alt: { es: string; en: string };
    };

export const heroSlides: HeroSlide[] = [
  {
    id: "aerial-beach",
    type: "video",
    src: "/videos/hero.mp4",
    webm: "/videos/hero.webm",
    poster: "/images/resort/beach-aerial/exp-beach-topdown.jpg",
    alt: {
      es: "Vista aérea del Hotel Terraza del Pacífico frente al mar en Playa Hermosa, al sur de Jacó, Costa Rica",
      en: "Aerial view of beachfront Hotel Terraza del Pacífico on Playa Hermosa, just south of Jacó, Costa Rica",
    },
  },
  {
    id: "pool-day",
    type: "image",
    src: "/images/resort/beach-aerial/exp-hero-front-aerial.avif",
    alt: {
      es: "Piscina frente al mar con vista al Pacífico en Terraza del Pacífico, Playa Hermosa, Jacó",
      en: "Oceanfront pool overlooking the Pacific at Terraza del Pacífico, Playa Hermosa, Jacó",
    },
  },
  {
    id: "pool-night",
    type: "image",
    src: "/images/resort/pool/exp-led-pool-aerial.webp",
    alt: {
      es: "Piscina LED de noche con más de 1.200 luces bajo el agua en Playa Hermosa, Jacó",
      en: "LED-lit pool at night with more than 1,200 lights beneath the water at Playa Hermosa, Jacó",
    },
  },
  {
    id: "beach-property",
    type: "image",
    src: "/images/resort/beach-aerial/exp-sunset-drone.jpg",
    alt: {
      es: "Resort frente al mar en Playa Hermosa, al sur de Jacó, Costa Rica",
      en: "Beachfront resort on Playa Hermosa, just south of Jacó, Costa Rica",
    },
  },
  {
    id: "resort-sunset-aerial",
    type: "image",
    src: "/images/resort/beach-aerial/aerial-resort-sunset.JPG",
    alt: {
      es: "Vista aérea del Hotel Terraza del Pacífico al atardecer en Playa Hermosa, Costa Rica",
      en: "Aerial sunset view of Hotel Terraza del Pacífico on Playa Hermosa, Costa Rica",
    },
  },
];