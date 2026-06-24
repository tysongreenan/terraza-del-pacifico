export type RoomGallery = {
  slug: string;
  images: { src: string; alt: { es: string; en: string } }[];
};

export const roomGalleries: RoomGallery[] = [
  {
    slug: "superior",
    images: [
      {
        src: "/images/Suit photos/RLR_4906.jpg",
        alt: {
          es: "Habitación superior con dos camas dobles y techo abovedado",
          en: "Superior room with two double beds and a vaulted ceiling",
        },
      },
      {
        src: "/images/room-two-beds-D9Pgywgw.jpg",
        alt: {
          es: "Habitación superior con dos camas",
          en: "Superior room with two beds",
        },
      },
      {
        src: "/images/room-interior-C3-O8UpA.jpg",
        alt: {
          es: "Interior de habitación con vista al resort",
          en: "Room interior overlooking the resort",
        },
      },
      {
        src: "/images/g-aerial-pool-overview-CCOWXk2j.jpg",
        alt: {
          es: "Vista a la piscina desde la habitación superior",
          en: "Pool view from superior room",
        },
      },
    ],
  },
  {
    slug: "estandar",
    images: [
      {
        src: "/images/Suit photos/RLR_4906.jpg",
        alt: {
          es: "Habitación estándar con dos camas dobles",
          en: "Standard room with two double beds",
        },
      },
      {
        src: "/images/room-standard-wide-DxUYeeXV.jpg",
        alt: {
          es: "Habitación estándar amplia",
          en: "Wide standard room",
        },
      },
      {
        src: "/images/room-two-beds-D9Pgywgw.jpg",
        alt: {
          es: "Habitación estándar con dos camas",
          en: "Standard room with two beds",
        },
      },
      {
        src: "/images/room-interior-C3-O8UpA.jpg",
        alt: {
          es: "Detalle del interior de la habitación estándar",
          en: "Standard room interior detail",
        },
      },
    ],
  },
  {
    slug: "junior-suite",
    images: [
      {
        src: "/images/Suit photos/DSC03703.jpg",
        alt: {
          es: "Cama king en junior suite con arte tropical",
          en: "King bed in the junior suite with tropical art",
        },
      },
      {
        src: "/images/Suit photos/DSC03704.jpg",
        alt: {
          es: "Junior suite con cubrecama coral y pintura de tucán",
          en: "Junior suite with a coral throw and toucan painting",
        },
      },
      {
        src: "/images/room-junior-suite-wide-D5tbucTk.jpg",
        alt: {
          es: "Junior suite amplia con vista a la piscina",
          en: "Wide junior suite with pool view",
        },
      },
      {
        src: "/images/Suit photos/DSC03689.jpg",
        alt: {
          es: "Detalle cálido de la cama king de la junior suite",
          en: "Warm detail of the junior suite's king bed",
        },
      },
      {
        src: "/images/room-king-bed-B58lVEdC.jpg",
        alt: {
          es: "Cama king en junior suite",
          en: "King bed in junior suite",
        },
      },
      {
        src: "/images/pool-aerial-day-BveHvOiS.jpg",
        alt: {
          es: "Vista a la piscina desde la junior suite",
          en: "Pool view from junior suite",
        },
      },
    ],
  },
  {
    slug: "villas",
    images: [
      {
        src: "/images/villa-living-room-CHkIhyVw.jpg",
        alt: {
          es: "Sala de estar de la villa",
          en: "Villa living room",
        },
      },
      {
        src: "/images/Suit photos/RLR_48512.jpg",
        alt: {
          es: "Villa con cama, sala con sofá de cuero y mini-bar",
          en: "Villa with a bed, leather-sofa lounge and mini-fridge",
        },
      },
      {
        src: "/images/Suit photos/IMG_4757.jpg",
        alt: {
          es: "Comedor de la villa con sillas de mimbre y sala",
          en: "Villa dining nook with wicker chairs and lounge",
        },
      },
      {
        src: "/images/Suit photos/IMG_4779.jpg",
        alt: {
          es: "Cocina completa de la villa con gabinetes de madera",
          en: "Full villa kitchen with solid-wood cabinetry",
        },
      },
      {
        src: "/images/Suit photos/IMG_4763.jpg",
        alt: {
          es: "Interior abierto de la villa con cama, comedor y TV",
          en: "Open-plan villa interior with bed, dining area and TV",
        },
      },
      {
        src: "/images/villa-kitchen-detail-CYiwCD4T.jpg",
        alt: {
          es: "Cocina de la villa",
          en: "Villa kitchen",
        },
      },
      {
        src: "/images/villa-bedroom-view-_Eb74lE7.jpg",
        alt: {
          es: "Dormitorio de la villa con vista",
          en: "Villa bedroom with view",
        },
      },
    ],
  },
];

export const defaultRoomSlug = "junior-suite";