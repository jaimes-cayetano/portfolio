import type { ImageMetadata } from "astro";

export interface Award {
  title: string;
  issuer: string;
  date: string;
  description: string;
  mediaFirst?: boolean;
  image?: ImageMetadata;
}

export const awards: Award[] = [
  {
    title: "Certificado de premiación en la Hackathon FraGoTe 2026",
    issuer: "FraGoTe Software Factory",
    date: "30/04/2026",
    description:
      "Obtuve el segundo puesto en la hackathon interna de Fragote Software Factory con el desarrollo de un módulo de transporte académico orientado a optimizar la gestión logística institucional.",
  },
  {
    title: "Certificado de reconocimiento al compromiso empresarial",
    issuer: "FraGoTe Software Factory",
    date: "19/12/2025",
    description:
      "Fui reconocido por demostrar el Espíritu FraGoTe, destacando por mi actitud, compromiso, proactividad y sentido de pertenencia hacia los valores y la cultura de la organización.",
    mediaFirst: true,
  },
  {
    title: "Caso de éxito destacado por SENATI",
    issuer: "Senati - Instituto de Formación Profesional",
    date: "05/09/2025",
    description:
      "Fui reconocido por SENATI como caso de éxito, participando en una entrevista radial para compartir mi experiencia y trayectoria profesional.",
  },
];
