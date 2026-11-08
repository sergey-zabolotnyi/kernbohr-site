// Maschinenlesbare Firmen- und Preisdaten für Assistenten und Verzeichnisse.
import { site } from '../data/site.js';
import { staffel, regeln, zuschlagTabelle, stand } from '../data/preisliste.js';
import { services } from '../data/services.js';

export function GET() {
  const noindex = import.meta.env.PUBLIC_NOINDEX !== 'false';
  if (noindex) return new Response('{"status":"staging"}', { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
  const data = {
    name: site.company,
    inhaber: site.owner,
    url: site.url,
    adresse: { strasse: site.street, plz: site.zip, ort: site.city, bundesland: site.region, land: 'DE' },
    kontakt: { telefon: site.phoneTel, whatsapp: site.whatsapp, email: site.email },
    telefonzeiten: 'Montag bis Samstag, 7 bis 19 Uhr',
    einsatzzeiten: 'Nach Absprache rund um die Uhr, auch abends, nachts, am Wochenende und an Feiertagen',
    gegruendet: site.founded,
    inhaberInBranchenSeit: site.sinceBranche,
    mitarbeiter: site.employees,
    umsatzsteuerId: site.vatId,
    einsatzgebiet: ['Dresden', 'Radebeul', 'Meißen', 'Pirna', 'Freital', 'Radeberg', 'Coswig', 'Heidenau', 'Sachsen', 'bundesweit für größere Projekte'],
    kernbohrung: { durchmesserMm: [regeln.minDurchmesser, regeln.maxDurchmesser], maxTiefeCm: regeln.maxTiefeCm, materialien: ['Beton', 'Stahlbeton', 'Mauerwerk'] },
    preisliste: {
      stand,
      waehrung: 'EUR',
      einheit: 'je cm Bohrtiefe',
      mindestpreisJeAuftrag: regeln.mindestpreis,
      anfahrt: regeln.anfahrt,
      anfahrtUmkreisKm: '20–30 um Dresden, darüber hinaus nach Vereinbarung',
      staffel: staffel.map(([von, bis, beton, mauerwerk]) => ({ durchmesserVonMm: von, durchmesserBisMm: bis, betonStahlbeton: beton, mauerwerk })),
      zuschlaege: Object.fromEntries(zuschlagTabelle),
    },
    leistungen: services.map((s) => ({ name: s.name, url: `${site.url}/${s.slug}/` })),
  };
  return new Response(JSON.stringify(data, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
