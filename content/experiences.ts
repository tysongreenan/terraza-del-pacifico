import { bookingHref, whatsappHref } from "@/lib/site";
import type { HubPage, InfoPage } from "@/content/info-pages";

export const experienceHub: HubPage = {
  eyebrow: {
    es: "Experiencias",
    en: "Experiences",
  },
  title: {
    es: "Experiencias frente al mar en Playa Hermosa",
    en: "Beachfront experiences in Playa Hermosa",
  },
  description: {
    es: "Avistamiento de ballenas, yoga en la arena y noches de musica en vivo, todo frente al mar en Playa Hermosa, al sur de Jaco. Estas son las experiencias que hacen de una estadia en Terraza del Pacifico mucho mas que una visita a la playa.",
    en: "Whale watching, yoga on the sand and evenings of live music, all beachfront in Playa Hermosa, just south of Jaco. These are the experiences that turn a stay at Terraza del Pacifico into far more than a beach visit.",
  },
  heroImage: {
    src: "/images/Resort Highlights/IMG_3170.JPG",
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
      es: "Avistamiento de Ballenas en Costa Rica - Playa Hermosa",
      en: "Whale Watching in Costa Rica - Playa Hermosa, Jaco",
    },
    eyebrow: {
      es: "Julio a octubre",
      en: "July to October",
    },
    description: {
      es: "Avistamiento de ballenas en Costa Rica: cada temporada las jorobadas llegan al Pacifico. Playa Hermosa, al sur de Jaco, es tu punto de partida frente al mar.",
      en: "Whale watching in Costa Rica: each season humpbacks arrive in the warm Pacific. Beachfront Playa Hermosa, south of Jaco, is your starting point to see them.",
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
            "Cada temporada, las ballenas jorobadas migran hacia aguas calidas para aparearse y dar a luz, creando momentos que se disfrutan desde Playa Hermosa, a pocos minutos al sur de Jaco, y la costa que la rodea.",
          ],
          en: [
            "Whale watching is one of the most memorable natural experiences on Costa Rica's Pacific coast.",
            "Each season, humpback whales migrate to warm waters to mate and give birth, creating moments guests can experience from Playa Hermosa, minutes south of Jaco, and the coastline around it.",
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
            "La ubicacion frente al mar en Playa Hermosa hace que la experiencia se sienta parte de la estadia, no como una actividad aislada.",
            "Despues de la salida, puedes volver al hotel para almorzar, descansar junto a la piscina o ver el atardecer.",
          ],
          en: [
            "The beachfront location in Playa Hermosa makes the experience feel part of the stay, not like a separate excursion.",
            "After the outing, guests can return to the hotel for lunch, pool time or sunset by the beach.",
          ],
        },
      },
      {
        title: { es: "Para toda la familia", en: "Family-friendly nature experience" },
        body: {
          es: [
            "Es una actividad educativa y emocionante para toda la familia, parejas y grupos que quieren conectar con la naturaleza de Costa Rica frente al mar.",
            "Recomendamos consultar antes de viajar para confirmar condiciones y opciones disponibles.",
          ],
          en: [
            "It is an educational, exciting activity for the whole family, couples and groups who want to connect with Costa Rica's nature by the sea.",
            "We recommend checking before traveling to confirm conditions and available options.",
          ],
        },
      },
    ],
    faq: [
      {
        q: {
          es: "Cuando es la temporada de avistamiento de ballenas en Costa Rica?",
          en: "When is whale watching season in Costa Rica?",
        },
        a: {
          es: "La temporada principal de ballenas jorobadas en el Pacifico de Costa Rica va de julio a octubre, cuando llegan a aguas calidas para aparearse y dar a luz. Las condiciones del mar y la actividad natural pueden variar, asi que recomendamos consultar antes de viajar.",
          en: "The main humpback whale season on Costa Rica's Pacific coast runs from July to October, when the whales arrive in warm waters to mate and give birth. Ocean conditions and natural activity can vary, so we recommend checking before you travel.",
        },
      },
      {
        q: {
          es: "Se pueden ver ballenas desde Playa Hermosa?",
          en: "Can you see whales from Playa Hermosa?",
        },
        a: {
          es: "El avistamiento ocurre mar adentro a lo largo del Pacifico central de Costa Rica, no desde la orilla. Playa Hermosa, a pocos minutos al sur de Jaco, es un punto de partida frente al mar: nuestro equipo puede orientarte sobre disponibilidad, horarios recomendados y opciones locales en temporada.",
          en: "Sightings happen out at sea along Costa Rica's central Pacific, not from the shore. Playa Hermosa, minutes south of Jaco, is a beachfront starting point: our team can guide you on availability, recommended timing and local options in season.",
        },
      },
      {
        q: {
          es: "Estan garantizados los avistamientos?",
          en: "Are sightings guaranteed?",
        },
        a: {
          es: "No. El avistamiento de ballenas es una actividad de naturaleza silvestre, asi que no se pueden garantizar los avistamientos. Visitar durante la temporada principal, de julio a octubre, mejora las posibilidades de ver saltos, aletas, colas y grupos familiares moviendose por la costa.",
          en: "No. Whale watching is a wild nature activity, so sightings cannot be guaranteed. Visiting during the main season, July to October, improves the chances of seeing breaches, fins, tails and family groups moving along the coast.",
        },
      },
      {
        q: {
          es: "Es buena actividad para familias?",
          en: "Is it a good activity for families?",
        },
        a: {
          es: "Si. Es una actividad educativa y emocionante para toda la familia, parejas y grupos que quieren conectar con la naturaleza de Costa Rica frente al mar. Despues de la salida puedes volver al hotel para almorzar, descansar junto a la piscina o ver el atardecer.",
          en: "Yes. It is an educational, exciting activity for the whole family, couples and groups who want to connect with Costa Rica's nature by the sea. After the outing you can return to the hotel for lunch, pool time or sunset by the beach.",
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
      es: "Anidacion de Tortugas en Costa Rica - Playa Hermosa, Jaco",
      en: "Sea Turtle Nesting in Costa Rica - Playa Hermosa, Jaco",
    },
    eyebrow: {
      es: "Conservacion y naturaleza",
      en: "Conservation and nature",
    },
    description: {
      es: "Tortuga marina y desove en Playa Hermosa, al sur de Jaco: un entorno frente al mar dedicado a la conservacion, la educacion y el respeto por la vida silvestre.",
      en: "Sea turtles in Costa Rica: Playa Hermosa, just south of Jaco, is a beachfront base for turtle nesting season, conservation and respect for wildlife.",
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
        src: "/images/exp-beach-grounds.jpg",
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
            "La mejor experiencia es la que deja la playa de Playa Hermosa igual o mejor de como la encontramos.",
          ],
          en: [
            "It is important to keep distance, avoid bright lights, follow instructions and respect protected areas.",
            "The best experience is one that leaves the Playa Hermosa beach as good as, or better than, we found it.",
          ],
        },
      },
      {
        title: { es: "Valor educativo", en: "Family and educational value" },
        body: {
          es: [
            "La actividad ayuda a comprender la biodiversidad de Costa Rica y la importancia de cuidar los ecosistemas costeros.",
            "Es una forma sencilla y poderosa de sumar aprendizaje en familia a una estadia frente al mar en Playa Hermosa.",
          ],
          en: [
            "The activity helps guests understand Costa Rica's biodiversity and the importance of caring for coastal ecosystems.",
            "It is a simple, powerful way to add family learning to a beachfront stay in Playa Hermosa.",
          ],
        },
      },
    ],
    faq: [
      {
        q: {
          es: "Cuando es la temporada de anidacion de tortugas?",
          en: "When is sea turtle nesting season?",
        },
        a: {
          es: "La anidacion de tortugas es estacional y variable, y depende de los proyectos locales de conservacion. No hay fechas fijas garantizadas, asi que recomendamos consultarnos antes de viajar para saber si la actividad estara disponible durante tu estadia.",
          en: "Sea turtle nesting is seasonal and variable, and depends on local conservation projects. There are no fixed guaranteed dates, so we recommend checking with us before you travel to find out whether the activity will be available during your stay.",
        },
      },
      {
        q: {
          es: "Se puede ver la anidacion de tortugas en Playa Hermosa?",
          en: "Can you see turtle nesting at Playa Hermosa?",
        },
        a: {
          es: "Playa Hermosa, al sur de Jaco, en el Pacifico central de Costa Rica, es un refugio costero donde las tortugas marinas anidan en ciertas epocas del ano. Desde nuestra base frente al mar puedes aprender sobre la anidacion y, cuando hay actividades disponibles, observar de forma responsable, siempre respetando a las tortugas y sus nidos.",
          en: "Playa Hermosa, south of Jaco on Costa Rica's central Pacific, is a coastal refuge where sea turtles nest at certain times of year. From our beachfront base you can learn about nesting and, when activities are available, observe responsibly, always respecting the turtles and their nests.",
        },
      },
      {
        q: {
          es: "Estan garantizados los avistamientos de tortugas?",
          en: "Are turtle sightings guaranteed?",
        },
        a: {
          es: "No. La anidacion de tortugas es una actividad de naturaleza silvestre que depende de la temporada y de las condiciones, asi que no se pueden garantizar los avistamientos. La mejor manera de aumentar tus posibilidades es consultar la disponibilidad antes de tu visita.",
          en: "No. Sea turtle nesting is a wild nature activity that depends on the season and conditions, so sightings cannot be guaranteed. The best way to improve your chances is to ask about availability before your visit.",
        },
      },
      {
        q: {
          es: "Como se observa la anidacion de forma responsable?",
          en: "How do you watch nesting responsibly?",
        },
        a: {
          es: "Es importante mantener distancia, evitar luces blancas fuertes, seguir las instrucciones de los proyectos locales de conservacion y respetar las areas protegidas. En Costa Rica la observacion nocturna suele requerir guias certificados. La meta es dejar la playa igual o mejor de como la encontramos.",
          en: "Keep your distance, avoid bright white lights, follow the guidance of local conservation projects and respect protected areas. In Costa Rica night viewing usually requires certified guides. The goal is to leave the beach as good as, or better than, we found it.",
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
      es: "Yoga Frente al Mar en Playa Hermosa, Costa Rica",
      en: "Beachfront Yoga in Playa Hermosa, Costa Rica",
    },
    eyebrow: {
      es: "Bienestar junto a las olas",
      en: "Wellness by the waves",
    },
    description: {
      es: "Clases de yoga frente al mar en Playa Hermosa, al sur de Jaco, abiertas para huespedes y pensadas para todos los niveles en un entorno natural y tranquilo.",
      en: "Beachfront yoga classes in Playa Hermosa, just south of Jaco, open to guests and designed for every level in a calm, natural setting.",
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
        src: "/images/Resort Highlights/IMG_5978.JPG",
        alt: {
          es: "Camino natural dentro del resort",
          en: "Natural pathway inside the resort",
        },
      },
      {
        src: "/images/exp-beach-topdown.jpg",
        alt: {
          es: "Playa Hermosa junto al hotel",
          en: "Playa Hermosa beside the hotel",
        },
      },
      {
        src: "/images/Resort Highlights/IMG_59363.JPG",
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
            "Practicar frente al mar en Playa Hermosa crea un ritmo natural: brisa, sombra, arena y sonido de las olas.",
            "Una practica sencilla que toma su ritmo del lugar.",
          ],
          en: [
            "Practicing beachfront in Playa Hermosa creates a natural rhythm: breeze, shade, sand and the sound of the waves.",
            "A simple practice that takes its cues from the place itself.",
          ],
        },
      },
      {
        title: { es: "Quien puede unirse", en: "Who can join" },
        body: {
          es: [
            "Las clases estan pensadas para todos los niveles, desde principiantes hasta personas con practica regular.",
            "El enfoque es relajado y accesible, ideal para integrarlo a unas vacaciones en familia frente al mar.",
          ],
          en: [
            "Classes are designed for every level, from beginners to regular practitioners.",
            "The approach is relaxed and accessible, ideal for adding wellness to a beachfront family vacation.",
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
    faq: [
      {
        q: {
          es: "¿El yoga frente al mar es apto para principiantes?",
          en: "Is beachfront yoga suitable for beginners?",
        },
        a: {
          es: "Si. Las clases estan pensadas para todos los niveles, desde principiantes hasta personas con practica regular, con un enfoque relajado y accesible.",
          en: "Yes. Classes are designed for every level, from beginners to regular practitioners, with a relaxed and accessible approach.",
        },
      },
      {
        q: {
          es: "¿Cual es el horario de las clases de yoga?",
          en: "What is the yoga class schedule?",
        },
        a: {
          es: "Las sesiones se ofrecen los domingos y miercoles a las 8:00 AM, y los sabados a las 4:00 PM. El horario puede ajustarse por clima o necesidades operativas, por lo que recomendamos confirmar durante tu estadia.",
          en: "Sessions are offered Sundays and Wednesdays at 8:00 AM, and Saturdays at 4:00 PM. The schedule may adjust for weather or operations, so we recommend confirming during your stay.",
        },
      },
      {
        q: {
          es: "¿Quien puede unirse a las clases de yoga?",
          en: "Who can join the yoga classes?",
        },
        a: {
          es: "Las clases de yoga frente al mar estan disponibles para los huespedes del resort y son ideales para integrarlas a unas vacaciones en familia frente al mar.",
          en: "The beachfront yoga classes are available for resort guests and are ideal to add to a beachfront family vacation.",
        },
      },
      {
        q: {
          es: "¿Que debo llevar a la clase de yoga?",
          en: "What should I bring to the yoga class?",
        },
        a: {
          es: "Recomendamos ropa comoda, agua y llegar unos minutos antes de la clase. Si tienes alguna condicion fisica especifica, avisa al instructor antes de iniciar.",
          en: "We recommend comfortable clothing, water and arriving a few minutes before class. If you have a specific physical condition, let the instructor know before beginning.",
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
      es: "Musica local, cocteles tropicales y cenas frente al mar crean el ambiente perfecto para cerrar el dia en Playa Hermosa, al sur de Jaco.",
      en: "Local music, tropical cocktails and beachfront dinners set the perfect mood to close the day in Playa Hermosa, just south of Jaco.",
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
            "La programacion resalta artistas locales y sonidos que encajan con el ambiente relajado y familiar de Playa Hermosa.",
            "Consulta el calendario semanal para confirmar horarios y presentaciones.",
          ],
          en: [
            "The lineup highlights local artists and sounds that match the relaxed, family-friendly atmosphere of Playa Hermosa.",
            "Check the weekly schedule to confirm times and performances.",
          ],
        },
      },
      {
        title: { es: "Atardecer, cena y cocteles", en: "Dinner, cocktails and sunset" },
        body: {
          es: [
            "Llega antes del atardecer para disfrutar la luz del Pacifico y quedarte a cenar cuando inicia la musica.",
            "Es una forma sencilla de pasar la noche sin salir del resort.",
          ],
          en: [
            "Arrive before sunset to enjoy the Pacific light, then stay for dinner as the music begins.",
            "It is an easy way to spend an evening here without leaving the resort.",
          ],
        },
      },
    ],
    faq: [
      {
        q: {
          es: "Cuando hay musica en vivo en Playa Hermosa?",
          en: "When is there live music in Playa Hermosa?",
        },
        a: {
          es: "La musica en vivo se presenta los fines de semana en Vivace Beachfront, en Playa Hermosa, al sur de Jaco. La programacion cambia semana a semana, asi que recomendamos consultar el calendario semanal para confirmar dias, horarios y artistas.",
          en: "Live music takes place on weekends at Vivace Beachfront, in Playa Hermosa, just south of Jaco. The lineup changes week to week, so we recommend checking the weekly schedule to confirm days, times and performers.",
        },
      },
      {
        q: {
          es: "Que tipo de musica se presenta?",
          en: "What kind of music is played?",
        },
        a: {
          es: "La programacion resalta artistas locales con un sonido relajado que acompana la cena, los cocteles y el ambiente familiar de Playa Hermosa. No es un club nocturno, sino musica en vivo para disfrutar la noche frente al mar.",
          en: "The lineup highlights local artists with a relaxed sound that pairs with dinner, cocktails and the family-friendly atmosphere of Playa Hermosa. It is not a nightclub, but live music to enjoy the evening by the ocean.",
        },
      },
      {
        q: {
          es: "Donde es la musica en vivo en el resort?",
          en: "Where is the live music at the resort?",
        },
        a: {
          es: "Las presentaciones son en Vivace Beachfront, el restaurante frente al mar del resort, que se conecta de forma natural con Iguana Bar y Golden Beach Bar. Puedes combinar la musica con cocina mediterranea, bebidas frias y vistas al Pacifico sin salir del resort.",
          en: "Performances are at Vivace Beachfront, the resort's oceanfront restaurant, which connects naturally with Iguana Bar and Golden Beach Bar. You can pair the music with Mediterranean cuisine, cold drinks and Pacific views without leaving the resort.",
        },
      },
      {
        q: {
          es: "Pueden asistir visitantes que no se hospedan en el resort?",
          en: "Can non-guests visit for the live music?",
        },
        a: {
          es: "Vivace Beachfront recibe a huespedes y visitantes, con o sin reserva, y los huespedes del resort se sientan primero. Para la cena con musica recomendamos reservar, sobre todo al atardecer y los fines de semana.",
          en: "Vivace Beachfront welcomes both hotel guests and outside visitors, with or without a reservation, and resort guests are seated first. For dinner with music we recommend booking ahead, especially around sunset and on weekends.",
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
