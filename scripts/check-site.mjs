// Vollständige SEO/GEO-Prüfung der Produktions-Ausgabe (dist). Start: npm run check
import fs from 'node:fs';
import path from 'node:path';

const dist = 'dist';
const base = 'https://kernbohr-expert.de';
const errors = [];
const warns = [];
const err = (f, m) => errors.push(`${f}: ${m}`);
const warn = (f, m) => warns.push(`${f}: ${m}`);

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const files = walk(dist);
const pages = files.filter((f) => f.endsWith('.html')).map((f) => ({ f, url: '/' + path.relative(dist, f).replace(/index\.html$/, '').replace(/\\/g, '/'), html: fs.readFileSync(f, 'utf8') }));
const exists = (u) => {
  const t = path.join(dist, u.split('#')[0].split('?')[0]);
  return fs.existsSync(t) && (fs.statSync(t).isFile() || fs.existsSync(path.join(t, 'index.html')));
};
const text = (h) => h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ');

const titles = new Map();
const descs = new Map();
const kw = {};
let placeholders = 0;

for (const { url, html } of pages) {
  const title = (html.match(/<title>([\s\S]*?)<\/title>/) || [])[1]?.trim();
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1];
  const canon = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
  const h1s = html.match(/<h1[\s>]/g) || [];
  if (!title) err(url, 'title fehlt');
  else {
    if (title.length > 65) warn(url, `title zu lang (${title.length})`);
    if (title.length < 25) warn(url, `title kurz (${title.length})`);
    if (titles.has(title)) err(url, `doppelter title wie ${titles.get(title)}`);
    titles.set(title, url);
  }
  if (!desc) err(url, 'meta description fehlt');
  else {
    if (desc.length > 165) warn(url, `description zu lang (${desc.length})`);
    if (desc.length < 70) warn(url, `description kurz (${desc.length})`);
    if (descs.has(desc)) err(url, `doppelte description wie ${descs.get(desc)}`);
    descs.set(desc, url);
  }
  if (canon !== base + url) err(url, `canonical falsch: ${canon}`);
  if (h1s.length !== 1) err(url, `h1 Anzahl ${h1s.length}`);
  if (/name="robots" content="[^"]*noindex/.test(html)) err(url, 'noindex im Produktions-Build!');
  if (!/property="og:image"/.test(html)) err(url, 'og:image fehlt');
  if (!/<html lang="de"/.test(html)) err(url, 'lang fehlt');
  for (const m of html.matchAll(/<img\b[^>]*>/g)) if (!/ alt=/.test(m[0])) err(url, 'img ohne alt');
  for (const m of html.matchAll(/(?:href|src|poster)="(\/[^"#?]*)/g)) if (!exists(m[1])) err(url, `toter Link ${m[1]}`);
  // JSON-LD
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  const types = [];
  for (const b of blocks) {
    try {
      const j = JSON.parse(b);
      types.push(j['@type']);
      if (!j['@context']) err(url, 'JSON-LD ohne @context');
      if (j['@type'] === 'FAQPage' && !(j.mainEntity?.length > 0)) err(url, 'FAQPage leer');
      if (j['@type'] === 'Service' && !j.provider) err(url, 'Service ohne provider');
      if (j['@type'] === 'VideoObject' && !(j.name && j.thumbnailUrl && j.uploadDate)) err(url, 'VideoObject unvollständig');
    } catch (e) { err(url, 'JSON-LD ungültig: ' + e.message); }
  }
  if (!JSON.stringify(types).includes('LocalBusiness')) err(url, 'LocalBusiness fehlt');
  if (url !== '/' && !types.includes('BreadcrumbList') && !['/impressum/', '/datenschutzerklaerung/'].includes(url)) warn(url, 'BreadcrumbList fehlt');
  // Konsistenz
  const t = text(html);
  if (/\b80,00 ?€|\b80 ?€ (?:Anfahrt|für)/.test(t)) err(url, 'alter Anfahrtspreis 80 €');
  if (/Ø ?20\s?(?:–|-|bis)\s?600|600 mm/.test(t)) err(url, 'alter Durchmesser 20–600');
  if (/ausschließlich Hilti|nur Hilti|Lorem ipsum/i.test(t)) err(url, 'unzulässige Formulierung');
  if (/Mo–Fr 08|Mo–Fr: 08/.test(t)) err(url, 'alte Öffnungszeiten');
  if (!/[Ѐ-ӿ]/.test(t) === false) warn(url, 'kyrillischer Text auf deutscher Seite');
  const ph = (t.match(/\[Inhaber[^\]]*\]/g) || []).length;
  placeholders += ph;
  if (ph) warn(url, `${ph}× [Inhaber …] Platzhalter`);
  // Keywords
  const heads = (title + ' ' + (html.match(/<h[12][^>]*>[\s\S]*?<\/h[12]>/g) || []).join(' ')).toLowerCase();
  kw[url] = heads;
}

