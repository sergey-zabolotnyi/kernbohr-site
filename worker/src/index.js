// Chat-Assistent für kernbohr-expert.de: Cloudflare Worker, der einen OpenAI-kompatiblen
// KI-Dienst (Groq oder xAI) anspricht. Preise werden NICHT vom Modell erfunden,
// sondern mit der Funktion berechne() aus src/data/preisliste.js gerechnet (Tool-Call).
import { staffelKompakt, zuschlagTabelle, regeln, stand, berechne, eur } from '../../src/data/preisliste.js';
import { site } from '../../src/data/site.js';
import { faqs } from '../../src/data/services.js';

const wissen = () => `
FIRMA: ${site.company}, Inhaber Ion Salcutan, ${site.address?.street ?? 'Burkersdorfer Weg 19'}, 01189 Dresden. Branche seit 2006, 8 Mitarbeiter.
TELEFON: ${site.phoneDisplay} (Mo–Sa 7–19 Uhr). WhatsApp und E-Mail (${site.email}) jederzeit, Antwort in den Telefonzeiten.
EINSÄTZE: nach Absprache rund um die Uhr, auch abends, nachts, Wochenende, Feiertage, soweit Ruhezeiten/Hausordnung es zulassen. Meist schon am nächsten oder übernächsten Tag möglich. Bundesweit auf Anfrage.
LEISTUNGEN: Kernbohrung Ø 14–501 mm bis 2 m Tiefe in Beton, Stahlbeton, Mauerwerk; Wanddurchbruch; Betonsägen; Fugenschneiden; Schlitze fräsen; Rückbau/Teilabbruch; Wärmepumpe/Klima-Durchführungen; Dunstabzug; Kamin/Sanitär.
ABLAUF: Foto per WhatsApp/Formular, Festpreis-Angebot, Auftraggeber markiert die Bohrpunkte und gibt frei (Leitungen, Bewehrung, Statik vorab klären, bei tragenden Teilen mit Statiker). Ortungsgerät ist vorhanden, gebohrt wird nur an freigegebenen Punkten.
BAUSTELLE: normaler Wasseranschluss und Strom nötig (230 V oder 400 V per Adapter auf 16 A).
PREISE (Stand ${stand}, Endpreise brutto, € je cm Bohrtiefe, Beton/Stahlbeton | Mauerwerk):
${staffelKompakt.map(([a, b, x, y]) => `Ø ${a}–${b} mm: ${eur(x)} | ${eur(y)}`).join('\n')}
ZUSCHLÄGE UND NEBENKOSTEN:
${zuschlagTabelle.map(([a, b]) => `${a}: ${b}`).join('\n')}
Mindestauftragswert ${regeln.mindestpreis} €. Anfahrt ${regeln.anfahrt} € im Umkreis ca. 20–30 km um Dresden, weiter nach Vereinbarung. Nacht = 23–6 Uhr (+75 %), Sa/So/Feiertag +100 %.
HÄUFIGE FRAGEN:
${faqs.slice(0, 18).map(([q, a]) => `F: ${q}\nA: ${a}`).join('\n')}
`;

const SYSTEM = () => `Du bist der digitale Assistent von Kernbohr-Expert Dresden. Antworte kurz (max. 4 Sätze), freundlich, sachlich, auf Deutsch (Sie-Form).
Regeln:
- Nutze NUR die Informationen unten. Wenn etwas fehlt oder unsicher ist, sage das und verweise auf Telefon ${site.phoneDisplay} (Mo–Sa 7–19 Uhr) oder WhatsApp.
- Für Preise rufst du IMMER die Funktion richtpreis auf und rechnest nie selbst. Frage fehlende Angaben (Durchmesser, Tiefe, Anzahl, Material) kurz nach. Nenne jeden Preis als unverbindlichen Richtwert, brutto.
- Gib keine Zusagen zu Terminen, Festpreisen, Rechtsfragen oder Statik. Statik klärt der Auftraggeber mit dem Statiker.
- Frage nie nach Namen, Adresse oder Telefonnummer. Für ein Angebot: Foto der Baustelle per WhatsApp senden: https://wa.me/${site.whatsapp}
- Themen außerhalb von Kernbohrung/Betonbearbeitung lehnst du höflich ab.
WISSEN:
${wissen()}`;

