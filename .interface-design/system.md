# Interface System

## Direction and feel

- Direction: `Archivador de escritorio`
- Intent: hacer que el portafolio se sienta como un expediente tecnico fisico abierto sobre una mesa de trabajo
- Mood: tactil, calido, preciso, profesional
- Avoid: vidrio, superficies planas genericas, pills modernas sin materialidad

## Domain anchors

- expediente tecnico
- mesa de trabajo
- carpeta de cuero
- fichas archivadas
- etiquetas selladas
- placas de identificacion

## Palette

- `--desk`: madera clara de escritorio
- `--paper` / `--sheet`: papel marfil prensado
- `--plate`: cartulina y carpeta tostada
- `--copper`: cobre / cuero con calor
- `--brass`: laton envejecido para placas y tabs
- `--seal`: sello rojo apagado para estados y marcas
- `--ink`: tinta sepia oscura

## Depth strategy

- Primary strategy: `layered shadows`
- Main panels: sombra corta + brillo interior + borde suave
- Inputs: superficie hundida con `--shadow-pressed`
- Buttons and tags: piezas elevadas con highlight superior y estado presionado
- Navigation: placa superior con borde interior fino

## Spacing base

- Base unit: `8px`
- Common radii:
  - controls: `18px`
  - panels: `24px`
  - cards: `26px`
  - pills/tags: `999px`

## Typography

- Display: `Cormorant Garamond`
- Body: `Source Sans 3`
- Technical labels: `IBM Plex Mono`

## Key component patterns

- `masthead`: placa horizontal con relieve suave y borde interior
- `top-nav a`: botones-pestana elevados dentro del encabezado
- `card`: ficha de papel con bisel interior
- `project-card` / `archive-entry`: tarjeta de archivo con tab superior marcado `ARCHIVE`
- `contact-form-shell`: hoja de intake con etiqueta superior `Mensaje / Intake`
- `contact-field input` / `textarea`: campos hundidos tipo papel prensado
- `button-primary`: boton cobrizo presionable
- `status-pill` / `tag-list li`: etiquetas con volumen sutil

## Reuse notes

- Cualquier nuevo panel debe sentirse como una pieza fisica del archivador
- Si se agrega una nueva seccion, usar tabs, placas o labels tecnicos antes que chips modernos
- No mezclar este sistema con glassmorphism o colores frios dominantes
