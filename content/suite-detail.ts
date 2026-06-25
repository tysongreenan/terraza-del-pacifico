import type { Locale } from "@/lib/i18n";

// Copy for the bespoke Suite Detail page (single-room layout from the
// "Terraza Page Concepts" mockup). The MOCKUP supplies the layout only — every
// fact here is bound to the real property data in `content/habitaciones-*.json`
// and `lib/dictionaries.ts`:
//   - room name + specs (guests/size/beds/view) come from `dict.suites.items`
//   - the lead paragraph reuses `suitesHubContent.rooms[slug].description`
//   - gallery photos come from `content/room-galleries.ts`
// Only the big editorial headline is net-new bilingual copy; amenities, floor,
// view and the children policy are localized restatements of the room JSON.

export type GoodToKnowRow = { label: string; value: string };

export type RoomDetailCopy = {
  /** Large Cormorant editorial headline that opens the body. */
  headline: string;
  /** Amenity chips — localized from each room's real amenity list. */
  amenities: string[];
  /** Extra "Good to know" rows (view / floor / layout). Check-in & check-out
   *  are added by the component from shared data. */
  goodToKnow: GoodToKnowRow[];
  /** Children policy lines — preserved from the room JSON (a must-keep fact). */
  childrenPolicy: string[];
  /** Optional italic pull-quote in the booking sidebar. */
  highlight?: string;
};

type SuiteDetailCopy = {
  // section + control labels
  inThisRoom: string;
  goodToKnow: string;
  childrenLabel: string;
  keepLooking: string;
  otherWays: string;
  allRooms: string;
  galleryHint: string;
  enlarge: (i: number, n: number) => string;
  prev: string;
  next: string;
  // booking sidebar
  bookToday: string;
  reserveDirect: string;
  bestRate: string;
  freeCancel: string;
  askWhatsApp: string;
  checkInLabel: string;
  checkOutLabel: string;
  checkInTime: string;
  checkOutTime: string;
  // helpers
  photosOverlay: (n: number) => string;
  sleeps: (n: string) => string;
  rooms: Record<string, RoomDetailCopy>;
};

const en: SuiteDetailCopy = {
  inThisRoom: "In this room",
  goodToKnow: "Good to know",
  childrenLabel: "Children",
  keepLooking: "Keep looking",
  otherWays: "Other ways to stay",
  allRooms: "All rooms →",
  galleryHint: "Tap to view the full gallery",
  enlarge: (i, n) => `Enlarge photo ${i} of ${n}`,
  prev: "Previous photo",
  next: "Next photo",
  bookToday: "Book today",
  reserveDirect: "Reserve direct",
  bestRate: "◆ Best rate · direct",
  freeCancel: "We'll confirm your dates by email or WhatsApp — no prepayment to ask.",
  askWhatsApp: "Ask on WhatsApp",
  checkInLabel: "Check-in",
  checkOutLabel: "Check-out",
  checkInTime: "3:00 PM",
  checkOutTime: "1:00 PM",
  photosOverlay: (n) => `+${n} photo${n === 1 ? "" : "s"}`,
  sleeps: (n) => `Sleeps ${n}`,
  rooms: {
    "junior-suite": {
      headline: "A calm retreat for two, with the pool from your bed",
      amenities: [
        "Private balcony with armchairs",
        "Air conditioning",
        "Flat-screen TV",
        "Free Wi-Fi",
        "Hot-water shower",
        "Hair dryer",
        "Refrigerator & minibar",
      ],
      goodToKnow: [
        { label: "View", value: "Main pool" },
        { label: "Floor", value: "Upper floor" },
        { label: "Availability", value: "Only 2 suites" },
      ],
      childrenPolicy: [
        "Adults only — children are not accepted in this room category.",
      ],
      highlight:
        "Only two of these exist, and they book out first.",
    },
    superior: {
      headline: "Two double beds, steps from the pool and the sand",
      amenities: [
        "Air conditioning",
        "Flat-screen TV",
        "Free Wi-Fi",
        "Hot-water shower",
        "Hair dryer",
        "Refrigerator",
      ],
      goodToKnow: [
        { label: "View", value: "Main pool" },
        { label: "Floor", value: "Ground or upper" },
      ],
      childrenPolicy: [
        "0–3 years: free (no extra bed)",
        "4–11 years: child rate",
        "12+ years: adult rate",
      ],
    },
    standard: {
      headline: "A quiet, garden-facing room for up to four",
      amenities: [
        "Air conditioning",
        "Flat-screen TV",
        "Free Wi-Fi",
        "Hot-water shower",
        "Hair dryer",
        "Refrigerator",
      ],
      goodToKnow: [
        { label: "View", value: "Tropical gardens" },
        { label: "Floor", value: "Ground or upper" },
      ],
      childrenPolicy: [
        "0–3 years: free (no extra bed)",
        "4–11 years: child rate",
        "12+ years: adult rate",
      ],
    },
    villas: {
      headline: "A recently renovated beach house for the people you travel with",
      amenities: [
        "Full kitchen",
        "Living & dining area",
        "Air conditioning",
        "Cable TV",
        "Free Wi-Fi",
        "Coffee maker & kettle",
        "Microwave & blender",
        "Rice cooker",
        "Complete kitchenware",
      ],
      goodToKnow: [
        { label: "View", value: "Partial ocean" },
        { label: "Villa 216", value: "King + double + trundle · upper" },
        { label: "Villa 116", value: "Three double beds · ground" },
      ],
      childrenPolicy: [
        "0–3 years: free (no extra bed)",
        "4–11 years: child rate",
        "12+ years: adult rate",
      ],
    },
  },
};

