export const projects = [
  {
    slug: "nutriapp",
    title: "NutriApp",
    year: "2026",
    status: "en desarrollo",
    role: "Desarrollador full stack",
    summary:
      "Sistema web para una nutriologa en desarrollo, pensado para ordenar la atencion de pacientes con una base segura y una arquitectura lista para crecer hacia citas, consulta clinica y planes nutricionales.",
    description:
      "Estoy construyendo una plataforma web con Blazor WebAssembly y ASP.NET Core Web API para ayudar a una nutriologa a centralizar procesos clave de su operacion. La base actual ya resuelve autenticacion con JWT, control de acceso por roles y manejo consistente de errores, mientras deja preparada una arquitectura por capas para incorporar gestion de pacientes, citas, consulta clinica y planes nutricionales sin rehacer la solucion.",
    challenges: [
      "Traducir una necesidad operativa real de consulta nutricional en una base digital clara, mantenible y lista para evolucionar por etapas.",
      "Implementar autenticacion segura con Identity, JWT y roles diferenciados para nutriologa, recepcion y pacientes sin complicar el uso del sistema.",
      "Preparar la solucion para crecer con pacientes, citas y reglas de negocio clinicas manteniendo orden tecnico y escalabilidad.",
    ],
    achievements: [
      "Complete una primera iteracion funcional con login, JWT, roles, Swagger con Bearer y una base de seguridad mas solida para el producto.",
      "Deje una arquitectura modular con DTOs, validaciones y manejo global de errores que facilita agregar nuevas funciones sin perder mantenibilidad.",
      "Defini un roadmap por iteraciones para avanzar de forma controlada hacia pacientes, citas, consulta clinica, planes nutricionales y documentos PDF.",
    ],
    repositoryUrl: "",
    demoUrl: "",
    stack: ["Blazor WASM", "ASP.NET Core Web API", "SQL Server", "EF Core", "Identity", "JWT"],
  },
  {
    slug: "aplicacion-movil-ecommerce",
    title: "Aplicacion movil de e-commerce",
    year: "2024",
    status: "completado",
    role: "Desarrollador de aplicacion movil",
    summary:
      "Aplicacion movil de e-commerce enfocada en facilitar la compra desde el telefono, con autenticacion, catalogo, carrito y una base modular conectada a APIs para seguir creciendo.",
    description:
      "Desarrolle la experiencia principal de compra con React Navigation y conecte la aplicacion a un backend en Strapi mediante APIs REST para productos, direcciones y ordenes. Tambien implemente manejo de sesion, carrito persistente, validacion de formularios y componentes modulares para mantener un flujo claro para el usuario y una base tecnica facil de extender.",
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
      "Sitio web tipo blog desarrollado para ofrecer una lectura clara en distintos dispositivos, con maquetacion semantica, buen rendimiento y bases solidas de SEO tecnico.",
    description:
      "Construi la interfaz con HTML5 y CSS3 usando Flexbox y CSS Grid bajo una estrategia mobile-first. Tambien optimice la estructura semantica, el lazy loading y los metadatos para mejorar accesibilidad, organizacion del contenido y visibilidad en buscadores, dejando una base clara y reutilizable para futuras secciones del sitio.",
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
