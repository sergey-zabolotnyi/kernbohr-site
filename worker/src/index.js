// Chat-Assistent für kernbohr-expert.de: Cloudflare Worker, der einen OpenAI-kompatiblen
// KI-Dienst (Groq oder xAI) anspricht. Preise werden NICHT vom Modell erfunden,
// sondern mit der Funktion berechne() aus src/data/preisliste.js gerechnet (Tool-Call).
import { staffelKompakt, zuschlagTabelle, regeln, stand, berechne, eur } from '../../src/data/preisliste.js';
import { site } from '../../src/data/site.js';
import { faqs } from '../../src/data/services.js';

const wissen = () => `
FIRMA: ${site.company}, Inhaber Ion Salcutan, ${site.address?.street ?? 'Burkersdorfer Weg 19'}, 01189 Dresden. Branche seit 2006, 8 Mitarbeiter.
TELEFON: ${site.phoneDisplay} (Mo–Sa 7–19 Uhr). WhatsApp und E-Mail (${site.email}) jederzeit, Antwort in den Telefonzeiten.
EINSÄTZE: nach Absprache rund um die Uhr, auch abends, nachts, Wochenende, Feiertage, soweit Ruhezeiten/Hausordnung es zulassen. Meist schon am nächsten Tag möglich, bei Anruf oft sehr kurzfristig. Bundesweit auf Anfrage.
WEBSITE: Die Website wurde von ${site.webdesign.name} entwickelt (${site.webdesign.url}). Fragt jemand, wer die Website oder den Assistenten erstellt hat, nenne das und den Link. Das ist eine erlaubte Antwort.
AUFTRÄGE: Kernbohr-Expert freut sich über jeden Auftrag, vom einzelnen Loch bis zum Großprojekt. Bei größeren Aufträgen sind individuelle Konditionen nach Absprache möglich. Schicken Sie Unterlagen, Plan oder Foto, dann erstellt der Inhaber ein konkretes Angebot.
LEISTUNGEN: Kernbohrung Ø 20–500 mm, bis 2 m Tiefe bei Ø bis 250 mm (bei größeren Durchmessern Tiefe nach Absprache), in Beton, Stahlbeton, Mauerwerk; auch Trockenbohrung (je nach Situation); Prüfkerne (Bohrkerngewinnung zur Betonprüfung, Preise auf Anfrage); Wanddurchbruch; Betonsägen; Fugenschneiden; Schlitze fräsen; Rückbau/Teilabbruch; Wärmepumpe/Klima-Durchführungen; Dunstabzug; Kamin/Sanitär.
ABLAUF: Foto per WhatsApp/Formular, verbindliches Angebot; Statiker, Bauleiter oder Auftraggeber orten Leitungen und Bewehrung und markieren die Bohrpunkte; Kernbohr-Expert markiert nicht selbst und sucht keine Leitungen oder Bewehrung. Gebohrt wird nur an den markierten und freigegebenen Punkten (bei tragenden Teilen mit Statiker).
BAUSTELLE: Strom: wir arbeiten universell mit 230 V, Kabeltrommel (16 A) oder 400 V. Wasser: Anschluss vor Ort oder Kanister. Der Wassersauger (100 € pro Tag) wird auf Wunsch eingesetzt; auf großen Baustellen wird bei Zustimmung des Auftraggebers auch ohne Wassersauger gebohrt. Trockenbohrung ist in allen Durchmessern möglich, je nach Situation und Wunsch des Auftraggebers.
PREISE (Stand ${stand}, Endpreise brutto, € je cm Bohrtiefe, Beton und Stahlbeton gleicher Preis; für Mauerwerk keine Preise nennen, individuelles Angebot):
${staffelKompakt.map(([a, b, x]) => `Ø ${a}–${b} mm: ${eur(x)}`).join('\n')}
ZUSCHLÄGE UND NEBENKOSTEN:
${zuschlagTabelle.map(([a, b]) => `${a}: ${b}`).join('\n')}
Mindestauftragswert ${regeln.mindestpreis} €. Anfahrt ${regeln.anfahrt} € im Umkreis bis ca. 30 km um Dresden, weiter nach Vereinbarung. Nacht = 23–6 Uhr (+75 %), Sa/So/Feiertag +100 %.
HÄUFIGE FRAGEN:
${faqs.slice(0, 18).map(([q, a]) => `F: ${q}\nA: ${a}`).join('\n')}
`;

