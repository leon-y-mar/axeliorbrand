# Rúbrica del crítico

Cada criterio de 0 a 10. `total` = promedio. Umbral de revisión: total < 7.

| Criterio | 9-10 | 5-6 | 0-3 |
|---|---|---|---|
| **Coherencia** con el framework | Cada pieza se explica desde un pilar concreto | Coherente en general, porqués genéricos | Contradice atributos o target |
| **Originalidad** frente a la categoría | No se parece a ningún competidor del benchmark | Usa códigos comunes con algún giro | Intercambiable con la competencia |
| **Diferenciación** entre A y B | Universos opuestos: tipo, color y personalidad distintos | Comparten 1-2 decisiones clave | Variaciones de la misma idea |
| **Ejecución** | Contraste ≥ 7:1 texto, símbolo legible a 16 px, ≤ 6 formas | Contraste AA (4.5:1), símbolo algo complejo | Falla contraste o SVG inválido |

## Chequeos medidos (`node evals/chequeos.mjs <propuesta.json>`)

- Contraste oscuro/claro, claro/primario, oscuro/primario (WCAG 2.x).
- Símbolo y patrón: SVG parseable, solo elementos permitidos, número de formas.
- Íconos: cantidad válida y consistencia de `stroke-width`.
- Tipografías display y texto distintas.

## ¿El sistema está mejorando?

Guarda un briefing de referencia en `briefs/referencia.md`. Cada 5 proyectos córrelo de nuevo y anota aquí el total del crítico y **tu** calificación (1-5). Si tu calificación sube y el número de ajustes que pides baja, la memoria está funcionando.

| Fecha | # proyectos en memoria | Total crítico A / B | Tu calificación A / B | Ajustes pedidos |
|---|---|---|---|---|
| | | | | |
