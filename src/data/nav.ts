export interface NavLink {
  label: string;
  labelEn: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Sobre mí", labelEn: "About", href: "#sobre-mi" },
  { label: "Experiencia", labelEn: "Experience", href: "#experiencia" },
  { label: "Reconocimientos", labelEn: "Awards", href: "#reconocimientos" },
  { label: "Educación", labelEn: "Education", href: "#educacion" },
  { label: "Contacto", labelEn: "Contact", href: "#contacto" },
];
