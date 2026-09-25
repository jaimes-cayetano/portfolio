export interface Tag {
  label: string;
  labelEn: string;
  /** Brand color used for the tag border/text. */
  color: string;
  /** Overrides `color` only in dark mode — reserved for the couple of
   * real brand colors too dark to read against a dark background;
   * everything else intentionally renders identically in both themes. */
  colorDark?: string;
  /** Simple Icons slug (see node_modules/simple-icons/icons). Omitted when
   * no accurate brand icon exists (generic terms, or brands excluded from
   * Simple Icons for trademark reasons, e.g. OpenAI, AWS). */
  icon?: string;
}

export interface Achievement {
  title: string;
  titleEn: string;
  tags: Tag[];
  description: string;
  descriptionEn: string;
}

export interface ExperienceRole {
  role: string;
  roleEn: string;
  company: string;
  period: string;
  periodEn: string;
  achievements: Achievement[];
}

export const experience: ExperienceRole[] = [
  {
    role: "Full Stack Developer",
    roleEn: "Full Stack Developer",
    company: "Fragote Software Factory",
    period: "2024 - Actualmente",
    periodEn: "2024 - Present",
    achievements: [
      {
        title: "Integración de soluciones de Inteligencia Artificial",
        titleEn: "AI Solutions Integration",
        tags: [
          {
            label: "OpenAI",
            labelEn: "OpenAI",
            color: "var(--color-ink)",
            icon: "iconify:openai-icon",
          },
          { label: "Gemini", labelEn: "Gemini", color: "#8e75ff", icon: "googlegemini" },
          { label: "DeepSeek", labelEn: "DeepSeek", color: "#4d6bfe", icon: "deepseek" },
          {
            label: "Google Vision API",
            labelEn: "Google Vision API",
            color: "#4285f4",
            icon: "googlecloud",
          },
          {
            label: "OCR",
            labelEn: "OCR",
            color: "#475569",
            colorDark: "#94a3b8",
          },
        ],
        description:
          "Implementé soluciones de IA para la generación dinámica de contenido y análisis de información mediante búsqueda web, integrando modelos como Gemini, DeepSeek y OpenAI. Desarrollé un dashboard para monitorear el consumo de tokens, contenido generado y solicitudes realizadas, además de realizar pruebas y optimización de prompts para equilibrar la calidad de las respuestas con el consumo de recursos.",
        descriptionEn:
          "Built AI-powered features for dynamic content generation and web-search-driven analysis, integrating models like Gemini, DeepSeek, and OpenAI. Developed a dashboard to track token usage, generated content, and request volume, and ran prompt testing and optimization to balance response quality against resource consumption.",
      },
      {
        title: "Arquitectura y escalabilidad de sistemas",
        titleEn: "System Architecture & Scalability",
        tags: [
          { label: "AWS", labelEn: "AWS", color: "#f90", icon: "iconify:aws" },
          { label: "Redis", labelEn: "Redis", color: "#dc382d", icon: "redis" },
          { label: "Cloudflare", labelEn: "Cloudflare", color: "#f38020", icon: "cloudflare" },
          {
            label: "Claude Code",
            labelEn: "Claude Code",
            color: "#d97757",
            icon: "claudecode",
          },
          { label: "Microservicios", labelEn: "Microservices", color: "#8b5cf6" },
        ],
        description:
          "Optimicé sistemas sometidos a millones de solicitudes simultáneas mediante la mejora de consultas, implementé mecanismos de caché con Redis, integré Cloudflare CDN y escalé servicios en AWS, mejorando la capacidad de respuesta y la estabilidad de la plataforma ante cargas elevadas.",
        descriptionEn:
          "Optimized systems handling millions of concurrent requests by tuning queries, implementing Redis caching, integrating Cloudflare CDN, and scaling services on AWS — improving response times and platform stability under heavy load.",
      },
      {
        title: "Desarrollo, mantenimiento y soporte de sistemas",
        titleEn: "System Development, Maintenance & Support",
        tags: [
          { label: "Vue", labelEn: "Vue", color: "#42b883", icon: "vuedotjs" },
          { label: "Filament", labelEn: "Filament", color: "#f59e0b", icon: "filament" },
          { label: "Laravel", labelEn: "Laravel", color: "#ff2d20", icon: "laravel" },
          { label: "Docker", labelEn: "Docker", color: "#2496ed", icon: "docker" },
          { label: "Symfony", labelEn: "Symfony", color: "var(--color-ink)", icon: "symfony" },
          { label: "MySQL", labelEn: "MySQL", color: "#00758f", icon: "mysql" },
          {
            label: "Claude Code",
            labelEn: "Claude Code",
            color: "#d97757",
            icon: "claudecode",
          },
          { label: "React", labelEn: "React", color: "#61dafb", icon: "react" },
          {
            label: "Prisma",
            labelEn: "Prisma",
            color: "#2d3748",
            colorDark: "#94a3b8",
            icon: "prisma",
          },
          { label: "Chamilo LMS", labelEn: "Chamilo LMS", color: "#2e7bb4" },
        ],
        description:
          "Gestioné requerimientos e incidencias, desde el análisis técnico hasta la implementación de soluciones y nuevas funcionalidades. Realicé el mantenimiento y evolución de sistemas de distintas áreas, adaptando tecnologías y soluciones según las necesidades del negocio.",
        descriptionEn:
          "Managed requirements and incidents end-to-end, from technical analysis through implementing solutions and new features. Maintained and evolved systems across different business areas, adapting technologies and solutions to each team's needs.",
      },
      {
        title: "Integración de plataformas de analítica, tracking y publicidad",
        titleEn: "Analytics, Tracking & Advertising Integrations",
        tags: [
          {
            label: "TikTok Pixel",
            labelEn: "TikTok Pixel",
            color: "var(--color-ink)",
            icon: "tiktok",
          },
          { label: "Meta Pixel", labelEn: "Meta Pixel", color: "#0866ff", icon: "meta" },
          {
            label: "Google Tag Manager",
            labelEn: "Google Tag Manager",
            color: "#246fdb",
            icon: "googletagmanager",
          },
          {
            label: "Google Ad Manager",
            labelEn: "Google Ad Manager",
            color: "#4285f4",
            icon: "googleads",
          },
        ],
        description:
          "Implementé e integré TikTok Pixel, Meta Pixel y Google Tag Manager, configurando y sincronizando eventos para habilitar el seguimiento de métricas y comportamiento dentro de los sistemas, de acuerdo con las plataformas de medición seleccionadas por cada cliente.",
        descriptionEn:
          "Implemented and integrated TikTok Pixel, Meta Pixel, and Google Tag Manager, configuring and syncing events to enable metric and behavior tracking across systems, tailored to each client's chosen measurement platforms.",
      },
      {
        title: "Integración de sistemas con hardware y facturación",
        titleEn: "Hardware & Billing Systems Integration",
        tags: [
          { label: "Pinpads", labelEn: "Pinpads", color: "#2563eb" },
          { label: "Ticketeras", labelEn: "Ticketing Systems", color: "#7c3aed" },
          { label: "Boletas", labelEn: "Receipts", color: "#16a34a" },
          { label: "Sistemas de facturación", labelEn: "Billing Systems", color: "#f59e0b" },
        ],
        description:
          "Desarrollé soluciones de venta y facturación para tótems de autoservicio y sistemas de venta de entradas, integrando dispositivos de pago (pinpads) y los procesos de emisión de comprobantes.",
        descriptionEn:
          "Built sales and billing solutions for self-service kiosks and ticketing systems, integrating payment devices (pinpads) and receipt-issuing workflows.",
      },
      {
        title: "Onboarding y acompañamiento técnico",
        titleEn: "Onboarding & Technical Mentoring",
        tags: [
          { label: "Capacitación", labelEn: "Training", color: "#2563eb" },
          { label: "Documentación", labelEn: "Documentation", color: "#64748b" },
          { label: "Acompañamiento", labelEn: "Mentoring", color: "#16a34a" },
        ],
        description:
          "Participé en la selección e incorporación de nuevos practicantes, liderando su proceso de integración mediante capacitaciones, documentación técnica y acompañamiento continuo, facilitando la transferencia de conocimientos y su adaptación al equipo de desarrollo.",
        descriptionEn:
          "Took part in selecting and onboarding new interns, leading their integration through training sessions, technical documentation, and ongoing mentoring — helping transfer knowledge and get them up to speed with the development team.",
      },
    ],
  },
  {
    role: "Practicante de Desarrollo de Software",
    roleEn: "Software Development Intern",
    company: "Fragote Software Factory",
    period: "2023 - 2024",
    periodEn: "2023 - 2024",
    achievements: [
      {
        title: "Mantenimiento y soporte de sistemas",
        titleEn: "System Maintenance & Support",
        tags: [
          { label: "Chamilo LMS", labelEn: "Chamilo LMS", color: "#2e7bb4" },
          { label: "Symfony", labelEn: "Symfony", color: "var(--color-ink)", icon: "symfony" },
          { label: "MySQL", labelEn: "MySQL", color: "#00758f", icon: "mysql" },
          { label: "Filament", labelEn: "Filament", color: "#f59e0b", icon: "filament" },
          { label: "Laravel", labelEn: "Laravel", color: "#ff2d20", icon: "laravel" },
        ],
        description:
          "Participé en el mantenimiento y soporte de sistemas, trabajando directamente con el Project Manager y el equipo de desarrollo para analizar requerimientos, resolver incidencias e implementar nuevas soluciones e integraciones.",
        descriptionEn:
          "Took part in system maintenance and support, working directly with the Project Manager and development team to analyze requirements, resolve issues, and implement new solutions and integrations.",
      },
      {
        title: "Integración y desarrollo de módulos",
        titleEn: "Module Integration & Development",
        tags: [
          { label: "Knex", labelEn: "Knex", color: "#1a73e8", icon: "knexdotjs" },
          {
            label: "Firebird",
            labelEn: "Firebird",
            color: "#e02b2b",
            icon: "devicon:firebird",
          },
          { label: "Vue", labelEn: "Vue", color: "#42b883", icon: "vuedotjs" },
          { label: "Node", labelEn: "Node", color: "#393", icon: "nodedotjs" },
          { label: "Laravel", labelEn: "Laravel", color: "#ff2d20", icon: "laravel" },
          { label: "Filament", labelEn: "Filament", color: "#f59e0b", icon: "filament" },
        ],
        description:
          "Integré nuevos módulos en sistemas en producción, aprovechando las funcionalidades y servicios existentes y siguiendo los patrones arquitectónicos y buenas prácticas definidos por cada proyecto para garantizar una integración consistente y mantenible.",
        descriptionEn:
          "Integrated new modules into production systems, leveraging existing functionality and services while following each project's architectural patterns and best practices to keep integrations consistent and maintainable.",
      },
    ],
  },
];