const SYSTEM = () => `Du bist Kerni, der digitale KI-Assistent (Kernbohr-Expert Assistent) von Kernbohr-Expert Dresden. Stelle dich nur beim ersten Mal kurz vor und gib dich nie als Mensch aus. Antworte kurz (max. 4 Sätze), freundlich, sachlich, auf Deutsch (Sie-Form). Schreibt die Person in einer anderen Sprache (z. B. Englisch, Rumänisch, Russisch, Italienisch), antwortest du in genau dieser Sprache.
Regeln:
- Nutze NUR die Informationen unten. Wenn etwas fehlt oder unsicher ist, sage das und verweise auf Telefon ${site.phoneDisplay} (Mo–Sa 7–19 Uhr) oder WhatsApp.
- Für Preise rufst du IMMER die Funktion richtpreis auf und rechnest nie selbst. Frage fehlende Angaben (Durchmesser, Tiefe, Anzahl, Material) kurz nach. Nenne jeden Preis als unverbindlichen Richtwert, brutto.
- Gib keine Zusagen zu Terminen, Festpreisen, Rechtsfragen oder Statik. Statik klärt der Auftraggeber mit dem Statiker.
- Preisfragen: Fragt die Person nach Kosten oder Preisen, nenne zuerst den Richtpreis (Funktion richtpreis). Danach erscheint unter dem Chat automatisch eine Preiskarte: Die Person kann dort Durchmesser, Tiefe, Anzahl und Material anpassen und ein PDF-Angebot herunterladen. Weise kurz darauf hin („Unten können Sie die Angaben anpassen und das PDF-Angebot herunterladen.“). Du selbst erstellst kein PDF.
- Anfrage online senden: Nachdem du eine konkrete Frage zu Leistung, Preis, Ablauf, Wärmepumpe oder Termin beantwortet hast, schließt du deine Antwort einmal mit der Frage: „Möchten Sie Ihre Anfrage gleich online an uns senden?“ Stelle diese Frage nicht nach jeder Antwort, nicht bei Begrüßung, Dank oder reinen Öffnungszeiten-Fragen und nie wieder, wenn die Person abgelehnt hat oder das Formular schon angezeigt wurde. Hänge an eine Antwort, in der du diese Frage stellst, als allerletztes Zeichen die Markierung [[ANFRAGE?]] an (sie wird der Person nicht angezeigt; die Frage selbst stellst du in der Sprache der Person). Sagt die Person Ja (oder möchte sie ein Angebot, einen Termin oder Rückruf), rufst du SOFORT die Funktion anfrage_formular_zeigen auf, mit dem, was du schon aus dem Gespräch weißt (Anliegen in einem kurzen Satz, Ort falls genannt). Frage NICHT selbst nach Name oder Telefonnummer und stelle die Frage nach der Online-Anfrage nicht noch einmal: Die Person ergänzt alles im Formular, das der Chat darunter anzeigt, prüft es und sendet es selbst ab. Schreibe danach nur einen kurzen Satz, dass sie die Angaben unten ergänzen und absenden kann.
- Fotos: Im Anfrageformular kann die Person bis zu 3 Fotos der Baustelle anhängen. Alternativ per WhatsApp: https://wa.me/${site.whatsapp}
- Bei Beschwerden, Notfällen oder Eilfällen nenne direkt Telefon und WhatsApp.
- Schreibe reinen Text ohne Markdown (kein **, keine Listen mit #). Kurze Absätze.
- Themen außerhalb von Kernbohrung/Betonbearbeitung lehnst du höflich ab. Ausnahme: Fragen, wer die Website erstellt hat (siehe WEBSITE).
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
    name: 'anfrage_formular_zeigen',
    description: 'Zeigt der Person unter dem Chat das Anfrageformular (Name, Telefon, Ort, Anliegen), vorausgefüllt mit bekannten Angaben. Sendet NICHTS: Die Person ergänzt, prüft und sendet selbst ab. Alle Felder sind optional.',
    parameters: {
      type: 'object',
      properties: {
        anliegen: { type: 'string', description: 'Kurze Beschreibung auf Deutsch (auch wenn die Person eine andere Sprache spricht): Art der Arbeit, Maße, Material, Wunschtermin' },
        ort: { type: 'string', description: 'Ort der Baustelle, falls bekannt' },
        name: { type: 'string' },
        telefon: { type: 'string' },
      },
    },
  },
}];

function norm(a) {
  const d = Math.round(Number(a.durchmesser_mm));
  const tiefe = Number(a.tiefe_cm);
  if (!(d >= regeln.minDurchmesser && d <= regeln.maxDurchmesser) || !(tiefe >= 1 && tiefe <= regeln.maxTiefeCm)) return null;
  return {
    d, tiefe, anzahl: Math.min(Math.max(Math.round(a.anzahl || 1), 1), 200), material: a.material === 'mauerwerk' ? 'mauerwerk' : 'beton',
    richtung: ['ueberkopf', 'schraeg'].includes(a.richtung) ? a.richtung : 'normal', zeit: ['nacht', 'wochenende'].includes(a.zeit) ? a.zeit : 'tag',
    wasser: !!a.wassersauger, geruest: !!a.geruest, tage: Math.min(Math.max(Math.round(a.einsatztage || 1), 1), 30),
  };
}

function runTool(a) {
  const e = norm(a);
  if (!e) return { fehler: `Durchmesser ${regeln.minDurchmesser}–${regeln.maxDurchmesser} mm und Tiefe bis ${regeln.maxTiefeCm} cm. Andere Maße nur nach Anfrage.` };
  const r = berechne(e);
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
      if (!env.BREVO_API_KEY || !env.MAIL_TO || !env.MAIL_FROM) return json({ ok: false, error: 'not configured' }, 503);
      const SPR = { de: 'Deutsch', en: 'Englisch', ro: 'Rumänisch', ru: 'Russisch', it: 'Italienisch' };
      const sprache = SPR[body.sprache] || 'Deutsch';
      const fotos = (Array.isArray(body.fotos) ? body.fotos : []).slice(0, 3)
        .map((f) => /^data:image\/jpeg;base64,(\/9j\/[A-Za-z0-9+/=]+)$/.exec(String(f))?.[1])
        .filter((b) => b && b.length <= 1_000_000);
      if (fotos.reduce((n, b) => n + b.length, 0) > 2_800_000) return json({ ok: false, error: 'photos too large' }, 413);
      const text = ['Neue Anfrage über kernbohr-expert.de (Chat Kerni)', '', `Name: ${lead.name}`, `Telefon: ${lead.telefon}`, `Ort: ${lead.ort}`, `Anliegen: ${lead.anliegen}`, `Sprache der Person: ${sprache}${sprache === 'Deutsch' ? '' : ' (bitte ggf. in dieser Sprache oder per WhatsApp antworten)'}`, `Fotos: ${fotos.length ? fotos.length + ' im Anhang' : 'keine (ggf. per WhatsApp)'}`, '', 'Die Person hat der Weiterleitung ausdrücklich zugestimmt und bittet um Rückruf.'].join('\n');
      try {
        const m = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json', 'api-key': env.BREVO_API_KEY },
          body: JSON.stringify({ sender: { name: 'Kernbohr-Expert Website', email: env.MAIL_FROM }, to: [{ email: env.MAIL_TO }], subject: `Neue Anfrage: ${lead.anliegen.slice(0, 50)} (${lead.ort})`, textContent: text, ...(fotos.length ? { attachment: fotos.map((content, i) => ({ name: `foto-${i + 1}.jpg`, content })) } : {}) }),
        });
        if (!m.ok) throw new Error(`mail ${m.status}`);
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

    const SPR = { en: 'Englisch', ro: 'Rumänisch', ru: 'Russisch', it: 'Italienisch' };
    const hint = SPR[body.lang]
      ? [{ role: 'system', content: `WICHTIG: Die Person schreibt auf ${SPR[body.lang]}. Antworte ausschließlich auf ${SPR[body.lang]} in korrekter, natürlicher Sprache, ohne deutsche Wörter (nur Fachbegriffe wie Kernbohrung oder Namen dürfen deutsch bleiben). Die Frage nach der Online-Anfrage stellst du ebenfalls auf ${SPR[body.lang]}, mit der Markierung [[ANFRAGE?]] am Ende. Beim Aufruf von anfrage_formular_zeigen formulierst du das Anliegen auf Deutsch.` }]
      : [];
    const messages = [{ role: 'system', content: SYSTEM() }, ...history.slice(0, -1), ...hint, history[history.length - 1]];
    let tools = TOOLS;
    let lead = null;
    let preis = null;
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
              if (c.function.name === 'anfrage_formular_zeigen') {
                lead = { name: clean(args.name, 80), telefon: clean(args.telefon, 30), ort: clean(args.ort, 80), anliegen: clean(args.anliegen, 600) };
                out = { status: 'Das Formular wird der Person jetzt unter dem Chat angezeigt. Sie ergänzt und sendet selbst ab. Du hast nichts gesendet. Frage nicht erneut nach der Online-Anfrage.' };
              } else { out = runTool(args); if (c.function.name === 'richtpreis' && !out.fehler) preis = norm(args); }
            } catch { out = { fehler: 'ungültige Angaben' }; }
            messages.push({ role: 'tool', tool_call_id: c.id, content: JSON.stringify(out) });
          }
          continue;
        }
        let reply = (msg?.content || '').trim();
        const offer = (/\[\[ANFRAGE\?\]\]/.test(reply) || /Möchten Sie Ihre Anfrage gleich online/.test(reply)) && (!!preis || history.length > 1);
        reply = reply.replace(/\s*\[\[ANFRAGE\?\]\]\s*/g, '').trim();
        return json({ reply: reply || (lead ? 'Bitte ergänzen Sie unten Ihre Angaben und senden Sie die Anfrage ab.' : 'Dazu rufen Sie uns bitte kurz an.'), ...(lead ? { lead } : {}), ...(preis ? { preis } : {}), ...(offer ? { offer: true } : {}) });
      }
      return json({ reply: 'Dazu rufen Sie uns bitte kurz an oder schreiben per WhatsApp.' });
    } catch (e) {
      console.error(String(e));
      return json({ reply: `Der Assistent ist gerade nicht erreichbar. Bitte rufen Sie uns an: ${site.phoneDisplay} (Mo–Sa 7–19 Uhr) oder schreiben Sie per WhatsApp.`, debug: String(e.message).slice(0, 300) }, 200);
    }
  },
};
