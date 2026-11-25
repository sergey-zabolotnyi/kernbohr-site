// llms.txt: kompakte Übersicht für KI-Assistenten (Format nach llmstxt.org). Wird aus den Seitendaten erzeugt.
import { site } from '../data/site.js';
import { services } from '../data/services.js';
import { articles } from '../data/articles.js';
import { projekte } from '../data/projekte.js';
import { gewerbeSeiten } from '../data/gewerbeSeiten.js';
import { orte } from '../data/orte.js';

export function GET() {
  const noindex = import.meta.env.PUBLIC_NOINDEX !== 'false';
  if (noindex) return new Response('# Staging, nicht öffentlich\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  const u = site.url;
  const body = `# ${site.company} (Inhaber: ${site.owner})

> Kernbohrung, Wanddurchbruch, Betonsägen, Fugenschneiden, Schlitze fräsen und Rückbau in Dresden, Pirna, Radebeul, Meißen, Leipzig und ganz Sachsen sowie bis Berlin, bundesweit für größere Projekte. Telefonisch Mo–Sa 7–19 Uhr erreichbar; Einsätze nach Absprache rund um die Uhr, auch abends, am Wochenende und an Feiertagen. Preisliste 2026 öffentlich: Kernbohrung in Beton und Stahlbeton ab 1,20 € je cm Bohrtiefe (Mauerwerk: individuelles Angebot), Mindestpreis 250 €.

Kurzfakten:
- Standort: ${site.street}, ${site.zip} ${site.city}, ${site.region}, Deutschland
- Telefon/WhatsApp: ${site.phoneDisplay}
- E-Mail: ${site.email}
- Kernbohrung: Ø 20–500 mm, Bohrtiefe bis 2 m (bis Ø 250 mm), Beton, Stahlbeton, Mauerwerk
- Technik: Hilti-Kernbohrtechnik, außerdem Wandsäge und Fugenschneider
- Erfahrung: Inhaber seit 2006 in der Baubranche, Firma seit ${site.founded}, Team von ${site.employees} Mitarbeitern (bei Großprojekten erweiterbar)
- Versicherung: Betriebshaftpflichtversicherung vorhanden, Versicherungsnachweis auf Anfrage
- Sauberkeit: Nassbohrung bindet den Staub, auf Wunsch Wassersauger mit Bediener (100 € pro Tag), Arbeitsbereich wird aufgeräumt übergeben
- Voraussetzung vor Ort: Strom (230 V, Kabeltrommel 16 A oder 400 V, wir arbeiten universell). Wasser bringen wir bei Bedarf in Kanistern mit (im Auftragspreis enthalten, bitte vorab Bescheid geben)
- Kunden: Privatkunden, Handwerksbetriebe, Bauunternehmen. Jeder Auftrag ist willkommen, vom einzelnen Loch bis zum Großprojekt, bei größeren Aufträgen individuelle Konditionen nach Absprache
- Website: entwickelt von ${site.webdesign.name} (${site.webdesign.url})

## Wichtige Seiten
- [Preise und Preisliste 2026](${u}/preise/): komplette Preise je cm Bohrtiefe, Zuschläge, Beispielrechnungen
- [Kernbohrung](${u}/kernbohrung/)
- [Leistungen](${u}/leistungen/)
- [Kernbohrung in Beton und Stahlbeton](${u}/kernbohrung-beton-stahlbeton/)
- [Für Bauunternehmen und Gewerbe](${u}/gewerbe/): Nacht-/Wochenendeinsätze, Dokumentation, Rahmenkonditionen
- [Partner werden und Fachbeiträge](${u}/partner/): Zusammenarbeit, Gastbeiträge, Partner und Auftraggeber
${gewerbeSeiten.map((g) => `- [${g.nav}](${u}/gewerbe/${g.slug}/)`).join('\n')}
- [Einsatzgebiet](${u}/einsatzgebiet/)
- [Häufige Fragen](${u}/faq/)
- [Bohrdurchmesser nach Anwendung](${u}/bohrdurchmesser/): Welcher Durchmesser passt für Dunstabzug, Wärmepumpe, Klimagerät, Abwasser und mehr, mit Faustregel
- [Glossar der Fachbegriffe](${u}/glossar/): Kernbohrung, Nassbohrung, Pilotbohrung, Wanddurchbruch und mehr
- [Kontakt](${u}/kontakt/)
- [Referenzen](${u}/referenzen/)
- [Über uns](${u}/ueber-uns/)

## Leistungen
${services.map((s) => `- [${s.name}](${u}/${s.slug}/): ${s.description}`).join('\n')}

## Orte
${orte.map((o) => `- [Kernbohrung ${o.name}](${u}/kernbohrung-in-${o.slug}/)`).join('\n')}

## Ratgeber
${articles.map((a) => `- [${a.title}](${u}/ratgeber/${a.slug}/): ${a.short}`).join('\n')}

${projekte.some((p) => p.slug) ? `## Referenzen\n${projekte.filter((p) => p.slug).map((p) => `- [${p.titel}](${u}/referenzen/${p.slug}/): ${p.kurz}`).join('\n')}\n\n` : ''}## Optional
- [Ausführliche Fassung für KI](${u}/llms-full.txt)
- [Maschinenlesbare Firmendaten (JSON)](${u}/firmendaten.json)
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
