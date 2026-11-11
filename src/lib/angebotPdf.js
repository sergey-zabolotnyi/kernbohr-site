// Erstellt das Richtpreis-Angebot als PDF direkt im Browser (keine Daten werden übertragen).
// jsPDF wird erst beim Klick geladen (dynamischer Import), damit die Seite schnell bleibt.
import { jsPDF } from 'jspdf';
import { site } from '../data/site.js';
import { eur, regeln } from '../data/preisliste.js';

const ORANGE = [232, 89, 12];
const DARK = [23, 28, 32];
const GRAY = [95, 104, 112];
const LIGHT = [243, 244, 246];

const clean = (s) => String(s).replace(/[  ]/g, ' ');
const money = (v) => clean(eur(v));

async function dataUrl(url) {
  const blob = await (await fetch(url)).blob();
  return new Promise((resolve) => {
    const fr = new FileReader();
    fr.onload = () => resolve(fr.result);
    fr.readAsDataURL(blob);
  });
}

const labels = {
  material: { beton: 'Beton / Stahlbeton', mauerwerk: 'Mauerwerk' },
  richtung: { normal: 'Standard (waagerecht / senkrecht)', ueberkopf: 'Überkopf (+50 %)', schraeg: 'Schräg (+50 %)' },
  zeit: { tag: 'Werktag, tagsüber', nacht: 'Nachts 23–6 Uhr (+75 %)', wochenende: 'Samstag, Sonntag, Feiertag (+100 %)' },
};

