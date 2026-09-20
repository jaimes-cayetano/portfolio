import type { ImageMetadata } from "astro";
import senatiLogo from "../assets/logos/senati.png";
import oracleAcademyLogo from "../assets/logos/oracle-academy.png";
import platziLogo from "../assets/logos/platzi.png";
import ciscoLogo from "../assets/logos/cisco.png";

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  logo: ImageMetadata;
  logoAlt: string;
  certificateImage?: ImageMetadata;
}

export const education: EducationItem[] = [
  {
    title: "Ingeniería de Software con IA",
    institution: "SENATI - Instituto de Formación Profesional",
    period: "2022 - 2025",
    logo: senatiLogo,
    logoAlt: "Logo de SENATI",
  },
  {
    title: "Diseño y programación de Base de Datos",
    institution: "Oracle Academy - Plataforma de Educación Online",
    period: "2022 - 2023",
    logo: oracleAcademyLogo,
    logoAlt: "Logo de Oracle Academy",
  },
  {
    title: "Curso Intensivo de Inglés Básico",
    institution: "Senati Idiomas",
    period: "2026",
    logo: senatiLogo,
    logoAlt: "Logo de Senati Idiomas",
  },
  {
    title: "Introducción a la Ingeniería de Software",
    institution: "Platzi - Plataforma de Educación Online",
    period: "2021",
    logo: platziLogo,
    logoAlt: "Logo de Platzi",
  },
  {
    title: "Curso de Python | Get Connected",
    institution: "Cisco Networking Academy",
    period: "2022",
    logo: ciscoLogo,
    logoAlt: "Logo de Cisco Networking Academy",
  },
];
