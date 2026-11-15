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
LEISTUNGEN: Kernbohrung Ø 14–500 mm bis 2 m Tiefe in Beton, Stahlbeton, Mauerwerk; Wanddurchbruch; Betonsägen; Fugenschneiden; Schlitze fräsen; Rückbau/Teilabbruch; Wärmepumpe/Klima-Durchführungen; Dunstabzug; Kamin/Sanitär.
ABLAUF: Foto per WhatsApp/Formular, Festpreis-Angebot, Auftraggeber markiert die Bohrpunkte und gibt frei (Leitungen, Bewehrung, Statik vorab klären, bei tragenden Teilen mit Statiker). Ortungsgerät ist vorhanden, gebohrt wird nur an freigegebenen Punkten.
BAUSTELLE: normaler Wasseranschluss und Strom nötig (230 V oder 400 V per Adapter auf 16 A).
PREISE (Stand ${stand}, Endpreise brutto, € je cm Bohrtiefe, Beton/Stahlbeton | Mauerwerk):
${staffelKompakt.map(([a, b, x, y]) => `Ø ${a}–${b} mm: ${eur(x)} | ${eur(y)}`).join('\n')}
ZUSCHLÄGE UND NEBENKOSTEN:
${zuschlagTabelle.map(([a, b]) => `${a}: ${b}`).join('\n')}
Mindestauftragswert ${regeln.mindestpreis} €. Anfahrt ${regeln.anfahrt} € im Umkreis bis ca. 30 km um Dresden, weiter nach Vereinbarung. Nacht = 23–6 Uhr (+75 %), Sa/So/Feiertag +100 %.
HÄUFIGE FRAGEN:
${faqs.slice(0, 18).map(([q, a]) => `F: ${q}\nA: ${a}`).join('\n')}
`;

const SYSTEM = () => `Du bist Kerni, der digitale KI-Assistent (Kernbohr-Expert Assistent) von Kernbohr-Expert Dresden. Stelle dich nur beim ersten Mal kurz vor und gib dich nie als Mensch aus. Antworte kurz (max. 4 Sätze), freundlich, sachlich, auf Deutsch (Sie-Form).
Regeln:
- Nutze NUR die Informationen unten. Wenn etwas fehlt oder unsicher ist, sage das und verweise auf Telefon ${site.phoneDisplay} (Mo–Sa 7–19 Uhr) oder WhatsApp.
- Für Preise rufst du IMMER die Funktion richtpreis auf und rechnest nie selbst. Frage fehlende Angaben (Durchmesser, Tiefe, Anzahl, Material) kurz nach. Nenne jeden Preis als unverbindlichen Richtwert, brutto.
- Gib keine Zusagen zu Terminen, Festpreisen, Rechtsfragen oder Statik. Statik klärt der Auftraggeber mit dem Statiker.
- Persönliche Daten fragst du NUR, wenn die Person ausdrücklich ein Angebot, einen Termin oder einen Rückruf möchte. Biete dann an: „Soll ich Ihre Anfrage an Herrn Salcutan weiterleiten?“ Erst nach einem Ja fragst du nacheinander kurz nach: Name, Telefonnummer, Ort (Stadt oder Stadtteil) und was gemacht werden soll (Art der Arbeit, Maße, Material, falls bekannt). Eine Frage pro Nachricht. Wenn alles vorliegt, rufst du die Funktion anfrage_vorbereiten auf. Du sendest selbst nichts: Die Person bestätigt unten im Chat mit Zustimmung und Knopf. Sage danach nur, dass sie die Angaben unten prüfen und absenden kann.
- Fotos kann der Chat nicht senden: Bitte Fotos der Baustelle per WhatsApp schicken: https://wa.me/${site.whatsapp}
- Bei Beschwerden, Notfällen oder Eilfällen nenne direkt Telefon und WhatsApp.
- Schreibe reinen Text ohne Markdown (kein **, keine Listen mit #). Kurze Absätze.
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
}, {
  type: 'function',
  function: {
    name: 'anfrage_vorbereiten',
    description: 'Bereitet eine Anfrage an den Inhaber vor, nachdem die Person ausdrücklich eine Weiterleitung wünscht und alle Angaben genannt hat. Sendet NICHTS: Die Person bestätigt im Chat selbst.',
    parameters: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        telefon: { type: 'string', description: 'Telefonnummer der Person' },
        ort: { type: 'string', description: 'Ort der Baustelle' },
        anliegen: { type: 'string', description: 'Kurze Beschreibung: Art der Arbeit, Maße, Material, Wunschtermin' },
      },
      required: ['name', 'telefon', 'ort', 'anliegen'],
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

const clean = (v, n) => String(v ?? '').replace(/[\u0000-\u001f\u007f<>]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, n);
function cleanLead(a) {
  const lead = { name: clean(a.name, 80), telefon: clean(a.telefon, 30), ort: clean(a.ort, 80), anliegen: clean(a.anliegen, 600) };
  const digits = lead.telefon.replace(/\D/g, '');
  if (lead.name.length < 2 || digits.length < 6 || digits.length > 16 || !/^[+\d][\d\s()/+.-]+$/.test(lead.telefon) || lead.ort.length < 2 || lead.anliegen.length < 5) return null;
  return lead;
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

    // Anfrage absenden: nur nach ausdrücklicher Bestätigung der Person im Widget (Zustimmung + Knopf).
    if (new URL(req.url).pathname === '/lead') {
      const lead = cleanLead(body);
      if (body.hp || body.einwilligung !== true || !lead) return json({ ok: false, error: 'invalid' }, 400);
      if (!env.TELEGRAM_TOKEN || !env.TELEGRAM_CHAT_ID) return json({ ok: false, error: 'not configured' }, 503);
      const text = ['Neue Anfrage über kernbohr-expert.de (Chat Kerni)', '', `Name: ${lead.name}`, `Telefon: ${lead.telefon}`, `Ort: ${lead.ort}`, `Anliegen: ${lead.anliegen}`, '', 'Die Person hat der Weiterleitung zugestimmt. Fotos kommen ggf. per WhatsApp.'].join('\n');
      try {
        const t = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_TOKEN}/sendMessage`, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text, disable_web_page_preview: true }),
        });
        if (!t.ok) throw new Error(`telegram ${t.status}`);
        return json({ ok: true });
      } catch (e) {
        console.error(String(e));
        return json({ ok: false, error: 'send failed' }, 502);
      }
    }
    const history = (Array.isArray(body.messages) ? body.messages : [])
      .filter((m) => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
      .slice(-8).map((m) => ({ role: m.role, content: m.content.slice(0, 600) }));
    if (!history.length || history[history.length - 1].role !== 'user') return json({ error: 'bad request' }, 400);

    const messages = [{ role: 'system', content: SYSTEM() }, ...history];
    let tools = TOOLS;
    let lead = null;
    try {
      for (let i = 0; i < 3; i++) {
        const r = await fetch(`${env.PROVIDER_URL}/chat/completions`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${env.API_KEY}` },
          body: JSON.stringify({ model: env.MODEL, messages, ...(tools ? { tools, tool_choice: 'auto' } : {}), max_tokens: 900, temperature: 0.2, ...(String(env.MODEL).startsWith('openai/gpt-oss') ? { reasoning_effort: 'low' } : {}) }),
        });
        if (!r.ok) {
          const t = (await r.text()).slice(0, 300);
          // Groq lehnt Tool-Aufrufe manchmal ab (400): einmal ohne Preis-Tool erneut versuchen.
          if (r.status === 400 && tools) { tools = null; i--; continue; }
          throw new Error(`provider ${r.status}: ${t}`);
        }
        const msg = (await r.json()).choices?.[0]?.message;
        if (msg?.tool_calls?.length) {
          messages.push(msg);
          for (const c of msg.tool_calls) {
            let out;
            try {
              const args = JSON.parse(c.function.arguments || '{}');
              if (c.function.name === 'anfrage_vorbereiten') {
                lead = cleanLead(args);
                out = lead ? { status: 'Die Person sieht die Angaben jetzt unten im Chat und kann sie bestätigen und absenden. Du hast noch nichts gesendet.' } : { fehler: 'Angaben unvollständig oder ungültig (Name, Telefon, Ort, Anliegen). Frage kurz nach.' };
              } else out = runTool(args);
            } catch { out = { fehler: 'ungültige Angaben' }; }
            messages.push({ role: 'tool', tool_call_id: c.id, content: JSON.stringify(out) });
          }
          continue;
        }
        return json({ reply: (msg?.content || '').trim() || (lead ? 'Bitte prüfen Sie Ihre Angaben unten und senden Sie die Anfrage ab.' : 'Dazu rufen Sie uns bitte kurz an.'), ...(lead ? { lead } : {}) });
      }
      return json({ reply: 'Dazu rufen Sie uns bitte kurz an oder schreiben per WhatsApp.' });
    } catch (e) {
      console.error(String(e));
      return json({ reply: `Der Assistent ist gerade nicht erreichbar. Bitte rufen Sie uns an: ${site.phoneDisplay} (Mo–Sa 7–19 Uhr) oder schreiben Sie per WhatsApp.`, debug: String(e.message).slice(0, 300) }, 200);
    }
  },
};