export async function erstelleAngebotPdf({ eingabe, ergebnis }) {
  const [logo, qrWeb, qrWa] = await Promise.all([dataUrl('/pdf/logo.png'), dataUrl('/pdf/qr-web.png'), dataUrl('/pdf/qr-wa.png')]);
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const W = 210;
  const M = 16;
  const now = new Date();
  const p2 = (n) => String(n).padStart(2, '0');
  const datum = `${p2(now.getDate())}.${p2(now.getMonth() + 1)}.${now.getFullYear()}`;
  const nr = `RP-${now.getFullYear()}${p2(now.getMonth() + 1)}${p2(now.getDate())}-${p2(now.getHours())}${p2(now.getMinutes())}`;

  // Kopfband
  doc.setFillColor(...DARK);
  doc.rect(0, 0, W, 34, 'F');
  doc.setFillColor(...ORANGE);
  doc.rect(0, 34, W, 1.6, 'F');
  doc.addImage(logo, 'PNG', M, 7, 20, 20);
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.text('Kernbohr-Expert', M + 25, 17);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(200, 205, 210);
  doc.text('Kernbohrung · Betonsägen · Wanddurchbruch · Dresden', M + 25, 23.5);
  doc.setFontSize(9);
  doc.setTextColor(255, 255, 255);
  doc.text(site.phoneDisplay, W - M, 14, { align: 'right' });
  doc.text('kernbohr-expert.de', W - M, 19.5, { align: 'right' });
  doc.text(site.email, W - M, 25, { align: 'right' });

  // Titel
  let y = 50;
  doc.setTextColor(...DARK);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(21);
  doc.text('Richtpreis-Angebot', M, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...GRAY);
  doc.text(`Datum: ${datum}`, W - M, y - 5, { align: 'right' });
  doc.text(`Nr.: ${nr}`, W - M, y, { align: 'right' });
  y += 6;
  doc.text('Unverbindliche Preisindikation auf Basis der Preisliste 2026. Alle Preise sind Endpreise (brutto).', M, y);

  // Ihre Angaben
  y += 11;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...ORANGE);
  doc.text('IHRE ANGABEN', M, y);
  y += 2;
  doc.setDrawColor(...ORANGE);
  doc.setLineWidth(0.4);
  doc.line(M, y, W - M, y);
  y += 6;
  const e = eingabe;
  const zeilen = [
    ['Bohrdurchmesser', `Ø ${e.d} mm`],
    ['Bohrtiefe / Wandstärke', `${e.tiefe} cm`],
    ['Anzahl der Bohrungen', String(e.anzahl)],
    ['Material', labels.material[e.material] || e.material],
    ['Bohrrichtung', labels.richtung[e.richtung] || e.richtung],
    ['Einsatzzeit', labels.zeit[e.zeit] || e.zeit],
  ];
  if (e.wasser) zeilen.push(['Wassersauger mit Bediener', `${e.tage} Tag${e.tage > 1 ? 'e' : ''}`]);
  if (e.geruest) zeilen.push(['Gerüststellung', `${e.tage} Tag${e.tage > 1 ? 'e' : ''}`]);
  doc.setFontSize(10.5);
  zeilen.forEach(([k, v], i) => {
    if (i % 2 === 0) {
      doc.setFillColor(...LIGHT);
      doc.rect(M, y - 4.6, W - 2 * M, 6.6, 'F');
    }
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...GRAY);
    doc.text(k, M + 2, y);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...DARK);
    doc.text(clean(v), M + 62, y);
    y += 6.6;
  });

  // Kalkulation
  y += 5;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...ORANGE);
  doc.text('KALKULATION', M, y);
  y += 2;
  doc.line(M, y, W - M, y);
  y += 6;
  doc.setFontSize(10.5);
  ergebnis.posten.forEach((p) => {
    const lines = doc.splitTextToSize(clean(p.t), 130);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...DARK);
    doc.text(lines, M + 2, y);
    doc.setFont('helvetica', 'bold');
    doc.text(money(p.v), W - M - 2, y, { align: 'right' });
    y += lines.length * 5 + 1.8;
    doc.setDrawColor(225, 228, 231);
    doc.setLineWidth(0.2);
    doc.line(M, y - 3.4, W - M, y - 3.4);
  });
  if (ergebnis.mindestpreisGreift) {
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(9.5);
    doc.setTextColor(...ORANGE);
    doc.text(`Mindestauftragswert ${money(regeln.mindestpreis)} angewendet.`, M + 2, y);
    y += 6;
  }

  // Summe
  y += 1;
  doc.setFillColor(...DARK);
  doc.roundedRect(M, y, W - 2 * M, 16, 2, 2, 'F');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(248, 166, 110);
  doc.text('RICHTPREIS GESAMT (BRUTTO, UNVERBINDLICH)', M + 5, y + 6.2);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.text('ca. ' + money(ergebnis.total), W - M - 5, y + 11, { align: 'right' });
  y += 24;

  // Hinweise
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...DARK);
  doc.text('Wichtige Hinweise', M, y);
  y += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(...GRAY);
  [
    'Dies ist ein unverbindlicher Richtwert. Ein verbindliches Festpreisangebot erstellen wir nach Foto der Bohrstelle sowie Angabe von Durchmesser und Wandstärke.',
    `Anfahrt und Baustelleneinrichtung (${money(regeln.anfahrt)}) gelten im Umkreis von ca. 20–30 km um Dresden, darüber hinaus nach Vereinbarung.`,
    'Voraussetzung ist Strom (230 V oder 400 V) am Einsatzort. Wasser bringen wir bei Bedarf in Kanistern mit (im Preis enthalten, bitte vorab mitteilen). Leitungen, Bewehrung und Statik klärt der Auftraggeber vorab. Wir bohren nur an markierten, freigegebenen Punkten.',
    `Telefonisch erreichbar ${site.phoneHours}. Einsätze nach Absprache auch abends, nachts und am Wochenende.`,
  ].forEach((t) => {
    const l = doc.splitTextToSize('• ' + t, W - 2 * M - 4);
    doc.text(l, M + 1, y);
    y += l.length * 4.1 + 1;
  });

  // Werbeblock mit QR-Codes
  const by = 232;
  doc.setFillColor(...LIGHT);
  doc.roundedRect(M, by, W - 2 * M, 42, 2.5, 2.5, 'F');
  doc.setFillColor(...ORANGE);
  doc.rect(M, by, 1.6, 42, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...DARK);
  doc.text('Jetzt Festpreis anfragen', M + 7, by + 9);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...GRAY);
  doc.text(doc.splitTextToSize('Foto der Bohrstelle per WhatsApp senden: Sie erhalten Ihr konkretes Angebot. Preise, Ratgeber und Rechner finden Sie online.', 82), M + 7, by + 15);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...ORANGE);
  doc.text(site.phoneDisplay, M + 7, by + 34);
  doc.addImage(qrWa, 'PNG', 114, by + 5, 24, 24);
  doc.addImage(qrWeb, 'PNG', 150, by + 5, 24, 24);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(...DARK);
  doc.text('WhatsApp', 126, by + 33, { align: 'center' });
  doc.text('Website', 162, by + 33, { align: 'center' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(...GRAY);
  doc.text('QR scannen', 126, by + 37, { align: 'center' });
  doc.text('QR scannen', 162, by + 37, { align: 'center' });

  // Fußzeile
  doc.setFontSize(7.8);
  doc.setTextColor(...GRAY);
  doc.text(`Kernbohr-Expert · Inhaber ${site.owner} · ${site.street}, ${site.zip} ${site.city} · USt-IdNr. ${site.vatId} · ${site.email}`, W / 2, 288, { align: 'center' });

  doc.save(`Kernbohr-Expert-Richtpreis-${nr}.pdf`);
}
