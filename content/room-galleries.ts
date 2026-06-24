export type RoomGallery = {
  slug: string;
  images: { src: string; alt: { es: string; en: string } }[];
};

export const roomGalleries: RoomGallery[] = [
  {
    slug: "superior",
    images: [
      {
        src: "/images/exp-room-superior-hero.avif",
        alt: {
          es: "Habitación superior con dos camas dobles y muro de vidrio al balcón con piscina y mar",
          en: "Superior room with two double beds and a floor-to-ceiling glass wall onto the balcony with pool and sea beyond",
        },
      },
      {
        src: "/images/Suit photos/RLR_4906.jpg",
        alt: {
          es: "Habitación superior con dos camas dobles y techo abovedado",
          en: "Superior room with two double beds and a vaulted ceiling",
        },
      },
      {
        src: "/images/exp-room-superior-view.avif",
        alt: {
          es: "Vista al jardín y los terrenos a través del muro de vidrio",
          en: "Garden and grounds view through the glass wall",
        },
      },
      {
        src: "/images/exp-room-superior-terrace.avif",
        alt: {
          es: "Terraza privada a nivel de planta baja con sillas y seto en flor",
          en: "Private ground-level terrace with chairs and a flowering hedge",
        },
      },
      {
        src: "/images/exp-bath-junior.avif",
        alt: {
          es: "Baño con acento de madera cálida",
          en: "Bathroom with a warm wood accent",
        },
      },
    ],
  },
  {
    slug: "estandar",
    images: [
      {
        src: "/images/exp-room-standard-hero.avif",
        alt: {
          es: "Habitación estándar con dos camas y balcón abierto con cortinas vaporosas",
          en: "Standard room with twin beds and an open balcony with sheer curtains",
        },
      },
      {
        src: "/images/exp-room-standard-balcony.avif",
        alt: {
          es: "Balcón con vista hacia la piscina y las tumbonas",
          en: "Balcony looking down to the pool and loungers",
        },
      },
      {
        src: "/images/exp-room-standard-interior.avif",
        alt: {
          es: "Interior de techo abovedado de la habitación estándar",
          en: "Vaulted-ceiling interior of the standard room",
        },
      },
      {
        src: "/images/exp-bath-standard.avif",
        alt: {
          es: "Baño con ducha de vidrio sin marco",
          en: "Bathroom with a glass walk-in shower",
        },
      },
    ],
  },
  {
    slug: "junior-suite",
    images: [
      {
        src: "/images/exp-room-junior-hero.avif",
        alt: {
          es: "Junior suite con cama king y puertas de vidrio al balcón con vista clara al mar y la playa",
          en: "King junior suite with glass balcony doors and a clear ocean and beach view",
        },
      },
      {
        src: "/images/exp-room-junior-living.avif",
        alt: {
          es: "Cama king y sala de estar con sofá de cuero en la junior suite",
          en: "King bed and leather loveseat lounge area in the junior suite",
        },
      },
      {
        src: "/images/Suit photos/RLR_48512.JPG",
        alt: {
          es: "Junior suite con cama king, sofá y amplio espacio",
          en: "Junior suite with a king bed, loveseat and generous space",
        },
      },
      {
        src: "/images/exp-room-junior-interior.avif",
        alt: {
          es: "Interior amplio de madera abovedada con vidrio al balcón",
          en: "Spacious vaulted-wood interior with balcony glass",
        },
      },
      {
        src: "/images/exp-bath-junior.avif",
        alt: {
          es: "Baño luminoso de azulejo blanco con techo de madera abovedado",
          en: "Bright white-tile bathroom with a vaulted wood ceiling",
        },
      },
      {
        src: "/images/exp-room-pool-view.webp",
        alt: {
          es: "Vista desde el balcón de la habitación sobre la piscina de día",
          en: "Room-balcony view over the daytime pool",
        },
      },
    ],
  },
  {
    slug: "villas",
    images: [
      {
        src: "/images/exp-villa-hero.avif",
        alt: {
          es: "Villa de planta abierta con cocineta, comedor y cama en un solo espacio",
          en: "Open-plan villa with kitchenette, dining area and bed in one space",
        },
      },
      {
        src: "/images/exp-villa-balcony-ocean.avif",
        alt: {
          es: "Balcón con mesa bistró y orquídea enmarcando una vista clara al océano",
          en: "Balcony with a bistro set and orchid framing a clear ocean view",
        },
      },
      {
        src: "/images/exp-villa-dining-view.avif",
        alt: {
          es: "Comedor con puertas de vidrio que muestran la piscina y el horizonte del océano",
          en: "Dining nook with glass doors showing the pool and ocean horizon",
        },
      },
      {
        src: "/images/exp-villa-kitchen.avif",
        alt: {
          es: "Cocina completa de la villa con cocina, refrigerador y cafetera",
          en: "Full villa kitchen with cooktop, fridge and coffee maker",
        },
      },
      {
        src: "/images/exp-villa-twobed.avif",
        alt: {
          es: "Variante de villa con dos camas, comedor y puertas al balcón",
          en: "Two-bed villa variant with dining area and balcony doors",
        },
      },
      {
        src: "/images/Suit photos/IMG_4757.jpg",
        alt: {
          es: "Sala y comedor de la villa vistos a través de la puerta",
          en: "Villa lounge and dining seen through the doorway",
        },
      },
      {
        src: "/images/Suit photos/IMG_4688.JPG",
        alt: {
          es: "Detalle de la cocineta de la villa con ollas rojas",
          en: "Villa kitchenette detail with red pots",
        },
      },
    ],
  },
];

export const defaultRoomSlug = "junior-suite";