import type { Locale } from "@/lib/i18n";

// Copy + filter facets for the Browse & Compare rooms page (Direction B).
// Room names/specs come from `dict.suites.items`; facets here drive filtering
// in a locale-stable way (display strings are localized, slugs are not).

export type GuestBucket = "2" | "4" | "6";
export type ViewFacet = "pool" | "garden" | "ocean";
export type BedFacet = "king" | "double" | "kitchen";

export const roomFacets: Record<
  string,
  { guests: GuestBucket; view: ViewFacet; beds: BedFacet; kicker: string }
> = {
  "junior-suite": { guests: "2", view: "pool", beds: "king", kicker: "couples" },
  superior: { guests: "4", view: "pool", beds: "double", kicker: "families" },
  estandar: { guests: "4", view: "garden", beds: "double", kicker: "serene" },
  villas: { guests: "6", view: "ocean", beds: "kitchen", kicker: "whole-home" },
};

type CompareCopy = {
  hero: { eyebrow: string; title: string; description: string };
  refine: string;
  guests: { label: string; any: string; options: { value: GuestBucket; label: string }[] };
  view: { label: string; options: { value: ViewFacet; label: string }[] };
  beds: { label: string; options: { value: BedFacet; label: string }[] };
  showing: string;
  roomTypes: (n: number) => string;
  heading: { eyebrow: string; title: string; note: string };
  columns: { room: string; guests: string; size: string; beds: string; view: string };
  kickers: Record<string, string>;
  empty: string;
  clear: string;
  backToHub: string;
};

const en: CompareCopy = {
  hero: {
    eyebrow: "Stay · Oceanfront Rooms",
    title: "Find Your Room",
    description:
      "Four room types, all on the sand. Filter by who's coming and how you like to wake up.",
  },
  refine: "Refine",
  guests: {
    label: "Guests",
    any: "Any",
    options: [
      { value: "2", label: "2" },
      { value: "4", label: "4" },
      { value: "6", label: "6+" },
    ],
  },
  view: {
    label: "View",
    options: [
      { value: "pool", label: "Pool view" },
      { value: "garden", label: "Garden view" },
      { value: "ocean", label: "Ocean view" },
    ],
  },
  beds: {
    label: "Beds",
    options: [
      { value: "king", label: "1 King" },
      { value: "double", label: "2 Double" },
      { value: "kitchen", label: "Kitchen + living" },
    ],
  },
  showing: "Showing",
  roomTypes: (n) => `${n} room type${n === 1 ? "" : "s"}`,
  heading: {
    eyebrow: "Four rooms",
    title: "Compare at a glance",
    note: "All on the sand · sorted by space",
  },
  columns: { room: "Room", guests: "Guests", size: "Size", beds: "Beds", view: "View" },
  kickers: {
    couples: "Made for couples",
    families: "For families",
    serene: "Quiet & serene",
    "whole-home": "Whole-home",
  },
  empty: "No rooms match those filters — try clearing one.",
  clear: "Clear filters",
  backToHub: "← Back to all rooms",
};

const es: CompareCopy = {
  hero: {
    eyebrow: "Hospedaje · Habitaciones frente al mar",
    title: "Encuentra tu habitación",
    description:
      "Cuatro tipos de habitación, todas sobre la arena. Filtra por quién viene y cómo te gusta despertar.",
  },
  refine: "Filtrar",
  guests: {
    label: "Huéspedes",
    any: "Todas",
    options: [
      { value: "2", label: "2" },
      { value: "4", label: "4" },
      { value: "6", label: "6+" },
    ],
  },
  view: {
    label: "Vista",
    options: [
      { value: "pool", label: "Vista a la piscina" },
      { value: "garden", label: "Vista al jardín" },
      { value: "ocean", label: "Vista al océano" },
    ],
  },
  beds: {
    label: "Camas",
    options: [
      { value: "king", label: "1 King" },
      { value: "double", label: "2 Dobles" },
      { value: "kitchen", label: "Cocina + sala" },
    ],
  },
  showing: "Mostrando",
  roomTypes: (n) => `${n} ${n === 1 ? "habitación" : "habitaciones"}`,
  heading: {
    eyebrow: "Cuatro habitaciones",
    title: "Compara de un vistazo",
    note: "Todas sobre la arena · ordenadas por espacio",
  },
  columns: {
    room: "Habitación",
    guests: "Huéspedes",
    size: "Tamaño",
    beds: "Camas",
    view: "Vista",
  },
  kickers: {
    couples: "Pensada para parejas",
    families: "Para familias",
    serene: "Tranquila y serena",
    "whole-home": "Casa completa",
  },
  empty: "Ninguna habitación coincide — prueba quitando un filtro.",
  clear: "Limpiar filtros",
  backToHub: "← Volver a todas las habitaciones",
};

export const roomsCompareContent: Record<Locale, CompareCopy> = { en, es };
