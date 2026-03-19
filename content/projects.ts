export const projects = [
  {
    slug: "aplicacion-movil-ecommerce",
    title: "Aplicacion movil de e-commerce",
    year: "2024",
    status: "completado",
    role: "Desarrollador de aplicacion movil",
    summary:
      "Aplicacion movil de e-commerce con autenticacion, catalogo, carrito y flujo de ordenes, construida con integracion de APIs y una estructura modular pensada para escalar.",
    description:
      "Desarrolle la navegacion principal con React Navigation y conecte la aplicacion con un backend en Strapi mediante APIs REST para productos, direcciones y ordenes. Implemente manejo de sesiones, carrito persistente, validacion de formularios y componentes modulares para mantener un flujo de compra claro, mantenible y facil de extender.",
    challenges: [
      "Estructurar una navegacion clara entre autenticacion, catalogo y flujo de compra.",
      "Integrar datos de productos, direcciones y ordenes desde APIs REST sin romper la experiencia de uso.",
      "Mantener estado de sesion y carrito de forma persistente dentro de la aplicacion.",
    ],
    achievements: [
      "Defini una base modular para pantallas, componentes y flujo de compra.",
      "Conecte la app con Strapi para centralizar productos, direcciones y ordenes.",
      "Implemente validacion y manejo de errores para que el proceso fuera mas confiable y mantenible.",
    ],
    repositoryUrl: "",
    demoUrl: "",
    stack: ["React Native", "Expo", "Strapi", "SQLite"],
  },
  {
    slug: "blogdecafe",
    title: "BlogDeCafe",
    year: "2023",
    status: "completado",
    role: "Desarrollador frontend",
    summary:
      "Sitio web responsivo tipo blog desarrollado con enfoque en maquetacion semantica, rendimiento de carga y buenas practicas de SEO tecnico.",
    description:
      "Construi la interfaz con HTML5 y CSS3 usando Flexbox y CSS Grid bajo una estrategia mobile-first. Optimice la estructura semantica, el lazy loading y los metadatos para mejorar accesibilidad, organizacion del contenido y visibilidad en buscadores, manteniendo una base clara y reutilizable para futuras secciones.",
    challenges: [
      "Construir layouts responsivos sin depender de frameworks de UI.",
      "Mejorar la carga inicial y la estructura semantica del sitio.",
      "Organizar el contenido del blog con una base reutilizable para nuevas secciones.",
    ],
    achievements: [
      "Implemente una maquetacion mobile-first con Flexbox y CSS Grid.",
      "Mejore accesibilidad y SEO tecnico usando HTML semantico y metadatos.",
      "Deje una estructura clara y escalable para articulos, categorias y plantillas de contenido.",
    ],
    repositoryUrl: "",
    demoUrl: "",
    stack: ["HTML5", "CSS3", "SEO", "Responsive Design"],
  },
] as const;
