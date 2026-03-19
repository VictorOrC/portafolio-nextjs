# SEO y rendimiento

## Objetivo

Garantizar que el portafolio sea facil de encontrar, rapido de cargar y correcto desde el punto de vista tecnico.

## SEO tecnico base

Se debe definir:

- titulo del sitio
- descripcion general
- metadata por pagina
- Open Graph
- favicon
- idioma del documento

Para rutas dinamicas se recomienda usar `generateMetadata`.

## Estructura semantica

La app debe utilizar:

- encabezados en orden correcto
- landmarks semanticos
- enlaces descriptivos
- textos claros para acciones y navegacion

## Imagenes

Las imagenes deben optimizarse con `next/image` siempre que sea viable. Las miniaturas de proyectos deben estar preparadas para verse bien tanto en la interfaz como en previews sociales futuras.

## Tipografias

Las fuentes deben cargarse con `next/font` para reducir impacto en rendimiento y mejorar estabilidad visual.

## Rendimiento inicial

Se prioriza:

- paginas estaticas por defecto
- contenido local al inicio
- peso moderado de imagenes
- componentes simples en V1

## Verificacion futura

Durante la implementacion debera revisarse:

- Lighthouse
- metadatos por pagina
- responsive
- accesibilidad basica
