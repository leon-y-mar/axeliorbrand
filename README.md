# Fábrica de conceptos

Un estudio de branding operado por 7 agentes de IA. Le das un **briefing** y te devuelve **dos propuestas de identidad visual**, cada una nacida de una big idea distinta: concepto, moodboard, logotipo, tipografía, color, íconos y aplicaciones. Como dirección para pulir con ojo humano, no como arte final.

> Diseño es estrategia. Primero se cocina el concepto; después se plasma.

## Úsalo

### 1. La app (visual)
**[Abrir la Fábrica de conceptos](https://claude.ai/artifact/FvVswL6keTTyTEnc58htYk)** (privada: solo tú puedes abrirla hasta que la compartas).

- **+ Nuevo briefing** → pega o sube el briefing (.txt / .md) → **Iniciar la fábrica**.
- Se detiene tras la estrategia para que revises el **Framework** y las big ideas.
- **Propuesta A / B**: deck de 12 láminas cada una, con paneles para editar colores, tipografía y logotipo en vivo, y un campo para pedir ajustes por prompt a cada versión por separado. Botón **Presentar** a pantalla completa.
- **Memoria del estudio**: califica, elige favorita y presiona **Aprender de este proyecto**.

**En el escritorio:** abre el enlace en la app de escritorio de Claude y usa el botón **Instalar en el escritorio** (aparece arriba a la derecha cuando tu versión de la app lo permite). Queda como una app con su propia ventana. Si el botón no aparece, la app funciona igual dentro de Claude Desktop o en claude.ai.

Los agentes usan tu propia cuenta de Claude: la primera vez la página te pide permiso.

### 2. Claude Code (archivos, con búsqueda web real)
```bash
claude
```
```
/fabrica briefs/ejemplo-barrio.md
```
Los resultados quedan en `salidas/<proyecto>/`. El `proyecto.json` final se abre en la app con **Importar proyecto**. Al terminar una ronda: `/aprender salidas/<proyecto> <tus comentarios>`.

## Qué hay aquí

| Carpeta | Contenido |
|---|---|
| [`docs/sistema-de-agentes.md`](docs/sistema-de-agentes.md) | Arquitectura completa: agentes, flujo, harness, cómo aprende, límites |
| [`docs/formato-propuesta.md`](docs/formato-propuesta.md) | Contrato JSON compartido entre la app y Claude Code |
| [`.claude/agents/`](.claude/agents/) | Los 7 agentes: manager, research, redactor, branding, diseno, ilustrador, critico |
| [`.claude/commands/`](.claude/commands/) | Orquestadores `/fabrica` y `/aprender` |
| [`CLAUDE.md`](CLAUDE.md) | Mindset del estudio que todos los agentes leen primero |
| [`memoria/aprendizajes.md`](memoria/aprendizajes.md) | Lecciones acumuladas (crece con cada briefing) |
| [`evals/`](evals/) | Rúbrica del crítico y `chequeos.mjs` (contraste WCAG, validez SVG) |
| [`app/fabrica-de-conceptos.html`](app/fabrica-de-conceptos.html) | Código fuente de la app |
| [`salidas/ejemplo-barrio/`](salidas/ejemplo-barrio/) | Proyecto de ejemplo construido sobre el framework de referencia |

## Para aprender cómo funciona
Documento didáctico: **[Cómo funciona el harness de la Fábrica de conceptos](https://claude.ai/artifact/KSF4DGEVtbr1ErqEVqex8H)**.
