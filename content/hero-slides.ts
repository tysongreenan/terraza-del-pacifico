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
    poster: "/images/hero-aerial-beach.webp",
    alt: {
      es: "Vista aérea del Hotel Terraza del Pacífico en Playa Hermosa, Costa Rica",
      en: "Aerial view of Hotel Terraza del Pacífico on Playa Hermosa, Costa Rica",
    },
  },
  {
    id: "pool-day",
    type: "image",
    src: "/images/pool-aerial-day-BveHvOiS.jpg",
    alt: {
      es: "Piscina frente al mar con vista al Pacífico en Terraza del Pacífico",
      en: "Oceanfront pool overlooking the Pacific at Terraza del Pacífico",
    },
  },
  {
    id: "pool-night",
    type: "image",
    src: "/images/pool-starry-night-DUYiQ-e6.jpg",
    alt: {
      es: "Piscina LED de noche con más de 1,200 luces bajo el agua",
      en: "LED-lit pool at night with more than 1,200 lights beneath the water",
    },
  },
  {
    id: "beach-property",
    type: "image",
    src: "/images/g-aerial-beach-property-COogc_9W.jpg",
    alt: {
      es: "Resort frente a la playa en Playa Hermosa, Costa Rica",
      en: "Beachfront resort property in Playa Hermosa, Costa Rica",
    },
  },
];