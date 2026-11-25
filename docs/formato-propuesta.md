# Formato de un proyecto (`proyecto.json`)

Es el contrato compartido entre la app y la versión de Claude Code. Ejemplo completo: [`salidas/ejemplo-barrio/proyecto.json`](../salidas/ejemplo-barrio/proyecto.json).

```jsonc
{
  "name": "Barrio",
  "brief": "texto del briefing",
  "framework": {
    "marca": "", "sector": "",
    "atributos": { "son": [{ "nombre": "", "porque": "" }], "noSon": [""] },
    "vision": "", "visionPalabras": [""], "mision": "", "misionPalabras": [""],
    "productos": [""], "servicios": [""], "target": [""],
    "competidores": [{ "nombre": "", "nota": "" }],
    "propuestaValor": { "que": "", "como": "", "resultado": "" },
    "stakeholders": [""], "ventaja": { "nucleo": "", "puntos": [""] },
    "keywords": [""], "vacios": [""]
  },
  "research": { "exploracion": [], "benchmark": [{ "nombre": "", "posicionamiento": "", "codigosVisuales": "", "oportunidad": "", "certeza": "conocido|hipotesis" }], "tensiones": [], "territorios": [] },
  "candidatas": [{ "bigIdea": "", "tagline": "", "insight": "", "territorio": "" }],
  "proposals": [ /* A y B */ {
    "bigIdea": "", "tagline": "", "insight": "", "concepto": "",
    "conexionFramework": [{ "pilar": "", "como": "" }],
    "personalidad": [{ "izq": "Rebelde", "der": "Conservadora", "valor": 40 }],   // 5 ejes, 0 = izquierda
    "arquetipo": "", "tono": "",
    "moodboard": { "palabras": [], "texturas": ["puntos|lineas|grano|reticula|ondas|bloques"], "fotografia": "", "composicion": "", "referencias": [{ "descripcion": "", "busqueda": "" }] },
    "tipografia": { "display": { "familia": "Google Font", "peso": 800, "porque": "" }, "texto": { "familia": "", "peso": 400, "porque": "" } },
    "colores": [ /* exactamente 5, en este orden */ { "nombre": "", "hex": "#RRGGBB", "rol": "primario|secundario|acento|oscuro|claro", "porque": "" } ],
    "logo": { "tipo": "combinado", "texto": "", "mayusculas": false, "tracking": 0, "peso": 800, "disposicion": "horizontal|stacked", "simbolo_svg": "<svg viewBox='0 0 100 100'>…</svg>", "racional": "" },
    "patron_svg": "<svg viewBox='0 0 40 40'>…</svg>",
    "estiloIconos": "", "iconos": [{ "nombre": "", "svg": "<svg viewBox='0 0 24 24' …>…</svg>" }],
    "aplicaciones": { "tarjeta": { "titular": "", "texto": "" }, "post": {}, "letrero": {} },
    "qa": { "puntaje": { "coherencia": 0, "originalidad": 0, "diferenciacion": 0, "ejecucion": 0, "total": 0 }, "fortalezas": [], "observaciones": [], "revisar": "ninguno" }
  }]
}
```

En los SVG el color va por rol: `class="c1"` primario, `c2` secundario, `c3` acento, `c4` oscuro, `c5` claro, o `fill="currentColor"`. Así, al cambiar un color en la app cambia todo el sistema.
