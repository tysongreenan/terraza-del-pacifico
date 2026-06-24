import { bookingHref, whatsappHref } from "@/lib/site";
import type { HubPage, InfoPage } from "@/content/info-pages";

export const experienceHub: HubPage = {
  eyebrow: {
    es: "Experiencias",
    en: "Experiences",
  },
  title: {
    es: "Experiencias frente al Pacifico",
    en: "Pacific-front experiences",
  },
  description: {
    es: "Naturaleza, bienestar, musica y momentos junto al mar. Explora las actividades que hacen que una estadia en Terraza del Pacifico sea mas que una visita a la playa.",
    en: "Nature, wellness, music and oceanfront moments. Explore the activities that turn a stay at Terraza del Pacifico into more than a beach visit.",
  },
  heroImage: {
    src: "/images/Resort Highlights/DJI_20250526154631_0071_D.JPG",
    alt: {
      es: "Vista aerea del resort y Playa Hermosa",
      en: "Aerial view of the resort and Playa Hermosa",
    },
  },
  cta: {
    label: {
      es: "Consultar disponibilidad",
      en: "Ask about availability",
    },
    href: whatsappHref,
  },
};

export const experiences: InfoPage[] = [
  {
    id: "whale-watching",
    type: "experience",
    slugs: {
      es: "avistamiento-ballenas",
      en: "whale-watching",
    },
    title: {
      es: "Avistamiento de Ballenas",
      en: "Whale Watching",
    },
    eyebrow: {
      es: "Julio a octubre",
      en: "July to October",
    },
    description: {
      es: "Durante la temporada, las ballenas jorobadas llegan a las aguas calidas del Pacifico costarricense. Playa Hermosa ofrece un punto de partida natural para vivir este espectaculo.",
      en: "During the season, humpback whales arrive in the warm waters of Costa Rica's Pacific. Playa Hermosa is a natural starting point for this unforgettable spectacle.",
    },
    heroImage: {
      src: "/images/whales-aerial-Bx8BrmsB.jpg",
      alt: {
        es: "Ballenas nadando en el Pacifico frente a Costa Rica",
        en: "Whales swimming in the Pacific off Costa Rica",
      },
    },
    gallery: [
      {
        src: "/images/whale-watching-VSLDwvTY.jpg",
        alt: {
          es: "Avistamiento de ballenas en el Pacifico",
          en: "Whale watching in the Pacific",
        },
      },
      {
        src: "/images/Resort Highlights/DJI_0361(1)2.JPG",
        alt: {
          es: "Costa y montanas alrededor de Playa Hermosa",
          en: "Coastline and mountains around Playa Hermosa",
        },
      },
      {
        src: "/images/Resort Highlights/IMG_2398.JPG",
        alt: {
          es: "Vista del mar desde el resort",
          en: "Ocean view from the resort",
        },
      },
      {
        src: "/images/g-aerial-beach-property-COogc_9W.jpg",
        alt: {
          es: "Hotel Terraza del Pacifico frente al mar",
          en: "Hotel Terraza del Pacifico on the oceanfront",
        },
      },
    ],
    facts: [
      {
        label: { es: "Temporada", en: "Season" },
        value: { es: "Julio a octubre", en: "July to October" },
      },
      {
        label: { es: "Ubicacion", en: "Location" },
        value: { es: "Playa Hermosa", en: "Playa Hermosa" },
      },
      {
        label: { es: "Ideal para", en: "Best for" },
        value: { es: "Familias y amantes de la naturaleza", en: "Families and nature lovers" },
      },
      {
        label: { es: "Disponibilidad", en: "Availability" },
        value: { es: "Consultar segun temporada", en: "Ask seasonally" },
      },
    ],
    sections: [
      {
        title: { es: "Resumen", en: "Overview" },
        body: {
          es: [
            "El avistamiento de ballenas es una de las experiencias naturales mas memorables del Pacifico costarricense.",
            "Cada temporada, las ballenas jorobadas migran hacia aguas calidas para aparearse y dar a luz, creando momentos que pueden disfrutarse desde la zona de Playa Hermosa y sus alrededores.",
          ],
          en: [
            "Whale watching is one of the most memorable natural experiences on Costa Rica's Pacific coast.",
            "Each season, humpback whales migrate to warm waters to mate and give birth, creating moments guests can experience around Playa Hermosa and the surrounding coast.",
          ],
        },
      },
      {
        title: { es: "Temporada de ballenas", en: "Whale watching season" },
        body: {
          es: [
            "La temporada principal va de julio a octubre, aunque las condiciones del mar y la actividad natural pueden variar.",
            "Nuestro equipo puede orientar a los huespedes sobre disponibilidad, horarios recomendados y opciones locales.",
          ],
          en: [
            "The main season runs from July to October, although ocean conditions and natural activity can vary.",
            "Our team can guide guests on availability, recommended timing and local options.",
          ],
        },
      },
      {
        title: { es: "Que podrias ver", en: "What guests may see" },
        body: {
          es: [
            "Dependiendo del dia, es posible ver saltos, aletas, colas y grupos familiares moviendose por la costa.",
            "Tambien es una oportunidad para apreciar el paisaje marino que rodea Playa Hermosa.",
          ],
          en: [
            "Depending on the day, guests may see breaches, fins, tails and family groups moving along the coast.",
            "It is also a chance to appreciate the seascape that surrounds Playa Hermosa.",
          ],
        },
      },
      {
        title: { es: "Por que Playa Hermosa", en: "Why Playa Hermosa" },
        body: {
          es: [
            "La ubicacion frente al Pacifico permite que la experiencia se sienta conectada con la estadia, no como una actividad aislada.",
            "Despues de la salida, puedes volver al hotel para almorzar, descansar junto a la piscina o ver el atardecer.",
          ],
          en: [
            "The Pacific-front location makes the experience feel connected to the stay, not like a separate excursion.",
            "After the outing, guests can return to the hotel for lunch, pool time or sunset by the beach.",
          ],
        },
      },
      {
        title: { es: "Para toda la familia", en: "Family-friendly nature experience" },
        body: {
          es: [
            "Es una actividad educativa y emocionante para ninos, parejas y grupos que quieren conectar con la naturaleza de Costa Rica.",
            "Recomendamos consultar antes de viajar para confirmar condiciones y opciones disponibles.",
          ],
          en: [
            "This is an educational and exciting activity for kids, couples and groups who want to connect with Costa Rica's nature.",
            "We recommend checking before traveling to confirm conditions and available options.",
          ],
        },
      },
    ],
    cta: {
      label: { es: "Consultar por WhatsApp", en: "Ask on WhatsApp" },
      href: whatsappHref,
    },
    relatedIds: ["turtle-nesting", "beachfront-yoga", "live-music"],
  },
  {
    id: "turtle-nesting",
    type: "experience",
    slugs: {
      es: "anidacion-tortugas",
      en: "turtle-nesting",
    },
    title: {
      es: "Anidacion de Tortugas",
      en: "Turtle Nesting",
    },
    eyebrow: {
      es: "Conservacion y naturaleza",
      en: "Conservation and nature",
    },
    description: {
      es: "Playa Hermosa es parte de un entorno natural donde las tortugas marinas forman parte de una historia de conservacion, educacion y respeto por la vida silvestre.",
      en: "Playa Hermosa is part of a natural setting where sea turtles are connected to conservation, education and respect for wildlife.",
    },
    heroImage: {
      src: "/images/baby-turtle-DGA7PRRL.jpg",
      alt: {
        es: "Tortuga bebe avanzando hacia el mar",
        en: "Baby turtle moving toward the ocean",
      },
    },
    gallery: [
      {
        src: "/images/turtle-nesting-qhRPIRHR.jpg",
        alt: {
          es: "Tortuga marina en la arena",
          en: "Sea turtle on the sand",
        },
      },
      {
        src: "/images/Resort Highlights/DSC03680.jpg",
        alt: {
          es: "Playa Hermosa durante el dia",
          en: "Playa Hermosa during the day",
        },
      },
      {
        src: "/images/g-family-beach-DHJPEGnp.jpg",
        alt: {
          es: "Familia caminando por la playa",
          en: "Family walking on the beach",
        },
      },
      {
        src: "/images/Resort Highlights/IMG_3722.JPG",
        alt: {
          es: "Entorno natural del resort",
          en: "Natural setting around the resort",
        },
      },
    ],
    facts: [
      {
        label: { es: "Tipo", en: "Type" },
        value: { es: "Experiencia de conservacion", en: "Conservation experience" },
      },
      {
        label: { es: "Ubicacion", en: "Location" },
        value: { es: "Playa Hermosa", en: "Playa Hermosa" },
      },
      {
        label: { es: "Ideal para", en: "Best for" },
        value: { es: "Familias y viajeros curiosos", en: "Families and curious travelers" },
      },
      {
        label: { es: "Disponibilidad", en: "Availability" },
        value: { es: "Variable por temporada", en: "Seasonal and variable" },
      },
    ],
    sections: [
      {
        title: { es: "Resumen", en: "Overview" },
        body: {
          es: [
            "La anidacion de tortugas conecta a los huespedes con uno de los ciclos naturales mas antiguos del oceano.",
            "La experiencia depende de la temporada y de proyectos locales de conservacion, por lo que siempre debe vivirse de forma responsable.",
          ],
          en: [
            "Turtle nesting connects guests with one of the ocean's oldest natural cycles.",
            "The experience depends on the season and local conservation projects, so it should always be approached responsibly.",
          ],
        },
      },
      {
        title: { es: "Conservacion", en: "Conservation experience" },
        body: {
          es: [
            "La prioridad es proteger a las tortugas, sus nidos y el entorno de playa.",
            "Cuando hay actividades disponibles, se orienta a los visitantes para observar sin interferir con el comportamiento natural.",
          ],
          en: [
            "The priority is protecting the turtles, their nests and the beach environment.",
            "When activities are available, visitors are guided to observe without interfering with natural behavior.",
          ],
        },
      },
      {
        title: { es: "Anidacion y liberacion", en: "Nesting and release moments" },
        body: {
          es: [
            "En ciertos periodos, los visitantes pueden aprender sobre la anidacion o presenciar liberaciones de tortuguitas hacia el mar.",
            "Estos momentos son emotivos, educativos y especialmente memorables para ninos.",
          ],
          en: [
            "During certain periods, visitors may learn about nesting or witness baby turtle releases toward the sea.",
            "These moments are emotional, educational and especially memorable for children.",
          ],
        },
      },
      {
        title: { es: "Observacion responsable", en: "Responsible viewing" },
        body: {
          es: [
            "Es importante mantener distancia, evitar luces fuertes, seguir instrucciones y respetar los espacios protegidos.",
            "La mejor experiencia es la que deja la playa igual o mejor de como la encontramos.",
          ],
          en: [
            "It is important to keep distance, avoid bright lights, follow instructions and respect protected areas.",
            "The best experience is one that leaves the beach as good as or better than we found it.",
          ],
        },
      },
      {
        title: { es: "Valor educativo", en: "Family and educational value" },
        body: {
          es: [
            "La actividad ayuda a comprender la biodiversidad de Costa Rica y la importancia de cuidar los ecosistemas costeros.",
            "Es una forma sencilla y poderosa de sumar aprendizaje a una estadia frente al mar.",
          ],
          en: [
            "The activity helps guests understand Costa Rica's biodiversity and the importance of caring for coastal ecosystems.",
            "It is a simple and powerful way to add learning to an oceanfront stay.",
          ],
        },
      },
    ],
    cta: {
      label: { es: "Consultar temporada", en: "Ask about the season" },
      href: whatsappHref,
    },
    relatedIds: ["whale-watching", "beachfront-yoga", "live-music"],
  },
  {
    id: "beachfront-yoga",
    type: "experience",
    slugs: {
      es: "yoga-frente-al-mar",
      en: "beachfront-yoga",
    },
    title: {
      es: "Yoga Frente al Mar",
      en: "Beachfront Yoga",
    },
    eyebrow: {
      es: "Bienestar junto a las olas",
      en: "Wellness by the waves",
    },
    description: {
      es: "Clases de yoga frente al Pacifico, abiertas para huespedes y pensadas para todos los niveles en un entorno natural de Playa Hermosa.",
      en: "Yoga classes facing the Pacific, open to guests and designed for every level in the natural setting of Playa Hermosa.",
    },
    heroImage: {
      src: "/images/yoga-class-1Z8S9ilZ.jpg",
      alt: {
        es: "Clase de yoga frente al mar en Playa Hermosa",
        en: "Beachfront yoga class in Playa Hermosa",
      },
    },
    gallery: [
      {
        src: "/images/Resort Highlights/IMG_2209.JPG",
        alt: {
          es: "Zona verde del resort para relajarse",
          en: "Green resort area for relaxing",
        },
      },
      {
        src: "/images/Resort Highlights/IMG_3712.JPG",
        alt: {
          es: "Camino natural dentro del resort",
          en: "Natural pathway inside the resort",
        },
      },
      {
        src: "/images/g-family-beach-DHJPEGnp.jpg",
        alt: {
          es: "Playa Hermosa junto al hotel",
          en: "Playa Hermosa beside the hotel",
        },
      },
      {
        src: "/images/pool-aerial-day-BveHvOiS.jpg",
        alt: {
          es: "Piscina y areas comunes durante el dia",
          en: "Pool and common areas during the day",
        },
      },
    ],
    facts: [
      {
        label: { es: "Horario", en: "Schedule" },
        value: { es: "Dom y mie 8 AM, sab 4 PM", en: "Sun and Wed 8 AM, Sat 4 PM" },
      },
      {
        label: { es: "Nivel", en: "Level" },
        value: { es: "Todos los niveles", en: "All levels" },
      },
      {
        label: { es: "Incluido", en: "Included" },
        value: { es: "Para huespedes", en: "For guests" },
      },
      {
        label: { es: "Ambiente", en: "Setting" },
        value: { es: "Frente al mar", en: "Oceanfront" },
      },
    ],
    sections: [
      {
        title: { es: "Resumen", en: "Overview" },
        body: {
          es: [
            "El yoga frente al mar es una forma tranquila de empezar o cerrar el dia en Terraza del Pacifico.",
            "La practica combina movimiento, respiracion y el sonido constante de las olas.",
          ],
          en: [
            "Beachfront yoga is a calm way to begin or end the day at Terraza del Pacifico.",
            "The practice combines movement, breath and the steady sound of the waves.",
          ],
        },
      },
      {
        title: { es: "Horario", en: "Schedule" },
        body: {
          es: [
            "Las sesiones se ofrecen los domingos y miercoles a las 8:00 AM, y los sabados a las 4:00 PM.",
            "El horario puede ajustarse por clima o necesidades operativas, por lo que recomendamos confirmar durante tu estadia.",
          ],
          en: [
            "Sessions are offered Sundays and Wednesdays at 8:00 AM, and Saturdays at 4:00 PM.",
            "The schedule may adjust for weather or operations, so we recommend confirming during your stay.",
          ],
        },
      },
      {
        title: { es: "El entorno", en: "Setting by the ocean" },
        body: {
          es: [
            "Practicar junto al Pacifico crea un ritmo natural: brisa, sombra, arena y sonido de mar.",
            "Es una experiencia sencilla, pero profundamente conectada con el lugar.",
          ],
          en: [
            "Practicing beside the Pacific creates a natural rhythm: breeze, shade, sand and ocean sound.",
            "It is simple, but deeply connected to the place.",
          ],
        },
      },
      {
        title: { es: "Quien puede unirse", en: "Who can join" },
        body: {
          es: [
            "Las clases estan pensadas para todos los niveles, desde principiantes hasta personas con practica regular.",
            "El enfoque es relajado y accesible, ideal para integrarlo a unas vacaciones.",
          ],
          en: [
            "Classes are designed for every level, from beginners to regular practitioners.",
            "The approach is relaxed and accessible, ideal for adding wellness to a vacation.",
          ],
        },
      },
      {
        title: { es: "Que traer", en: "What to bring" },
        body: {
          es: [
            "Recomendamos ropa comoda, agua y llegar unos minutos antes de la clase.",
            "Si tienes alguna condicion fisica especifica, avisa al instructor antes de iniciar.",
          ],
          en: [
            "We recommend comfortable clothing, water and arriving a few minutes before class.",
            "If you have a specific physical condition, let the instructor know before beginning.",
          ],
        },
      },
    ],
    cta: {
      label: { es: "Reservar estadia", en: "Book your stay" },
      href: bookingHref,
    },
    relatedIds: ["whale-watching", "turtle-nesting", "live-music"],
  },
  {
    id: "live-music",
    type: "experience",
    slugs: {
      es: "musica-en-vivo",
      en: "live-music",
    },
    title: {
      es: "Musica en Vivo",
      en: "Live Music",
    },
    eyebrow: {
      es: "Fines de semana",
      en: "Weekends",
    },
    description: {
      es: "Musica local, cocteles tropicales y cenas frente al mar crean el ambiente perfecto para cerrar el dia en Playa Hermosa.",
      en: "Local music, tropical cocktails and oceanfront dinners create the perfect atmosphere to close the day in Playa Hermosa.",
    },
    heroImage: {
      src: "/images/live-music-U-RLRqGX.jpg",
      alt: {
        es: "Musica en vivo en el restaurante",
        en: "Live music at the restaurant",
      },
    },
    gallery: [
      {
        src: "/images/Resturant/chloemurdochphotography-312.JPG",
        alt: {
          es: "Ambiente del restaurante Vivace",
          en: "Atmosphere at Vivace restaurant",
        },
      },
      {
        src: "/images/Resturant/RLR_38442.JPG",
        alt: {
          es: "Cena y bebidas en Vivace",
          en: "Dinner and drinks at Vivace",
        },
      },
      {
        src: "/images/restaurant-sunset-T7wmiQ85.jpg",
        alt: {
          es: "Atardecer desde el restaurante",
          en: "Sunset from the restaurant",
        },
      },
      {
        src: "/images/restaurant-cocktails-ITbgxYoM.jpg",
        alt: {
          es: "Cocteles tropicales frente al mar",
          en: "Tropical cocktails by the ocean",
        },
      },
    ],
    facts: [
      {
        label: { es: "Frecuencia", en: "Frequency" },
        value: { es: "Fines de semana", en: "Weekends" },
      },
      {
        label: { es: "Lugar", en: "Place" },
        value: { es: "Vivace Beachfront", en: "Vivace Beachfront" },
      },
      {
        label: { es: "Ideal para", en: "Best for" },
        value: { es: "Cena, cocteles y atardecer", en: "Dinner, cocktails and sunset" },
      },
      {
        label: { es: "Consulta", en: "Check" },
        value: { es: "Programacion semanal", en: "Weekly lineup" },
      },
    ],
    sections: [
      {
        title: { es: "Resumen", en: "Overview" },
        body: {
          es: [
            "La musica en vivo transforma las noches del hotel en una experiencia relajada y social.",
            "Artistas locales acompanan cenas, cocteles y conversaciones frente al mar.",
          ],
          en: [
            "Live music turns hotel evenings into a relaxed and social experience.",
            "Local artists accompany dinners, cocktails and conversations by the ocean.",
          ],
        },
      },
      {
        title: { es: "Ambiente de fin de semana", en: "Weekend atmosphere" },
        body: {
          es: [
            "Los fines de semana, Vivace Beachfront cobra vida con musica, luces y el sonido de las olas.",
            "Es una opcion ideal para huespedes que quieren disfrutar la noche sin salir del resort.",
          ],
          en: [
            "On weekends, Vivace Beachfront comes alive with music, lights and the sound of the waves.",
            "It is ideal for guests who want to enjoy the evening without leaving the resort.",
          ],
        },
      },
      {
        title: { es: "Restaurante y bares", en: "Restaurant and bar connection" },
        body: {
          es: [
            "La experiencia se conecta naturalmente con Vivace, Iguana Bar y Golden Beach Bar.",
            "Puedes combinar la musica con cocina mediterranea, bebidas frias y vistas al Pacifico.",
          ],
          en: [
            "The experience connects naturally with Vivace, Iguana Bar and Golden Beach Bar.",
            "Guests can pair the music with Mediterranean cuisine, cold drinks and Pacific views.",
          ],
        },
      },
      {
        title: { es: "Talento local", en: "Local artists" },
        body: {
          es: [
            "La programacion resalta artistas locales y sonidos que encajan con el ambiente relajado de Playa Hermosa.",
            "Consulta el calendario semanal para confirmar horarios y presentaciones.",
          ],
          en: [
            "The lineup highlights local artists and sounds that match Playa Hermosa's relaxed atmosphere.",
            "Check the weekly schedule to confirm times and performances.",
          ],
        },
      },
      {
        title: { es: "Atardecer, cena y cocteles", en: "Dinner, cocktails and sunset" },
        body: {
          es: [
            "Llega antes del atardecer para disfrutar la luz del Pacifico y quedarte a cenar cuando inicia la musica.",
            "Es una de las formas mas sencillas de vivir la energia del hotel.",
          ],
          en: [
            "Arrive before sunset to enjoy the Pacific light, then stay for dinner as the music begins.",
            "It is one of the easiest ways to feel the energy of the hotel.",
          ],
        },
      },
    ],
    cta: {
      label: { es: "Consultar programacion", en: "Check the lineup" },
      href: whatsappHref,
    },
    relatedIds: ["beachfront-yoga", "whale-watching", "turtle-nesting"],
  },
];

export function getExperienceById(id: string) {
  return experiences.find((page) => page.id === id);
}
