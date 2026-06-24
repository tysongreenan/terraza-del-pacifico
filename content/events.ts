import { eventsEmail, whatsappHref } from "@/lib/site";
import type { HubPage, InfoPage } from "@/content/info-pages";

const eventInquiryHref = `mailto:${eventsEmail}`;

export const eventHub: HubPage = {
  eyebrow: {
    es: "Eventos",
    en: "Events",
  },
  title: {
    es: "Eventos frente al mar",
    en: "Oceanfront events",
  },
  description: {
    es: "Bodas, Surf Nights, reuniones, celebraciones familiares y cenas privadas en un resort frente al mar en Playa Hermosa, a pocos minutos de Jaco.",
    en: "Weddings, Surf Nights, meetings, family celebrations and private dinners at a beachfront resort on Playa Hermosa, just south of Jaco.",
  },
  heroImage: {
    src: "/images/Wedding/AM5_93842.JPG",
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
    es: "Espacios para cada ocasion",
    en: "Spaces for every occasion",
  },
  description: {
    es: "Reuniones corporativas, celebraciones familiares, cenas privadas y fiestas con servicio personalizado frente al Pacifico.",
    en: "Corporate gatherings, family celebrations, private dinners and parties with personalized service facing the Pacific.",
  },
  heroImage: {
    src: "/images/events-outdoor-dining-DZwFtwJD.jpg",
    alt: {
      es: "Mesa preparada para un evento al aire libre",
      en: "Table prepared for an outdoor event",
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
      es: "Bodas frente al mar",
      en: "Beachfront Weddings",
    },
    eyebrow: {
      es: "Playa Hermosa · Costa Rica",
      en: "Playa Hermosa · Costa Rica",
    },
    description: {
      es: "Celebra tu boda con el Pacifico como escenario, espacios al aire libre, gastronomia de Vivace y un equipo dedicado a cada detalle.",
      en: "Celebrate your wedding with the Pacific as your backdrop, open-air spaces, Vivace cuisine and a team dedicated to every detail.",
    },
    heroImage: {
      src: "/images/Wedding/AM5_93842.JPG",
      alt: {
        es: "Pareja celebrando una boda frente al mar",
        en: "Couple celebrating an oceanfront wedding",
      },
    },
    gallery: [
      {
        src: "/images/Wedding/AM5_92552.JPG",
        alt: {
          es: "Ceremonia de boda en Terraza del Pacifico",
          en: "Wedding ceremony at Terraza del Pacifico",
        },
      },
      {
        src: "/images/Wedding/AM5_93492.JPG",
        alt: {
          es: "Decoracion floral para boda",
          en: "Floral wedding decor",
        },
      },
      {
        src: "/images/Wedding/RLR_8704.JPG",
        alt: {
          es: "Recepcion de boda al aire libre",
          en: "Outdoor wedding reception",
        },
      },
      {
        src: "/images/wedding-ceremony-night-BS1EmGIk.jpg",
        alt: {
          es: "Ceremonia nocturna con luces",
          en: "Evening ceremony with lights",
        },
      },
      {
        src: "/images/Wedding/IMG_7293.JPG",
        alt: {
          es: "Detalles de celebracion de boda",
          en: "Wedding celebration details",
        },
      },
      {
        src: "/images/events-pool-night-lights-BcHsd1B9.jpg",
        alt: {
          es: "Piscina iluminada para eventos",
          en: "Illuminated pool for events",
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
            "Una boda en Terraza del Pacifico combina playa, jardines, atardecer y la energia relajada de Playa Hermosa.",
            "El resort permite crear una celebracion que se siente natural, elegante y conectada con el destino.",
          ],
          en: [
            "A wedding at Terraza del Pacifico brings together beach, gardens, sunset and the relaxed energy of Playa Hermosa.",
            "The resort makes it possible to create a celebration that feels natural, elegant and connected to the destination.",
          ],
        },
      },
      {
        title: { es: "Lugares de ceremonia", en: "Ceremony locations" },
        body: {
          es: [
            "Los espacios frente al mar, jardines y areas exteriores ofrecen opciones para ceremonias intimas o celebraciones mas amplias.",
            "Las parejas suelen elegir la ceremonia al atardecer, con las olas de fondo y la luz del Pacifico sobre los jardines.",
          ],
          en: [
            "Oceanfront areas, gardens and outdoor spaces offer options for intimate ceremonies or larger celebrations.",
            "Most couples choose a sunset ceremony, with the waves behind them and Pacific light over the gardens.",
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
            "El equipo de eventos puede orientar los siguientes pasos y disponibilidad.",
          ],
          en: [
            "To begin, share your tentative date, approximate guest count and the type of celebration you imagine.",
            "The events team can guide the next steps and availability.",
          ],
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
      es: "Surf Nights",
      en: "Surf Nights",
    },
    eyebrow: {
      es: "Surf nocturno en Playa Hermosa",
      en: "Night surfing in Playa Hermosa",
    },
    description: {
      es: "Una experiencia unica donde Playa Hermosa se ilumina para competencias, comunidad, marcas y espectadores bajo las estrellas.",
      en: "A unique experience where Playa Hermosa lights up for competitions, community, brands and spectators under the stars.",
    },
    heroImage: {
      src: "/images/surf-nights-hero-Cp_0Sh9X.png",
      alt: {
        es: "Surf Nights con el oceano iluminado",
        en: "Surf Nights with the illuminated ocean",
      },
    },
    gallery: [
      {
        src: "/images/surf-nights-C5MPn3sY.jpg",
        alt: {
          es: "Surfistas durante Surf Nights",
          en: "Surfers during Surf Nights",
        },
      },
      {
        src: "/images/surf-nights-shirt-jqYD2ns3.jpg",
        alt: {
          es: "Camiseta oficial de Surf Nights",
          en: "Official Surf Nights shirt",
        },
      },
      {
        src: "/images/surf-nights-winners-B4pwft7w.jpg",
        alt: {
          es: "Ganadores de Surf Nights",
          en: "Surf Nights winners",
        },
      },
      {
        src: "/images/events-aerial-sunset-DjFbPbt1.jpg",
        alt: {
          es: "Atardecer en Playa Hermosa antes del evento",
          en: "Sunset in Playa Hermosa before the event",
        },
      },
    ],
    facts: [
      {
        label: { es: "Formato", en: "Format" },
        value: { es: "Surf nocturno", en: "Night surfing" },
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
        label: { es: "Audiencia", en: "Audience" },
        value: { es: "Surfistas y espectadores", en: "Surfers and spectators" },
      },
    ],
    sections: [
      {
        title: { es: "Resumen", en: "Overview" },
        body: {
          es: [
            "Surf Nights convierte Playa Hermosa en un escenario nocturno para surfistas, publico y comunidad.",
            "La experiencia combina deporte, iluminacion profesional, musica, energia local y el entorno del hotel.",
          ],
          en: [
            "Surf Nights turns Playa Hermosa into a nighttime stage for surfers, spectators and the local community.",
            "The experience combines sport, professional lighting, music, local energy and the hotel setting.",
          ],
        },
      },
      {
        title: { es: "Iluminacion profesional", en: "Professional lighting" },
        body: {
          es: [
            "El sistema de iluminacion permite visibilidad en el mar y crea una atmosfera que hace del evento algo unico en la zona.",
            "La playa se transforma en un escenario visible, seguro y emocionante para competidores y espectadores.",
          ],
          en: [
            "The lighting system provides visibility in the ocean and creates an atmosphere that makes the event unique in the area.",
            "The beach becomes a visible, safer and exciting stage for competitors and spectators.",
          ],
        },
      },
      {
        title: { es: "Formato de competencia", en: "Competition format" },
        body: {
          es: [
            "El formato puede variar por fecha, condiciones y cantidad de participantes.",
            "El enfoque es crear una competencia memorable que celebre el surf de Playa Hermosa.",
          ],
          en: [
            "The format may vary by date, conditions and number of participants.",
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
      es: "Reuniones, conferencias y retiros empresariales con espacios versatiles, gastronomia personalizada y el Pacifico como entorno.",
      en: "Meetings, conferences and business retreats with versatile spaces, personalized dining and the Pacific as the setting.",
    },
    heroImage: {
      src: "/images/events-corporate-CUI1lTmu.jpg",
      alt: {
        es: "Evento corporativo en Terraza del Pacifico",
        en: "Corporate event at Terraza del Pacifico",
      },
    },
    gallery: [
      {
        src: "/images/Resort Highlights/AM5_93932.JPG",
        alt: {
          es: "Espacios del resort para grupos",
          en: "Resort spaces for groups",
        },
      },
      {
        src: "/images/events-building-Bvc9tdB1.jpg",
        alt: {
          es: "Edificio del hotel para eventos",
          en: "Hotel building for events",
        },
      },
      {
        src: "/images/events-outdoor-dining-DZwFtwJD.jpg",
        alt: {
          es: "Montaje exterior para grupo corporativo",
          en: "Outdoor setup for a corporate group",
        },
      },
      {
        src: "/images/Resort Highlights/DJI_20250526154631_0071_D.JPG",
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
            "Los eventos corporativos en Terraza del Pacifico combinan funcionalidad con un entorno que ayuda a desconectar de la rutina.",
            "El hotel es adecuado para reuniones, retiros, sesiones de planificacion, capacitaciones y encuentros de equipo.",
          ],
          en: [
            "Corporate events at Terraza del Pacifico combine practical setup with a setting that helps teams step away from routine.",
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
      es: "Celebra momentos importantes con espacios seguros, comida personalizada y un ambiente frente al mar para todas las edades.",
      en: "Celebrate important moments with comfortable spaces, personalized food and an oceanfront atmosphere for every age.",
    },
    heroImage: {
      src: "/images/g-family-pool-1-g77anSd1.jpg",
      alt: {
        es: "Familia disfrutando la piscina del hotel",
        en: "Family enjoying the hotel pool",
      },
    },
    gallery: [
      {
        src: "/images/g-family-beach-DHJPEGnp.jpg",
        alt: {
          es: "Familia en la playa",
          en: "Family on the beach",
        },
      },
      {
        src: "/images/events-pool-party-D_ez1wdr.jpg",
        alt: {
          es: "Celebracion familiar junto a la piscina",
          en: "Family celebration by the pool",
        },
      },
      {
        src: "/images/Resort Highlights/IMG_3728.JPG",
        alt: {
          es: "Areas exteriores del resort",
          en: "Outdoor resort areas",
        },
      },
      {
        src: "/images/restaurant-dining-nygPbVtS.jpg",
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
            "El hotel permite reunir a distintas generaciones en un ambiente relajado junto al mar.",
          ],
          en: [
            "Family celebrations have room to spread out at Terraza del Pacifico, right by the sea.",
            "The hotel brings different generations together in a relaxed oceanfront setting.",
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
      es: "Experiencias gastronomicas privadas con cocina mediterranea, vistas al Pacifico y opciones para parejas, familias o grupos.",
      en: "Private dining experiences with Mediterranean cuisine, Pacific views and options for couples, families or groups.",
    },
    heroImage: {
      src: "/images/events-romantic-setup-CdyCZVZj.jpg",
      alt: {
        es: "Cena romantica privada frente al mar",
        en: "Private romantic dinner by the ocean",
      },
    },
    gallery: [
      {
        src: "/images/Resturant/1L6A2555.jpg",
        alt: {
          es: "Plato preparado por Vivace",
          en: "Dish prepared by Vivace",
        },
      },
      {
        src: "/images/Resturant/chloemurdochphotography-259.JPG",
        alt: {
          es: "Mesa de restaurante preparada",
          en: "Prepared restaurant table",
        },
      },
      {
        src: "/images/restaurant-night-DDkbFUTM.jpg",
        alt: {
          es: "Restaurante Vivace de noche",
          en: "Vivace restaurant at night",
        },
      },
      {
        src: "/images/golden-beach-bar-qN10cbKY.jpg",
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
            "Pueden ser romanticas, familiares o pensadas para grupos que buscan una mesa especial frente al Pacifico.",
          ],
          en: [
            "Private dinners create a more intimate moment within the hotel experience.",
            "They can be romantic, family-style or designed for groups looking for a special table by the Pacific.",
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
      es: "Fiestas sociales, despedidas y celebraciones con ambiente tropical, gastronomia, cocteles y espacios junto a la piscina o la playa.",
      en: "Social parties, sendoffs and celebrations with tropical atmosphere, food, cocktails and poolside or beach spaces.",
    },
    heroImage: {
      src: "/images/events-party-IPZcQeS1.jpg",
      alt: {
        es: "Fiesta frente al mar en Terraza del Pacifico",
        en: "Oceanfront party at Terraza del Pacifico",
      },
    },
    gallery: [
      {
        src: "/images/events-pool-party-D_ez1wdr.jpg",
        alt: {
          es: "Fiesta junto a la piscina",
          en: "Poolside party",
        },
      },
      {
        src: "/images/events-beach-lounge-BX7jVZUA.jpg",
        alt: {
          es: "Lounge en la playa para evento",
          en: "Beach lounge for an event",
        },
      },
      {
        src: "/images/pool-aerial-night-BvFgNxHn.jpg",
        alt: {
          es: "Piscina iluminada de noche",
          en: "Illuminated pool at night",
        },
      },
      {
        src: "/images/Resturant/RLR_38442.JPG",
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
            "Las fiestas y celebraciones en Terraza del Pacifico aprovechan el ambiente natural del resort.",
            "Piscina, playa, musica, comida y cocteles se combinan para crear un evento relajado y memorable.",
          ],
          en: [
            "Parties and celebrations at Terraza del Pacifico make use of the resort's natural atmosphere.",
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
