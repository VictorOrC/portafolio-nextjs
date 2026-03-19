# Modelo de contenido

## Objetivo

Definir que informacion necesita el portafolio y como debe organizarse para que sea facil de renderizar y mantener.

## Entidades principales

### Perfil

Campos sugeridos:

- nombre
- rol profesional
- ubicacion opcional
- descripcion corta
- biografia
- foto o avatar
- enlaces externos

### Skill

Campos sugeridos:

- nombre
- categoria
- nivel opcional
- icono opcional

### Proyecto

Campos sugeridos:

- `slug`
- nombre
- resumen corto
- descripcion extendida
- problema que resuelve
- stack utilizado
- imagen o thumbnail
- enlace al repositorio
- enlace al demo
- estado del proyecto
- fecha o periodo
- aprendizajes o resultados

## Plantilla sugerida para proyectos

```md
Nombre del proyecto
Resumen breve
Problema que resuelve
Tecnologias usadas
Rol desempenado
Retos principales
Resultado
Enlaces
```

## Futuro modelo de contenido

Si se agrega blog o casos de estudio, cada entrada deberia incluir:

- `slug`
- titulo
- resumen
- fecha
- tags
- contenido principal
- imagen social opcional

## Principio de mantenimiento

Todo contenido debe poder modificarse sin tocar demasiados componentes.
