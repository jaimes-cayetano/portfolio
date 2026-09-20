import type { ImageMetadata } from "astro";
import fragoteHackathon2026 from "../assets/certificates/awards/fragote-hackathon-2026.jpg";
import fragoteReconocimientoCompromiso2025 from "../assets/certificates/awards/fragote-reconocimiento-compromiso-2025.jpg";
import senatiCasoExito2025 from "../assets/certificates/awards/senati-caso-exito-2025.jpg";

export interface Award {
  title: string;
  titleEn: string;
  issuer: string;
  issuerEn: string;
  date: string;
  description: string;
  descriptionEn: string;
  mediaFirst?: boolean;
  images?: ImageMetadata[];
  expandable?: boolean;
}

export const awards: Award[] = [
  {
    title: "Certificado de premiación en la Hackathon FraGoTe 2026",
    titleEn: "Hackathon FraGoTe 2026 Award Certificate",
    issuer: "FraGoTe Software Factory",
    issuerEn: "FraGoTe Software Factory",
    date: "30/04/2026",
    description:
      "Obtuve el segundo puesto en la hackathon interna de Fragote Software Factory con el desarrollo de un módulo de transporte académico orientado a optimizar la gestión logística institucional.",
    descriptionEn:
      "Placed second in Fragote Software Factory's internal hackathon, building an academic transportation module aimed at optimizing the institution's logistics management.",
    images: [fragoteHackathon2026],
  },
  {
    title: "Certificado de reconocimiento al compromiso empresarial",
    titleEn: "Certificate of Recognition for Company Commitment",
    issuer: "FraGoTe Software Factory",
    issuerEn: "FraGoTe Software Factory",
    date: "19/12/2025",
    description:
      "Fui reconocido por demostrar el Espíritu FraGoTe, destacando por mi actitud, compromiso, proactividad y sentido de pertenencia hacia los valores y la cultura de la organización.",
    descriptionEn:
      "Recognized for embodying the FraGoTe Spirit, standing out for my attitude, commitment, initiative, and sense of belonging to the organization's values and culture.",
    mediaFirst: true,
    images: [fragoteReconocimientoCompromiso2025],
  },
  {
    title: "Caso de éxito destacado por SENATI",
    titleEn: "Success Story Featured by SENATI",
    issuer: "Senati - Instituto de Formación Profesional",
    issuerEn: "Senati - Vocational Training Institute",
    date: "05/09/2025",
    description:
      "Fui reconocido por SENATI como caso de éxito, participando en una entrevista radial para compartir mi experiencia y trayectoria profesional.",
    descriptionEn:
      "Featured by SENATI as a success story, taking part in a radio interview to share my professional experience and career journey.",
    images: [senatiCasoExito2025],
    expandable: false,
  },
];
