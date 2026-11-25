---
description: Cierra la ronda de un proyecto y actualiza la memoria del estudio con lo aprendido.
argument-hint: <carpeta del proyecto en salidas/, y tus comentarios>
---

Proyecto y comentarios del diseñador: `$ARGUMENTS`.

1. Lee `salidas/<proyecto>/proyecto.json` y compara con `git log -p salidas/<proyecto>/` para detectar **ediciones manuales** del diseñador (cambios de color, tipografía, logo, textos). Son la señal más fuerte.
2. Reúne también: favorita, calificaciones y notas (de los comentarios), puntajes del crítico y `direcciones.md` (si tuvo que redirigir las big ideas, el primer intento no leyó bien el briefing: qué faltó).
3. Usa el subagente `manager` → Tarea C para reescribir `memoria/aprendizajes.md`.
4. Muestra el diff de la memoria y sugiere hacer commit.
