export const projects = [
  {
    slug: "aplicacion-movil-ecommerce",
    title: "Aplicacion movil de e-commerce",
    year: "2024",
    status: "completado",
    summary:
      "Aplicacion movil de e-commerce con autenticacion, catalogo, carrito y flujo de ordenes, construida con integracion de APIs y una estructura modular pensada para escalar.",
    description:
      "Desarrolle la navegacion principal con React Navigation y conecte la aplicacion con un backend en Strapi mediante APIs REST para productos, direcciones y ordenes. Implemente manejo de sesiones, carrito persistente, validacion de formularios y componentes modulares para mantener un flujo de compra claro, mantenible y facil de extender.",
    stack: ["React Native", "Expo", "Strapi", "SQLite"],
  },
  {
    slug: "blogdecafe",
    title: "BlogDeCafe",
    year: "2023",
    status: "completado",
    summary:
      "Sitio web responsivo tipo blog desarrollado con enfoque en maquetacion semantica, rendimiento de carga y buenas practicas de SEO tecnico.",
    description:
      "Construi la interfaz con HTML5 y CSS3 usando Flexbox y CSS Grid bajo una estrategia mobile-first. Optimice la estructura semantica, el lazy loading y los metadatos para mejorar accesibilidad, organizacion del contenido y visibilidad en buscadores, manteniendo una base clara y reutilizable para futuras secciones.",
    stack: ["HTML5", "CSS3", "SEO", "Responsive Design"],
  },
] as const;
