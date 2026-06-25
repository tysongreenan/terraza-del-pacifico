export type RoomGallery = {
  slug: string;
  images: { src: string; alt: { es: string; en: string } }[];
};

// Each room's carousel is the full Expedia shoot for that room type (deduped,
// exterior/filler frames removed, hero first, bathroom last).
export const roomGalleries: RoomGallery[] = [
  {
    slug: "superior",
    images: [
      {
        src: "/images/exp-superior-01.avif",
        alt: {
          es: "Habitación superior con dos camas dobles y un gran ventanal al jardín",
          en: "Superior room with two double beds and a large garden window",
        },
      },
      {
        src: "/images/exp-superior-03.avif",
        alt: {
          es: "Dos camas dobles con puertas corredizas de vidrio de piso a techo hacia la piscina",
          en: "Two double beds with full-height sliding glass doors onto the pool",
        },
      },
      {
        src: "/images/exp-superior-07.avif",
        alt: {
          es: "Cama junto a la puerta de vidrio con vista al jardín",
          en: "Bed beside a glass door with a garden view",
        },
      },
      {
        src: "/images/exp-superior-05.avif",
        alt: {
          es: "Habitación superior vista desde el televisor, con cortinas altas",
          en: "Superior room seen from the TV side, with tall drapes",
        },
      },
      {
        src: "/images/exp-superior-02.avif",
        alt: {
          es: "Terraza a nivel de planta baja con sillas y un seto de hibisco",
          en: "Ground-level terrace with chairs and a hibiscus hedge",
        },
      },
      {
        src: "/images/exp-superior-06.avif",
        alt: {
          es: "Baño con ducha tras mampara de vidrio esmerilado y lavabo de azulejo",
          en: "Bathroom with a shower behind frosted glass and a tiled vanity",
        },
      },
    ],
  },
  {
    slug: "standard",
    images: [
      {
        src: "/images/exp-standard-01.avif",
        alt: {
          es: "Habitación estándar con dos camas individuales y puertas al balcón con cortinas vaporosas",
          en: "Standard room with two twin beds and balcony doors with sheer curtains",
        },
      },
      {
        src: "/images/exp-standard-03.avif",
        alt: {
          es: "Habitación estándar de techo abovedado con dos camas, televisor y clóset",
          en: "Vaulted-ceiling standard room with two beds, TV and closet",
        },
      },
      {
        src: "/images/exp-standard-05.avif",
        alt: {
          es: "Dos camas vistas de lado, con cómoda y aire acondicionado",
          en: "Two beds seen from the side, with dresser and air conditioning",
        },
      },
      {
        src: "/images/exp-standard-02.avif",
        alt: {
          es: "Balcón con sillas mirando hacia la piscina y las tumbonas",
          en: "Balcony with chairs looking down over the pool and loungers",
        },
      },
      {
        src: "/images/exp-standard-04.avif",
        alt: {
          es: "Escritorio con televisor y minibar en la habitación estándar",
          en: "Desk with TV and mini-fridge in the standard room",
        },
      },
      {
        src: "/images/exp-standard-07.avif",
        alt: {
          es: "Baño de azulejo blanco con ducha de vidrio tipo lluvia",
          en: "White-tile bathroom with a glass walk-in rain shower",
        },
      },
    ],
  },
  {
    slug: "junior-suite",
    images: [
      {
        src: "/images/exp-junior-02.avif",
        alt: {
          es: "Junior suite con cama king, techo de madera abovedado y puerta al balcón",
          en: "Junior suite with a king bed, wood cathedral ceiling and a door to the balcony",
        },
      },
      {
        src: "/images/exp-junior-03.avif",
        alt: {
          es: "Junior suite amplia con cama king, escritorio y televisor",
          en: "Spacious junior suite with king bed, desk and TV",
        },
      },
      {
        src: "/images/exp-junior-08.avif",
        alt: {
          es: "Cama king y sofá de cuero junto a una gran puerta de vidrio",
          en: "King bed and leather loveseat beside a large glass door",
        },
      },
      {
        src: "/images/exp-junior-05.avif",
        alt: {
          es: "Junior suite desde la entrada, con cama king y guardarropa",
          en: "Junior suite from the doorway, with king bed and wardrobe",
        },
      },
      {
        src: "/images/exp-junior-01.avif",
        alt: {
          es: "Balcón frente al mar con mecedoras de madera y vista a la playa",
          en: "Oceanfront balcony with wood rocking chairs and a beach view",
        },
      },
      {
        src: "/images/exp-junior-04.avif",
        alt: {
          es: "Balcón privado con mecedoras de madera y vista al jardín",
          en: "Private balcony with wood rocking chairs and a garden view",
        },
      },
      {
        src: "/images/exp-junior-07.avif",
        alt: {
          es: "Baño con ducha de vidrio esmerilado y espejo con marco de madera",
          en: "Bathroom with a frosted-glass walk-in shower and a wood-framed mirror",
        },
      },
    ],
  },
  {
    slug: "villas",
    images: [
      {
        src: "/images/exp-villa-01.avif",
        alt: {
          es: "Villa de planta abierta con cocina, comedor de ratán y cama en un solo ambiente",
          en: "Open-plan villa with kitchen, rattan dining set and bed in one great room",
        },
      },
      {
        src: "/images/exp-villa-04.avif",
        alt: {
          es: "Sala principal de la villa con dos camas, comedor y paso a la habitación",
          en: "Villa great room with two beds, dining area and a doorway to the bedroom",
        },
      },
      {
        src: "/images/exp-villa-05.avif",
        alt: {
          es: "Sala de la villa con un gran espejo tallado que refleja las camas y el comedor",
          en: "Villa great room with a large carved mirror reflecting the beds and dining area",
        },
      },
      {
        src: "/images/exp-villa-06.avif",
        alt: {
          es: "Sala de la villa desde el comedor, con cama, arte de peces y puerta al balcón",
          en: "Villa great room from the dining side, with bed, fish art and a balcony door",
        },
      },
      {
        src: "/images/exp-villa-12.avif",
        alt: {
          es: "Habitación independiente de la villa con cama king, espejo dorado y banca tallada",
          en: "Separate villa bedroom with a king bed, gold mirror and a carved bench",
        },
      },
      {
        src: "/images/exp-villa-02.avif",
        alt: {
          es: "Habitación de la villa con cama king y puerta a un balcón con palmeras",
          en: "Villa bedroom with a king bed and a door to a palm-lined balcony",
        },
      },
      {
        src: "/images/exp-villa-10.avif",
        alt: {
          es: "Cocina de la villa con encimeras de azulejo blanco, cocina y refrigerador",
          en: "Villa kitchen with white-tile counters, cooktop and fridge",
        },
      },
      {
        src: "/images/exp-villa-08.avif",
        alt: {
          es: "Cocina y comedor de la villa con sillas de ratán, microondas, cafetera y televisor",
          en: "Villa kitchen and dining area with rattan chairs, microwave, coffee maker and TV",
        },
      },
      {
        src: "/images/exp-villa-03.avif",
        alt: {
          es: "Comedor junto a puertas abiertas que enmarcan las palmeras, la piscina y el mar",
          en: "Dining area beside open doors framing the palms, pool and ocean",
        },
      },
      {
        src: "/images/exp-villa-07.avif",
        alt: {
          es: "Balcón privado de la villa con sillas de mimbre y vista al mar",
          en: "Private villa balcony with woven chairs and an ocean glimpse",
        },
      },
      {
        src: "/images/exp-villa-09.avif",
        alt: {
          es: "Otra vista de la sala principal de la villa",
          en: "Another view of the villa great room",
        },
      },
      {
        src: "/images/exp-villa-13.avif",
        alt: {
          es: "Baño de la villa con azulejo blanco tipo metro y ducha de vidrio",
          en: "Villa bathroom with white subway tile and a glass walk-in shower",
        },
      },
    ],
  },
];

export const defaultRoomSlug = "junior-suite";
