// Preisliste 2026 (Stand 05.01.2026) von Ion Salcutan. Einzige Quelle für Rechner und /preise/.
// Preise in € je cm Bohrtiefe. [lo mm, hi mm, Beton/Stahlbeton, Mauerwerk]
export const stand = '05.01.2026';

export const staffel = [
  [14, 31, 1.2, 1.1],
  [32, 51, 1.2, 1.1],
  [52, 81, 1.2, 1.1],
  [82, 101, 1.2, 1.1],
  [102, 131, 1.3, 1.2],
  [132, 151, 1.45, 1.2],
  [152, 181, 1.65, 1.5],
  [182, 201, 2.2, 2.0],
  [202, 251, 3.0, 2.5],
  [252, 275, 3.5, 3.0],
  [276, 301, 4.25, 3.9],
  [302, 351, 4.85, 3.95],
  [352, 401, 6.0, 5.1],
  [402, 451, 6.5, 5.6],
  [452, 501, 11.0, 9.5],
];

// Anzeige: benachbarte Stufen mit gleichen Preisen zusammenfassen (14–101 mm statt vier Zeilen).
export const staffelKompakt = staffel.reduce((acc, [lo, hi, b, m]) => {
  const last = acc[acc.length - 1];
  if (last && last[2] === b && last[3] === m) last[1] = hi;
  else acc.push([lo, hi, b, m]);
  return acc;
}, []);

export const regeln = {
  minDurchmesser: 14,
  maxDurchmesser: 501,
  maxTiefeCm: 200, // Inhaber: maximale Bohrtiefe 2 m
  mindestpreis: 250, // vom Inhaber bestätigt: Mindestauftragswert
  anfahrt: 85, // vom Inhaber bestätigt (gestiegen, gedruckte Liste nennt noch 80 €): gilt im Umkreis ca. 20–30 km um Dresden
  zuschlagUeberkopf: 0.5,
  zuschlagSchraeg: 0.5,
  wassersaugerTag: 55,
  gerueststellungTag: 65,
  stahlProCm: 1.0, // Stahl ab 1,5 cm, Einzelschnitt, € je cm
  pilotbohrung: 0.75, // Inhaber: je Bohrung 1 Stück (Dübel zur Befestigung des Bohrständers an der Wand)
  zuschlagNacht: 0.75, // Inhaber: nachts +75 % (Nachtzeit wie ArbZG §2: 23–6 Uhr)
  zuschlagWochenende: 1.0, // Inhaber: Samstag/Sonntag/Feiertag +100 % (auf den Bohrpreis)
  wartezeitStunde: 55,
};

export const zuschlagTabelle = [
  ['Schrägbohrung', '+ 50 %'],
  ['Überkopfbohrung', '+ 50 %'],
  ['Pilotbohrung (Dübel für den Bohrständer), je Bohrung', '0,75 €'],
  ['Einsatz nachts (23 bis 6 Uhr)', '+ 75 % auf den Bohrpreis'],
  ['Einsatz am Samstag, Sonntag oder Feiertag', '+ 100 % auf den Bohrpreis'],
  ['Wassersauger mit Bediener', '55,00 € pro Tag'],
  ['Stahl ab 1,5 cm (Einzelschnitt)', '1,00 € pro cm'],
  ['Gerüststellung', '65,00 € pro Tag'],
  ['Anfahrt / Baustelleneinrichtung (Umkreis bis ca. 30 km um Dresden)', '85,00 €'],
  ['Wartezeit', '55,00 € pro Stunde'],
];

export const eur = (v) =>
  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(v);

export function satz(durchmesser, material) {
  const b = staffel.find(([lo, hi]) => durchmesser >= lo && durchmesser <= hi);
  if (!b) return null;
  return material === 'mauerwerk' ? b[3] : b[2];
}

// Gemeinsame Rechenlogik (Rechner und Beispiele auf /preise/ nutzen dasselbe).
export function berechne({ d, tiefe, anzahl = 1, material = 'beton', richtung = 'normal', zeit = 'tag', wasser = false, geruest = false, tage = 1 }) {
  const s = satz(d, material);
  const bohr = s * tiefe * anzahl;
  const zuschlag = richtung === 'ueberkopf' || richtung === 'schraeg' ? bohr * regeln.zuschlagUeberkopf : 0;
  const zz = zeit === 'nacht' ? regeln.zuschlagNacht : zeit === 'wochenende' ? regeln.zuschlagWochenende : 0;
  const posten = [{ t: `${anzahl}× Ø ${d} mm, ${tiefe} cm, ${material === 'mauerwerk' ? 'Mauerwerk' : 'Beton/Stahlbeton'} (${eur(s)}/cm)`, v: bohr }];
  if (zuschlag) posten.push({ t: richtung === 'ueberkopf' ? 'Zuschlag Überkopf (+50 %)' : 'Zuschlag Schrägbohrung (+50 %)', v: zuschlag });
  if (zz) posten.push({ t: zeit === 'nacht' ? 'Zuschlag Nachteinsatz (+75 %)' : 'Zuschlag Wochenende/Feiertag (+100 %)', v: bohr * zz });
  posten.push({ t: `Pilotbohrung (${anzahl}× ${eur(regeln.pilotbohrung)})`, v: regeln.pilotbohrung * anzahl });
  if (wasser) posten.push({ t: `Wassersauger mit Bediener (${tage} Tag${tage > 1 ? 'e' : ''})`, v: regeln.wassersaugerTag * tage });
  if (geruest) posten.push({ t: `Gerüststellung (${tage} Tag${tage > 1 ? 'e' : ''})`, v: regeln.gerueststellungTag * tage });
  posten.push({ t: 'Anfahrt / Baustelleneinrichtung', v: regeln.anfahrt });
  const summe = posten.reduce((a, p) => a + p.v, 0);
  const total = Math.max(summe, regeln.mindestpreis);
  return { posten, summe, total, mindestpreisGreift: summe < regeln.mindestpreis };
}
