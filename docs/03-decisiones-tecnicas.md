# Decisiones tecnicas

## Framework principal

Se eligio `Next.js` porque permite comenzar con una aplicacion simple y estatica, pero ofrece una base lista para crecer a rutas dinamicas, contenido tecnico, SEO robusto y futuras integraciones.

## App Router

Se usara `App Router` como base del proyecto porque es la arquitectura moderna recomendada por la documentacion actual de `Next.js`. Esto facilita:

- layouts compartidos
- metadata por ruta
- rutas dinamicas para proyectos
- expansion futura a blog o contenido tecnico

## Estrategia de renderizado

La mayor parte del portafolio sera estatica por defecto. Eso favorece rendimiento, simplicidad y buen SEO para una web de presentacion.

En futuras iteraciones se podra usar renderizado dinamico o regeneracion incremental solo donde aporte valor.

## SEO

Se usara la `Metadata API` de `Next.js`.

- `metadata` para paginas estaticas
- `generateMetadata` para paginas dinamicas como `projects/[slug]`

Esto permite mantener titulos, descripciones y previews sociales bien definidos desde la estructura del framework.

## Imagenes y tipografias

- `next/image` para optimizar imagenes de proyectos y recursos visuales
- `next/font` para cargar tipografias optimizadas y evitar dependencias externas innecesarias

## Fuente de contenido

La V1 puede usar datos locales estructurados para proyectos, perfil y contacto. Esa decision reduce complejidad y facilita arrancar rapido.

A futuro el contenido puede migrar a:

- archivos `md` o `mdx`
- colecciones de contenido
- CMS o API externa

## Estilo y UI

La decision del sistema visual se definira durante la implementacion, pero se busca una interfaz intencional, profesional y distinta del estilo generico comun.

## Conclusion tecnica

La arquitectura tecnica elegida prioriza simplicidad al inicio y margen de crecimiento despues.
