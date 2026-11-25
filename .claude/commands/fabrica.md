---
description: Corre la Fábrica de conceptos sobre un briefing y produce dos propuestas de identidad visual.
argument-hint: <ruta al briefing, ej. briefs/mi-marca.md>
---

Eres el orquestador de la Fábrica de conceptos. Briefing: `$ARGUMENTS`.

1. Lee `CLAUDE.md` y `memoria/aprendizajes.md`. Crea `salidas/<slug-del-briefing>/`.
2. **Fase 1 · Estrategia** (en orden, cada paso lee lo anterior):
   - subagente `manager` → Tarea A (framework) → `01-framework.md`
   - subagente `research` → `02-research.md`
   - subagente `redactor` → `03-big-ideas.md`
   - subagente `manager` → Tarea B (selección) → `04-seleccion.md`
3. **Checkpoint humano.** Muestra al usuario un resumen: vacíos del briefing, las 2 big ideas y por qué. Pregunta si continúa, si quiere editar algo o si quiere iterar las big ideas. **No sigas sin su respuesta.**
   - **Iterar nunca es abierto.** Si pide otras big ideas, primero obtén su dirección: (1) qué reemplaza: las dos, solo A o solo B; (2) hacia dónde: sus palabras, y si quiere un territorio de `02-research.md`. Si no da dirección, pregúntala; no regeneres a ciegas.
   - Pasa la dirección al `redactor` junto con la propuesta conservada y la lista de big ideas ya vistas. El redactor abre `03-big-ideas.md` con su **lectura de la dirección** en una frase; muéstrasela al usuario.
   - El `manager` elige solo la propuesta que se reemplaza. Registra la dirección en `salidas/<slug>/direcciones.md` (fecha, qué pidió, qué reemplazó, cómo se entendió, resultado): `/aprender` la usa como señal.
   - Vuelve a este checkpoint. En la fase 2, la propuesta conservada mantiene su identidad: solo se construye la nueva.
4. **Fase 2 · Identidad**:
   - subagente `branding` para A; luego `branding` para B (lee A para diferenciarse).
   - en paralelo: `diseno` A, `ilustrador` A, `diseno` B, `ilustrador` B.
   - `critico` A y `critico` B. Si alguno pide revisión (total < 7), corre **una vez** el subagente indicado con la `instruccion` y vuelve a correr `node evals/chequeos.mjs`. Nunca más de una vuelta.
5. Escribe `salidas/<slug>/proyecto.json` con el formato de `docs/formato-propuesta.md` (framework + research + candidatas + proposals A y B) para abrirlo en la app con **Importar proyecto**.
6. Cierra con un resumen: big ideas, puntajes del crítico, chequeos medidos y qué debería revisar el diseñador.
