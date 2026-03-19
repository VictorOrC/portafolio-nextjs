# Estructura de carpetas

## Estructura esperada

```txt
.
|-- app/
|-- components/
|-- content/
|-- lib/
|-- public/
|-- docs/
|-- package.json
|-- tsconfig.json
|-- next.config.*
`-- README.md
```

## Responsabilidad por carpeta

### `app/`

Define rutas, layouts, paginas y metadata por seccion.

### `components/`

Incluye componentes reutilizables de UI y bloques de pagina.

### `content/`

Contiene los datos fuente del portafolio. Puede incluir archivos de proyectos, perfil y contenido futuro.

### `lib/`

Funciones auxiliares, utilidades compartidas y transformaciones de datos.

### `public/`

Activos publicos como imagenes de proyectos, avatar, favicon y Open Graph images.

### `docs/`

Documentacion del proyecto: vision, requerimientos, decisiones, arquitectura y plan de implementacion.

## Regla de organizacion

La estructura debe mantenerse simple. Si una carpeta no tiene una responsabilidad clara, no debe crearse todavia.
