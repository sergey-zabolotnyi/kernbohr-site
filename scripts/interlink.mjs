// Interne Verlinkung nach dem Build: setzt im Fließtext (p, li) Links auf passende Seiten.
// Regeln: pro Seite je Ziel höchstens ein Link, kein Selbstlink, keine Links in Überschriften,
// Tabellen, Zitaten, bestehenden Links oder Rechtsseiten. Läuft nach "astro build".
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const W = '(?![\\wäöüßÄÖÜ-])';
const B = '(?<![\\wäöüßÄÖÜ-])';
// [Regex-Quelle, Ziel] – bei Treffer an gleicher Stelle gewinnt der längere Treffer
const REGELN = [
  ['Kosten (?:einer|der) Kernbohrung|Kernbohrung(?:en)? Kosten|Kernbohrungskosten', '/ratgeber/kernbohrung-kosten-dresden/'],
  ['Leipzig', '/kernbohrung-in-leipzig/'],
  ['Pirna', '/kernbohrung-in-pirna/'],
  ['Radebeul', '/kernbohrung-in-radebeul/'],
  ['Mei(?:ß|ss)en', '/kernbohrung-in-meissen/'],
  ['Freital', '/kernbohrung-in-freital/'],
  ['Radeberg', '/kernbohrung-in-radeberg/'],
  ['Wärmepumpen?|Klimaanlagen?', '/kernbohrung-waermepumpe-klimaanlage/'],
  ['Dunstabzugshaube[n]?', '/wanddurchbruch-dunstabzugshaube/'],
  ['Kaminofen|Kaminanschluss|Ofenrohr', '/kamin-sanitaer-anschluesse/'],
  ['Notdienst|Wochenendeinsatz', '/kernbohrung-notdienst-wochenende/'],
  ['Betonsägen|Betonschneiden|Wandsäge[n]?', '/betonsaegen/'],
  ['Fugenschneiden|Fugen schneiden', '/fugenschneiden/'],
  ['Schlitzfräsen|Schlitze fräsen|Schlitzfräsarbeiten', '/schlitzfraesen/'],
  ['Rückbau|Teilabbruch', '/rueckbau-teilabbruch/'],
  ['tragende[n]? Wand|tragende[n]? Wänd(?:e|en)', '/ratgeber/wanddurchbruch-tragende-wand/'],
  ['Wanddurchbr(?:uch|üche|üchen)', '/wanddurchbruch/'],
  ['Bohrdurchmesser', '/bohrdurchmesser/'],
  ['Preisliste', '/preise/'],
  ['Mietwohnung(?:en)?|Eigentumswohnung(?:en)?|Eigentümergemeinschaft', '/ratgeber/kernbohrung-mietwohnung-eigentum/'],
  ['Handwerkerleistungen|Steuerbonus|§ ?35a', '/ratgeber/handwerkerleistungen-steuer-absetzen-35a/'],
  ['Altbau(?:ten)?|Plattenbau(?:ten)?', '/ratgeber/kernbohrung-dresden-altbau-plattenbau/'],
  ['Checkliste', '/ratgeber/checkliste-termin-vorbereitung/'],
  ['Betonbohrung(?:en)?', '/ratgeber/betonbohrung-dresden/'],
  ['Meißeln|Stemmen', '/ratgeber/kernbohrung-oder-meisseln/'],
  ['Kernbohrung(?:en)?', '/kernbohrung/'],
  ['Einsatzgebiet', '/einsatzgebiet/'],
  ['Referenzen', '/referenzen/'],
  ['Glossar', '/glossar/'],
].map(([src, ziel]) => ({ re: new RegExp(B + '(?:' + src + ')' + W, 'i'), ziel }));

const SKIP_PAGES = new Set(['/impressum/', '/datenschutzerklaerung/', '/404/']);
const MAX_PRO_SEITE = 10;
const SKIP_TAGS = new Set(['a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'script', 'style', 'button', 'summary', 'th', 'td', 'blockquote', 'nav', 'figcaption', 'label', 'select', 'textarea', 'svg']);
const TEXT_TAGS = new Set(['p', 'li', 'dd']);

function walk(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('index.html') ? [p] : [];
  });
}

function verlinkeText(text, benutzt, self, budget) {
  let out = '';
  let rest = text;
  while (budget.n > 0) {
    let best = null;
    for (const r of REGELN) {
      if (benutzt.has(r.ziel) || r.ziel === self) continue;
      const m = r.re.exec(rest);
      if (!m) continue;
      if (!best || m.index < best.m.index || (m.index === best.m.index && m[0].length > best.m[0].length)) best = { r, m };
    }
    if (!best) break;
    const { r, m } = best;
    out += rest.slice(0, m.index) + `<a href="${r.ziel}">${m[0]}</a>`;
    rest = rest.slice(m.index + m[0].length);
    benutzt.add(r.ziel);
    budget.n--;
  }
  return out + rest;
}

let gesamt = 0, seiten = 0;
for (const file of walk(DIST)) {
  const self = '/' + file.slice(DIST.length + 1, -'index.html'.length).replace(/\\/g, '/');
  const pfad = self === '//' ? '/' : self;
  if (SKIP_PAGES.has(pfad)) continue;
  const html = readFileSync(file, 'utf8');
  const a = html.indexOf('<main'), b = html.lastIndexOf('</main>');
  if (a < 0 || b < 0) continue;
  const mainHtml = html.slice(a, b);
  const teile = mainHtml.split(/(<[^>]+>)/);
  const skipDepth = {}; let textDepth = 0;
  const benutzt = new Set(); const budget = { n: MAX_PRO_SEITE };
  for (let i = 0; i < teile.length; i++) {
    const t = teile[i];
    if (t.startsWith('<')) {
      const m = /^<(\/?)([a-zA-Z0-9]+)/.exec(t);
      if (!m) continue;
      const closing = m[1] === '/', tag = m[2].toLowerCase();
      if (t.endsWith('/>') || ['br', 'img', 'input', 'hr', 'meta', 'link', 'path', 'circle', 'rect', 'line', 'polyline'].includes(tag)) continue;
      if (SKIP_TAGS.has(tag)) skipDepth[tag] = Math.max(0, (skipDepth[tag] || 0) + (closing ? -1 : 1));
      else if (TEXT_TAGS.has(tag)) textDepth = Math.max(0, textDepth + (closing ? -1 : 1));
      continue;
    }
    if (!t.trim() || textDepth === 0 || Object.values(skipDepth).some((v) => v > 0) || budget.n <= 0) continue;
    const neu = verlinkeText(t, benutzt, pfad, budget);
    if (neu !== t) { teile[i] = neu; }
  }
  const links = MAX_PRO_SEITE - budget.n;
  if (links) {
    writeFileSync(file, html.slice(0, a) + teile.join('') + html.slice(b));
    gesamt += links; seiten++;
  }
}
console.log(`interlink: ${gesamt} Links auf ${seiten} Seiten gesetzt`);