const TOOLS = [{
  type: 'function',
  function: {
    name: 'richtpreis',
    description: 'Berechnet den Richtpreis (brutto) für Kernbohrungen nach der Preisliste.',
    parameters: {
      type: 'object',
      properties: {
        durchmesser_mm: { type: 'number', description: `Durchmesser in mm (${regeln.minDurchmesser}–${regeln.maxDurchmesser})` },
        tiefe_cm: { type: 'number', description: `Bohrtiefe/Wandstärke in cm (max. ${regeln.maxTiefeCm})` },
        anzahl: { type: 'integer', description: 'Anzahl der Bohrungen' },
        material: { type: 'string', enum: ['beton', 'mauerwerk'] },
        richtung: { type: 'string', enum: ['normal', 'ueberkopf', 'schraeg'] },
        zeit: { type: 'string', enum: ['tag', 'nacht', 'wochenende'] },
        wassersauger: { type: 'boolean' },
        geruest: { type: 'boolean' },
        einsatztage: { type: 'integer' },
      },
      required: ['durchmesser_mm', 'tiefe_cm'],
    },
  },
}];

function runTool(a) {
  const d = Math.round(Number(a.durchmesser_mm));
  const tiefe = Number(a.tiefe_cm);
  if (!(d >= regeln.minDurchmesser && d <= regeln.maxDurchmesser) || !(tiefe >= 1 && tiefe <= regeln.maxTiefeCm)) {
    return { fehler: `Durchmesser ${regeln.minDurchmesser}–${regeln.maxDurchmesser} mm und Tiefe bis ${regeln.maxTiefeCm} cm. Andere Maße nur nach Anfrage.` };
  }
  const r = berechne({
    d, tiefe, anzahl: Math.min(Math.max(Math.round(a.anzahl || 1), 1), 200), material: a.material || 'beton',
    richtung: a.richtung || 'normal', zeit: a.zeit || 'tag', wasser: !!a.wassersauger, geruest: !!a.geruest,
    tage: Math.min(Math.max(Math.round(a.einsatztage || 1), 1), 30),
  });
  return { gesamt_brutto: eur(r.total), mindestpreis_angewendet: r.mindestpreisGreift, posten: r.posten.map((p) => `${p.t}: ${eur(p.v)}`) };
}

const hits = new Map(); // einfache Begrenzung je IP und Minute (pro Worker-Instanz)
const limited = (ip) => {
  const k = ip + ':' + Math.floor(Date.now() / 60000);
  const n = (hits.get(k) || 0) + 1;
  hits.set(k, n);
  if (hits.size > 2000) hits.clear();
  return n > 8;
};

export default {
  async fetch(req, env) {
    const origin = req.headers.get('Origin') || '';
    const allowed = (env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim());
    const cors = {
      'Access-Control-Allow-Origin': allowed.includes(origin) ? origin : allowed[0],
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      Vary: 'Origin',
    };
    const json = (obj, status = 200) => new Response(JSON.stringify(obj), { status, headers: { ...cors, 'Content-Type': 'application/json' } });
    if (req.method === 'OPTIONS') return new Response(null, { headers: cors });
    if (req.method !== 'POST' || !allowed.includes(origin)) return json({ error: 'forbidden' }, 403);
    if (limited(req.headers.get('CF-Connecting-IP') || 'x')) return json({ reply: 'Zu viele Anfragen. Bitte versuchen Sie es in einer Minute erneut oder rufen Sie uns an.' }, 429);

    let body;
    try { body = await req.json(); } catch { return json({ error: 'bad request' }, 400); }
    const history = (Array.isArray(body.messages) ? body.messages : [])
      .filter((m) => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
      .slice(-8).map((m) => ({ role: m.role, content: m.content.slice(0, 600) }));
    if (!history.length || history[history.length - 1].role !== 'user') return json({ error: 'bad request' }, 400);

    const messages = [{ role: 'system', content: SYSTEM() }, ...history];
    try {
      for (let i = 0; i < 3; i++) {
        const r = await fetch(`${env.PROVIDER_URL}/chat/completions`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${env.API_KEY}` },
          body: JSON.stringify({ model: env.MODEL, messages, tools: TOOLS, tool_choice: 'auto', max_tokens: 450, temperature: 0.2 }),
        });
        if (!r.ok) throw new Error('provider ' + r.status);
        const msg = (await r.json()).choices?.[0]?.message;
        if (msg?.tool_calls?.length) {
          messages.push(msg);
          for (const c of msg.tool_calls) {
            let out;
            try { out = runTool(JSON.parse(c.function.arguments || '{}')); } catch { out = { fehler: 'ungültige Angaben' }; }
            messages.push({ role: 'tool', tool_call_id: c.id, content: JSON.stringify(out) });
          }
          continue;
        }
        return json({ reply: (msg?.content || '').trim() || 'Dazu rufen Sie uns bitte kurz an.' });
      }
      return json({ reply: 'Dazu rufen Sie uns bitte kurz an oder schreiben per WhatsApp.' });
    } catch {
      return json({ reply: `Der Assistent ist gerade nicht erreichbar. Bitte rufen Sie uns an: ${site.phoneDisplay} (Mo–Sa 7–19 Uhr) oder schreiben Sie per WhatsApp.` }, 200);
    }
  },
};
