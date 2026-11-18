import { execSync } from 'node:child_process';
import { services } from '../data/services.js';
import { articles } from '../data/articles.js';
import { orte } from '../data/orte.js';
import { durchmesserSeiten } from '../data/durchmesserSeiten.js';
import { projekte } from '../data/projekte.js';

// lastmod: echtes Änderungsdatum der Datendatei bzw. Seitenquelle (letzter Git-Commit), nicht das Build-Datum.
// Google ignoriert lastmod, wenn es überall gleich ist. Fallback: heute (z. B. ohne Git).
const today = new Date().toISOString().slice(0, 10);
const gitDate = (file) => {
  try {
    const d = execSync(`git log -1 --format=%cs -- ${file}`, { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
    return d || today;
  } catch {
    return today;
  }
};

export function GET() {
  const base = 'https://kernbohr-expert.de';
  const servicesDate = gitDate('src/data/services.js');
  const orteDate = gitDate('src/data/orte.js');
  const preiseDate = gitDate('src/data/preisliste.js');
  const entries = [
    ['/', gitDate('src/pages/index.astro')],
    ['/leistungen/', gitDate('src/pages/leistungen.astro')],
    ['/preise/', preiseDate],
    ['/kernbohrung-rechner/', preiseDate],
    ['/ratgeber/', gitDate('src/pages/ratgeber/index.astro')],
    ['/glossar/', gitDate('src/data/glossar.js')],
    ['/bohrdurchmesser/', gitDate('src/data/durchmesser.js')],
    ['/referenzen/', gitDate('src/pages/referenzen.astro')],
    ['/ueber-uns/', gitDate('src/pages/ueber-uns.astro')],
    ['/faq/', servicesDate],
    ['/einsatzgebiet/', gitDate('src/pages/einsatzgebiet.astro')],
    ['/kontakt/', gitDate('src/pages/kontakt.astro')],
    ['/impressum/', gitDate('src/pages/impressum.astro')],
    ['/datenschutzerklaerung/', gitDate('src/pages/datenschutzerklaerung.astro')],
    ...services.map((s) => [`/${s.slug}/`, servicesDate]),
    ...orte.map((o) => [`/kernbohrung-in-${o.slug}/`, orteDate]),
    ...durchmesserSeiten.map((d) => [`/kernbohrung-${d.mm}-mm/`, gitDate('src/data/durchmesserSeiten.js')]),
    ...projekte.filter((p) => p.slug).map((p) => [`/referenzen/${p.slug}/`, p.datum]),
    ...articles.map((a) => [`/ratgeber/${a.slug}/`, a.date || gitDate('src/data/articles.js')]),
  ];
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    entries.map(([p, d]) => `  <url><loc>${base}${p}</loc><lastmod>${d}</lastmod></url>`).join('\n') +
    '\n</urlset>\n';
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