const es: SuiteDetailCopy = {
  inThisRoom: "En esta habitación",
  goodToKnow: "Bueno saber",
  childrenLabel: "Niños",
  keepLooking: "Sigue explorando",
  otherWays: "Otras formas de hospedarte",
  allRooms: "Todas las habitaciones →",
  galleryHint: "Toca para ver la galería completa",
  enlarge: (i, n) => `Ampliar foto ${i} de ${n}`,
  prev: "Foto anterior",
  next: "Foto siguiente",
  bookToday: "Reserva hoy",
  reserveDirect: "Reserva directa",
  bestRate: "◆ Mejor tarifa · directo",
  freeCancel:
    "Confirmamos tus fechas por correo o WhatsApp — sin prepago para consultar.",
  askWhatsApp: "Pregunta por WhatsApp",
  checkInLabel: "Entrada",
  checkOutLabel: "Salida",
  checkInTime: "3:00 PM",
  checkOutTime: "1:00 PM",
  photosOverlay: (n) => `+${n} foto${n === 1 ? "" : "s"}`,
  sleeps: (n) => `Hasta ${n} huéspedes`,
  rooms: {
    "junior-suite": {
      headline: "Un refugio sereno para dos, con la piscina desde tu cama",
      amenities: [
        "Balcón privado con sillones",
        "Aire acondicionado",
        "TV de pantalla plana",
        "WiFi gratis",
        "Ducha con agua caliente",
        "Secadora de pelo",
        "Refrigeradora y minibar",
      ],
      goodToKnow: [
        { label: "Vista", value: "Piscina principal" },
        { label: "Planta", value: "Planta alta" },
        { label: "Disponibilidad", value: "Solo 2 suites" },
      ],
      childrenPolicy: [
        "Solo adultos — no se aceptan niños en esta categoría.",
      ],
      highlight:
        "Solo existen dos, y son las primeras en reservarse.",
    },
    superior: {
      headline: "Dos camas dobles, a pasos de la piscina y la arena",
      amenities: [
        "Aire acondicionado",
        "TV de pantalla plana",
        "WiFi gratis",
        "Ducha con agua caliente",
        "Secadora de pelo",
        "Refrigeradora",
      ],
      goodToKnow: [
        { label: "Vista", value: "Piscina principal" },
        { label: "Planta", value: "Planta baja o alta" },
      ],
      childrenPolicy: [
        "0–3 años: gratis (sin cama extra)",
        "4–11 años: tarifa de niño",
        "12+ años: tarifa de adulto",
      ],
    },
    standard: {
      headline: "Una habitación serena frente al jardín para hasta cuatro",
      amenities: [
        "Aire acondicionado",
        "TV de pantalla plana",
        "WiFi gratis",
        "Ducha con agua caliente",
        "Secadora de pelo",
        "Refrigeradora",
      ],
      goodToKnow: [
        { label: "Vista", value: "Jardines tropicales" },
        { label: "Planta", value: "Planta baja o alta" },
      ],
      childrenPolicy: [
        "0–3 años: gratis (sin cama extra)",
        "4–11 años: tarifa de niño",
        "12+ años: tarifa de adulto",
      ],
    },
    villas: {
      headline: "Una casa de playa entera, recientemente renovada, para los tuyos",
      amenities: [
        "Cocina completa",
        "Sala y comedor",
        "Aire acondicionado",
        "TV por cable",
        "WiFi gratis",
        "Cafetera y hervidor",
        "Microondas y licuadora",
        "Arrocera",
        "Menaje de cocina completo",
      ],
      goodToKnow: [
        { label: "Vista", value: "Parcial al mar" },
        { label: "Villa 216", value: "King + doble + nido · planta alta" },
        { label: "Villa 116", value: "Tres camas dobles · planta baja" },
      ],
      childrenPolicy: [
        "0–3 años: gratis (sin cama extra)",
        "4–11 años: tarifa de niño",
        "12+ años: tarifa de adulto",
      ],
    },
  },
};

export const suiteDetailContent: Record<Locale, SuiteDetailCopy> = { en, es };
