// Mediciones objetivas para el crítico. Uso: node evals/chequeos.mjs salidas/<proyecto>/propuesta-A.json
// También acepta un proyecto.json completo (mide todas sus propuestas).
import { readFileSync } from "node:fs";

const ALLOWED = new Set(["svg", "g", "path", "circle", "rect", "ellipse", "line", "polyline", "polygon"]);
const lum = hex => { const c = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255).map(v => v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; };
const ratio = (a, b) => { if (!/^#[0-9a-f]{6}$/i.test(a || "") || !/^#[0-9a-f]{6}$/i.test(b || "")) return null; const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m); return +((x + 0.05) / (y + 0.05)).toFixed(2); };
function svgInfo(s) {
  if (typeof s !== "string" || !/^\s*<svg[\s>]/.test(s)) return { valido: false, formas: 0, prohibidos: [] };
  const tags = [...s.matchAll(/<\s*([a-zA-Z][\w-]*)/g)].map(m => m[1]);
  const prohibidos = [...new Set(tags.filter(t => !ALLOWED.has(t)))];
  const balanced = (s.match(/<svg/g) || []).length === (s.match(/<\/svg>/g) || []).length;
  return { valido: balanced && prohibidos.length === 0, formas: tags.filter(t => t !== "svg" && t !== "g").length, prohibidos };
}
function check(pr) {
  const c = Object.fromEntries((pr.colores || []).map(x => [x.rol, x.hex]));
  const strokes = (pr.iconos || []).map(i => (String(i.svg).match(/stroke-width=['"]([\d.]+)/) || [])[1]);
  return {
    propuesta: pr.id || "?", bigIdea: pr.bigIdea,
    colores: (pr.colores || []).length,
    contraste_oscuro_sobre_claro: ratio(c.oscuro, c.claro),
    contraste_claro_sobre_primario: ratio(c.claro, c.primario),
    contraste_oscuro_sobre_primario: ratio(c.oscuro, c.primario),
    simbolo: svgInfo(pr.logo?.simbolo_svg),
    patron: svgInfo(pr.patron_svg),
    iconos_validos: `${(pr.iconos || []).filter(i => svgInfo(i.svg).valido).length}/${(pr.iconos || []).length}`,
    iconos_mismo_trazo: new Set(strokes).size <= 1,
    tipografias_distintas: pr.tipografia?.display?.familia !== pr.tipografia?.texto?.familia
  };
}
const file = process.argv[2];
if (!file) { console.error("Uso: node evals/chequeos.mjs <propuesta.json | proyecto.json>"); process.exit(1); }
const data = JSON.parse(readFileSync(file, "utf8"));
const props = data.proposals || [data];
console.log(JSON.stringify(props.map(check), null, 2));
