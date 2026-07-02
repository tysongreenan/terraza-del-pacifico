import { eventsEmail, whatsappHref } from "@/lib/site";
import type { HubPage, InfoPage } from "@/content/info-pages";

const eventInquiryHref = `mailto:${eventsEmail}`;

export const eventHub: HubPage = {
  eyebrow: {
    es: "Eventos",
    en: "Events",
  },
  title: {
    es: "Eventos frente al mar en Playa Hermosa",
    en: "Beachfront Events in Playa Hermosa",
  },
  description: {
    es: "Bodas, Surf Nights, reuniones, celebraciones familiares y cenas privadas en un resort frente al mar en Playa Hermosa, a pocos minutos de Jaco.",
    en: "Weddings, Surf Nights, meetings, family celebrations and private dinners at a beachfront resort on Playa Hermosa, just south of Jaco.",
  },
  heroImage: {
    src: "/images/resort/weddings/RLR_89012.JPG",
    alt: {
      es: "Celebracion frente al mar en Terraza del Pacifico",
      en: "Oceanfront celebration at Terraza del Pacifico",
    },
  },
  cta: {
    label: {
      es: "Contactar equipo de eventos",
      en: "Contact the events team",
    },
    href: eventInquiryHref,
  },
};

export const otherEventsHub: HubPage = {
  eyebrow: {
    es: "Eventos especiales",
    en: "Special events",
  },
  title: {
    es: "Espacios para eventos en Playa Hermosa, Costa Rica",
    en: "Event Spaces in Playa Hermosa, Costa Rica",
  },
  description: {
    es: "Reuniones corporativas, celebraciones familiares, cenas privadas y fiestas con servicio personalizado, frente al mar en Playa Hermosa cerca de Jaco.",
    en: "Corporate gatherings, family celebrations, private dinners and parties with personalized service, beachfront on Playa Hermosa near Jaco.",
  },
  heroImage: {
    src: "/images/resort/dining/RLR_40112.JPG",
    alt: {
      es: "Cena social al aire libre frente al mar",
      en: "Warm al-fresco group dinner by the ocean",
    },
  },
  cta: {
    label: {
      es: "Planear un evento",
      en: "Plan an event",
    },
    href: eventInquiryHref,
  },
};

export const otherEventSlugs = {
  es: "otros",
  en: "other-events",
} as const;

export const otherEventIds = [
  "corporate-events",
  "family-celebrations",
  "private-dinners",
  "parties-and-celebrations",
];

