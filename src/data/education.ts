import type { ImageMetadata } from "astro";
import senatiLogo from "../assets/logos/senati.png";
import oracleAcademyLogo from "../assets/logos/oracle-academy.png";
import platziLogo from "../assets/logos/platzi.png";
import ciscoLogo from "../assets/logos/cisco.png";
import senatiIaCertificate from "../assets/certificates/education/senati-ingenieria-software-ia-2022-2025.jpg";
import oracleDatabaseDesignCertificate from "../assets/certificates/education/oracle-academy-database-design-2022-2023.jpg";
import oracleDatabaseProgrammingCertificate from "../assets/certificates/education/oracle-academy-database-programming-2022-2023.jpg";
import platziCertificate from "../assets/certificates/education/platzi-introduccion-ingenieria-software-2021.jpg";
import ciscoCertificate from "../assets/certificates/education/cisco-python-get-connected-2022.jpg";
import senatiIdiomasCertificate1 from "../assets/certificates/education/senati-idiomas-ingles-basico-2026-1.jpg";
import senatiIdiomasCertificate2 from "../assets/certificates/education/senati-idiomas-ingles-basico-2026-2.jpg";
import senatiIdiomasCertificate3 from "../assets/certificates/education/senati-idiomas-ingles-basico-2026-3.jpg";
import senatiIdiomasCertificate4 from "../assets/certificates/education/senati-idiomas-ingles-basico-2026-4.jpg";

export interface EducationItem {
  title: string;
  titleEn: string;
  institution: string;
  institutionEn: string;
  period: string;
  logo: ImageMetadata;
  logoAlt: string;
  logoAltEn: string;
  certificateImages?: ImageMetadata[];
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
    certificateImages: [senatiIaCertificate],
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
    certificateImages: [
      oracleDatabaseDesignCertificate,
      oracleDatabaseProgrammingCertificate,
    ],
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
    certificateImages: [
      senatiIdiomasCertificate1,
      senatiIdiomasCertificate2,
      senatiIdiomasCertificate3,
      senatiIdiomasCertificate4,
    ],
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
    certificateImages: [platziCertificate],
  },
  {
    title: "Get Connected",
    titleEn: "Get Connected",
    institution: "Cisco Networking Academy",
    institutionEn: "Cisco Networking Academy",
    period: "2022",
    logo: ciscoLogo,
    logoAlt: "Logo de Cisco Networking Academy",
    logoAltEn: "Cisco Networking Academy logo",
    certificateImages: [ciscoCertificate],
  },
];
