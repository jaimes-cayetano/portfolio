import type { ImageMetadata } from "astro";
import senatiLogo from "../assets/logos/senati.png";
import oracleAcademyLogo from "../assets/logos/oracle-academy.png";
import platziLogo from "../assets/logos/platzi.png";
import ciscoLogo from "../assets/logos/cisco.png";

export interface EducationItem {
  title: string;
  titleEn: string;
  institution: string;
  institutionEn: string;
  period: string;
  logo: ImageMetadata;
  logoAlt: string;
  logoAltEn: string;
  certificateImage?: ImageMetadata;
}

export const education: EducationItem[] = [
  {
    title: "Ingeniería de Software con IA",
    titleEn: "Software Engineering with AI",
    institution: "SENATI - Instituto de Formación Profesional",
    institutionEn: "SENATI - Vocational Training Institute",
    period: "2022 - 2025",
    logo: senatiLogo,
    logoAlt: "Logo de SENATI",
    logoAltEn: "SENATI logo",
  },
  {
    title: "Diseño y programación de Base de Datos",
    titleEn: "Database Design & Programming",
    institution: "Oracle Academy - Plataforma de Educación Online",
    institutionEn: "Oracle Academy - Online Learning Platform",
    period: "2022 - 2023",
    logo: oracleAcademyLogo,
    logoAlt: "Logo de Oracle Academy",
    logoAltEn: "Oracle Academy logo",
  },
  {
    title: "Curso Intensivo de Inglés Básico",
    titleEn: "Intensive Basic English Course",
    institution: "Senati Idiomas",
    institutionEn: "Senati Idiomas",
    period: "2026",
    logo: senatiLogo,
    logoAlt: "Logo de Senati Idiomas",
    logoAltEn: "Senati Idiomas logo",
  },
  {
    title: "Introducción a la Ingeniería de Software",
    titleEn: "Introduction to Software Engineering",
    institution: "Platzi - Plataforma de Educación Online",
    institutionEn: "Platzi - Online Learning Platform",
    period: "2021",
    logo: platziLogo,
    logoAlt: "Logo de Platzi",
    logoAltEn: "Platzi logo",
  },
  {
    title: "Curso de Python | Get Connected",
    titleEn: "Python Course | Get Connected",
    institution: "Cisco Networking Academy",
    institutionEn: "Cisco Networking Academy",
    period: "2022",
    logo: ciscoLogo,
    logoAlt: "Logo de Cisco Networking Academy",
    logoAltEn: "Cisco Networking Academy logo",
  },
];