export const events: InfoPage[] = [
  {
    id: "weddings",
    type: "event",
    slugs: {
      es: "bodas",
      en: "weddings",
    },
    title: {
      es: "Bodas frente al mar en Playa Hermosa, Costa Rica",
      en: "Beachfront Weddings in Playa Hermosa, Costa Rica",
    },
    eyebrow: {
      es: "Playa Hermosa · Costa Rica",
      en: "Playa Hermosa · Costa Rica",
    },
    description: {
      es: "Celebra tu boda frente al mar en Playa Hermosa, cerca de Jaco, con el Pacifico como escenario, espacios al aire libre, gastronomia de Vivace y un equipo dedicado a cada detalle.",
      en: "Celebrate your beachfront wedding on Playa Hermosa near Jaco, with the Pacific as your backdrop, open-air spaces, Vivace cuisine and a team dedicated to every detail.",
    },
    heroImage: {
      src: "/images/resort/weddings/AM5_96762.JPG",
      alt: {
        es: "Novia a la hora dorada con luces colgantes",
        en: "Golden-hour bride with string lights",
      },
    },
    // Ordered to match the client's picks for the /gallery Weddings section
    // exactly — this feeds both the events-hub card carousel and this page's
    // own slider (expandInfoPageGallery: heroImage, then gallery, in order).
    gallery: [
      {
        src: "/images/resort/weddings/wedding-beach-ceremony-NqUR8iSS.jpg",
        alt: {
          es: "Ceremonia de boda frente al mar",
          en: "Beachfront wedding ceremony",
        },
      },
      {
        src: "/images/resort/weddings/wedding-venue-wtXbsJOx.jpg",
        alt: {
          es: "Espacio para bodas en Terraza del Pacifico",
          en: "Wedding venue at Terraza del Pacifico",
        },
      },
      {
        src: "/images/resort/weddings/AM5_92513.JPG",
        alt: {
          es: "Bodas frente al mar en Playa Hermosa, Costa Rica — imagen 4",
          en: "Beachfront Weddings in Playa Hermosa, Costa Rica — image 4",
        },
      },
      {
        src: "/images/resort/weddings/AM5_93622.JPG",
        alt: {
          es: "Bodas frente al mar en Playa Hermosa, Costa Rica — imagen 5",
          en: "Beachfront Weddings in Playa Hermosa, Costa Rica — image 5",
        },
      },
      {
        src: "/images/resort/weddings/AM5_94092.JPG",
        alt: {
          es: "Bodas frente al mar en Playa Hermosa, Costa Rica — imagen 6",
          en: "Beachfront Weddings in Playa Hermosa, Costa Rica — image 6",
        },
      },
      {
        src: "/images/resort/weddings/689FBDA4-AA9B-466A-9DE2-31DC8B13A9002.JPG",
        alt: {
          es: "Bodas frente al mar en Playa Hermosa, Costa Rica — imagen 7",
          en: "Beachfront Weddings in Playa Hermosa, Costa Rica — image 7",
        },
      },
      {
        src: "/images/resort/weddings/AM5_92612.JPG",
        alt: {
          es: "Bodas frente al mar en Playa Hermosa, Costa Rica — imagen 8",
          en: "Beachfront Weddings in Playa Hermosa, Costa Rica — image 8",
        },
      },
      {
        src: "/images/resort/weddings/AM5_92822.JPG",
        alt: {
          es: "Bodas frente al mar en Playa Hermosa, Costa Rica — imagen 9",
          en: "Beachfront Weddings in Playa Hermosa, Costa Rica — image 9",
        },
      },
      {
        src: "/images/resort/weddings/AM5_93422.JPG",
        alt: {
          es: "Bodas frente al mar en Playa Hermosa, Costa Rica — imagen 10",
          en: "Beachfront Weddings in Playa Hermosa, Costa Rica — image 10",
        },
      },
      {
        src: "/images/resort/weddings/AM5_92492.JPG",
        alt: {
          es: "Bodas frente al mar en Playa Hermosa, Costa Rica — imagen 11",
          en: "Beachfront Weddings in Playa Hermosa, Costa Rica — image 11",
        },
      },
      {
        src: "/images/resort/weddings/AM5_92562.JPG",
        alt: {
          es: "Bodas frente al mar en Playa Hermosa, Costa Rica — imagen 12",
          en: "Beachfront Weddings in Playa Hermosa, Costa Rica — image 12",
        },
      },
      {
        src: "/images/resort/weddings/AM5_92602.JPG",
        alt: {
          es: "Arco de ceremonia en el jardin frente al mar",
          en: "Beachfront-garden ceremony arch",
        },
      },
      {
        src: "/images/resort/weddings/AM5_96582.JPG",
        alt: {
          es: "Bodas frente al mar en Playa Hermosa, Costa Rica — imagen 14",
          en: "Beachfront Weddings in Playa Hermosa, Costa Rica — image 14",
        },
      },
      {
        src: "/images/resort/weddings/RLR_86342.JPG",
        alt: {
          es: "Montaje de boda en el jardin frente al mar",
          en: "Beachfront-garden wedding setup",
        },
      },
      {
        src: "/images/resort/weddings/RLR_8676.JPG",
        alt: {
          es: "Arco decorado con estrellas de mar doradas y flores",
          en: "Draped arch with gold starfish and florals",
        },
      },
      {
        src: "/images/resort/weddings/RLR_88882.JPG",
        alt: {
          es: "Pareja celebrando una boda frente al mar",
          en: "Couple celebrating an oceanfront wedding",
        },
      },
      {
        src: "/images/resort/weddings/RLR_89012.JPG",
        alt: {
          es: "Bodas frente al mar en Playa Hermosa, Costa Rica — imagen 18",
          en: "Beachfront Weddings in Playa Hermosa, Costa Rica — image 18",
        },
      },
      {
        src: "/images/resort/weddings/RLR_89382.JPG",
        alt: {
          es: "Bodas frente al mar en Playa Hermosa, Costa Rica — imagen 19",
          en: "Beachfront Weddings in Playa Hermosa, Costa Rica — image 19",
        },
      },
      {
        src: "/images/resort/weddings/wedding-ceremony-night-BS1EmGIk.jpg",
        alt: {
          es: "Ceremonia nocturna con luces",
          en: "Evening ceremony with lights",
        },
      },
      {
        src: "/images/resort/weddings/wedding-couple-BUFflCio.jpg",
        alt: {
          es: "Recien casados en Terraza del Pacifico",
          en: "Newlyweds at Terraza del Pacifico",
        },
      },
      {
        src: "/images/resort/weddings/wedding-setup-BpzA9vBd.jpg",
        alt: {
          es: "Montaje de la recepcion de boda",
          en: "Wedding reception setup",
        },
      },
      {
        src: "/images/resort/events/events-pool-night-lights-BcHsd1B9.jpg",
        alt: {
          es: "Piscina iluminada para eventos",
          en: "Illuminated pool for events",
        },
      },
      {
        src: "/images/resort/pool/dji_fly_20241022_013726_0642_1753125646863_photo2.JPG",
        alt: {
          es: "Piscina estrellada con luces LED moradas para recepciones",
          en: "Starlit pool with purple LED lights for receptions",
        },
      },
    ],
    facts: [
      {
        label: { es: "Escenario", en: "Setting" },
        value: { es: "Frente al Pacifico", en: "Facing the Pacific" },
      },
      {
        label: { es: "Ideal para", en: "Best for" },
        value: { es: "Ceremonias y recepciones", en: "Ceremonies and receptions" },
      },
      {
        label: { es: "Cocina", en: "Cuisine" },
        value: { es: "Vivace Beachfront", en: "Vivace Beachfront" },
      },
      {
        label: { es: "Contacto", en: "Contact" },
        value: { es: "Equipo de eventos", en: "Events team" },
      },
    ],
    sections: [
      {
        title: { es: "Resumen", en: "Overview" },
        body: {
          es: [
            "Una boda en Terraza del Pacifico combina playa, jardines, atardecer y la energia serena y familiar de Playa Hermosa, la tranquila playa de surf al sur de Jaco.",
            "El resort permite crear una celebracion que se siente natural, elegante y conectada con el destino.",
          ],
          en: [
            "A wedding at Terraza del Pacifico brings together beach, gardens, sunset and the serene, family-friendly energy of Playa Hermosa, the calm surf beach just south of Jaco.",
            "The resort makes it possible to create a celebration that feels natural, elegant and connected to the destination.",
          ],
        },
      },
      {
        title: { es: "Que incluye una boda aqui", en: "What a wedding here includes" },
        body: {
          es: [
            "Una boda en Terraza del Pacifico se realiza en un solo lugar frente al mar en Playa Hermosa, al sur de Jaco, donde la ceremonia, la recepcion, la gastronomia y el hospedaje de los invitados ocurren en el mismo resort.",
            "Incluye cuatro espacios para elegir (jardin frente al mar, ceremonia nocturna, Terraza Vivace y la piscina estrellada), gastronomia del restaurante Vivace con la cocina del Chef Luigi, habitaciones y suites en el hotel para alojar a los invitados, y un equipo de eventos que coordina cada detalle.",
          ],
          en: [
            "A wedding at Terraza del Pacifico takes place in a single beachfront location on Playa Hermosa, just south of Jaco, where the ceremony, reception, dining and guest lodging all happen at the same resort.",
            "It includes four venues to choose from (beachfront garden, evening ceremony, Vivace Terrace and the starlit pool), catering from the on-site Vivace restaurant with Chef Luigi's cuisine, hotel rooms and suites to host your guests, and an events team that coordinates every detail.",
          ],
        },
      },
      {
        title: { es: "Nuestros espacios", en: "Our venues" },
        body: {
          es: [
            "Cada rincon de Terraza del Pacifico es un escenario perfecto para tu historia de amor, con cuatro espacios principales para elegir.",
            "Jardin frente al mar: intercambia votos en nuestro jardin tropical de cara directa al oceano Pacifico. Sillas blancas, petalos de rosa y el sonido de las olas como musica de fondo crean una ceremonia de ensueno.",
            "Ceremonia nocturna: bajo las estrellas costarricenses, con iluminacion profesional y un arco floral de fondo, las ceremonias al anochecer en Terraza crean una atmosfera intima e inolvidable.",
            "Terraza Vivace: la recepcion frente al mar perfecta. Disfruta una cena gourmet del Chef Luigi mientras el sol se oculta sobre el Pacifico, con luces colgantes, brisa tropical y cocina mediterranea.",
            "Piscina estrellada: unica en Centroamerica, nuestra piscina con 1,200 luces LED crea un cielo estrellado bajo el agua, el espacio ideal para un coctel de bienvenida o la recepcion mas memorable de tu vida.",
          ],
          en: [
            "Every corner of Terraza del Pacifico is a perfect setting for your love story, with four signature venues to choose from.",
            "Beachfront Garden: exchange vows in our tropical garden directly facing the Pacific Ocean. White chairs, rose petals and the sound of waves as background music create a dream ceremony.",
            "Evening Ceremony: beneath the Costa Rican stars, with professional lighting and a floral arch as backdrop, evening ceremonies at Terraza create an intimate and unforgettable atmosphere.",
            "Vivace Terrace: the perfect beachfront reception. Enjoy a gourmet dinner by Chef Luigi as the sun sets over the Pacific, with string lights, tropical breeze and Mediterranean cuisine.",
            "Starlit Pool: unique in Central America, our pool with 1,200 LED lights creates a starry sky beneath the water, the ideal space for a welcome cocktail or the most memorable reception of your life.",
          ],
        },
      },
      {
        title: { es: "Recepcion", en: "Reception options" },
        body: {
          es: [
            "Las recepciones pueden tomar forma en terrazas, jardines, areas junto a la piscina o espacios conectados al restaurante.",
            "El equipo adapta la configuracion segun numero de invitados, horario, clima y estilo de celebracion.",
          ],
          en: [
            "Receptions can take shape on terraces, gardens, poolside areas or spaces connected to the restaurant.",
            "The team adapts the setup based on guest count, timing, weather and celebration style.",
          ],
        },
      },
      {
        title: { es: "Gastronomia", en: "Food and beverage" },
        body: {
          es: [
            "Vivace aporta una experiencia gastronomica mediterranea con ingredientes frescos y opciones personalizadas.",
            "Menus, cocteles y servicio se coordinan para acompanar el ritmo de la boda.",
          ],
          en: [
            "Vivace brings a Mediterranean dining experience with fresh ingredients and personalized options.",
            "Menus, cocktails and service are coordinated around the rhythm of the wedding.",
          ],
        },
      },
      {
        title: { es: "Experiencia de invitados", en: "Guest experience" },
        body: {
          es: [
            "Los invitados pueden hospedarse, disfrutar la playa, la piscina, el restaurante y las actividades del hotel durante el fin de semana.",
            "Asi la boda se vive como un fin de semana de destino y no solo como una noche.",
          ],
          en: [
            "Guests can stay onsite and enjoy the beach, pool, restaurant and hotel activities during the weekend.",
            "The wedding becomes a destination weekend rather than a single evening.",
          ],
        },
      },
      {
        title: { es: "Consulta de planificacion", en: "Planning inquiry" },
        body: {
          es: [
            "Para iniciar, comparte fecha tentativa, numero aproximado de invitados y el tipo de celebracion que imaginas.",
            "Uno de nuestros coordinadores de bodas te respondera en breve. Tambien puedes escribirnos directamente a mercadeo1@terrazadelpacifico.com para orientar los siguientes pasos y disponibilidad.",
          ],
          en: [
            "To begin, share your tentative date, approximate guest count and the type of celebration you imagine.",
            "One of our wedding coordinators will get back to you shortly. You can also write to us directly at mercadeo1@terrazadelpacifico.com to guide the next steps and availability.",
          ],
        },
      },
    ],
    faq: [
      {
        q: {
          es: "¿Dónde está ubicado el lugar para bodas?",
          en: "Where is the wedding venue located?",
        },
        a: {
          es: "Terraza del Pacifico está frente al mar en Playa Hermosa, al sur de Jaco, en Puntarenas, sobre el Pacifico Central de Costa Rica.",
          en: "Terraza del Pacifico is beachfront on Playa Hermosa, just south of Jaco, in Puntarenas, on Costa Rica's Central Pacific coast.",
        },
      },
      {
        q: {
          es: "¿Pueden hospedarse en el resort los invitados a la boda?",
          en: "Can our wedding guests stay at the resort?",
        },
        a: {
          es: "Si. El resort cuenta con habitaciones y suites en el hotel para alojar a los invitados, de modo que la boda se vive como un fin de semana de destino y no solo como una noche.",
          en: "Yes. The resort has on-site hotel rooms and suites to host your guests, so the wedding becomes a destination weekend rather than a single evening.",
        },
      },
      {
        q: {
          es: "¿Hay servicio de gastronomía en el lugar?",
          en: "Is catering available on site?",
        },
        a: {
          es: "Si. La gastronomía proviene del restaurante Vivace, en el mismo resort, con la cocina mediterránea del Chef Luigi, coordinada para acompañar el ritmo de la boda.",
          en: "Yes. Catering comes from the on-site Vivace restaurant, with Chef Luigi's Mediterranean cuisine, coordinated around the rhythm of the wedding.",
        },
      },
      {
        q: {
          es: "¿Qué espacios para bodas están disponibles?",
          en: "What wedding spaces are available?",
        },
        a: {
          es: "Hay cuatro espacios para elegir: el jardín frente al mar, la ceremonia nocturna, la Terraza Vivace y la piscina estrellada con 1,200 luces LED.",
          en: "There are four venues to choose from: the beachfront garden, the evening ceremony, the Vivace Terrace and the starlit pool with 1,200 LED lights.",
        },
      },
    ],
    cta: {
      label: { es: "Consultar boda", en: "Ask about weddings" },
      href: eventInquiryHref,
    },
    relatedIds: ["private-dinners", "family-celebrations", "parties-and-celebrations"],
  },
  {
    id: "surf-nights",
    type: "event",
    slugs: {
      es: "surf-nights",
      en: "surf-nights",
    },
    title: {
      es: "Surf Nights en Playa Hermosa, Costa Rica",
      en: "Surf Nights in Playa Hermosa, Costa Rica",
    },
    eyebrow: {
      es: "Surf nocturno en Playa Hermosa",
      en: "Night surfing in Playa Hermosa",
    },
    description: {
      es: "El primer evento de surf nocturno transmitido en vivo en Centroamerica: el surf de Playa Hermosa, cerca de Jaco, se ilumina para competencias, comunidad, marcas y espectadores bajo las estrellas.",
      en: "The first live televised night surfing event in Central America: the surf at Playa Hermosa, near Jaco, lights up for competitions, community, brands and spectators under the stars.",
    },
    heroImage: {
      src: "/images/experiences/surf-nights/surf-nights-hero-Cp_0Sh9X.png",
      alt: {
        es: "Surf Nights con el oceano iluminado",
        en: "Surf Nights with the illuminated ocean",
      },
    },
    gallery: [
      {
        src: "/images/experiences/surf-nights/surf-nights-C5MPn3sY.jpg",
        alt: {
          es: "Surfistas durante Surf Nights",
          en: "Surfers during Surf Nights",
        },
      },
      {
        src: "/images/experiences/surf-nights/surf-nights-shirt-jqYD2ns3.jpg",
        alt: {
          es: "Camiseta oficial de Surf Nights",
          en: "Official Surf Nights shirt",
        },
      },
      {
        src: "/images/experiences/surf-nights/surf-nights-winners-B4pwft7w.jpg",
        alt: {
          es: "Ganadores de Surf Nights",
          en: "Surf Nights winners",
        },
      },
      {
        src: "/images/resort/events/events-aerial-sunset-DjFbPbt1.jpg",
        alt: {
          es: "Atardecer en Playa Hermosa antes del evento",
          en: "Sunset in Playa Hermosa before the event",
        },
      },
      {
        src: "/images/resort/highlights/Surf 1.JPG",
        alt: {
          es: "Surfista sobre la arena negra de Playa Hermosa",
          en: "Surfer on the black sand of Playa Hermosa",
        },
      },
    ],
    facts: [
      {
        label: { es: "Cuándo", en: "When" },
        value: { es: "Se anuncia por edición", en: "Announced per edition" },
      },
      {
        label: { es: "Registro", en: "Registration" },
        value: { es: "Gratis para competidores", en: "Free for competitors" },
      },
      {
        label: { es: "Ubicacion", en: "Location" },
        value: { es: "Playa frente al hotel", en: "Beach in front of the hotel" },
      },
      {
        label: { es: "Premios", en: "Prizes" },
        value: { es: "$300 / $200 / $100 USD", en: "$300 / $200 / $100 USD" },
      },
    ],
    sections: [
      {
        title: { es: "Resumen", en: "Overview" },
        body: {
          es: [
            "Surf Nights es el primer evento de surf nocturno transmitido en vivo en Centroamerica, y convierte las olas de Playa Hermosa, una de las mejores playas de surf cerca de Jaco, en un escenario nocturno para surfistas, publico y comunidad.",
            "Hotel Terraza del Pacifico es uno de los unicos 4 lugares en el mundo con infraestructura profesional para iluminar el mar abierto y permitir competencias de surf nocturno con seguridad y visibilidad competitiva.",
            "La experiencia combina deporte, iluminacion profesional, musica, gastronomia, energia local y el entorno del hotel, como un verdadero festival y espectaculo.",
          ],
          en: [
            "Surf Nights is the first live televised night surfing event in Central America, turning the waves of Playa Hermosa, one of the best-known surf beaches near Jaco, into a nighttime stage for surfers, spectators and the local community.",
            "Hotel Terraza del Pacifico is one of only 4 places in the world with professional infrastructure to illuminate the open ocean and allow night surfing competitions with safety and competitive visibility.",
            "The experience combines sport, professional lighting, music, gastronomy, local energy and the hotel setting, as a true festival and spectacle.",
          ],
        },
      },
      {
        title: { es: "Iluminacion profesional", en: "Professional lighting" },
        body: {
          es: [
            "El sistema de iluminacion permite visibilidad en el mar y crea una atmosfera que hace del evento algo unico en la zona.",
            "La competencia se desarrolla en una zona segura en mar abierto, libre de cocodrilos, donde la playa se transforma en un escenario visible, seguro y emocionante para competidores y espectadores.",
          ],
          en: [
            "The lighting system provides visibility in the ocean and creates an atmosphere that makes the event unique in the area.",
            "The competition takes place in a safe, crocodile-free zone in the open sea, where the beach becomes a visible, safer and exciting stage for competitors and spectators.",
          ],
        },
      },
      {
        title: { es: "Formato de competencia", en: "Competition format" },
        body: {
          es: [
            "El formato puede variar por fecha, condiciones y cantidad de participantes.",
            "La ultima edicion hizo historia con la primera transmision de television en vivo de un evento de surf nocturno a nivel nacional, a traves de Canal 33 / Trivision, con narracion profesional de Freddy \"Salsiboy\" Camacho y jueces certificados internacionales.",
            "Los competidores compiten por premios en efectivo: $300 USD para el primer lugar, $200 USD para el segundo y $100 USD para el tercero.",
            "El enfoque es crear una competencia memorable que celebre el surf de Playa Hermosa.",
          ],
          en: [
            "The format may vary by date, conditions and number of participants.",
            "The last edition made history with the first live nationwide television broadcast of a night surfing event, via Canal 33 / Trivision, with professional narration by Freddy \"Salsiboy\" Camacho and international certified judges.",
            "Competitors compete for cash prizes: $300 USD for first place, $200 USD for second and $100 USD for third.",
            "The goal is to create a memorable competition that celebrates Playa Hermosa surf.",
          ],
        },
      },
      {
        title: { es: "Registro", en: "Registration" },
        body: {
          es: [
            "El registro para surfistas participantes se comunica antes de cada fecha y suele gestionarse directamente con el equipo.",
            "Se recomienda consultar por WhatsApp para confirmar cupos, horarios y requisitos.",
          ],
          en: [
            "Registration for participating surfers is announced before each date and is usually managed directly with the team.",
            "We recommend checking by WhatsApp to confirm spots, timing and requirements.",
          ],
        },
      },
      {
        title: { es: "Experiencia para espectadores", en: "Spectator experience" },
        body: {
          es: [
            "Los asistentes pueden vivir el surf desde la playa, combinarlo con cena, cocteles y el ambiente de Terraza del Pacifico.",
            "Es una noche para compartir, apoyar a los surfistas y disfrutar Playa Hermosa de una forma distinta.",
          ],
          en: [
            "Guests can watch from the beach and pair the event with dinner, cocktails and the Terraza del Pacifico atmosphere.",
            "It is a night to gather, support surfers and experience Playa Hermosa differently.",
          ],
        },
      },
      {
        title: { es: "Marcas y patrocinadores", en: "Sponsor opportunities" },
        body: {
          es: [
            "Surf Nights tambien abre oportunidades para marcas que quieren conectar con el deporte, el turismo y la comunidad local.",
            "Consulta disponibilidad de participacion, cobertura y activaciones para proximas fechas.",
          ],
          en: [
            "Surf Nights also creates opportunities for brands that want to connect with sport, tourism and the local community.",
            "Ask about participation, coverage and activation options for upcoming dates.",
          ],
        },
      },
    ],
    faq: [
      {
        q: {
          es: "Que es Surf Nights?",
          en: "What is Surf Nights?",
        },
        a: {
          es: "Surf Nights es el primer evento de surf nocturno transmitido en vivo en Centroamerica. El mar frente a Terraza del Pacifico, en Playa Hermosa cerca de Jaco, se ilumina con infraestructura profesional para que surfistas compitan de noche, con musica, gastronomia y publico en la playa.",
          en: "Surf Nights is the first live televised night surfing event in Central America. The ocean in front of Terraza del Pacifico, at Playa Hermosa near Jaco, is lit with professional infrastructure so surfers can compete after dark, with music, food and spectators on the beach.",
        },
      },
      {
        q: {
          es: "Pueden asistir espectadores a Surf Nights?",
          en: "Can spectators attend Surf Nights?",
        },
        a: {
          es: "Si. El publico puede vivir el surf desde la playa y combinarlo con cena, cocteles y el ambiente de Terraza del Pacifico. Es una noche pensada para compartir, apoyar a los surfistas y disfrutar Playa Hermosa de una forma distinta.",
          en: "Yes. Spectators can watch from the beach and pair the event with dinner, cocktails and the Terraza del Pacifico atmosphere. It is a night made to gather, support the surfers and experience Playa Hermosa in a different way.",
        },
      },
      {
        q: {
          es: "Es Playa Hermosa apta para surfistas principiantes?",
          en: "Is Playa Hermosa good for beginner surfers?",
        },
        a: {
          es: "Playa Hermosa de Jaco es un beach break potente y consistente, reconocido como Reserva Mundial de Surf, mas indicado para surfistas con experiencia que para principiantes. No debe confundirse con la otra Playa Hermosa de Guanacaste, de aguas mas tranquilas: la identidad de surf pertenece a esta playa del Pacifico Central.",
          en: "Playa Hermosa de Jaco is a powerful, consistent beach break, recognized as a World Surfing Reserve, and is better suited to experienced surfers than to beginners. It should not be confused with the calmer Playa Hermosa in Guanacaste: the surf identity belongs to this Central Pacific beach.",
        },
      },
      {
        q: {
          es: "Cual es la mejor epoca para surfear en Playa Hermosa?",
          en: "When is the best season to surf at Playa Hermosa?",
        },
        a: {
          es: "Playa Hermosa ofrece surf consistente durante todo el ano, y suele recibir el oleaje mas grande y constante en la temporada de lluvias, aproximadamente de mayo a noviembre. Surf Nights se anuncia por fecha; recomendamos consultar por WhatsApp para confirmar la proxima edicion.",
          en: "Playa Hermosa offers consistent surf year-round, and typically receives its largest, most consistent swell during the wet season, roughly May to November. Surf Nights is announced by date, so we recommend checking by WhatsApp to confirm the next edition.",
        },
      },
    ],
    cta: {
      label: { es: "Consultar Surf Nights", en: "Ask about Surf Nights" },
      href: whatsappHref,
    },
    relatedIds: ["parties-and-celebrations", "corporate-events", "private-dinners"],
  },
  {
    id: "corporate-events",
    type: "event",
    slugs: {
      es: "corporativos",
      en: "corporate-events",
    },
    title: {
      es: "Eventos corporativos",
      en: "Corporate Events",
    },
    eyebrow: {
      es: "Reuniones y retiros",
      en: "Meetings and retreats",
    },
    description: {
      es: "Reuniones, conferencias y retiros empresariales con espacios versatiles, gastronomia personalizada y un entorno frente al mar en Playa Hermosa, a minutos de Jaco.",
      en: "Meetings, conferences and business retreats with versatile spaces, personalized dining and a beachfront setting on Playa Hermosa, minutes from Jaco.",
    },
    heroImage: {
      src: "/images/resort/events/events-corporate-CUI1lTmu.jpg",
      alt: {
        es: "Evento corporativo en Terraza del Pacifico",
        en: "Corporate event at Terraza del Pacifico",
      },
    },
    gallery: [
      {
        src: "/images/resort/highlights/AM5_93932.JPG",
        alt: {
          es: "Espacios del resort para grupos",
          en: "Resort spaces for groups",
        },
      },
      {
        src: "/images/resort/events/events-building-Bvc9tdB1.jpg",
        alt: {
          es: "Edificio del hotel para eventos",
          en: "Hotel building for events",
        },
      },
      {
        src: "/images/resort/events/events-outdoor-dining-DZwFtwJD.jpg",
        alt: {
          es: "Montaje exterior para grupo corporativo",
          en: "Outdoor setup for a corporate group",
        },
      },
      {
        src: "/images/resort/highlights/DJI_20250526154631_0071_D.JPG",
        alt: {
          es: "Vista aerea del resort para retiros",
          en: "Aerial view of the resort for retreats",
        },
      },
    ],
    facts: [
      {
        label: { es: "Usos", en: "Uses" },
        value: { es: "Reuniones, retiros, conferencias", en: "Meetings, retreats, conferences" },
      },
      {
        label: { es: "Servicios", en: "Services" },
        value: { es: "Catering y coordinacion", en: "Catering and coordination" },
      },
      {
        label: { es: "Entorno", en: "Setting" },
        value: { es: "Frente al mar", en: "Oceanfront" },
      },
      {
        label: { es: "Consulta", en: "Inquiry" },
        value: { es: "Segun grupo y fecha", en: "By group and date" },
      },
    ],
    sections: [
      {
        title: { es: "Resumen", en: "Overview" },
        body: {
          es: [
            "Los eventos corporativos en Terraza del Pacifico combinan funcionalidad con un entorno tranquilo frente al mar en Playa Hermosa, cerca de Jaco, que ayuda a desconectar de la rutina.",
            "El hotel es adecuado para reuniones, retiros, sesiones de planificacion, capacitaciones y encuentros de equipo.",
          ],
          en: [
            "Corporate events at Terraza del Pacifico combine practical setup with a calm beachfront setting on Playa Hermosa, near Jaco, that helps teams step away from routine.",
            "The hotel works for meetings, retreats, planning sessions, trainings and team gatherings.",
          ],
        },
      },
      {
        title: { es: "Reuniones y retiros", en: "Meeting and retreat uses" },
        body: {
          es: [
            "El entorno frente al mar crea una dinamica distinta para conversaciones estrategicas y trabajo colaborativo.",
            "Los equipos pueden combinar sesiones formales con comidas, descanso y actividades al aire libre.",
          ],
          en: [
            "The oceanfront setting creates a different dynamic for strategic conversations and collaborative work.",
            "Teams can combine formal sessions with meals, rest and outdoor activities.",
          ],
        },
      },
      {
        title: { es: "Espacios y montaje", en: "Spaces and setup" },
        body: {
          es: [
            "Los espacios se adaptan segun el tamano del grupo, formato del evento y necesidades tecnicas.",
            "El equipo ayuda a definir configuracion, horarios y flujo de la jornada.",
          ],
          en: [
            "Spaces adapt to group size, event format and technical needs.",
            "The team helps define setup, timing and the flow of the day.",
          ],
        },
      },
      {
        title: { es: "Alimentos y bebidas", en: "Food and beverage" },
        body: {
          es: [
            "Vivace puede apoyar con opciones de catering, pausas de cafe, almuerzos o cenas para el grupo.",
            "Los menus se coordinan segun horario, presupuesto y estilo del evento.",
          ],
          en: [
            "Vivace can support with catering options, coffee breaks, lunches or dinners for the group.",
            "Menus are coordinated around timing, budget and event style.",
          ],
        },
      },
      {
        title: { es: "Integracion de equipo", en: "Team-building options" },
        body: {
          es: [
            "El entorno permite sumar actividades de integracion, playa, bienestar o experiencias del hotel.",
            "Esto convierte el evento en una experiencia mas completa para los asistentes.",
          ],
          en: [
            "The setting allows teams to add bonding activities, beach time, wellness or hotel experiences.",
            "This turns the event into a fuller experience for attendees.",
          ],
        },
      },
    ],
    faq: [
      {
        q: {
          es: "Pueden organizarse retiros corporativos en Terraza del Pacifico?",
          en: "Can Terraza del Pacifico host corporate retreats?",
        },
        a: {
          es: "Si. El hotel recibe reuniones, retiros, sesiones de planificacion, capacitaciones, conferencias y encuentros de equipo, en un entorno frente al mar en Playa Hermosa, cerca de Jaco. Los espacios se adaptan al tamano del grupo, el formato del evento y las necesidades tecnicas.",
          en: "Yes. The hotel hosts meetings, retreats, planning sessions, trainings, conferences and team gatherings in a beachfront setting on Playa Hermosa, near Jaco. Spaces adapt to group size, event format and technical needs.",
        },
      },
      {
        q: {
          es: "Donde esta ubicado para un retiro de empresa?",
          en: "Where is it located for a company retreat?",
        },
        a: {
          es: "En Playa Hermosa, a minutos al sur de Jaco, en el Pacifico Central de Costa Rica. No debe confundirse con la otra Playa Hermosa de Guanacaste: este es un entorno de playa frente al mar en la costa central, pensado para que los equipos se desconecten de la rutina.",
          en: "On Playa Hermosa, minutes south of Jaco, on Costa Rica's Central Pacific coast. It should not be confused with the other Playa Hermosa in Guanacaste: this is a beachfront setting on the central coast, made to help teams step away from routine.",
        },
      },
      {
        q: {
          es: "Hay servicio de alimentos y bebidas para grupos?",
          en: "Is food and beverage available for groups?",
        },
        a: {
          es: "Si. Vivace, el restaurante del hotel, puede apoyar con catering, pausas de cafe, almuerzos o cenas para el grupo. Los menus se coordinan segun el horario, el presupuesto y el estilo del evento.",
          en: "Yes. Vivace, the on-site restaurant, can support with catering, coffee breaks, lunches or dinners for the group. Menus are coordinated around timing, budget and event style.",
        },
      },
      {
        q: {
          es: "Que actividades de integracion se pueden sumar?",
          en: "What team-building activities can be added?",
        },
        a: {
          es: "El entorno frente al mar permite combinar las sesiones formales con tiempo de playa, yoga frente al mar y otras experiencias del hotel, para convertir el evento en algo mas completo. El equipo ayuda a coordinar la agenda segun el grupo.",
          en: "The beachfront setting lets you pair formal sessions with beach time, beachfront yoga and other hotel experiences, turning the event into something fuller. The team helps coordinate the agenda around your group.",
        },
      },
    ],
    cta: {
      label: { es: "Solicitar propuesta", en: "Request a proposal" },
      href: eventInquiryHref,
    },
    relatedIds: ["private-dinners", "parties-and-celebrations", "family-celebrations"],
  },
  {
    id: "family-celebrations",
    type: "event",
    slugs: {
      es: "celebraciones-familiares",
      en: "family-celebrations",
    },
    title: {
      es: "Celebraciones familiares",
      en: "Family Celebrations",
    },
    eyebrow: {
      es: "Cumpleanos, aniversarios y reuniones",
      en: "Birthdays, anniversaries and reunions",
    },
    description: {
      es: "Celebra momentos importantes con espacios seguros, comida personalizada y un ambiente familiar frente al mar en Playa Hermosa, cerca de Jaco, para todas las edades.",
      en: "Celebrate important moments with safe, comfortable spaces, personalized food and a family-friendly beachfront atmosphere on Playa Hermosa, near Jaco.",
    },
    heroImage: {
      src: "/images/resort/pool/g-family-pool-1-g77anSd1.jpg",
      alt: {
        es: "Familia disfrutando la piscina del hotel",
        en: "Family enjoying the hotel pool",
      },
    },
    gallery: [
      {
        src: "/images/resort/highlights/Family 3.JPG",
        alt: {
          es: "Familia disfrutando junto a la piscina",
          en: "Family enjoying time by the pool",
        },
      },
      {
        src: "/images/resort/events/events-pool-party-D_ez1wdr.jpg",
        alt: {
          es: "Celebracion familiar junto a la piscina",
          en: "Family celebration by the pool",
        },
      },
      {
        src: "/images/resort/highlights/IMG_3728.JPG",
        alt: {
          es: "Areas exteriores del resort",
          en: "Outdoor resort areas",
        },
      },
      {
        src: "/images/resort/dining/restaurant-dining-nygPbVtS.jpg",
        alt: {
          es: "Cena familiar en el restaurante",
          en: "Family dinner at the restaurant",
        },
      },
    ],
    facts: [
      {
        label: { es: "Ocasiones", en: "Occasions" },
        value: { es: "Cumpleanos, aniversarios, reuniones", en: "Birthdays, anniversaries, reunions" },
      },
      {
        label: { es: "Ambiente", en: "Atmosphere" },
        value: { es: "Relajado y familiar", en: "Relaxed and family-friendly" },
      },
      {
        label: { es: "Comida", en: "Food" },
        value: { es: "Menus personalizados", en: "Personalized menus" },
      },
      {
        label: { es: "Lugar", en: "Place" },
        value: { es: "Playa, piscina o restaurante", en: "Beach, pool or restaurant" },
      },
    ],
    sections: [
      {
        title: { es: "Resumen", en: "Overview" },
        body: {
          es: [
            "Las celebraciones familiares encuentran en Terraza del Pacifico un lugar comodo junto al mar.",
            "El hotel permite reunir a distintas generaciones en un ambiente relajado y seguro frente al mar en Playa Hermosa, al sur de Jaco.",
          ],
          en: [
            "Family celebrations have room to spread out at Terraza del Pacifico, right by the sea.",
            "The hotel brings different generations together in a relaxed, safe beachfront setting on Playa Hermosa, just south of Jaco.",
          ],
        },
      },
      {
        title: { es: "Ocasiones", en: "Birthdays, anniversaries and reunions" },
        body: {
          es: [
            "Cumpleanos, aniversarios, reuniones familiares y celebraciones especiales pueden adaptarse al estilo del grupo.",
            "El equipo ayuda a ordenar horarios, espacios y servicios para que la celebracion fluya.",
          ],
          en: [
            "Birthdays, anniversaries, family reunions and special celebrations can adapt to the group's style.",
            "The team helps organize timing, spaces and services so the celebration flows.",
          ],
        },
      },
      {
        title: { es: "Menus y opciones", en: "Food and menu options" },
        body: {
          es: [
            "Vivace puede apoyar con menus para diferentes edades y preferencias.",
            "Desde comidas casuales hasta cenas mas completas, la propuesta se ajusta a la ocasion.",
          ],
          en: [
            "Vivace can support with menus for different ages and preferences.",
            "From casual meals to fuller dinners, the offering adapts to the occasion.",
          ],
        },
      },
      {
        title: { es: "Espacios para todos", en: "Spaces for mixed ages" },
        body: {
          es: [
            "Las areas de playa, piscina, jardines y restaurante permiten que cada invitado encuentre su ritmo.",
            "Esto es especialmente util para celebraciones con ninos, adultos mayores y grupos grandes.",
          ],
          en: [
            "Beach, pool, garden and restaurant areas allow every guest to find their rhythm.",
            "This is especially useful for celebrations with children, older adults and larger groups.",
          ],
        },
      },
      {
        title: { es: "Ambiente frente al mar", en: "Beachfront atmosphere" },
        body: {
          es: [
            "El Pacifico suma una sensacion de vacaciones a cualquier reunion familiar.",
            "La celebracion puede incluir atardecer, comida, musica y tiempo al aire libre.",
          ],
          en: [
            "The Pacific adds a vacation feeling to any family gathering.",
            "The celebration can include sunset, food, music and outdoor time.",
          ],
        },
      },
    ],
    faq: [
      {
        q: {
          es: "Pueden organizar un cumpleanos, aniversario o reunion familiar?",
          en: "Can you host a birthday, anniversary or family reunion?",
        },
        a: {
          es: "Si. Terraza del Pacifico recibe cumpleanos, aniversarios, reuniones familiares y celebraciones especiales frente al mar en Playa Hermosa, al sur de Jaco, en el Pacifico Central de Costa Rica. El equipo ayuda a coordinar horarios, espacios y servicios para que la celebracion fluya.",
          en: "Yes. Terraza del Pacifico hosts birthdays, anniversaries, family reunions and special celebrations beachfront on Playa Hermosa, just south of Jaco, on Costa Rica's Central Pacific. The team helps coordinate timing, spaces and services so the celebration flows.",
        },
      },
      {
        q: {
          es: "Que espacios funcionan para grupos con ninos y adultos mayores?",
          en: "What spaces work for groups with kids and older adults?",
        },
        a: {
          es: "Las areas de playa, piscina, jardines y restaurante permiten que cada invitado encuentre su ritmo, algo util en celebraciones que mezclan generaciones. El hotel cuenta con piscina para ninos, ademas de acceso directo a la playa, para que los mas pequenos y los adultos mayores esten comodos.",
          en: "The beach, pool, garden and restaurant areas let every guest find their own rhythm, which helps when a celebration mixes generations. The hotel has a children's pool plus direct beach access, so younger kids and older adults can all be comfortable.",
        },
      },
      {
        q: {
          es: "Hay comida para diferentes edades y preferencias?",
          en: "Is there food for different ages and preferences?",
        },
        a: {
          es: "Si. Vivace, el restaurante del resort, puede apoyar con menus personalizados para distintas edades y preferencias, desde comidas casuales hasta cenas mas completas, ajustando la propuesta a la ocasion.",
          en: "Yes. Vivace, the on-site restaurant, can support with personalized menus for different ages and preferences, from casual meals to fuller dinners, adapting the offering to the occasion.",
        },
      },
      {
        q: {
          es: "Como se planifica y reserva una celebracion familiar?",
          en: "How do we plan and reserve a family celebration?",
        },
        a: {
          es: "El equipo del hotel ayuda a ordenar horarios, espacios y servicios segun el tipo de celebracion. Conviene consultar con anticipacion para coordinar disponibilidad, menu y detalles. Escribenos para revisar opciones y reservar.",
          en: "The hotel team helps organize timing, spaces and services around the type of celebration. It is best to ask in advance to coordinate availability, menu and details. Reach out to review options and book.",
        },
      },
    ],
    cta: {
      label: { es: "Consultar celebracion", en: "Ask about a celebration" },
      href: eventInquiryHref,
    },
    relatedIds: ["private-dinners", "parties-and-celebrations", "weddings"],
  },
  {
    id: "private-dinners",
    type: "event",
    slugs: {
      es: "cenas-privadas",
      en: "private-dinners",
    },
    title: {
      es: "Cenas privadas",
      en: "Private Dinners",
    },
    eyebrow: {
      es: "Vivace Beachfront",
      en: "Vivace Beachfront",
    },
    description: {
      es: "Experiencias gastronomicas privadas con la cocina mediterranea del Chef Luigi, vistas al Pacifico frente al mar en Playa Hermosa cerca de Jaco, y opciones para parejas, familias o grupos.",
      en: "Private dining experiences with Chef Luigi's Mediterranean cuisine, beachfront Pacific views on Playa Hermosa near Jaco, and options for couples, families or groups.",
    },
    heroImage: {
      src: "/images/resort/dining/chloemurdochphotography-37.JPG",
      alt: {
        es: "Langosta entera a la parrilla con vista al mar",
        en: "Whole grilled lobster with ocean view",
      },
    },
    gallery: [
      {
        src: "/images/resort/dining/chloemurdochphotography-259.JPG",
        alt: {
          es: "Mesa de restaurante preparada",
          en: "Prepared restaurant table",
        },
      },
      {
        src: "/images/resort/dining/restaurant-night-DDkbFUTM.jpg",
        alt: {
          es: "Restaurante Vivace de noche",
          en: "Vivace restaurant at night",
        },
      },
      {
        src: "/images/resort/bars/golden-beach-bar-qN10cbKY.jpg",
        alt: {
          es: "Bar frente a la playa para bebidas",
          en: "Beachfront bar for drinks",
        },
      },
    ],
    facts: [
      {
        label: { es: "Cocina", en: "Cuisine" },
        value: { es: "Mediterranea e italiana", en: "Mediterranean and Italian" },
      },
      {
        label: { es: "Ideal para", en: "Best for" },
        value: { es: "Parejas y grupos pequenos", en: "Couples and small groups" },
      },
      {
        label: { es: "Lugar", en: "Place" },
        value: { es: "Vivace o espacios frente al mar", en: "Vivace or oceanfront spaces" },
      },
      {
        label: { es: "Reserva", en: "Reservation" },
        value: { es: "Segun disponibilidad", en: "Based on availability" },
      },
    ],
    sections: [
      {
        title: { es: "Resumen", en: "Overview" },
        body: {
          es: [
            "Las cenas privadas crean un momento mas intimo dentro de la experiencia del hotel.",
            "Pueden ser romanticas, familiares o pensadas para grupos que buscan una mesa especial frente al mar en Playa Hermosa, cerca de Jaco.",
          ],
          en: [
            "Private dinners create a more intimate moment within the hotel experience.",
            "They can be romantic, family-style or designed for groups looking for a special beachfront table on Playa Hermosa, near Jaco.",
          ],
        },
      },
      {
        title: { es: "Conexion con Chef Luigi", en: "Chef Luigi and Vivace" },
        body: {
          es: [
            "Vivace aporta una cocina inspirada en el Mediterraneo y la tradicion italiana de Chef Luigi.",
            "El resultado es una cena de cocina italiana con producto fresco, servida frente al mar.",
          ],
          en: [
            "Vivace brings cuisine inspired by the Mediterranean and Chef Luigi's Italian tradition.",
            "The result is an Italian dinner made with fresh produce and served beside the ocean.",
          ],
        },
      },
      {
        title: { es: "Romanticas o para grupos", en: "Romantic or group dinners" },
        body: {
          es: [
            "La experiencia puede adaptarse para una pareja, una familia o un grupo pequeno.",
            "Decoracion, horario y menu se coordinan segun el tipo de ocasion.",
          ],
          en: [
            "The experience can adapt for a couple, family or small group.",
            "Decor, timing and menu are coordinated around the occasion.",
          ],
        },
      },
      {
        title: { es: "Espacios", en: "Beachfront and terrace settings" },
        body: {
          es: [
            "Segun disponibilidad, la cena puede conectarse con terrazas, areas frente al mar o espacios del restaurante.",
            "La luz del atardecer y el sonido de las olas ayudan a definir el ambiente.",
          ],
          en: [
            "Based on availability, dinner can connect with terraces, oceanfront areas or restaurant spaces.",
            "Sunset light and the sound of the waves help define the atmosphere.",
          ],
        },
      },
      {
        title: { es: "Menu personalizado", en: "Menu personalization" },
        body: {
          es: [
            "El equipo puede orientar opciones de menu, bebidas y detalles especiales.",
            "Conviene consultar con anticipacion para coordinar disponibilidad y preferencias.",
          ],
          en: [
            "The team can guide menu options, drinks and special details.",
            "It is best to ask in advance to coordinate availability and preferences.",
          ],
        },
      },
    ],
    faq: [
      {
        q: {
          es: "Que es una cena privada en Terraza del Pacifico?",
          en: "What is a private dinner at Terraza del Pacifico?",
        },
        a: {
          es: "Es una cena mas intima dentro del hotel, frente al mar en Playa Hermosa al sur de Jaco, en el Pacifico Central de Costa Rica. Segun disponibilidad, la mesa puede ubicarse en terrazas, areas frente al mar o espacios del restaurante Vivace, con la luz del atardecer y el sonido de las olas como ambiente.",
          en: "It is a more intimate dinner within the hotel, beachfront on Playa Hermosa south of Jaco, on Costa Rica's Central Pacific. Based on availability, the table can be set on terraces, oceanfront areas or spaces at the Vivace restaurant, with sunset light and the sound of the waves setting the mood.",
        },
      },
      {
        q: {
          es: "Que cocina se sirve en la cena privada?",
          en: "What food is served at a private dinner?",
        },
        a: {
          es: "La cena proviene del restaurante Vivace, en el mismo resort, con la cocina mediterranea e italiana del Chef Luigi y producto fresco. El equipo puede orientar opciones de menu, bebidas y detalles especiales coordinados con anticipacion.",
          en: "Dinner comes from the on-site Vivace restaurant, with Chef Luigi's Mediterranean and Italian cuisine and fresh produce. The team can guide menu options, drinks and special details coordinated in advance.",
        },
      },
      {
        q: {
          es: "Es ideal para parejas o tambien para grupos?",
          en: "Is it best for couples or also for groups?",
        },
        a: {
          es: "La experiencia se adapta a una pareja, una familia o un grupo pequeno. La decoracion, el horario y el menu se coordinan segun el tipo de ocasion, ya sea una velada romantica, una celebracion familiar o una mesa especial para compartir.",
          en: "The experience adapts to a couple, a family or a small group. Decor, timing and menu are coordinated around the occasion, whether a romantic evening, a family celebration or a special table to share.",
        },
      },
      {
        q: {
          es: "Como se reserva una cena privada?",
          en: "How do I reserve a private dinner?",
        },
        a: {
          es: "Las cenas privadas se coordinan segun disponibilidad, por lo que conviene consultar con anticipacion para confirmar fecha, espacio y preferencias de menu. Escribenos para revisar opciones y reservar tu mesa frente al mar.",
          en: "Private dinners are coordinated based on availability, so it is best to ask in advance to confirm the date, the setting and menu preferences. Reach out to review options and reserve your beachfront table.",
        },
      },
    ],
    cta: {
      label: { es: "Consultar cena privada", en: "Ask about private dinners" },
      href: eventInquiryHref,
    },
    relatedIds: ["weddings", "family-celebrations", "parties-and-celebrations"],
  },
  {
    id: "parties-and-celebrations",
    type: "event",
    slugs: {
      es: "fiestas-y-celebraciones",
      en: "parties-and-celebrations",
    },
    title: {
      es: "Fiestas y celebraciones",
      en: "Parties and Celebrations",
    },
    eyebrow: {
      es: "Musica, comida y playa",
      en: "Music, food and beach",
    },
    description: {
      es: "Fiestas sociales, despedidas y celebraciones con ambiente tropical, gastronomia, cocteles y espacios frente al mar o junto a la piscina en Playa Hermosa, cerca de Jaco.",
      en: "Social parties, sendoffs and celebrations with a tropical atmosphere, food, cocktails and beachfront or poolside spaces on Playa Hermosa, near Jaco.",
    },
    heroImage: {
      src: "/images/resort/events/events-party-IPZcQeS1.jpg",
      alt: {
        es: "Fiesta frente al mar en Terraza del Pacifico",
        en: "Oceanfront party at Terraza del Pacifico",
      },
    },
    gallery: [
      {
        src: "/images/resort/events/events-pool-party-D_ez1wdr.jpg",
        alt: {
          es: "Fiesta junto a la piscina",
          en: "Poolside party",
        },
      },
      {
        src: "/images/resort/events/events-beach-lounge-BX7jVZUA.jpg",
        alt: {
          es: "Lounge en la playa para evento",
          en: "Beach lounge for an event",
        },
      },
      {
        src: "/images/resort/pool/pool-aerial-night-BvFgNxHn.jpg",
        alt: {
          es: "Piscina iluminada de noche",
          en: "Illuminated pool at night",
        },
      },
      {
        src: "/images/resort/dining/RLR_38442.JPG",
        alt: {
          es: "Bebidas y ambiente de fiesta",
          en: "Drinks and party atmosphere",
        },
      },
    ],
    facts: [
      {
        label: { es: "Tipo", en: "Type" },
        value: { es: "Social y celebracion", en: "Social and celebration" },
      },
      {
        label: { es: "Ambiente", en: "Atmosphere" },
        value: { es: "Tropical y relajado", en: "Tropical and relaxed" },
      },
      {
        label: { es: "Opciones", en: "Options" },
        value: { es: "DJ, musica, catering", en: "DJ, music, catering" },
      },
      {
        label: { es: "Espacios", en: "Spaces" },
        value: { es: "Piscina, playa, restaurante", en: "Pool, beach, restaurant" },
      },
    ],
    sections: [
      {
        title: { es: "Resumen", en: "Overview" },
        body: {
          es: [
            "Las fiestas y celebraciones en Terraza del Pacifico aprovechan el ambiente natural del resort frente al mar en Playa Hermosa, al sur de Jaco.",
            "Piscina, playa, musica, comida y cocteles se combinan para crear un evento relajado y memorable.",
          ],
          en: [
            "Parties and celebrations at Terraza del Pacifico make use of the resort's natural beachfront atmosphere on Playa Hermosa, just south of Jaco.",
            "Pool, beach, music, food and cocktails come together to create a relaxed and memorable event.",
          ],
        },
      },
      {
        title: { es: "Encuentros sociales", en: "Social gatherings" },
        body: {
          es: [
            "El formato puede funcionar para despedidas, reuniones de amigos, celebraciones privadas o eventos sociales.",
            "Cada montaje se adapta al tamano del grupo y al tono de la ocasion.",
          ],
          en: [
            "The format can work for sendoffs, friend gatherings, private celebrations or social events.",
            "Each setup adapts to group size and the tone of the occasion.",
          ],
        },
      },
      {
        title: { es: "Musica y entretenimiento", en: "Music and entertainment" },
        body: {
          es: [
            "Segun el evento, se pueden coordinar opciones de DJ, musica en vivo o ambiente musical personalizado.",
            "El objetivo es que la energia del evento se sienta natural y bien organizada.",
          ],
          en: [
            "Depending on the event, DJ options, live music or a custom music atmosphere can be coordinated.",
            "The goal is for the event's energy to feel natural and well organized.",
          ],
        },
      },
      {
        title: { es: "Comida y cocteles", en: "Food and cocktails" },
        body: {
          es: [
            "Vivace y los bares del hotel pueden apoyar con comida, bebidas y estaciones segun la ocasion.",
            "Las opciones se definen por horario, presupuesto y estilo de celebracion.",
          ],
          en: [
            "Vivace and the hotel bars can support with food, drinks and stations based on the occasion.",
            "Options are defined by timing, budget and celebration style.",
          ],
        },
      },
      {
        title: { es: "Playa y piscina", en: "Beach and poolside atmosphere" },
        body: {
          es: [
            "El entorno junto a la piscina o la playa aporta una sensacion de vacaciones a cualquier celebracion.",
            "De dia o de noche, los espacios exteriores son parte central de la experiencia.",
          ],
          en: [
            "The poolside or beach setting brings a vacation feeling to any celebration.",
            "Day or night, outdoor spaces are central to the experience.",
          ],
        },
      },
    ],
    faq: [
      {
        q: {
          es: "Donde esta el espacio para fiestas privadas?",
          en: "Where is the venue for private parties?",
        },
        a: {
          es: "Terraza del Pacifico esta frente al mar en Playa Hermosa, al sur de Jaco, en la costa del Pacifico Central de Costa Rica (no la Playa Hermosa de Guanacaste). Es una sede para fiestas sociales, despedidas y celebraciones privadas, con piscina, playa y restaurante.",
          en: "Terraza del Pacifico is beachfront on Playa Hermosa, just south of Jaco, on Costa Rica's Central Pacific coast (not the Playa Hermosa in Guanacaste). It works as a venue for social parties, sendoffs and private celebrations, with pool, beach and restaurant settings.",
        },
      },
      {
        q: {
          es: "Que tipo de fiestas y celebraciones se pueden hacer?",
          en: "What kind of parties and celebrations can be hosted?",
        },
        a: {
          es: "El formato funciona para despedidas, reuniones de amigos, celebraciones privadas y eventos sociales. Cada montaje se adapta al tamano del grupo y al tono de la ocasion, de dia o de noche.",
          en: "The format works for sendoffs, friend gatherings, private celebrations and social events. Each setup adapts to the group size and the tone of the occasion, day or night.",
        },
      },
      {
        q: {
          es: "Hay opciones de musica, DJ y catering?",
          en: "Are music, DJ and catering options available?",
        },
        a: {
          es: "Segun el evento, se pueden coordinar opciones de DJ, musica en vivo o ambiente musical personalizado. Vivace y los bares del hotel pueden apoyar con comida, bebidas y estaciones, definidas por horario, presupuesto y estilo de celebracion.",
          en: "Depending on the event, DJ options, live music or a custom music atmosphere can be coordinated. Vivace and the hotel bars can support with food, drinks and stations, defined by timing, budget and celebration style.",
        },
      },
      {
        q: {
          es: "Se puede celebrar junto a la piscina o en la playa?",
          en: "Can the party be by the pool or on the beach?",
        },
        a: {
          es: "Si. El entorno junto a la piscina o la playa aporta una sensacion de vacaciones a cualquier celebracion, y los espacios exteriores son parte central de la experiencia, de dia o de noche.",
          en: "Yes. The poolside or beach setting brings a vacation feeling to any celebration, and the outdoor spaces are central to the experience, day or night.",
        },
      },
    ],
    cta: {
      label: { es: "Consultar evento", en: "Ask about an event" },
      href: eventInquiryHref,
    },
    relatedIds: ["surf-nights", "private-dinners", "family-celebrations"],
  },
];

export function getEventById(id: string) {
  return events.find((page) => page.id === id);
}
