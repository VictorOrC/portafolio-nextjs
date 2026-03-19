export const projects = [
  {
    slug: "aplicacion-movil-ecommerce",
    title: "Aplicacion movil de e-commerce",
    year: "2024",
    status: "completado",
    summary:
      "Aplicacion movil completa con autenticacion, catalogo de productos, carrito y creacion de ordenes.",
    description:
      "Desarrolle la estructura de navegacion con React Navigation, integre un backend en Strapi mediante APIs REST y construi componentes modulares para productos, carrito y flujo de compra con validacion y manejo de errores.",
    stack: ["React Native", "Expo", "Strapi", "SQLite"],
  },
  {
    slug: "blogdecafe",
    title: "BlogDeCafe",
    year: "2023",
    status: "completado",
    summary:
      "Sitio web responsivo tipo blog enfocado en rendimiento, accesibilidad y SEO semantico.",
    description:
      "Construí layouts con Flexbox y CSS Grid bajo un enfoque mobile-first, implemente lazy loading, HTML semantico y metadatos para mejorar tiempos de carga y visibilidad en buscadores.",
    stack: ["HTML5", "CSS3", "SEO", "Responsive Design"],
  },
] as const;
