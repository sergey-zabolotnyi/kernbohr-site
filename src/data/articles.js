// Ratgeber-Artikel. Allgemeine Fachinformationen; Angaben mit [ ] vom Inhaber bestätigen.
// Hinweis: Kein Rechts- oder Steuerrat. Verbindliche Auskünfte gibt der Fachplaner, Statiker oder Steuerberater.

import { berechne, eur, staffelKompakt, regeln, zuschlagTabelle, stand } from './preisliste.js';

const BEISPIELE_KOSTEN = [
  ['1× Ø 82 mm, 30 cm Beton (Leitung, Rohr)', { d: 82, tiefe: 30 }],
  ['1× Ø 150 mm, 30 cm Beton (z. B. Wärmepumpe)', { d: 150, tiefe: 30 }],
  ['1× Ø 200 mm, 40 cm Beton (Lüftung)', { d: 200, tiefe: 40 }],
  ['10× Ø 100 mm, 25 cm Beton (Serie)', { d: 100, tiefe: 25, anzahl: 10 }],
  ['1× Ø 300 mm, 40 cm Beton (Schacht)', { d: 300, tiefe: 40 }],
];

export const articles = [
  {
    slug: 'kernbohrung-oder-meisseln',
    icon: 'drill',
    date: '2026-11-08',
    title: 'Kernbohrung oder Meißeln: Was ist besser für Wand und Decke?',
    h1: 'Kernbohrung oder Meißeln: der Vergleich',
    description: 'Kernbohrung oder Meißeln? Vergleich bei Genauigkeit, Staub, Erschütterung, Lärm und Risiko für Risse. Wann welches Verfahren sinnvoll ist.',
    short: 'Genauigkeit, Staub, Erschütterung und Risiko im direkten Vergleich.',
    answer: 'Für runde Durchführungen in Beton, Stahlbeton und Mauerwerk ist die Kernbohrung in der Regel die bessere Wahl: Sie liefert eine genaue, saubere Öffnung und belastet das Bauteil weniger als Meißeln oder Stemmen. Meißeln kann bei kleinen Korrekturen im Putz oder Mauerwerk reichen, ist aber ungenauer und erzeugt mehr Staub und Erschütterung.',
    sections: [
      { h: 'Die Verfahren im Vergleich', p: ['Die Tabelle zeigt typische Unterschiede. Im Einzelfall hängt es von Bauteil, Material und Umgebung ab.'], table: {
        head: ['Kriterium', 'Kernbohrung', 'Meißeln / Stemmen'],
        rows: [
          ['Form der Öffnung', 'Rund, glatte Kanten, passgenau', 'Unregelmäßig, oft Nacharbeit nötig'],
          ['Genauigkeit', 'Hoch, Lage und Durchmesser exakt planbar', 'Gering bis mittel'],
          ['Erschütterung', 'Gering, schonend für das Bauteil', 'Hoch, Risiko für Risse im Umfeld'],
          ['Staub', 'Gering bei Nassbohrung mit Absaugung', 'Hoch'],
          ['Lärm', 'Gleichmäßig, meist niedriger', 'Laut und stoßartig'],
          ['Stahlbeton', 'Gut geeignet, durchtrennt Bewehrung sauber', 'Sehr mühsam und ungenau'],
          ['Einsatzbereich', 'Leitungen, Rohre, Lüftung, Wärmepumpe', 'Kleine Korrekturen in Putz und weichem Mauerwerk'],
        ],
      } },
      { h: 'Wann Kernbohrung die richtige Wahl ist', ul: [
        'Für Rohre, Kabel, Lüftungsleitungen und Wärmepumpen-Durchführungen durch Wand oder Decke.',
        'In Stahlbeton und tragenden Bauteilen, bei denen Erschütterungen vermieden werden sollen.',
        'In bewohnten Gebäuden, wenn Staub und Lärm gering bleiben sollen.',
      ] },
      { h: 'Wann Meißeln genügt', p: ['Kleine Ausbesserungen im Putz oder in weichem Mauerwerk lassen sich oft mit Handwerkzeug lösen. Sobald es um runde, saubere Öffnungen oder Beton geht, lohnt sich die Kernbohrung.'] },
      { h: 'Vorher klären', checks: [
        'Ist das Bauteil tragend? Dann vorab den Statiker einbeziehen.',
        'Verlaufen Leitungen oder Bewehrung an der Stelle? Bohrpunkt markieren und freigeben.',
        'Welcher Durchmesser wird benötigt? Dann Richtpreis im Rechner berechnen.',
      ] },
    ],
    faqs: [
      ['Ist Kernbohrung teurer als Meißeln?', 'Pro Öffnung kann die Kernbohrung mehr kosten. Dafür entfallen Nacharbeit, Verputzen und das Risiko von Rissen, sodass sie insgesamt oft günstiger ausfällt. Den genauen Preis zeigt der Kernbohr-Rechner.'],
      ['Kann man Stahlbeton meißeln?', 'Bei größeren Öffnungen ist das sehr aufwändig und ungenau. Für Stahlbeton ist die Kernbohrung das übliche Verfahren.'],
      ['Wird bei der Kernbohrung viel Staub erzeugt?', 'Bei der Nassbohrung wird der Staub vom Wasser gebunden. Mit Wassersauger und Abdeckung bleibt der Bereich sauber.'],
    ],
  },
  {
    slug: 'waermepumpe-kernbohrung',
    icon: 'fan',
    date: '2026-11-07',
    title: 'Kernbohrung für die Wärmepumpe: Ablauf, Abdichtung, Statik',
    h1: 'Kernbohrung für die Wärmepumpe: Ablauf, Abdichtung und Statik',
    description: 'Wie läuft die Kernbohrung für Wärmepumpe oder Klimagerät ab? Durchmesser, Position, Abdichtung nach DIN 18533, Statik, typische Fehler und Steuervorteil.',
    short: 'Durchmesser, Position, Abdichtung und die typischen Fehler bei der Wanddurchführung.',
    answer: 'Für die Leitungen von Wärmepumpe oder Klimagerät wird ein runder Durchbruch durch die Außenwand gebohrt. Entscheidend sind die richtige Position, ein passender Durchmesser, ein leichtes Gefälle nach außen und eine dauerhaft dichte Abdichtung. Bei tragenden oder erdberührten Bauteilen sollten Statiker bzw. Fachplaner einbezogen werden.',
    sections: [
      { h: 'Warum die Wärmepumpe eine Kernbohrung braucht', p: [
        'Leitungen für Kältemittel, Heizungsvor- und -rücklauf sowie Strom und Steuerung müssen von der Außeneinheit in das Gebäude geführt werden. Die Kernbohrung liefert eine glatte, runde und passgenaue Öffnung, ohne Erschütterungen, die Risse im Mauerwerk verursachen können.' ] },
      { h: 'Split oder Monoblock: Was geht durch die Wand?', p: [
        'Bei einem Split-Gerät (und bei Klimageräten) laufen in der Regel zwei Kältemittelleitungen plus Strom- und Steuerleitung durch die Wand. Dafür genügen oft kleinere Durchmesser, typisch sind etwa 60–82 mm.',
        'Bei einem Monoblock-Gerät führen Heizungsvor- und -rücklauf (gedämmt) sowie Strom durch die Wand. Die Bohrung fällt deshalb meist größer aus, typisch sind etwa 100–200 mm. Maßgeblich sind immer die Angaben des Herstellers und die gewählte Dämmung bzw. das Futterrohr.' ] },
      { h: 'Wandmaterial und Dämmung', p: [
        'Gebohrt wird durch Mauerwerk, Beton oder Stahlbeton, häufig zusätzlich durch ein Wärmedämmverbundsystem. Bei Stahlbeton muss die Bewehrung vorab geortet werden. Die Dämmung wird nach der Durchführung sauber geschlossen, damit keine Wärmebrücke entsteht.' ] },
      { h: 'Die richtige Position', ul: [
        'Genügend Abstand zu Gebäudeecken, Fenstern, Türen und Stürzen halten',
        'Leitungen, Bewehrung und Hohlräume vor dem Bohren orten',
        'Möglichst kurze Leitungswege zwischen Außen- und Inneneinheit',
        'Leichtes Gefälle nach außen einplanen, damit kein Wasser in die Wand läuft' ] },
      { h: 'Abdichtung: Warum Bauschaum allein nicht reicht', p: [
        'Bei Bauteilen, die an das Erdreich grenzen, gilt für die Abdichtung die DIN 18533 (Abdichtung erdberührter Bauteile). Gegen drückendes Wasser kommen Futterrohre mit Ringraumdichtung oder Flanschsysteme zum Einsatz. Bauschaum und Silikon sind dafür kein dauerhafter Ersatz.',
        'Oberhalb des Geländes wird die Durchführung mit geeignetem Futterrohr bzw. Leerrohr, Dichtmanschette und witterungsbeständigem Dichtstoff geschlossen. Die genauen Vorgaben stehen in der Herstellerdokumentation.' ] },
      { h: 'Statik: Wann ist ein Fachplaner nötig?', p: [
        'In nichttragenden Wänden ist eine einzelne Bohrung meist unkritisch. Bei tragenden Wänden, mehreren Bohrungen dicht beieinander, Bohrungen nahe an Stürzen, Stützen oder Auflagern sowie in Bodenplatten empfehlen wir die Abstimmung mit Statiker oder Tragwerksplaner.' ] },
      { h: 'Ablauf in sechs Schritten', ol: [
        'Anfrage mit Foto und Gerätedatenblatt senden',
        'Position festlegen und Wand orten (Leitungen, Bewehrung)',
        'Festpreisangebot erhalten',
        'Termin vereinbaren: Strom, Wasser und Zugang klären',
        'Kernbohrung durchführen, Bohrwasser auffangen, Bohrkern entfernen',
        'Futterrohr setzen, abdichten, Arbeitsbereich aufgeräumt übergeben' ] },
      { h: 'Typische Fehler', ul: [
        'Bohrung ohne vorherige Ortung von Leitungen und Bewehrung',
        'Durchmesser zu knapp: Dämmung und Futterrohr passen nicht mehr hinein',
        'Kein Gefälle nach außen, Wasser dringt ein',
        'Abdichtung nur mit Bauschaum bei erdberührten Bauteilen',
        'Bohrstelle zu nah an Ecke oder Öffnung gewählt' ] },
      { h: 'Was kostet die Kernbohrung?', p: [
        'Der Preis hängt von Durchmesser, Wandstärke, Material, Zugang und Anfahrt ab. Eine Übersicht der Preisfaktoren finden Sie auf unserer Seite zu den <a href="/preise/">Kosten</a>, einen ersten Richtwert liefert der <a href="/#kb-rechner">Kernbohr-Rechner</a>.' ] },
      { h: 'Steuervorteil für Privatkunden', p: [
        'Handwerkerleistungen im eigenen Haushalt können nach § 35a EStG steuerlich berücksichtigt werden: 20 % der Arbeits- und Fahrtkosten, höchstens 1.200 € pro Jahr. Voraussetzung sind unter anderem eine ordnungsgemäße Rechnung und unbare Zahlung. Bitte klären Sie Einzelheiten mit Ihrem Steuerberater.' ] },
    ],
    faqs: [
      ['Welchen Durchmesser braucht meine Wärmepumpe?', 'Das hängt vom Gerät und der Leitungsführung ab. Senden Sie uns Datenblatt und Foto, wir nennen den passenden Durchmesser.'],
      ['Brauche ich einen Statiker?', 'Bei tragenden Wänden oder mehreren Bohrungen nah beieinander ist eine Abstimmung sinnvoll. Wir beraten Sie dazu gern.'],
      ['Wie lange dauert die Bohrung?', 'Eine Standardbohrung dauert in der Regel wenige Minuten bis etwa eine Stunde inklusive Aufbau.'],
    ],
  },
  {
    slug: 'wanddurchbruch-tragende-wand',
    icon: 'opening',
    date: '2026-11-07',
    title: 'Wanddurchbruch: tragende Wand, Statik und Ablauf',
    h1: 'Wanddurchbruch: Wann ist eine Statik nötig und wie läuft er ab?',
    description: 'Tragende oder nichttragende Wand? Wann ein Statiker nötig ist, wie ein Wanddurchbruch abläuft und was Eigentümer und Mieter beachten müssen.',
    short: 'Tragend oder nicht? Statik, Verfahren, Ablauf und Zustimmungen.',
    answer: 'Ob ein Wanddurchbruch möglich ist, hängt davon ab, ob die Wand tragend ist. Bei tragenden Wänden ist immer eine statische Berechnung nötig, meist wird vor dem Öffnen ein Träger (Sturz) eingebaut. Wir arbeiten dafür mit Ihrem Statiker oder Architekten zusammen.',
    sections: [
      { h: 'Tragende oder nichttragende Wand?', p: [
        'Tragende Wände nehmen Lasten von Decken und darüberliegenden Geschossen auf. Hinweise können Außenwände, große Wandstärken oder Wände sein, die in jedem Geschoss an gleicher Stelle liegen. Sicher beurteilen kann das nur ein Fachmann anhand der Bauunterlagen oder einer Untersuchung vor Ort.' ] },
      { h: 'Statik und Nachweis', p: [
        'Für Durchbrüche in tragenden Wänden berechnet ein Statiker, ob und wie die Öffnung abgefangen werden muss. Üblich sind Stahlträger oder Stürze, teils mit temporärer Abstützung. Die Ausführung erfolgt nach dieser Planung.' ] },
      { h: 'Verfahren: Bohren, Sägen oder Stemmen', ul: [
        '<strong>Kernbohren:</strong> für runde Öffnungen, Ø 14–500 mm, präzise und erschütterungsarm',
        '<strong>Wand- und Betonsägen:</strong> für rechteckige Öffnungen wie Türen oder Fenster, mit sauberen Kanten',
        '<strong>Stemmen:</strong> erzeugt deutlich mehr Erschütterung, Staub und Lärm und wird bei empfindlichem Bestand eher vermieden' ] },
      { h: 'Ablauf eines Durchbruchs', ol: [
        'Bestand prüfen und Statik klären',
        'Bereich schützen und abdecken, Staub- und Lärmschutz einrichten',
        'Öffnung bohren bzw. sägen, Material abtransportieren',
        'Träger bzw. Einfassung einbauen',
        'Kanten herrichten, Bereich aufgeräumt übergeben' ] },
      { h: 'Zustimmungen: Wer muss gefragt werden?', p: [
        'Mieter benötigen die Zustimmung des Vermieters, Wohnungseigentümer bei Eingriffen in tragende Teile in der Regel die der Eigentümergemeinschaft. Ob eine bauordnungsrechtliche Anzeige oder Genehmigung nötig ist, hängt vom Gebäude und der Landesbauordnung ab. Bitte klären Sie das vorab mit der Bauaufsicht oder Ihrem Architekten.' ] },
      { h: 'Arbeiten im bewohnten Gebäude', p: [
        'Mit staub- und lärmreduzierter Technik und passenden Schutzmaßnahmen sind Durchbrüche auch im bewohnten Zustand möglich. Sprechen Sie uns zu Arbeitszeiten und Zugang an.' ] },
    ],
    faqs: [
      ['Wie breit darf ein Wanddurchbruch sein?', 'Das bestimmt die Statik. Ohne Berechnung durch einen Statiker können wir bei tragenden Wänden keine Maße freigeben.'],
      ['Muss ich während der Arbeiten ausziehen?', 'Nein, in der Regel nicht. Wir arbeiten staub- und lärmreduziert, auch in bewohnten Objekten.'],
      ['Wie lange dauert ein Durchbruch?', 'Das hängt von Größe, Material und Statik ab. Nach Foto und Maßen nennen wir Ihnen einen realistischen Zeitrahmen.'],
    ],
  },
  {
    slug: 'checkliste-termin-vorbereitung',
    icon: 'clipboard',
    date: '2026-11-07',
    title: 'Checkliste: So bereiten Sie den Kernbohr-Termin vor',
    h1: 'Checkliste: So bereiten Sie den Kernbohr-Termin vor',
    description: 'Strom, Wasser, Zugang, Schutz und Fotos: Diese Checkliste hilft Ihnen, den Termin für Kernbohrung oder Betonsägen reibungslos vorzubereiten.',
    short: 'Strom, Wasser, Zugang, Fotos: In zehn Minuten sind Sie startklar.',
    answer: 'Für einen reibungslosen Termin brauchen wir Zugang zur Bohrstelle, Strom (in der Regel 230 V, bei großen Durchmessern eventuell 400 V), Wasser, einen freien Arbeitsbereich und Informationen zu Leitungen in der Wand. Mit dieser Checkliste sind Sie in zehn Minuten vorbereitet.',
    sections: [
      { h: 'Vor dem Angebot', checks: [
        'Fotos der Bohrstelle aus der Nähe und aus der Entfernung',
        'Gewünschten Durchmesser und Anzahl der Bohrungen notieren',
        'Wandstärke und Material angeben (soweit bekannt)',
        'Grundriss oder Leitungsplan bereitlegen, falls vorhanden',
        'Bei tragenden Wänden: Statik oder Freigabe bereithalten' ] },
      { h: 'Vor dem Termin', checks: [
        'Stromanschluss in der Nähe: 230-V-Steckdose, alternativ 400 V (Adapter auf 16 A)',
        'Wasser: Anschluss in der Nähe der Bohrstelle, ohne Anschluss bringen wir es in Kanistern mit (bitte vorab Bescheid geben)',
        'Bohrstelle und Umgebung freiräumen, Möbel und Böden abdecken',
        'Bohrstelle markieren, genaue Position und Höhe abstimmen',
        'Zugang klären: Treppenhaus, Aufzug, Parkplatz für das Fahrzeug',
        'Vermieter bzw. Eigentümergemeinschaft informieren, falls nötig' ] },
      { h: 'Am Tag der Arbeit', checks: [
        'Ansprechpartner ist vor Ort und zeigt die Bohrstelle',
        'Haustiere und Kinder aus dem Arbeitsbereich fernhalten',
        'Empfindliche Geräte und Wertsachen entfernen' ] },
      { h: 'Danach', checks: [
        'Durchbruch bei Bedarf abdichten bzw. verschließen lassen',
        'Rechnung mit ausgewiesenen Arbeitskosten aufbewahren (für § 35a EStG, Zahlung unbar)',
        'Fotos der fertigen Arbeit für Ihre Unterlagen machen' ] },
    ],
    faqs: [
      ['Brauchen Sie Wasser vor Ort?', 'Für die Nassbohrung brauchen wir Wasser. Ist kein Wasseranschluss vorhanden, ist das kein Problem: Sagen Sie uns vorab Bescheid, dann bringen wir das Wasser in Kanistern mit, das ist im Auftragspreis enthalten. Strom muss dagegen vor Ort vorhanden sein.'],
      ['Welchen Strom brauchen Sie?', 'Wir arbeiten mit 230 V oder 400 V (Drehstrom, per Adapter auf 16 A). Meist genügt eine 230-V-Steckdose. Wir klären das vorab mit Ihnen.'],
    ],
  },
  {
    slug: 'kernbohrung-dresden-altbau-plattenbau',
    icon: 'building',
    date: '2026-11-07',
    title: 'Kernbohrung in Dresden: Altbau, Plattenbau und Neubau',
    h1: 'Kernbohrung in Dresden: Worauf es bei Altbau, Plattenbau und Neubau ankommt',
    description: 'Gründerzeit-Altbau, Plattenbau oder Neubau: So unterscheiden sich Kernbohrungen in Dresdner Gebäuden, mit Hinweisen zum Denkmalschutz.',
    short: 'Ziegel, Betonfertigteile oder Stahlbeton: Jedes Material verlangt ein eigenes Vorgehen.',
    answer: 'In Dresden bohren wir in sehr unterschiedlichen Gebäuden: dicke Ziegelwände im Altbau, tragende Betonfertigteile im Plattenbau und bewehrten Stahlbeton im Neubau. Jedes Material verlangt andere Technik, Vorsicht und Abstimmung, bei denkmalgeschützten Häusern zusätzlich die Denkmalschutzbehörde.',
    sections: [
      { h: 'Altbau (Gründerzeit und Vorkriegsbauten)', p: [
        'In Vierteln wie Neustadt, Striesen, Blasewitz oder Plauen stehen viele Gebäude mit massiven Ziegelwänden. Die Wände sind oft deutlich dicker als im Neubau, typisch etwa 38 cm und mehr, das Material ist weich, aber die Bohrtiefe groß. Wichtig sind Staubschutz, empfindliche Putze und Stuck sowie die Beachtung von Holzbalkendecken.' ] },
      { h: 'Plattenbau', p: [
        'In Plattenbau-Quartieren wie Gorbitz, Prohlis oder Johannstadt bestehen Wände und Decken aus Betonfertigteilen. Viele dieser Bauteile sind tragend. Eingriffe sind nur nach Abstimmung mit Eigentümer bzw. Wohnungsunternehmen und gegebenenfalls Statiker möglich. Für Leitungsdurchführungen, Lüftung oder Klimageräte gibt es oft vorgesehene Bereiche.' ] },
      { h: 'Neubau und Stahlbeton', p: [
        'Im Neubau trifft man häufig auf Stahlbeton mit dichter Bewehrung. Die Bewehrung wird vorab geortet, damit tragende Stäbe nicht ohne Freigabe durchtrennt werden. Diamantbohrkronen durchtrennen Bewehrung, der Aufwand und die Zeit steigen dabei.' ] },
      { h: 'Denkmalschutz', p: [
        'In Dresden stehen viele Gebäude unter Denkmalschutz. Eingriffe in die Substanz, auch Bohrungen, sollten vorab mit der Denkmalschutzbehörde abgestimmt werden.' ] },
      { h: 'Arbeiten im bewohnten Bestand', p: [
        'Gerade im Altbau und im Mehrfamilienhaus zählen Staub-, Lärm- und Erschütterungsschutz. Kernbohren ist dafür deutlich schonender als Stemmen. Wir stimmen Arbeitszeiten und Schutzmaßnahmen mit Ihnen und den Hausbewohnern ab.' ] },
    ],
    faqs: [
      ['Kann ich im Plattenbau einfach eine Leitung durchbohren lassen?', 'Nicht ohne Abstimmung. Viele Platten sind tragend. Klären Sie das mit Eigentümer oder Wohnungsunternehmen und sprechen Sie uns zur Machbarkeit an.'],
      ['Bohren Sie auch in denkmalgeschützten Gebäuden?', 'Ja, nach Abstimmung mit der zuständigen Denkmalschutzbehörde. Wir beraten zu schonenden Verfahren.'],
    ],
  },
  {
    slug: 'kernbohrung-kosten-dresden',
    icon: 'euro',
    date: '2026-11-11',
    title: 'Was kostet eine Kernbohrung? Preise 2026 in Dresden',
    h1: 'Was kostet eine Kernbohrung? Preise und Beispiele für Dresden',
    description: 'Kernbohrung Kosten 2026: Preis je cm Bohrtiefe nach Durchmesser, Mindestauftragswert, Anfahrt, Zuschläge und konkrete Rechenbeispiele aus Dresden.',
    short: 'Preis je cm, Mindestauftragswert, Zuschläge und Rechenbeispiele nach Preisliste 2026.',
    answer: `Eine Kernbohrung wird nach Durchmesser und Bohrtiefe berechnet: Bei Ø 14 bis 101 mm in Beton kostet sie ${eur(staffelKompakt[0][2])} je cm Bohrtiefe (brutto). Hinzu kommen die Anfahrt mit ${eur(regeln.anfahrt)} und eine Pilotbohrung mit ${eur(regeln.pilotbohrung)}. Der Mindestauftragswert liegt bei ${eur(regeln.mindestpreis)}, sodass auch eine einzelne kleine Bohrung dort beginnt.`,
    sections: [
      { h: 'So setzt sich der Preis zusammen', p: [
        `Der Bohrpreis ergibt sich aus dem Preis je cm Bohrtiefe (abhängig vom Durchmesser und vom Material) mal Bohrtiefe mal Anzahl der Bohrungen. Dazu kommen die Anfahrt und Baustelleneinrichtung für ${eur(regeln.anfahrt)} (Umkreis bis ca. 30 km um Dresden) sowie je Bohrung ${eur(regeln.pilotbohrung)} für die Pilotbohrung, mit der der Bohrständer an der Wand befestigt wird.`,
        `Liegt die Summe unter ${eur(regeln.mindestpreis)}, gilt der Mindestauftragswert von ${eur(regeln.mindestpreis)}. Alle Preise sind Bruttopreise nach unserer Preisliste (Stand ${stand}).`,
      ] },
      { h: 'Preis je cm Bohrtiefe nach Durchmesser', table: {
        head: ['Durchmesser', 'Beton / Stahlbeton', 'Mauerwerk'],
        rows: staffelKompakt.map(([lo, hi, b, m]) => [`Ø ${lo}–${hi} mm`, `${eur(b)} je cm`, `${eur(m)} je cm`]),
      } },
      { h: 'Rechenbeispiele aus der Praxis', p: ['Die Beispiele zeigen den Gesamtpreis einschließlich Anfahrt und Pilotbohrung. Die Werte stammen aus demselben Rechner wie der Kernbohr-Rechner auf der Startseite.'], table: {
        head: ['Beispiel', 'Rechnerische Summe', 'Gesamtpreis (brutto)'],
        rows: BEISPIELE_KOSTEN.map(([t, a]) => { const r = berechne(a); return [t, eur(r.summe), r.mindestpreisGreift ? `${eur(r.total)} (Mindestauftragswert)` : eur(r.total)]; }),
      } },
      { h: 'Zuschläge und Zusatzleistungen', table: {
        head: ['Position', 'Preis'],
        rows: zuschlagTabelle,
      } },
      { h: 'Was den Preis senkt', ul: [
        'Mehrere Bohrungen in einem Termin: Anfahrt und Mindestauftragswert fallen nur einmal an.',
        'Bohrungen am Werktag in der normalen Arbeitszeit statt nachts oder am Wochenende.',
        'Vorbereitete Baustelle mit Strom, Wasseranschluss und freiem Zugang (siehe Checkliste).',
        'Klar markierte Bohrpunkte und freigegebene Leitungsverläufe, damit keine Wartezeit entsteht.',
      ] },
      { h: 'Verbindlicher Preis', p: ['Der Rechner liefert einen Richtpreis. Den verbindlichen Preis nennen wir nach Ihren Angaben oder Fotos der Bohrstelle. Mit einem Foto per WhatsApp geht das meist am selben Tag.'] },
    ],
    faqs: [
      ['Was kostet eine einzelne Kernbohrung mindestens?', `Der Mindestauftragswert beträgt ${eur(regeln.mindestpreis)} brutto. Er gilt, wenn die berechnete Summe aus Bohrpreis, Pilotbohrung und Anfahrt darunter liegt.`],
      ['Wird nach Durchmesser oder nach Tiefe abgerechnet?', 'Nach beidem: Der Preis je cm hängt vom Durchmesser ab und wird mit der Bohrtiefe multipliziert. Größere Durchmesser kosten je cm mehr.'],
      ['Sind die Preise netto oder brutto?', `Alle genannten Preise sind Bruttopreise nach unserer Preisliste (Stand ${stand}).`],
      ['Kostet die Anfahrt immer extra?', `Ja, die Anfahrt und Baustelleneinrichtung berechnen wir mit ${eur(regeln.anfahrt)} im Umkreis bis ca. 30 km um Dresden. Bei mehreren Bohrungen im selben Termin fällt sie nur einmal an.`],
      ['Wie viel teurer ist eine Bohrung nachts oder am Wochenende?', 'Nachts (23 bis 6 Uhr) berechnen wir 75 % Zuschlag auf den Bohrpreis, am Samstag, Sonntag und an Feiertagen 100 %.'],
    ],
  },
  {
    slug: 'kernbohrung-mietwohnung-eigentum',
    icon: 'building',
    date: '2026-11-11',
    title: 'Kernbohrung in Miet- und Eigentumswohnung: Wer muss zustimmen?',
    h1: 'Kernbohrung in Mietwohnung und Eigentumswohnung: Wer muss zustimmen?',
    description: 'Darf ich als Mieter oder Wohnungseigentümer eine Kernbohrung in Wand oder Decke machen lassen? Zustimmung, Statik, Gemeinschaftseigentum und praktische Schritte.',
    short: 'Vermieter, Eigentümergemeinschaft und Statik: Wen Sie vor der Bohrung fragen sollten.',
    answer: 'Wer in einer Mietwohnung eine Kernbohrung durch Außenwand, tragende Wand oder Decke machen lassen möchte, sollte vorher die schriftliche Zustimmung des Vermieters einholen. In einer Eigentumswohnung gehören Außenwände, tragende Wände und Decken in der Regel zum Gemeinschaftseigentum, hier ist die Eigentümergemeinschaft einzubeziehen. Bei tragenden Bauteilen klärt vorab ein Statiker, ob die Bohrung möglich ist.',
    sections: [
      { h: 'Mietwohnung: Vermieter vorher fragen', p: [
        'Kleine Löcher für Dübel und Schrauben sind im Alltag üblich. Eine Kernbohrung durch Außenwand oder Decke ist dagegen ein Eingriff in die Bausubstanz, etwa für Klimagerät, Dunstabzug oder Leitungen. Dafür sollte der Vermieter vorab schriftlich zustimmen. Bitte nennen Sie in Ihrer Anfrage Ort, Durchmesser und Zweck der Bohrung.',
        'Ob und unter welchen Bedingungen im Einzelfall ein Anspruch auf Zustimmung besteht, hängt vom Mietvertrag und der Maßnahme ab. Das klären Sie bei Unsicherheit mit dem Mieterverein oder einem Rechtsanwalt.',
      ] },
      { h: 'Eigentumswohnung: Gemeinschaftseigentum beachten', p: [
        'Außenwände, tragende Innenwände und Geschossdecken gehören in der Regel zum Gemeinschaftseigentum. Eingriffe darin sind Sache der Eigentümergemeinschaft. Fragen Sie vorab bei der Hausverwaltung nach, ob ein Beschluss nötig ist und ob es Vorgaben zu Position, Abdichtung oder Optik an der Fassade gibt.',
        'Innerhalb Ihres Sondereigentums, zum Beispiel in einer nichttragenden Trennwand, ist die Lage oft einfacher. Auch hier gilt: im Zweifel die Teilungserklärung und die Hausverwaltung prüfen.',
      ] },
      { h: 'Tragend oder nicht? Statik zuerst', p: [
        'Unabhängig von der Eigentumsform gilt: Bei tragenden Wänden, Stützen und Unterzügen entscheidet ein Statiker, ob und wo gebohrt werden darf. Wir bohren erst an dem Punkt, den der Auftraggeber markiert und freigegeben hat, nachdem Leitungen, Bewehrung und Statik geklärt sind.',
      ] },
      { h: 'So gehen Sie Schritt für Schritt vor', ol: [
        'Zweck und Durchmesser festlegen (siehe Bohrdurchmesser-Ratgeber).',
        'Bei Mietwohnung: Vermieter schriftlich um Zustimmung bitten. Bei Eigentumswohnung: Hausverwaltung informieren.',
        'Bei tragenden Bauteilen Statiker einbeziehen.',
        'Bohrstelle markieren, Leitungsverläufe klären und freigeben.',
        'Foto der Stelle per WhatsApp senden und Richtpreis erhalten.',
        'Termin vereinbaren und Strom bereitstellen. Wasser bringen wir bei Bedarf in Kanistern mit.',
      ] },
      { h: 'Lärm und Ruhezeiten im Haus', p: [
        'Kernbohren ist deutlich leiser und erschütterungsärmer als Stemmen, trotzdem sollten Nachbarn vorab informiert werden. Wir stimmen die Arbeitszeiten mit Ihnen ab und beachten Ruhezeiten und Hausordnung, soweit sie den Einsatz zulassen.',
      ] },
    ],
    faqs: [
      ['Darf ich als Mieter einfach eine Kernbohrung machen lassen?', 'Bei Durchbrüchen durch Außenwand oder Decke sollten Sie vorab die schriftliche Zustimmung des Vermieters einholen. Kleine Dübellöcher sind etwas anderes als eine Kernbohrung.'],
      ['Wer entscheidet in der Eigentümergemeinschaft?', 'Eingriffe in Gemeinschaftseigentum wie Außenwände und tragende Bauteile klären Sie mit der Eigentümergemeinschaft und der Hausverwaltung. Auskunft gibt die Teilungserklärung.'],
      ['Brauche ich für die Bohrung einen Statiker?', 'Bei tragenden Wänden, Stützen, Unterzügen und Decken ja. Der Statiker legt fest, ob und wo gebohrt werden darf.'],
      ['Ist das eine Rechtsberatung?', 'Nein. Dieser Ratgeber gibt allgemeine Hinweise. Verbindliche Auskunft geben Mieterverein, Rechtsanwalt, Hausverwaltung und Statiker.'],
    ],
  },
  {
    slug: 'handwerkerleistungen-steuer-absetzen-35a',
    icon: 'clipboard',
    date: '2026-11-11',
    title: 'Kernbohrung von der Steuer absetzen: § 35a EStG einfach erklärt',
    h1: 'Kernbohrung von der Steuer absetzen: § 35a EStG einfach erklärt',
    description: 'Handwerkerleistungen steuerlich absetzen: 20 % der Arbeitskosten, bis 1.200 € Steuerermäßigung pro Jahr. Voraussetzungen, Rechnung, Überweisung und was nicht zählt.',
    short: '20 % der Arbeitskosten, bis zu 1.200 € pro Jahr: Voraussetzungen und Rechnung.',
    answer: 'Für Handwerkerleistungen im eigenen Haushalt können Privatpersonen nach § 35a EStG 20 % der Arbeitskosten (einschließlich Fahrt- und Maschinenkosten) von der Steuerschuld abziehen, höchstens 1.200 € pro Jahr. Voraussetzung sind eine Rechnung mit separat ausgewiesenen Arbeitskosten und eine unbare Zahlung per Überweisung. Materialkosten zählen nicht.',
    sections: [
      { h: 'Was ist § 35a EStG?', p: [
        'Der § 35a Einkommensteuergesetz regelt die Steuerermäßigung für haushaltsnahe Dienstleistungen und Handwerkerleistungen. Die Ermäßigung mindert direkt die Steuerschuld, sie ist also mehr wert als ein reiner Abzug vom Einkommen.',
      ] },
      { h: 'Die wichtigsten Zahlen', table: {
        head: ['Punkt', 'Regelung'],
        rows: [
          ['Ermäßigung', '20 % der Arbeitskosten'],
          ['Höchstbetrag', '1.200 € Steuerermäßigung pro Jahr (bei bis zu 6.000 € Arbeitskosten)'],
          ['Was zählt', 'Arbeitskosten, Fahrt- und Maschinenkosten'],
          ['Was nicht zählt', 'Materialkosten und Waren'],
          ['Zahlung', 'Unbar per Überweisung, nicht bar'],
          ['Nachweis', 'Rechnung mit separat ausgewiesenen Arbeitskosten'],
        ],
      } },
      { h: 'Wann gilt das für eine Kernbohrung?', p: [
        'Begünstigt sind Renovierungs-, Erhaltungs- und Modernisierungsarbeiten im eigenen Haushalt, zum Beispiel eine Kernbohrung für Wärmepumpe, Klimagerät, Lüftung oder neue Leitungen im bestehenden Wohnraum. Arbeiten im Rahmen eines Neubaus sind in der Regel nicht begünstigt. Auch Mieter können profitieren, wenn die Kosten in der Nebenkostenabrechnung oder über eine eigene Rechnung nachweisbar sind.',
        'Werden Maßnahmen öffentlich gefördert, etwa durch Zuschuss oder zinsverbilligtes Darlehen, ist eine zusätzliche Steuerermäßigung für dieselben Kosten ausgeschlossen. Details klärt Ihr Steuerberater.',
      ] },
      { h: 'So gehen Sie vor', ol: [
        'Auftrag erteilen und eine Rechnung mit getrennt ausgewiesenen Arbeits- und Materialkosten verlangen.',
        'Rechnung per Überweisung bezahlen. Den Kontoauszug oder Überweisungsbeleg aufbewahren.',
        'In der Steuererklärung die Handwerkerleistungen angeben.',
        'Rechnung und Zahlungsnachweis für das Finanzamt bereithalten.',
      ] },
      { h: 'Unsere Rechnung', p: [
        'Auf Wunsch weisen wir Arbeits-, Fahrt- und Maschinenkosten auf der Rechnung getrennt aus. Bitte sagen Sie uns das beim Auftrag. Wir erteilen keine Steuerberatung, bitte klären Sie Einzelheiten mit Ihrem Steuerberater oder dem Lohnsteuerhilfeverein.',
      ] },
    ],
    faqs: [
      ['Wie viel kann ich bei einer Kernbohrung absetzen?', '20 % der Arbeitskosten (inklusive Fahrt- und Maschinenkosten), insgesamt höchstens 1.200 € Steuerermäßigung pro Jahr für alle Handwerkerleistungen zusammen.'],
      ['Kann ich bar bezahlen und trotzdem absetzen?', 'Nein. Die Zahlung muss unbar per Überweisung erfolgen, und Sie benötigen eine Rechnung.'],
      ['Zählt das Material mit?', 'Nein. Begünstigt sind die Arbeitskosten, nicht das Material.'],
      ['Gilt das auch für Mieter?', 'Ja, wenn die Leistung im Haushalt des Mieters erbracht wird und er sie über Rechnung oder Nebenkostenabrechnung nachweisen kann.'],
      ['Ist das Steuerberatung?', 'Nein, es sind allgemeine Hinweise. Verbindliche Auskunft gibt Ihr Steuerberater oder das Finanzamt.'],
    ],
  },
  {
    slug: 'betonbohrung-dresden',
    icon: 'drill',
    date: '2026-11-11',
    title: 'Betonbohrung in Dresden: Kernbohren, Bohrhammer oder Wandsäge?',
    h1: 'Betonbohrung in Dresden: Welches Verfahren passt?',
    description: 'Betonbohrung in Dresden: Wann reicht der Bohrhammer, wann braucht es eine Kernbohrung oder Wandsäge? Durchmesser, Staub, Kosten und Auswahlhilfe vom Fachbetrieb.',
    short: 'Bohrhammer, Kernbohrung oder Wandsäge: Das passende Verfahren für Ihre Öffnung.',
    answer: `Für kleine Dübellöcher genügt bei einer Betonbohrung ein Bohrhammer. Sobald eine saubere, runde Öffnung für Rohre, Kabel oder Lüftung nötig ist, ist die Kernbohrung mit diamantbesetzter Krone das passende Verfahren: Ø 14 bis 500 mm, bis 2 m Tiefe, staubarm und erschütterungsarm. Für große, eckige Öffnungen setzt man die Wandsäge ein.`,
    sections: [
      { h: 'Drei Verfahren im Überblick', table: {
        head: ['Verfahren', 'Typischer Einsatz', 'Ergebnis'],
        rows: [
          ['Bohrhammer', 'Dübel, Schrauben, kleine Löcher', 'kleines Loch, bei Stahlbeton begrenzt'],
          ['Kernbohrung', 'Rohre, Leitungen, Lüftung, Wärmepumpe (Ø 14–500 mm)', 'rundes, sauberes Bohrloch, Bohrkern'],
          ['Wandsäge / Betonschneiden', 'Türen, Fenster, große Durchbrüche, Treppenöffnungen', 'gerade Schnitte, exakte Kanten'],
        ],
      } },
      { h: 'Warum Kernbohrung für Rohr- und Kabeldurchführungen', p: [
        'Bei der Kernbohrung schneidet eine rotierende Diamantkrone einen runden Zylinder aus dem Beton und lässt ihn als Bohrkern stehen. Das ist präziser und erschütterungsärmer als Schlagbohren oder Stemmen und schont angrenzende Bauteile. Die Bohrung wird in der Regel nass ausgeführt, mit Wassersauger bleibt es sauber.',
      ] },
      { h: 'Welcher Durchmesser für welchen Zweck?', p: ['Die Wahl des Durchmessers hängt vom Rohr oder der Leitung ab, plus Platz für Dämmung oder Dichtung. Eine Übersicht finden Sie in unserem Ratgeber zur Wahl des Bohrdurchmessers.'] },
      { h: 'Was kostet eine Betonbohrung?', p: ['Der Preis richtet sich nach Durchmesser und Bohrtiefe, ab 1,20 € je cm Bohrtiefe (brutto, Ø 14–101 mm in Beton). Dazu kommen Anfahrt und Pilotbohrung, der Mindestauftragswert beträgt 250 €. Details und Beispiele stehen im Kostenratgeber und im Kernbohr-Rechner.'] },
      { h: 'Vorher klären', ul: [
        'Leitungen, Rohre und Bewehrung an der Bohrstelle klären und freigeben.',
        'Bei tragenden Bauteilen den Statiker einbeziehen.',
        'Strom in der Nähe bereitstellen. Wasser bringen wir bei Bedarf in Kanistern mit.',
        'Bohrstelle markieren und ein Foto per WhatsApp senden.',
      ] },
    ],
    faqs: [
      ['Ist Betonbohrung dasselbe wie Kernbohrung?', 'Betonbohrung ist der Oberbegriff für Bohrungen in Beton. Die Kernbohrung ist das Verfahren mit Diamantkrone für runde, saubere Öffnungen größerer Durchmesser.'],
      ['Wann reicht ein Bohrhammer nicht aus?', 'Bei größeren Durchmessern, Stahlbeton mit Bewehrung und überall dort, wo Erschütterungen und Ausbrüche vermieden werden sollen, ist eine Kernbohrung die bessere Wahl.'],
      ['Wie groß kann eine Betonbohrung werden?', 'Wir bohren Ø 14 bis 500 mm, bis zu 2 m tief. Größere Durchmesser auf Anfrage.'],
      ['Machen Sie auch Betonbohrungen über Kopf und in Wohnungen?', 'Ja, horizontal, vertikal und über Kopf, in bewohnten Gebäuden staubarm mit Wassersauger.'],
    ],
  },
];
