// Preisfaktoren, Beispiel-Anwendungen und FAQ für /preise/. Zahlen kommen aus preisliste.js (Preisliste 2026).
import { regeln, satz, eur } from './preisliste.js';

export const faktoren = [
  { icon: 'drill', t: 'Durchmesser', d: 'Der Preis je cm Bohrtiefe steigt mit dem Durchmesser: von 1,20 €/cm bei kleinen Bohrungen bis 11,00 €/cm bei Ø 452–501 mm in Beton.' },
  { icon: 'ruler', t: 'Tiefe bzw. Wandstärke', d: `Abgerechnet wird je cm Bohrtiefe. Wir bohren bis zu ${regeln.maxTiefeCm / 100} m tief.` },
  { icon: 'building', t: 'Material', d: 'Mauerwerk ist je cm günstiger als Beton oder Stahlbeton. Stahl ab 1,5 cm Stärke wird mit 1,00 € je cm als Einzelschnitt berechnet.' },
  { icon: 'wrench', t: 'Bohrrichtung', d: 'Überkopf- und Schrägbohrungen kosten 50 % Zuschlag, waagerechte und senkrechte Bohrungen nicht.' },
  { icon: 'clock', t: 'Einsatzzeit', d: 'In der Nachtzeit von 23 bis 6 Uhr berechnen wir 75 % Zuschlag auf den Bohrpreis, samstags, sonntags und an Feiertagen 100 %.' },
  { icon: 'truck', t: 'Anfahrt und Aufbau', d: `Anfahrt und Baustelleneinrichtung kosten ${eur(regeln.anfahrt)} pro Einsatz im Umkreis von ca. 20–30 km um Dresden, darüber hinaus nach Vereinbarung. Mehrere Bohrungen in einem Termin senken die Kosten je Bohrung.` },
  { icon: 'drop', t: 'Wassersauger', d: `Der Wassersauger mit Bediener kostet ${eur(regeln.wassersaugerTag)} pro Tag und hält Ihre Baustelle sauber.` },
  { icon: 'home', t: 'Gerüst und Wartezeit', d: `Gerüststellung ${eur(regeln.gerueststellungTag)} pro Tag, Wartezeit ${eur(regeln.wartezeitStunde)} pro Stunde, falls wir vor Ort warten müssen.` },
];

// Beispiel-Bohrungen: Preis je Bohrung = Satz × Tiefe (ohne Anfahrt und Mindestpreis).
const bsp = (anwendung, d, tiefe, material, link, bereich) => ({
  anwendung, d: bereich, beispiel: `Ø ${d} mm, ${tiefe} cm ${material === 'mauerwerk' ? 'Mauerwerk' : 'Beton'}`,
  preis: eur(satz(d, material) * tiefe), link,
});

export const richtwerte = [
  bsp('Klimagerät / Split-Gerät', 82, 36, 'mauerwerk', '/kernbohrung-waermepumpe-klimaanlage/', '60–82 mm'),
  bsp('Wärmepumpe (Monoblock)', 152, 36, 'mauerwerk', '/kernbohrung-waermepumpe-klimaanlage/', '100–200 mm'),
  bsp('Dunstabzugshaube', 131, 24, 'mauerwerk', '/wanddurchbruch-dunstabzugshaube/', '125–150 mm'),
  bsp('Kamin- / Ofenrohranschluss', 152, 24, 'mauerwerk', '/kamin-sanitaer-anschluesse/', '130–200 mm'),
  bsp('Abwasser / Sanitär', 112, 24, 'mauerwerk', '/kamin-sanitaer-anschluesse/', '50–125 mm'),
];

export const preisFaqs = [
  ['Was kostet ein Einsatz nachts oder am Wochenende?', 'In der Nachtzeit von 23 bis 6 Uhr berechnen wir 75 % Zuschlag auf den Bohrpreis, samstags, sonntags und an Feiertagen 100 %. Alle Preise sind Endpreise (brutto).'],
  ['Was ist eine Pilotbohrung?', 'Zur Pilotbohrung gehört ein Dübel, mit dem wir den Bohrständer an der Wand befestigen. Sie wird je Bohrung mit 0,75 € berechnet.'],
  ['Was kostet eine Kernbohrung?', 'Wir rechnen nach Durchmesser und Bohrtiefe ab. In Beton und Stahlbeton kostet Ø 14–101 mm 1,20 € je cm Bohrtiefe, in Mauerwerk 1,10 € je cm. Dazu kommen Anfahrt und Baustelleneinrichtung (85 €). Mit dem Kernbohr-Rechner erhalten Sie sofort einen Richtwert, ein Foto per WhatsApp genügt für ein konkretes Angebot.'],
  ['Gibt es einen Mindestpreis oder eine Anfahrtspauschale?', 'Ja. Anfahrt und Baustelleneinrichtung kosten 85 € pro Einsatz im Umkreis von ca. 20–30 km um Dresden, darüber hinaus nach Vereinbarung. Der Mindestauftragswert liegt bei 250 €. Mehrere Bohrungen in einem Termin sind deshalb pro Bohrung günstiger.'],
  ['Was kostet eine Überkopf- oder Schrägbohrung?', 'Überkopf- und Schrägbohrungen kosten 50 % Zuschlag auf den Bohrpreis.'],
  ['Wie tief können Sie bohren?', 'Wir bohren bis zu 2 m tief, Durchmesser von 14 bis 501 mm sind in der Preisliste enthalten. Größere Durchmesser auf Anfrage.'],
  ['Was kostet der Wassersauger?', 'Der Wassersauger mit Bediener kostet 55 € pro Tag. Er saugt das Bohrwasser direkt ab und schützt Boden und Wände.'],
  ['Kann ich die Kosten von der Steuer absetzen?', 'Privatkunden können Arbeits- und Fahrtkosten für Handwerkerleistungen im eigenen Haushalt nach § 35a EStG zu 20 % geltend machen, höchstens 1.200 € pro Jahr. Voraussetzung sind unter anderem eine ordnungsgemäße Rechnung und unbare Zahlung. Bitte klären Sie Einzelheiten mit Ihrem Steuerberater.'],
  ['Wie kann ich Kosten sparen?', 'Bündeln Sie mehrere Bohrungen in einem Termin, sorgen Sie für freien Zugang sowie Strom und Wasser und senden Sie Fotos und Maße vorab. So entfallen Rückfragen und Wartezeiten.'],
];
