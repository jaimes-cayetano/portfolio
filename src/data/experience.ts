export interface Tag {
  label: string;
  /** Brand color used for the tag border/text. */
  color: string;
}

export interface Achievement {
  title: string;
  tags: Tag[];
  description: string;
}

export interface ExperienceRole {
  role: string;
  company: string;
  period: string;
  achievements: Achievement[];
}

export const experience: ExperienceRole[] = [
  {
    role: "Full Stack Developer",
    company: "Fragote Software Factory",
    period: "2024 - Actualmente",
    achievements: [
      {
        title: "Integración de soluciones de Inteligencia Artificial",
        tags: [
          { label: "OpenAI", color: "#000000" },
          { label: "Gemini", color: "#8e75ff" },
          { label: "DeepSeek", color: "#4d6bfe" },
          { label: "Google Vision API", color: "#4285f4" },
          { label: "OCR", color: "#475569" },
        ],
        description:
          "Implementé soluciones de IA para la generación dinámica de contenido y análisis de información mediante búsqueda web, integrando modelos como Gemini, DeepSeek y OpenAI. Desarrollé un dashboard para monitorear el consumo de tokens, contenido generado y solicitudes realizadas, además de realizar pruebas y optimización de prompts para equilibrar la calidad de las respuestas con el consumo de recursos.",
      },
      {
        title: "Arquitectura y escalabilidad de sistemas",
        tags: [
          { label: "AWS", color: "#f90" },
          { label: "Redis", color: "#dc382d" },
          { label: "Cloudflare", color: "#f38020" },
          { label: "Claude Code", color: "#d97757" },
          { label: "Microservicios", color: "#8b5cf6" },
        ],
        description:
          "Optimicé sistemas sometidos a millones de solicitudes simultáneas mediante la mejora de consultas, implementé mecanismos de caché con Redis, integré Cloudflare CDN y escalé servicios en AWS, mejorando la capacidad de respuesta y la estabilidad de la plataforma ante cargas elevadas.",
      },
      {
        title: "Desarrollo, mantenimiento y soporte de sistemas",
        tags: [
          { label: "Vue", color: "#42b883" },
          { label: "Filament", color: "#f59e0b" },
          { label: "Laravel", color: "#ff2d20" },
          { label: "Docker", color: "#2496ed" },
          { label: "Symfony", color: "#000000" },
          { label: "MySQL", color: "#00758f" },
          { label: "Claude Code", color: "#d97757" },
          { label: "React", color: "#61dafb" },
          { label: "Prisma", color: "#2d3748" },
          { label: "Chamilo LMS", color: "#2e7bb4" },
        ],
        description:
          "Gestioné requerimientos e incidencias, desde el análisis técnico hasta la implementación de soluciones y nuevas funcionalidades. Realicé el mantenimiento y evolución de sistemas de distintas áreas, adaptando tecnologías y soluciones según las necesidades del negocio.",
      },
      {
        title: "Integración de plataformas de analítica, tracking y publicidad",
        tags: [
          { label: "TikTok Pixel", color: "#000000" },
          { label: "Meta Pixel", color: "#0866ff" },
          { label: "Google Tag Manager", color: "#246fdb" },
          { label: "Google Ad Manager", color: "#4285f4" },
        ],
        description:
          "Implementé e integré TikTok Pixel, Meta Pixel y Google Tag Manager, configurando y sincronizando eventos para habilitar el seguimiento de métricas y comportamiento dentro de los sistemas, de acuerdo con las plataformas de medición seleccionadas por cada cliente.",
      },
      {
        title: "Integración de sistemas con hardware y facturación",
        tags: [
          { label: "Pinpads", color: "#2563eb" },
          { label: "Ticketeras", color: "#7c3aed" },
          { label: "Boletas", color: "#16a34a" },
          { label: "Sistemas de facturación", color: "#f59e0b" },
        ],
        description:
          "Desarrollé soluciones de venta y facturación para tótems de autoservicio y sistemas de venta de entradas, integrando dispositivos de pago (pinpads) y los procesos de emisión de comprobantes.",
      },
      {
        title: "Onboarding y acompañamiento técnico",
        tags: [
          { label: "Capacitación", color: "#2563eb" },
          { label: "Documentación", color: "#64748b" },
          { label: "Acompañamiento", color: "#16a34a" },
        ],
        description:
          "Participé en la selección e incorporación de nuevos practicantes, liderando su proceso de integración mediante capacitaciones, documentación técnica y acompañamiento continuo, facilitando la transferencia de conocimientos y su adaptación al equipo de desarrollo.",
      },
    ],
  },
  {
    role: "Practicante de Desarrollo de Software",
    company: "Fragote Software Factory",
    period: "2023 - 2024",
    achievements: [
      {
        title: "Mantenimiento y soporte de sistemas",
        tags: [
          { label: "Chamilo LMS", color: "#2e7bb4" },
          { label: "Symfony", color: "#000000" },
          { label: "MySQL", color: "#00758f" },
          { label: "Filament", color: "#f59e0b" },
          { label: "Laravel", color: "#ff2d20" },
        ],
        description:
          "Participé en el mantenimiento y soporte de sistemas, trabajando directamente con el Project Manager y el equipo de desarrollo para analizar requerimientos, resolver incidencias e implementar nuevas soluciones e integraciones.",
      },
      {
        title: "Integración y desarrollo de módulos",
        tags: [
          { label: "Knex", color: "#1a73e8" },
          { label: "Firebird", color: "#e02b2b" },
          { label: "Vue", color: "#42b883" },
          { label: "Node", color: "#393" },
          { label: "Laravel", color: "#ff2d20" },
          { label: "Filament", color: "#f59e0b" },
        ],
        description:
          "Integré nuevos módulos en sistemas en producción, aprovechando las funcionalidades y servicios existentes y siguiendo los patrones arquitectónicos y buenas prácticas definidos por cada proyecto para garantizar una integración consistente y mantenible.",
      },
    ],
  },
];
