# Arquitectura del proyecto

## Principio general

La arquitectura debe separar claramente rutas, componentes reutilizables, datos de contenido y recursos estaticos. El objetivo es evitar que el crecimiento del portafolio obligue a rehacer toda la estructura.

## Capas principales

### Capa de rutas

Ubicada en `app/`. Define las paginas y layouts del sitio.

Rutas previstas:

- `/`
- `/projects/[slug]`
- `/blog` en una fase futura

### Capa de componentes

Ubicada en `components/`. Contendra piezas reutilizables como:

- navbar
- hero
- tarjetas de proyecto
- footer
- badges de tecnologias
- bloques de contenido

### Capa de contenido

Ubicada en `content/` o en `lib/data/`, segun la forma final de implementacion. Ahi viviran los datos del perfil, proyectos y enlaces.

### Capa utilitaria

Ubicada en `lib/`. Agrupara helpers, funciones de formateo y posibles transformaciones del contenido.

### Capa de recursos estaticos

Ubicada en `public/`. Guardara imagenes, iconos, previews y otros activos.

## Flujo de datos inicial

1. el contenido se define en archivos locales
2. las paginas leen esos datos
3. los componentes renderizan la informacion
4. cada ruta define su metadata cuando corresponda

## Escalabilidad prevista

La arquitectura debe permitir sin ruptura mayor:

- agregar nuevas paginas
- pasar de datos locales a contenido markdown o MDX
- incorporar nuevos tipos de contenido
- crecer el numero de proyectos y casos de estudio