// Pflicht-Keywords: mindestens eine Seite mit Keyword in Title/H1/H2
const need = ['kernbohrung dresden', 'wanddurchbruch', 'betonsägen', 'fugenschneiden', 'schlitze fräsen', 'wärmepumpe', 'kosten', 'preis', 'wochenende', 'nachts', 'radebeul', 'pirna', 'meißen', 'freital', 'radeberg', 'rückbau', 'klima', 'dunstabzug'];
const all = Object.values(kw).join(' ');
for (const k of need) if (!all.includes(k)) err('Keywords', `"${k}" fehlt in Title/H1/H2 aller Seiten`);

// Pflichtdateien
for (const f of ['robots.txt', 'sitemap.xml', 'llms.txt', 'llms-full.txt', 'firmendaten.json', 'og-default.jpg', 'favicon.svg', '_redirects', '.htaccess']) if (!fs.existsSync(path.join(dist, f))) err(f, 'Datei fehlt');
if (fs.existsSync(path.join(dist, 'robots.txt'))) {
  const r = fs.readFileSync(path.join(dist, 'robots.txt'), 'utf8');
  if (/Disallow: \//.test(r)) err('robots.txt', 'sperrt die Website (Staging-Build?)');
  for (const b of ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'OAI-SearchBot']) if (!r.includes(b)) err('robots.txt', `${b} fehlt`);
  if (!r.includes('Sitemap:')) err('robots.txt', 'Sitemap fehlt');
}
// Sitemap deckt alle Seiten ab
if (fs.existsSync(path.join(dist, 'sitemap.xml'))) {
  const sm = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
  for (const { url } of pages) if (!sm.includes(`<loc>${base}${url}</loc>`)) err(url, 'nicht in sitemap.xml');
}
// Redirect-Ziele
const red = fs.existsSync(path.join(dist, '_redirects')) ? fs.readFileSync(path.join(dist, '_redirects'), 'utf8') : '';
for (const l of red.split('\n')) { const m = l.trim().match(/^\S+\s+(\/\S*)\s+301/); if (m && !exists(m[1])) err('_redirects', `Ziel fehlt ${m[1]}`); }
// Preis-Konsistenz: Preisliste vs. firmendaten.json
if (fs.existsSync(path.join(dist, 'firmendaten.json'))) {
  const j = JSON.parse(fs.readFileSync(path.join(dist, 'firmendaten.json'), 'utf8'));
  if (j.preisliste?.mindestpreisJeAuftrag !== 250 || j.preisliste?.anfahrt !== 85) err('firmendaten.json', 'Mindestpreis/Anfahrt weichen ab');
  if (j.preisliste?.staffel?.length !== 15) err('firmendaten.json', 'Staffel unvollständig');
}

console.log(`\n${pages.length} Seiten geprüft.`);
if (warns.length) console.log('\nHINWEISE (' + warns.length + '):\n- ' + warns.join('\n- '));
console.log(`\nOffene [Inhaber …]-Platzhalter insgesamt: ${placeholders} (vor Livegang klären)`);
if (errors.length) { console.log('\nFEHLER (' + errors.length + '):\n- ' + errors.join('\n- ')); process.exit(1); }
console.log('\nOK: keine Fehler.');
