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
      ['Wird bei der Kernbohrung viel Staub erzeugt?', 'Bei der Nassbohrung wird der Staub vom Wasser gebunden. Mit Abdeckung und auf Wunsch Wassersauger bleibt der Bereich sauber.'],
    ],
  },
  {
    slug: 'waermepumpe-kernbohrung',
    icon: 'fan',
    date: '2026-11-07',
    title: 'Kernbohrung für die Wärmepumpe: Ablauf, Abdichtung, Statik',
    h1: 'Kernbohrung für die Wärmepumpe: Ablauf, Abdichtung und Statik',
    description: 'Kernbohrung für Wärmepumpe oder Klimagerät: Durchmesser, Position, Kellerwand, Abdichtung nach DIN 18533, Statik und typische Fehler.',
    short: 'Durchmesser, Position, Abdichtung und die typischen Fehler bei der Wanddurchführung.',
    answer: 'Für die Leitungen von Wärmepumpe oder Klimagerät wird ein runder Durchbruch durch die Außenwand gebohrt. Entscheidend sind die richtige Position, ein passender Durchmesser, ein leichtes Gefälle nach außen und eine dauerhaft dichte Abdichtung. Bei tragenden oder erdberührten Bauteilen sollten Statiker bzw. Fachplaner einbezogen werden.',
    sections: [
      { h: 'Warum jetzt viele Hausbesitzer auf Wärmepumpe umsteigen', p: [
        'Immer mehr Eigentümer in Sachsen ersetzen Gas- oder Ölheizungen durch eine Wärmepumpe. Für die Installation wird fast immer eine saubere Wanddurchführung gebraucht, und genau dafür sind wir da. Ob und in welcher Höhe es dafür Zuschüsse gibt, ändert sich regelmäßig; aktuelle Informationen finden Sie bei <a href="https://www.bafa.de" rel="noopener" target="_blank">BAFA</a> und <a href="https://www.kfw.de" rel="noopener" target="_blank">KfW</a>.' ] },
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
      { h: 'Wanddurchführung der Wärmepumpe abdichten: Warum Bauschaum allein nicht reicht', p: [
        'Bei Bauteilen, die an das Erdreich grenzen, gilt für die Abdichtung die DIN 18533 (Abdichtung erdberührter Bauteile). Gegen drückendes Wasser kommen Futterrohre mit Ringraumdichtung oder Flanschsysteme zum Einsatz. Bauschaum und Silikon sind dafür kein dauerhafter Ersatz.',
        'Oberhalb des Geländes wird die Durchführung mit geeignetem Futterrohr bzw. Leerrohr, Dichtmanschette und witterungsbeständigem Dichtstoff geschlossen. Die genauen Vorgaben stehen in der Herstellerdokumentation.' ] },
      { h: 'Durch die Kellerwand oder unter der Kellerdecke bohren', p: [
        'Bei vielen Häusern führen die Leitungen der Wärmepumpe durch die Kellerwand oder knapp unter der Kellerdecke. Dort liegt die Bohrung teilweise im Erdreich, und von außen kann Sickerwasser oder bei starkem Regen auch drückendes Wasser anliegen. Deshalb reicht ein einfacher Durchbruch mit Bauschaum nicht.',
        'Üblich sind ein Futterrohr oder eine Mauerdurchführung mit Ringraumdichtung (auch Ringraumabdichtung genannt), die den Spalt zwischen Rohr und Bohrung dauerhaft schließt. Welche Lösung passt, hängt von der Wasserbelastung, vom Bauteil (Mauerwerk, Beton, weiße oder schwarze Wanne) und von den Vorgaben des Herstellers ab. Die Dichtung ist ein eigener Arbeitsschritt, den Fachbetrieb und Planer abstimmen, bevor gebohrt wird.',
        'Wir bohren die Öffnung passgenau und glatt, damit die gewählte Durchführung sauber sitzt. Bei Wasserdruck, Wannenkonstruktionen oder Bodenplatten stimmen Sie die Abdichtung bitte mit dem Fachplaner ab.' ] },
      { h: 'Statik: Wann ist ein Fachplaner nötig?', p: [
        'In nichttragenden Wänden ist eine einzelne Bohrung meist unkritisch. Bei tragenden Wänden, mehreren Bohrungen dicht beieinander, Bohrungen nahe an Stürzen, Stützen oder Auflagern sowie in Bodenplatten empfehlen wir die Abstimmung mit Statiker oder Tragwerksplaner.' ] },
      { h: 'Ablauf in sechs Schritten', ol: [
        'Anfrage mit Foto und Gerätedatenblatt senden',
        'Position festlegen und Wand orten lassen (durch Statiker oder Bauleiter: Leitungen, Bewehrung)',
        'Verbindliches Angebot erhalten',
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
      ['Kann die Leitung der Wärmepumpe durch die Kellerwand geführt werden?', 'Ja, das ist üblich. Bei erdberührten Wänden muss die Durchführung aber dauerhaft abgedichtet werden, zum Beispiel mit Futterrohr und Ringraumdichtung. Die Wahl richtet sich nach Wasserbelastung, Bauteil und Herstellervorgaben und wird vor der Bohrung mit dem Fachplaner geklärt.'],
      ['Wie wird die Wanddurchführung einer Wärmepumpe abgedichtet?', 'Über der Erde mit Futterrohr bzw. Leerrohr, Dichtmanschette und witterungsbeständigem Dichtstoff, bei erdberührten Wänden mit Futterrohr und Ringraumdichtung nach den Vorgaben von Hersteller und Fachplaner. Die Dichtung ist ein eigener Arbeitsschritt nach der Bohrung.'],
      ['Reicht Bauschaum zum Abdichten der Kernbohrung?', 'Bei erdberührten Bauteilen nein. Bauschaum ist weder dauerhaft wasserdicht noch für drückendes Wasser geeignet. Dafür braucht es ein Futterrohr mit geeigneter Abdichtung.'],
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
        '<strong>Kernbohren:</strong> für runde Öffnungen, Ø 20–500 mm, präzise und erschütterungsarm',
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
      ['Wer darf einen Wanddurchbruch in einer tragenden Wand planen?', 'Die Statik muss ein Statiker oder Tragwerksplaner berechnen. Wir führen die Bohr- und Sägearbeiten danach nach dieser Planung aus und stimmen uns mit Ihrem Statiker oder Architekten ab.'],
      ['Was kostet ein Wanddurchbruch?', 'Das hängt von Wandstärke, Material, Größe, Zugang und Statik ab. Die Preisfaktoren erklären wir im Beitrag „Was kostet ein Wanddurchbruch?“.'],
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
    title: 'Was kostet eine Kernbohrung? Ab 1,20 € je cm (2026)',
    h1: 'Was kostet eine Kernbohrung? Preise und Beispiele für Dresden',
    description: 'Kernbohrung Kosten 2026: ab 1,20 € je cm. Preis nach Durchmesser, Mindestauftrag 250 €, Anfahrt, Zuschläge und echte Rechenbeispiele aus Dresden.',
    short: 'Preis je cm, Mindestauftragswert, Zuschläge und Rechenbeispiele nach Preisliste 2026.',
    answer: `Eine Kernbohrung wird nach Durchmesser und Bohrtiefe berechnet: Bei Ø 20 bis 101 mm in Beton kostet sie ${eur(staffelKompakt[0][2])} je cm Bohrtiefe (brutto). Hinzu kommen die Anfahrt mit ${eur(regeln.anfahrt)} und eine Pilotbohrung mit ${eur(regeln.pilotbohrung)}. Der Mindestauftragswert liegt bei ${eur(regeln.mindestpreis)}, sodass auch eine einzelne kleine Bohrung dort beginnt.`,
    sections: [
      { h: 'So setzt sich der Preis zusammen', p: [
        `Der Bohrpreis ergibt sich aus dem Preis je cm Bohrtiefe (abhängig vom Durchmesser und vom Material) mal Bohrtiefe mal Anzahl der Bohrungen. Dazu kommen die Anfahrt und Baustelleneinrichtung für ${eur(regeln.anfahrt)} (Umkreis bis ca. 30 km um Dresden) sowie je Bohrung ${eur(regeln.pilotbohrung)} für die Pilotbohrung, mit der der Bohrständer an der Wand befestigt wird.`,
        `Liegt die Summe unter ${eur(regeln.mindestpreis)}, gilt der Mindestauftragswert von ${eur(regeln.mindestpreis)}. Alle Preise sind Bruttopreise nach unserer Preisliste (Stand ${stand}).`,
      ] },
      { h: 'Preis je cm Bohrtiefe nach Durchmesser', table: {
        head: ['Durchmesser', 'Beton / Stahlbeton'],
        rows: staffelKompakt.map(([lo, hi, b]) => [`Ø ${lo}–${hi} mm`, `${eur(b)} je cm`]),
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
    slug: 'wanddurchbruch-kosten',
    icon: 'euro',
    date: '2026-11-14',
    title: 'Was kostet ein Wanddurchbruch? Preisfaktoren und Ablauf',
    h1: 'Was kostet ein Wanddurchbruch? Das bestimmt den Preis',
    description: 'Wanddurchbruch Kosten: Wovon der Preis abhängt (Wandstärke, Material, Statik, Träger, Entsorgung) und wie Sie ein genaues Angebot in Dresden erhalten.',
    short: 'Wandstärke, Material, Statik, Träger und Entsorgung: die Preisfaktoren im Überblick.',
    answer: 'Was ein Wanddurchbruch kostet, hängt vor allem von Wandstärke, Material (Mauerwerk oder Stahlbeton), Größe der Öffnung, Statik und der Entsorgung des Abbruchmaterials ab. Einen pauschalen Preis pro Durchbruch gibt es nicht. Bei tragenden Wänden kommen Statiker und Träger (Sturz) hinzu, die getrennt geplant und berechnet werden. Mit Foto, Maßen und Wandstärke nennen wir Ihnen ein konkretes Angebot.',
    sections: [
      { h: 'Aus diesen Bausteinen setzt sich der Preis zusammen', ul: [
        '<strong>Wandstärke und Material:</strong> Stahlbeton ist aufwändiger als Ziegelmauerwerk, weil die Bewehrung die Diamantwerkzeuge stärker abnutzt. Je dicker die Wand, desto länger der Schnitt.',
        '<strong>Größe der Öffnung:</strong> Breite, Höhe und Zahl der Schnitte bestimmen den Aufwand beim Betonsägen.',
        '<strong>Statik bei tragenden Wänden:</strong> Ein Statiker berechnet, wie die Öffnung abgefangen werden muss. Seine Leistung und der Träger (Stahlträger oder Sturz) gehören zur Planung und werden gesondert kalkuliert.',
        '<strong>Zugang und Lage:</strong> Etage, Aufzug, Gerüst oder enge Räume beeinflussen den Aufwand.',
        '<strong>Entsorgung:</strong> Abbruchmaterial und Bohrkerne müssen abtransportiert werden. Das hängt von der Menge ab.',
        '<strong>Schutzmaßnahmen:</strong> Abdecken, Absaugung und Staubschutz in bewohnten Räumen.',
        '<strong>Anfahrt und Einrichtung:</strong> Aufbau der Technik und Anfahrt fallen einmal pro Einsatz an.',
      ] },
      { h: 'Nichttragende Wand oder tragende Wand?', p: [
        'In einer nichttragenden Trennwand ist der Aufwand meist überschaubar: Öffnung anzeichnen, schneiden, Material abtransportieren. Bei einer tragenden Wand ist vorab eine statische Berechnung nötig, außerdem muss die Öffnung mit einem Träger abgefangen werden. Dadurch steigen Planungsaufwand und Gesamtkosten. Ob eine Wand tragend ist, kann nur ein Fachmann anhand der Bauunterlagen oder vor Ort beurteilen.',
        'Mehr zu Statik und Ablauf finden Sie im Beitrag <a href="/ratgeber/wanddurchbruch-tragende-wand/">Wanddurchbruch in der tragenden Wand</a>.',
      ] },
      { h: 'Kernbohrung statt großem Durchbruch?', p: [
        'Brauchen Sie nur eine Durchführung für Rohr, Kabel, Abluft oder Wärmepumpe, reicht oft eine Kernbohrung statt eines Durchbruchs. Dafür gibt es feste Preise je cm Bohrtiefe, nachzulesen im Beitrag <a href="/ratgeber/kernbohrung-kosten-dresden/">Was kostet eine Kernbohrung?</a> und in der <a href="/preise/">Preisliste</a>.',
      ] },
      { h: 'So erhalten Sie ein genaues Angebot', ol: [
        'Foto der Wand, Gesamtansicht und Nahaufnahme der gewünschten Stelle',
        'Gewünschte Breite und Höhe der Öffnung',
        'Wandstärke (Zollstock an der Türlaibung oder an einer vorhandenen Öffnung fotografieren)',
        'Material, soweit bekannt, und ob die Wand tragend ist',
        'Ort, Etage und Zugang',
        'Bei tragenden Wänden: vorhandene Statik oder Kontakt zu Ihrem Statiker',
      ] },
      { h: 'Muss ich mit zusätzlichen Kosten rechnen?', p: [
        'Möglich sind Kosten für den Statiker, den Träger, das Herrichten der Kanten (Putz, Verkleidung) und gegebenenfalls Genehmigungen. Diese Leistungen gehören nicht zu unseren Bohr- und Sägearbeiten, wir stimmen uns dafür gern mit Ihrem Architekten oder Statiker ab. So lässt sich vorab klären, was zu Ihrem Vorhaben gehört.',
      ] },
    ],
    faqs: [
      ['Gibt es einen Pauschalpreis für einen Wanddurchbruch?', 'Nein. Der Preis richtet sich nach Wandstärke, Material, Größe, Zugang und Statik. Mit Foto und Maßen nennen wir ein konkretes Angebot.'],
      ['Was kostet ein Wanddurchbruch in einer tragenden Wand?', 'Hier kommen Statiker und Träger hinzu. Die Gesamtkosten hängen von der Berechnung und der Größe der Öffnung ab und lassen sich erst nach Klärung der Statik seriös beziffern.'],
      ['Kann ich ein Angebot per Foto bekommen?', 'Ja, in vielen Fällen. Schicken Sie uns per WhatsApp ein Foto, die Wandstärke und die gewünschte Größe der Öffnung.'],
      ['Wer braucht für einen Wanddurchbruch eine Genehmigung?', 'Ob eine Anzeige oder Genehmigung nötig ist, hängt vom Gebäude und der Landesbauordnung ab. Mieter benötigen die Zustimmung des Vermieters, Wohnungseigentümer meist die der Eigentümergemeinschaft. Klären Sie das bitte vorab mit Bauaufsicht oder Architekt.'],
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
    answer: `Für kleine Dübellöcher genügt bei einer Betonbohrung ein Bohrhammer. Sobald eine saubere, runde Öffnung für Rohre, Kabel oder Lüftung nötig ist, ist die Kernbohrung mit diamantbesetzter Krone das passende Verfahren: Ø 20 bis 500 mm, bis 2 m Tiefe, staubarm und erschütterungsarm. Für große, eckige Öffnungen setzt man die Wandsäge ein.`,
    sections: [
      { h: 'Drei Verfahren im Überblick', table: {
        head: ['Verfahren', 'Typischer Einsatz', 'Ergebnis'],
        rows: [
          ['Bohrhammer', 'Dübel, Schrauben, kleine Löcher', 'kleines Loch, bei Stahlbeton begrenzt'],
          ['Kernbohrung', 'Rohre, Leitungen, Lüftung, Wärmepumpe (Ø 20–500 mm)', 'rundes, sauberes Bohrloch, Bohrkern'],
          ['Wandsäge / Betonschneiden', 'Türen, Fenster, große Durchbrüche, Treppenöffnungen', 'gerade Schnitte, exakte Kanten'],
        ],
      } },
      { h: 'Warum Kernbohrung für Rohr- und Kabeldurchführungen', p: [
        'Bei der Kernbohrung schneidet eine rotierende Diamantkrone einen runden Zylinder aus dem Beton und lässt ihn als Bohrkern stehen. Das ist präziser und erschütterungsärmer als Schlagbohren oder Stemmen und schont angrenzende Bauteile. Die Bohrung wird in der Regel nass ausgeführt, mit Abdeckung und auf Wunsch Wassersauger bleibt es sauber.',
      ] },
      { h: 'Welcher Durchmesser für welchen Zweck?', p: ['Die Wahl des Durchmessers hängt vom Rohr oder der Leitung ab, plus Platz für Dämmung oder Dichtung. Eine Übersicht finden Sie in unserem Ratgeber zur Wahl des Bohrdurchmessers.'] },
      { h: 'Was kostet eine Betonbohrung?', p: ['Der Preis richtet sich nach Durchmesser und Bohrtiefe, ab 1,20 € je cm Bohrtiefe (brutto, Ø 20–101 mm in Beton). Dazu kommen Anfahrt und Pilotbohrung, der Mindestauftragswert beträgt 250 €. Details und Beispiele stehen im Kostenratgeber und im Kernbohr-Rechner.'] },
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
      ['Wie groß kann eine Betonbohrung werden?', 'Wir bohren Ø 20 bis 500 mm, bis zu 2 m tief. Größere Durchmesser auf Anfrage.'],
      ['Machen Sie auch Betonbohrungen über Kopf und in Wohnungen?', 'Ja, horizontal, vertikal und über Kopf, in bewohnten Gebäuden staubarm im Nassverfahren, auf Wunsch mit Wassersauger.'],
    ],
  },
  {
    slug: 'kernbohrgeraet-mieten-oder-beauftragen',
    icon: 'drill',
    date: '2026-11-16',
    title: 'Kernbohrgerät mieten oder Kernbohrung beauftragen?',
    h1: 'Kernbohrgerät mieten oder Kernbohrung beauftragen: Was lohnt sich?',
    description: 'Kernbohrgerät mieten in Dresden oder die Kernbohrung beauftragen? Ausrüstung, Risiken, Kostenvergleich und eine Checkliste für Ihre Entscheidung.',
    short: 'Selbst bohren oder bohren lassen: Ausrüstung, Risiken und Kosten im Vergleich.',
    answer: 'Für einzelne Bohrungen lohnt sich die Miete eines Kernbohrgeräts meist nicht. Neben dem Bohrmotor brauchen Sie Bohrständer, passende Diamantkrone, Wasserversorgung und Absaugung, und bei Stahlbeton oder tragenden Bauteilen ist Erfahrung nötig. Wir vermieten keine Geräte, sondern kommen mit Technik, Wasser und Staubschutz zu Ihnen. Den Preis sehen Sie vorab in der Preisliste und im Kernbohr-Rechner.',
    sections: [
      { h: 'Was zu einer Kernbohrung außer dem Bohrmotor gehört', ul: [
        '<strong>Bohrmotor und Bohrständer:</strong> Der Ständer wird an der Wand befestigt (Dübel oder Vakuum) und führt die Krone gerade. Ohne stabile Befestigung verläuft die Bohrung schief oder die Krone klemmt.',
        '<strong>Diamantbohrkrone im passenden Durchmesser:</strong> Für Mauerwerk, Beton und Stahlbeton gibt es unterschiedliche Kronen. Die falsche Krone verschleißt schnell oder schneidet schlecht.',
        '<strong>Wasser:</strong> Die Nassbohrung kühlt die Krone und bindet Staub. Wasser muss zugeführt und Schlamm aufgefangen werden.',
        '<strong>Absaugung und Abdeckung:</strong> Folie, Abdeckung und auf Wunsch der Wassersauger schützen Boden und Möbel.',
        '<strong>Strom:</strong> 230 V, bei großen Durchmessern eventuell 400 V.',
      ] },
      { h: 'Typische Risiken beim Selbermachen', ul: [
        '<strong>Bewehrung:</strong> Trifft die Krone Stahl, wird es schwer. Krone und Motor können Schaden nehmen, und die Bohrung bleibt stecken.',
        '<strong>Leitungen in der Wand:</strong> Elektro-, Wasser- und Heizungsleitungen sind oft nicht dokumentiert. Eine Leitungsortung vor dem Bohren ist wichtig.',
        '<strong>Wasserschäden und Schmutz:</strong> Bei falscher Wasserführung läuft Schlamm in die Wohnung oder an die Fassade.',
        '<strong>Statik:</strong> In tragenden Wänden und Decken darf nicht beliebig gebohrt werden. Das klären Sie vorab mit dem Statiker.',
        '<strong>Zustimmung und Haftung:</strong> Mieter und Wohnungseigentümer brauchen die Zustimmung von Vermieter oder Eigentümergemeinschaft, Schäden gehen sonst zu Ihren Lasten.',
      ] },
      { h: 'Wann Selbermachen noch sinnvoll sein kann', p: [
        'Bei einer einzelnen kleinen Bohrung in einfachem Mauerwerk, ohne Bewehrung und ohne tragende Funktion, ist Selbermachen denkbar, wenn Sie Gerät, Wasser und Schutz organisiert haben. Sobald Stahlbeton, große Durchmesser, Überkopfbohrungen oder mehrere Bohrungen anstehen, spricht fast alles für den Fachbetrieb.',
      ] },
      { h: 'Kosten im Vergleich', p: [
        'Bei uns gilt die Preisliste: ab ' + eur(1.2) + ' je cm Bohrtiefe in Beton (Ø 20–101 mm), für Mauerwerk erstellen wir ein individuelles Angebot, dazu Anfahrt (' + eur(regeln.anfahrt) + ' im Umkreis bis ca. 30 km um Dresden) und Pilotbohrung. Der Mindestauftragswert beträgt ' + eur(regeln.mindestpreis) + '. Beispiel: Eine Bohrung Ø 82 mm, 30 cm Beton kostet bei uns ' + eur(berechne({ d: 82, tiefe: 30 }).total) + ' brutto. Die Mietkosten eines Geräts, Krone, Wasserversorgung und Ihre eigene Zeit sollten Sie dagegen rechnen, außerdem das Risiko eines Fehlers.',
        'Mehrere Bohrungen in einem Termin sind am günstigsten, weil Anfahrt und Einrichtung nur einmal anfallen. Probieren Sie den <a href="/kernbohrung-rechner/">Kernbohr-Rechner</a> aus.',
      ] },
      { h: 'Checkliste: Das sollten Sie vor der Entscheidung wissen', checks: [
        'Material der Wand: Mauerwerk, Beton oder Stahlbeton?',
        'Durchmesser und Wandstärke (Bohrtiefe)',
        'Anzahl der Bohrungen',
        'Ist die Wand tragend? Verlaufen Leitungen an der Stelle?',
        'Strom und Wasser vor Ort vorhanden?',
        'Zustimmung von Vermieter oder Eigentümergemeinschaft, falls nötig',
      ] },
    ],
    faqs: [
      ['Vermieten Sie Kernbohrgeräte?', 'Nein. Wir führen die Kernbohrung selbst aus und kommen mit Gerät, Wasser und Staubschutz zu Ihnen.'],
      ['Wie finde ich den passenden Bohrdurchmesser?', 'Messen Sie den Außendurchmesser des Rohrs oder der Hülse, rechnen Sie Dämmung und 5 bis 15 mm Luft dazu. Unsere Seite zum Bohrdurchmesser nennt Richtwerte.'],
      ['Wie bekomme ich schnell einen Preis?', 'Rechnen Sie im Kernbohr-Rechner oder schicken Sie uns ein Foto der Bohrstelle mit Maßband per WhatsApp. Wir nennen Ihnen Preis und Termin.'],
      ['Was passiert, wenn die Krone auf Stahl trifft?', 'Bewehrungsstahl ab Ø 10 mm berechnen wir je cm als Einzelschnitt, siehe Preisliste. Die Bewehrung lässt sich vorab nicht immer erkennen, deshalb planen wir mit passenden Kronen und Erfahrung.'],
    ],
  },
  {
    slug: 'kernbohrung-dunstabzugshaube-durchmesser',
    icon: 'drill',
    date: '2026-11-16',
    title: 'Dunstabzugshaube: Durchbruch, Durchmesser und Ablauf',
    h1: 'Kernbohrung für die Dunstabzugshaube: Durchmesser, Mauerkasten, Ablauf',
    description: 'Kernbohrung für die Abzugshaube: Welcher Durchmesser für DN 125 und DN 150, Mauerkasten, Gefälle, Ablauf und Kosten. Dresden und Umgebung.',
    short: 'Durchmesser für DN 125 und DN 150, Mauerkasten, Gefälle und Ablauf im Überblick.',
    answer: 'Für ein Abluftrohr DN 125 bohren wir meist Ø 130 bis 135 mm, für DN 150 meist Ø 160 bis 165 mm, mit Mauerkasten größer. Die Bohrung erhält ein leichtes Gefälle nach außen, damit kein Regenwasser eindringt. Der Durchbruch ist eine normale Kernbohrung und wird nach Durchmesser und Wandstärke berechnet.',
    sections: [
      { h: 'Welcher Durchmesser passt zur Abzugshaube?', table: {
        head: ['Abluftrohr der Haube', 'Typischer Bohrdurchmesser', 'Hinweis'],
        rows: [
          ['DN 125', 'Ø 130–135 mm', 'Mit Mauerkasten größer bohren'],
          ['DN 150', 'Ø 160–165 mm', 'Mit Mauerkasten größer bohren'],
        ],
      }, p: ['Maßgeblich ist der Außendurchmesser von Rohr oder Mauerkasten, nicht der Innendurchmesser. Dazu kommen 5 bis 15 mm Luft. Welche Maße Ihr Hersteller vorgibt, steht in der Montageanleitung der Haube.'] },
      { h: 'Abluft oder Umluft?', p: [
        'Eine Abluft-Haube führt die Luft nach draußen und braucht deshalb einen Durchbruch in der Außenwand. Eine Umluft-Haube filtert die Luft und gibt sie in den Raum zurück, hier ist keine Bohrung nötig. Wer von Umluft auf Abluft wechselt, braucht den Durchbruch nachträglich.',
      ] },
      { h: 'Gefälle, Mauerkasten und Abdichtung', ul: [
        'Die Bohrung erhält ein leichtes Gefälle nach außen, damit kein Wasser in die Küche läuft.',
        'Ein Mauerkasten mit Rückstauklappe verhindert, dass kalte Luft oder Gerüche zurückströmen (je nach Haube und Hersteller).',
        'Außen sitzt eine Blende oder ein Wetterschutzgitter.',
        'Die Fuge zwischen Rohr und Wand wird abgedichtet.',
      ] },
      { h: 'So läuft der Termin ab', ol: [
        'Foto der Stelle mit Maßband senden, wir nennen Durchmesser und Preis',
        'Bohrstelle gemeinsam markieren und prüfen, ob dort Leitungen verlaufen',
        'Küche abdecken, nass und staubarm bohren (auf Wunsch mit Wassersauger)',
        'Aufräumen, Übergabe der sauberen Küche',
      ] },
      { h: 'Was kostet der Durchbruch?', p: [
        'Eine Bohrung für die Dunstabzugshaube ist eine normale Kernbohrung. Maßgeblich sind Durchmesser, Wandstärke und Material. Als Beispiel: Ø 132 mm, 36 cm Mauerwerk kosten nach Preisliste ' + eur(berechne({ d: 132, tiefe: 36, material: 'mauerwerk' }).total) + ' brutto inklusive Anfahrt und Pilotbohrung (Mindestauftragswert ' + eur(regeln.mindestpreis) + '). Ihren Richtpreis rechnen Sie im <a href="/kernbohrung-rechner/">Kernbohr-Rechner</a> aus.',
      ] },
      { h: 'Brauche ich eine Genehmigung?', p: [
        'In Mietwohnungen und Eigentümergemeinschaften klären Sie vorab die Zustimmung. Bei tragenden Wänden und Fassaden ist Rücksprache wichtig, bei denkmalgeschützten Gebäuden mit der Denkmalschutzbehörde.',
      ] },
    ],
    faqs: [
      ['Welcher Durchmesser für DN 125?', 'In der Regel Ø 130 bis 135 mm. Bei Mauerkasten bohren wir größer, die Herstellerangabe ist maßgeblich.'],
      ['Welcher Durchmesser für DN 150?', 'In der Regel Ø 160 bis 165 mm, mit Mauerkasten größer.'],
      ['Wie lange dauert die Bohrung?', 'Der eigentliche Durchbruch dauert meist nur kurz. Dazu kommen Aufbau, Abdeckung und Aufräumen. Den Zeitrahmen nennen wir mit dem Termin.'],
      ['Kann ich ein Foto schicken statt einen Termin zur Besichtigung zu machen?', 'Ja. Ein Foto der Stelle mit Maßband und die Angabe der Wandstärke genügen meist für ein Angebot.'],
    ],
  },
  {
    slug: 'kernbohrung-kaminofen-ofenrohr',
    icon: 'drill',
    date: '2026-11-16',
    title: 'Kaminofen: Kernbohrung für Ofenrohr und Schornstein',
    h1: 'Kernbohrung für Kaminofen und Ofenrohr: Das ist zu beachten',
    description: 'Kernbohrung für den Kaminofen-Anschluss: Durchmesser 130–200 mm, Schornsteinfeger-Freigabe, Abstände zu brennbaren Bauteilen, Ablauf in Dresden.',
    short: 'Wanddurchführung für Ofenrohr: Durchmesser, Freigabe durch den Schornsteinfeger, Ablauf.',
    answer: 'Für den Anschluss eines Kaminofens bohren wir die Wanddurchführung für das Ofenrohr, üblich sind Durchmesser von 130 bis 200 mm. Vorab muss der Bezirksschornsteinfeger den Anschluss freigeben. Er prüft auch Abstände zu brennbaren Bauteilen und den Schornstein selbst. Die Bohrung führen wir fachgerecht aus, die Abnahme klären Sie vor der Planung.',
    sections: [
      { h: 'Erst der Schornsteinfeger, dann die Bohrung', p: [
        'Ein Kaminofen darf erst angeschlossen werden, wenn der Bezirksschornsteinfeger zugestimmt hat. Er prüft, ob der Schornstein für Ihren Ofen geeignet ist und ob Abstände zu brennbaren Bauteilen stimmen. Sprechen Sie ihn deshalb ein, bevor Sie Bohrtermin oder Ofen festlegen. Wir bohren nach Ihrer Planung und den Vorgaben des Herstellers.',
      ] },
      { h: 'Welcher Durchmesser für die Wanddurchführung?', p: [
        'Der Durchmesser richtet sich nach dem Ofenrohr und einer eventuell nötigen Wandhülse oder einem Mauerfutter. Üblich sind 130 bis 200 mm. Die Herstellerangabe des Ofens und die Vorgaben des Schornsteinfegers sind maßgeblich. Schicken Sie uns ein Foto der Stelle mit Maßband, wir nennen den passenden Durchmesser.',
      ] },
      { h: 'Typische Fälle', ul: [
        'Ofenrohr durch die Wand in einen seitlich liegenden Schornstein',
        'Durchführung durch Ziegel, Kalksandstein, Beton oder Schornsteinmauerwerk',
        'Zusätzliche Bohrungen für Luftzufuhr oder Sanitär im selben Termin',
      ] },
      { h: 'So bereiten Sie den Termin vor', ol: [
        'Freigabe oder Termin mit dem Bezirksschornsteinfeger klären',
        'Ofen- und Rohrdaten bereitlegen (Hersteller, Rohrdurchmesser, Hülse)',
        'Foto der Wand und des Schornsteins mit Maßband',
        'Bereich freiräumen, Möbel und Boden abdecken',
        'Strom vor Ort, Wasser nach Absprache',
      ] },
      { h: 'Was kostet die Durchführung?', p: [
        'Die Bohrung wird wie jede Kernbohrung nach Durchmesser, Wandstärke und Material berechnet. Beispiel: Ø 152 mm, 36 cm Mauerwerk kosten nach Preisliste ' + eur(berechne({ d: 152, tiefe: 36, material: 'mauerwerk' }).total) + ' brutto inklusive Anfahrt und Pilotbohrung. Ihren Richtpreis rechnen Sie im <a href="/kernbohrung-rechner/">Kernbohr-Rechner</a> aus.',
      ] },
    ],
    faqs: [
      ['Darf ich einen Kaminofen selbst anschließen lassen?', 'Der Anschluss muss vom Bezirksschornsteinfeger freigegeben und abgenommen werden. Wir führen nur die Bohrung aus, die Abnahme klären Sie vorab.'],
      ['Welcher Durchmesser ist für das Ofenrohr üblich?', 'Üblich sind 130 bis 200 mm, je nach Rohr, Hülse und Ofen. Die Herstellerangabe entscheidet.'],
      ['Können Sie auch in Schornsteinmauerwerk bohren?', 'Ja, nach Absprache und mit Freigabe durch den Schornsteinfeger.'],
      ['Wie lange dauert eine Durchführung?', 'Die Bohrung selbst dauert meist nur kurz. Aufbau und Aufräumen kommen dazu. Den Zeitrahmen nennen wir mit dem Termin.'],
    ],
  },
  {
    slug: 'fugenschneiden-beton-ratgeber',
    icon: 'joint',
    date: '2026-11-16',
    title: 'Fugenschneiden in Beton: Wann, wie tief, was kostet es?',
    h1: 'Fugenschneiden in Beton: Zeitpunkt, Tiefe und Kosten',
    description: 'Fugenschneiden in Beton: Wann Scheinfugen geschnitten werden, wie tief, welche Fugenarten es gibt und was Sie für ein Angebot in Dresden brauchen.',
    short: 'Scheinfuge, Dehnfuge, Trennschnitt: Zeitpunkt, Tiefe und Angebot.',
    answer: 'Fugen werden zeitnah nach dem Betonieren geschnitten, sobald der Beton begehbar und schneidbar ist. Als Richtwert für Scheinfugen wird häufig etwa ein Viertel bis ein Drittel der Plattendicke genannt, maßgeblich sind die Vorgaben von Planer oder Statiker. Für ein Angebot brauchen wir Fugenlänge, Plattendicke und den Betoniertermin.',
    sections: [
      { h: 'Warum Beton Fugen braucht', p: [
        'Beton schwindet beim Aushärten und dehnt sich bei Wärme aus. Ohne Fugen reißt er dort, wo er will. Geschnittene Fugen geben ihm eine Sollbruchstelle, so entstehen keine unkontrollierten Risse in Bodenplatten, Hallenböden, Garagenzufahrten und Terrassen.',
      ] },
      { h: 'Welche Fugenarten gibt es?', table: {
        head: ['Fugenart', 'Zweck', 'Typischer Einsatz'],
        rows: [
          ['Scheinfuge', 'Sollbruchstelle: Der Beton reißt kontrolliert in der Fuge', 'Bodenplatten, Hallenböden, Zufahrten'],
          ['Dehnfuge (Bewegungsfuge)', 'Nimmt Längenänderung durch Temperatur auf', 'Große Flächen, Anschlüsse an Bauteile'],
          ['Trennschnitt', 'Trennt Bauteile oder Flächen', 'Sanierung, Rückbau'],
        ],
      } },
      { h: 'Der richtige Zeitpunkt', p: [
        'Die Fuge wird geschnitten, sobald der Beton begehbar und schneidbar ist, aber bevor er von selbst reißt. Der Zeitpunkt hängt von Mischung, Temperatur und Witterung ab. Nennen Sie uns deshalb den Betoniertermin früh, dann stimmen wir den Einsatz ab.',
      ] },
      { h: 'Wie tief schneidet man?', p: [
        'Als Richtwert für Scheinfugen wird häufig etwa ein Viertel bis ein Drittel der Plattendicke genannt. Das Fugenraster und die Tiefe legt der Planer oder Statiker für Ihre Fläche fest, wir setzen seine Vorgaben um.',
      ] },
      { h: 'Das brauchen wir für ein Angebot', ol: [
        'Fläche oder Fugenlänge in Metern',
        'Plattendicke und gewünschtes Fugenraster',
        'Betoniertermin oder Alter des Betons',
        'Zugang für das Gerät, Wasser und Strom vor Ort',
        'Ein Foto der Fläche',
      ] },
      { h: 'Was kostet Fugenschneiden?', p: [
        'Der Preis hängt von Fugenlänge, Schnitttiefe und Zugang ab. Senden Sie uns Maße oder ein Foto, dann erhalten Sie ein kostenloses Angebot. Wir arbeiten in Dresden und Sachsen, größere Flächen auch bundesweit nach Absprache.',
      ] },
    ],
    faqs: [
      ['Wann sollte man Fugen schneiden?', 'Zeitnah nach dem Betonieren, sobald der Beton begehbar und schneidbar ist. Den genauen Zeitpunkt stimmen wir mit Ihnen ab.'],
      ['Wie tief wird eine Scheinfuge geschnitten?', 'Als Richtwert wird häufig ein Viertel bis ein Drittel der Plattendicke genannt. Maßgeblich sind die Vorgaben von Planer oder Statiker.'],
      ['Wofür braucht man Fugen im Beton?', 'Sie geben dem Beton Sollbruchstellen, damit er kontrolliert und nicht unkontrolliert reißt.'],
      ['Schneiden Sie auch bestehende Flächen nachträglich?', 'Trennschnitte in vorhandenen Flächen sind möglich, etwa bei Sanierung oder Umbau. Senden Sie uns ein Foto der Fläche.'],
    ],
  },
  {
    slug: 'entkernung-altbau-dresden',
    icon: 'hammer',
    date: '2026-11-16',
    title: 'Entkernung im Altbau in Dresden: Ablauf und Schadstoffe',
    h1: 'Entkernung im Altbau: Ablauf, Schadstoffe und Teilrückbau in Dresden',
    description: 'Entkernung und Teilrückbau im Altbau in Dresden: Ablauf, Schadstoffe wie Asbest, Statik und Entsorgung. So planen Sie Sanierung und Rückbau.',
    short: 'Selektiver Rückbau im Bestand: Ablauf, Schadstoffprüfung, Statik und Entsorgung.',
    answer: 'Bei der Entkernung im Altbau werden einzelne Wände, Böden oder Einbauten gezielt entfernt, der Rest des Gebäudes bleibt stehen. Vorher klären Sie, welche Wände tragen und ob Schadstoffe wie Asbest verbaut sind. Wir übernehmen Teilrückbau mit Wandsäge und Kernbohrung, staubarm und lärmreduziert, auch in bewohnten Gebäuden.',
    sections: [
      { h: 'Was bedeutet Entkernung?', p: [
        'Entkernung heißt, Räume im Inneren eines Gebäudes zurückzubauen, etwa Wände, Estrich, Bodenbeläge oder Installationen, ohne das Gebäude abzureißen. Das ist die Grundlage vieler Sanierungen und Umbauten, besonders bei Altbauten in Dresden.',
      ] },
      { h: 'Ablauf einer Entkernung', ol: [
        'Bestandsaufnahme per Foto oder Besichtigung: Was soll weg, was muss bleiben?',
        'Klärung der Statik: Tragende Wände und Decken werden nur nach Vorgabe des Statikers geöffnet.',
        'Schadstoffprüfung bei älteren Gebäuden, bevor Material bewegt wird',
        'Schutz von Boden, Treppenhaus und angrenzenden Bereichen',
        'Rückbau: Schnitte und Bohrungen, dann Entfernen der Teile in handlichen Stücken',
        'Abtransport, Entsorgung und aufgeräumte Übergabe',
      ] },
      { h: 'Schadstoffe im Altbau', p: [
        'In Gebäuden aus früheren Jahrzehnten können Schadstoffe wie Asbest oder alte Mineralwolle verbaut sein. Besteht ein Verdacht, muss vorab eine Untersuchung erfolgen. Sanierung und Entsorgung übernehmen dafür zugelassene Fachfirmen. Sprechen Sie uns darauf an, wir planen den Ablauf mit Ihnen ab.',
      ] },
      { h: 'Womit wir zurückbauen', ul: [
        '<strong>Wandsäge:</strong> exakte, gerade Schnitte in Wand und Decke, wenig Erschütterung',
        '<strong>Kernbohrung:</strong> Ecken vorbohren und Durchführungen für neue Leitungen',
        '<strong>Schlitzfräse:</strong> saubere Schlitze für neue Elektro- und Wasserleitungen',
      ] },
      { h: 'Was beeinflusst den Preis?', p: [
        'Umfang und Material (Mauerwerk, Beton, Stahlbeton), Zugang und Etage, Schutz- und Entsorgungsaufwand sowie statische Maßnahmen. Senden Sie uns Fotos und eine kurze Beschreibung, dann erhalten Sie ein Angebot. Für runde Bohrungen rechnen Sie selbst im <a href="/kernbohrung-rechner/">Kernbohr-Rechner</a>.',
      ] },
    ],
    faqs: [
      ['Arbeiten Sie auch in bewohnten Gebäuden?', 'Ja. Wir setzen auf lärmreduzierte, staubarme Technik und passende Schutzmaßnahmen.'],
      ['Reißen Sie auch ganze Gebäude ab?', 'Unser Schwerpunkt sind Teilabbrüche und Rückbau im Bestand.'],
      ['Wer prüft, ob eine Wand tragend ist?', 'Das klärt ein Statiker oder Architekt anhand der Bauunterlagen oder vor Ort. Wir arbeiten gern mit ihm zusammen.'],
      ['Was passiert, wenn Asbest gefunden wird?', 'Dann übernehmen zugelassene Fachfirmen Sanierung und Entsorgung. Wir stimmen unsere Arbeiten darauf ab.'],
    ],
  },
  {
    slug: 'wallbox-wanddurchfuehrung-kernbohrung',
    icon: 'drill',
    date: '2026-11-23',
    title: 'Wallbox: Wanddurchführung für das Ladekabel richtig planen',
    h1: 'Wallbox installieren: Kernbohrung für Zuleitung und Leerrohr',
    description: 'Wallbox-Installation: Wann eine Kernbohrung nötig ist, welcher Durchmesser für Leerrohr und Kabel passt, Brandschutz, Zustimmung und Kosten in Dresden.',
    short: 'Durchmesser für Leerrohr und Zuleitung, Brandschutz, Zustimmung und Kosten bei der Wallbox.',
    answer: 'Für die Zuleitung einer Wallbox wird meist eine Wand oder Decke durchbohrt, zum Beispiel von der Garage zum Zählerschrank oder durch die Außenwand. Der Durchmesser richtet sich nach Leerrohr, Kabelbündel und Dichtung, die Elektrofachkraft nennt das Maß. Die Zuleitung selbst installiert ein Elektrofachbetrieb, wir bohren die Öffnung passgenau und sauber.',
    sections: [
      { h: 'Wann braucht eine Wallbox eine Kernbohrung?', p: [
        'Wo die Zuleitung nicht offen oder über vorhandene Öffnungen geführt werden kann, ist ein Durchbruch nötig. Das betrifft vor allem den Weg vom Zählerschrank oder Hausanschlussraum zur Garage, Carport oder Außenwand sowie Durchführungen durch Decken in Tiefgaragen.',
      ], ul: [
        'Durchführung durch Innenwand oder Decke zwischen Technikraum und Garage',
        'Durchführung durch die Außenwand für die Zuleitung zum Carport oder Stellplatz',
        'Serienbohrungen für mehrere Ladepunkte in Tiefgaragen und auf Parkflächen',
      ] },
      { h: 'Welcher Durchmesser passt?', p: [
        'Der Bohrdurchmesser hängt vom Leerrohr oder vom Kabelbündel samt Dichtung ab. Bei der privaten Wallbox ist das meist ein kleiner bis mittlerer Durchmesser, bei mehreren Zuleitungen oder Schotts größer. Das genaue Maß legt der Elektrofachbetrieb nach Hersteller- und Normvorgabe fest, wir bohren genau dieses Maß.',
      ] },
      { h: 'Brandschutz und Abdichtung', ul: [
        'Wird eine Wand oder Decke durchdrungen, die als Brandschutzbauteil gilt (zum Beispiel zwischen Garage und Wohnbereich), ist eine geeignete Abschottung nötig. Das plant und führt der Fachbetrieb aus.',
        'Durch die Außenwand wird die Fuge zwischen Leerrohr und Wand gegen Wasser abgedichtet, bei Bedarf mit Dichtmanschette.',
        'Die Bohrung erhält bei Bedarf ein leichtes Gefälle nach außen.',
      ] },
      { h: 'Zustimmung, Anmeldung und Zuständigkeiten', p: [
        'Mieter und Wohnungseigentümer haben seit 2020 grundsätzlich Anspruch auf Zustimmung zur Installation einer Ladestation (§ 554 BGB, § 20 WEG). Wie das im Einzelfall abläuft, klären Sie mit Vermieter oder Hausverwaltung. Die Anmeldung der Ladeeinrichtung beim Netzbetreiber und die Zuleitung übernimmt ein Elektrofachbetrieb. Eine Bohrung durch tragende Teile kann eine Rücksprache mit Statiker oder Verwaltung erfordern.',
      ] },
      { h: 'Was kostet die Bohrung?', p: [
        'Die Kosten richten sich nach Durchmesser, Wandstärke und Material. Als Beispiel: Ø 100 mm, 30 cm Beton kosten nach Preisliste ' + eur(berechne({ d: 100, tiefe: 30 }).total) + ' brutto inklusive Anfahrt und Pilotbohrung (Mindestauftragswert ' + eur(regeln.mindestpreis) + '). Für mehrere Ladepunkte rechnen Sie im <a href="/kernbohrung-rechner/">Kernbohr-Rechner</a> den Richtpreis aus, bei Serien erstellen wir ein Angebot nach Bohrliste.',
      ] },
      { h: 'Beispiel aus der Praxis', p: [
        'Für Ladeinfrastruktur haben wir bei IKEA Dresden 11 Bohrungen Ø 150 mm in Stahlbeton auf dem Parkdeck und im Innenbereich ausgeführt. Den Einsatz zeigt die <a href="/referenzen/ikea-dresden-ladeinfrastruktur/">Referenz IKEA Dresden</a>.',
      ] },
    ],
    faqs: [
      ['Muss ich für die Wallbox-Zuleitung immer bohren?', 'Nein, nur wenn die Leitung eine Wand oder Decke queren muss und keine passende Öffnung vorhanden ist. Das klärt der Elektrofachbetrieb bei der Planung.'],
      ['Welchen Durchmesser soll ich bestellen?', 'Das Maß nennt der Elektrofachbetrieb passend zu Leerrohr oder Kabelbündel und Dichtung. Senden Sie uns das Maß mit Foto der Stelle, wir nennen den Preis.'],
      ['Wer macht die Brandschutzabschottung?', 'Die Abschottung gehört zur Elektroinstallation und wird vom Fachbetrieb geplant und ausgeführt. Wir bohren die Öffnung passgenau.'],
      ['Können Sie mehrere Ladepunkte in einem Einsatz bohren?', 'Ja. Für Serien in Tiefgaragen und auf Parkflächen bohren wir nach Bohrliste. Die Anfahrt wird nur einmal je Einsatz berechnet.'],
    ],
  },
  {
    slug: 'hauseinfuehrung-keller-kernbohrung',
    icon: 'drill',
    date: '2026-11-23',
    title: 'Hauseinführung im Keller: Kernbohrung für Strom und Wasser',
    h1: 'Hauseinführung durch die Kellerwand: Kernbohrung und Abdichtung',
    description: 'Hauseinführung für Strom, Wasser, Gas und Glasfaser: Kernbohrung durch die Kellerwand, Dichtungssysteme, Planung und Kosten. Dresden und Sachsen.',
    short: 'Kernbohrung für Hauseinführungen im Keller: Dichtsysteme, Planung, Zuständigkeiten, Kosten.',
    answer: 'Für die Hauseinführung von Strom, Wasser, Telekommunikation oder Glasfaser wird die Kellerwand mit einer Kernbohrung durchbohrt. Wichtig ist die richtige Abdichtung, vor allem bei erdberührten Wänden und drückendem Wasser. Das Dichtsystem wählt der Fachplaner oder Installateur, wir bohren die passende Öffnung und stimmen den Durchmesser mit dem System ab.',
    sections: [
      { h: 'Was ist eine Hauseinführung?', p: [
        'Eine Hauseinführung bringt Leitungen von außen ins Gebäude, zum Beispiel für Strom, Wasser, Telekommunikation, Glasfaser oder Fernwärme. Bei Mehrspartenhauseinführungen laufen mehrere Leitungen durch eine gemeinsame, gedichtete Öffnung. Bei Gas und Wasser arbeitet immer der zugelassene Installationsbetrieb nach den Vorgaben des Versorgers.',
      ] },
      { h: 'Warum die Abdichtung entscheidend ist', ul: [
        'Erdberührte Wände müssen gegen Bodenfeuchte und Wasser abgedichtet werden.',
        'Bei drückendem Wasser oder Wänden aus wasserundurchlässigem Beton gelten besondere Anforderungen an die Durchführung.',
        'Üblich sind Futterrohre, Dichteinsätze oder Ringraumdichtungen, die zum Bohrdurchmesser passen.',
        'Die Abdichtung ist ein eigener Arbeitsschritt nach der Bohrung und gehört zum Gewerk des Fachbetriebs.',
      ] },
      { h: 'Welcher Durchmesser?', p: [
        'Der Durchmesser ergibt sich aus dem Dichtsystem oder Futterrohr des Herstellers. Bei Mehrspartenhauseinführungen liegt er häufig im mittleren Bereich, bei einzelnen Leitungen kleiner. Entscheidend ist das Datenblatt des gewählten Systems. Wir bohren auf das genannte Maß und halten die Öffnung glatt, damit Dichtung und Rohr sauber sitzen.',
      ] },
      { h: 'Ablauf der Bohrung', ol: [
        'Foto der Wand von innen und außen sowie Maße (Wandstärke, Material) senden',
        'Durchmesser und Dichtsystem mit dem Installateur oder Fachplaner abstimmen',
        'Lage der Bohrung festlegen und auf Leitungen, Bewehrung und Spartenpläne prüfen',
        'Nass bohren, Bohrkern entnehmen, Öffnung sauber übergeben',
        'Abdichtung und Montage durch den Fachbetrieb',
      ] },
      { h: 'Was ist vor der Bohrung zu klären?', ul: [
        'Verlauf erdverlegter Leitungen vor der Wand (Spartenauskunft)',
        'Wandaufbau: Mauerwerk, Beton, Stahlbeton oder wasserundurchlässiger Beton',
        'Zustimmung des Eigentümers, bei Wohnungseigentum der Hausverwaltung',
        'Bei Neubau: Vorgaben des Planers und der Bauleitung',
      ] },
      { h: 'Was kostet die Bohrung?', p: [
        'Die Kosten richten sich nach Durchmesser, Wandstärke und Material. Als Beispiel: Ø 150 mm, 30 cm Beton kosten nach Preisliste ' + eur(berechne({ d: 150, tiefe: 30 }).total) + ' brutto inklusive Anfahrt und Pilotbohrung (Mindestauftragswert ' + eur(regeln.mindestpreis) + '). Dichtsystem und Montage sind nicht enthalten. Ihren Richtpreis rechnen Sie im <a href="/kernbohrung-rechner/">Kernbohr-Rechner</a> aus.',
      ] },
    ],
    faqs: [
      ['Wer legt Durchmesser und Dichtsystem fest?', 'Das legt der Installateur oder Fachplaner nach Datenblatt des Systems fest. Wir bohren das genannte Maß.'],
      ['Können Sie Wände mit Wasserdruck bohren?', 'Bei wasserdruckbelasteten Wänden ist die Planung der Durchführung Sache des Fachplaners. Sprechen Sie vorher mit uns über Bauteil und Lage, wir sagen, was bohrtechnisch möglich ist.'],
      ['Brauche ich vorher eine Leitungsauskunft?', 'Bei Bohrungen in erdberührten Wänden ist es sinnvoll, den Verlauf erdverlegter Leitungen vorher zu klären. Das ist Aufgabe des Auftraggebers.'],
      ['Reicht ein Foto für das Angebot?', 'Ja, meist genügen ein Foto der Wand mit Maßband sowie Angabe von Wandstärke, Material und gewünschtem Durchmesser.'],
    ],
  },
  {
    slug: 'leitungen-bewehrung-orten-kernbohrung',
    icon: 'drill',
    date: '2026-11-23',
    title: 'Leitungen und Bewehrung orten vor der Kernbohrung',
    h1: 'Vor dem Bohren orten: Leitungen und Bewehrung finden',
    description: 'Wie Leitungen und Bewehrung vor der Kernbohrung gefunden werden: Ortungsgeräte, Pläne, Markierung und was passiert, wenn die Bohrkrone auf Stahl trifft.',
    short: 'Ortung von Leitungen und Bewehrung vor der Kernbohrung: Verfahren, Grenzen, Zuständigkeiten.',
    answer: 'Vor einer Kernbohrung werden Leitungen und Bewehrung so gut wie möglich geortet, mit Plänen, Sichtprüfung und Ortungsgerät. Das übernehmen Statiker, Bauleiter oder Fachfirmen. Sie markieren auch die Bohrpunkte, wir bohren an den markierten und freigegebenen Stellen. Eine Ortung zeigt viel, aber nicht alles. Trifft die Bohrkrone auf Bewehrungsstahl, wird das nach Preisliste berechnet.',
    sections: [
      { h: 'Warum Ortung vor der Bohrung wichtig ist', p: [
        'Eine Kernbohrung schneidet alles durch, was im Weg liegt. Elektro- und Wasserleitungen und tragende Bewehrung sollen dabei nicht beschädigt werden. Deshalb wird die Stelle vor dem Bohren vom Statiker, Bauleiter oder einer Fachfirma geprüft und der Bohrpunkt bei Bedarf verschoben.',
      ] },
      { h: 'Wie Leitungen und Bewehrung gefunden werden', table: {
        head: ['Methode', 'Wofür', 'Grenzen'],
        rows: [
          ['Pläne und Bestandsunterlagen', 'Lage von Leitungen und Bauteilen', 'Nicht immer aktuell oder vollständig'],
          ['Sichtprüfung', 'Hinweise aus Schaltern, Steckdosen, Kästen', 'Altbau und Umbauten weichen oft ab'],
          ['Bewehrungssuchgerät', 'Findet Stahl nahe der Oberfläche', 'Tiefe und Dichte nur eingeschränkt'],
          ['Radar', 'Zeigt Bewehrung, Rohre und Hohlräume in der Tiefe', 'Auswertung braucht Erfahrung'],
        ],
      }, p: ['Welches Verfahren sinnvoll ist, hängt vom Bauteil und vom Risiko ab. Ortung ist ein Hilfsmittel, keine Garantie.'] },
      { h: 'Wer ist wofür zuständig?', ul: [
        'Statiker, Bauleiter oder Planer: Leitungen und Bewehrung orten, Statik klären, die Bohrpunkte markieren und freigeben.',
        'Wir: sauber an den markierten und freigegebenen Punkten bohren. Wir setzen keine Markierungen am Objekt und suchen weder Leitungen noch Bewehrung selbst.',
        'Bei Spannbeton, Spannstahl oder tragenden Bauteilen: Rücksprache mit dem Statiker, bevor gebohrt wird.',
      ] },
      { h: 'Was passiert, wenn die Bohrkrone auf Bewehrung trifft?', p: [
        'In Stahlbeton ist Bewehrung üblich. Trifft die Bohrkrone auf Stahl, wird der Stahl durchbohrt, was länger dauert und die Krone stärker beansprucht. Bewehrungsstahl ab Ø 10 mm berechnen wir laut Preisliste mit ' + eur(regeln.stahlProCm) + ' je cm Stahl zusätzlich. Wo die Lage der Bewehrung bekannt ist, kann der Statiker den Bohrpunkt anpassen.',
      ] },
      { h: 'So bereiten Sie die Bohrstelle vor', ol: [
        'Bohrstelle vom Statiker oder Bauleiter markieren lassen (oder Markierung vom Planer übernehmen)',
        'Pläne zu Elektro, Wasser und Statik bereithalten, falls vorhanden',
        'Mitteilen, ob in der Nähe Leitungen oder Rohre bekannt sind',
        'Foto der Stelle und der Nachbarflächen senden',
      ] },
    ],
    faqs: [
      ['Kann man Leitungen und Bewehrung sicher finden?', 'Nicht zu 100 Prozent. Ortungsgeräte liefern gute Hinweise, aber Tiefe, Material und Umbauten begrenzen die Genauigkeit. Deshalb liegen Ortung, Markierung und Freigabe der Bohrstelle beim Statiker, Bauleiter bzw. Auftraggeber.'],
      ['Wer haftet, wenn eine Leitung getroffen wird?', 'Das hängt vom Einzelfall und von der Freigabe der Bohrstelle ab. Klären Sie das vor Auftragsbeginn mit uns und halten Sie vorhandene Pläne bereit.'],
      ['Verschieben Sie die Bohrstelle, wenn Stahl gefunden wird?', 'Die Bohrstelle legen Statiker bzw. Bauleiter fest. Wir bohren an den markierten Punkten. Oft genügt eine kleine Verschiebung, die der Statiker vorgibt.'],
      ['Wie berechnen Sie Bewehrungsstahl?', 'Bewehrungsstahl ab Ø 10 mm berechnen wir je cm Stahl zusätzlich, laut Preisliste.'],
    ],
  },
  {
    slug: 'photovoltaik-speicher-kabeldurchfuehrung',
    icon: 'drill',
    date: '2026-11-23',
    title: 'Photovoltaik und Speicher: Kabeldurchführung durch Wand und Decke',
    h1: 'Photovoltaik und Batteriespeicher: Kabeldurchführung per Kernbohrung',
    description: 'Kernbohrung für PV-Anlage und Batteriespeicher: Kabel durch Außenwand und Decke, Abdichtung, Brandschutz, Durchmesser und Kosten in Dresden.',
    short: 'Kabeldurchführung für PV-Anlage und Speicher: Wand und Decke, Abdichtung, Brandschutz, Kosten.',
    answer: 'Für Photovoltaik und Batteriespeicher werden Kabel häufig durch Außenwand oder Geschossdecke geführt, zum Beispiel vom Dach zum Wechselrichter oder vom Technikraum zum Speicher. Eine Kernbohrung liefert dafür eine passgenaue, saubere Öffnung. Dichtung, Brandschutz und Verlegung übernimmt der Elektrofachbetrieb. Die Dachdurchführung selbst macht der Dachdecker.',
    sections: [
      { h: 'Wo bei der PV-Anlage gebohrt wird', ul: [
        'Außenwand: Kabel vom Dach oder von der Fassade ins Gebäude',
        'Geschossdecke oder Wand: Leitungsweg zum Wechselrichter und Zählerschrank',
        'Technikraum oder Keller: Durchführung zum Batteriespeicher',
      ] },
      { h: 'Abdichtung und Brandschutz', ul: [
        'Außen: Fuge zwischen Kabelschutzrohr und Wand gegen Wasser abdichten, bei Bedarf mit Dichtmanschette.',
        'Bei Durchdringung von Brandschutzbauteilen (zum Beispiel Decke oder Wand zwischen Brandabschnitten) ist eine geeignete Abschottung nötig.',
        'Planung und Ausführung gehören zum Elektrogewerk; Vorgaben des Herstellers und des Netzbetreibers beachten.',
      ] },
      { h: 'Welcher Durchmesser?', p: [
        'Der Durchmesser richtet sich nach Kabelbündel, Schutzrohr und Dichtsystem. Das Maß legt der Elektrofachbetrieb fest, wir bohren darauf. Mehrere Kabel lassen sich oft in einem größeren Durchbruch bündeln, statt viele kleine zu bohren.',
      ] },
      { h: 'Dach oder Wand: Wer macht was?', p: [
        'Durchführungen im Dachbereich übernimmt der Dachdecker mit passenden Dachdurchführungen. Wir bohren Wände und Decken im Gebäude, auch in Beton und Stahlbeton. Wenn mehrere Gewerke zusammenarbeiten, stimmen wir uns mit Ihrem Betrieb ab.',
      ] },
      { h: 'Was kostet die Bohrung?', p: [
        'Die Kosten richten sich nach Durchmesser, Wandstärke und Material. Als Beispiel: Ø 82 mm, 25 cm Beton kosten nach Preisliste ' + eur(berechne({ d: 82, tiefe: 25 }).total) + ' brutto inklusive Anfahrt und Pilotbohrung (Mindestauftragswert ' + eur(regeln.mindestpreis) + '). Ihren Richtpreis rechnen Sie im <a href="/kernbohrung-rechner/">Kernbohr-Rechner</a> aus.',
      ] },
    ],
    faqs: [
      ['Bohren Sie auch Dächer?', 'Wir bohren Wände und Decken im Gebäude. Dachdurchführungen übernimmt der Dachdecker.'],
      ['Wer legt den Durchmesser fest?', 'Der Elektrofachbetrieb nach Kabelbündel, Schutzrohr und Dichtsystem. Wir bohren auf das genannte Maß.'],
      ['Ist die Abdichtung im Preis enthalten?', 'Nein. Dichtsystem und Montage gehören zum Gewerk des Fachbetriebs und sind in der Bohrung nicht enthalten.'],
      ['Wie bekomme ich ein Angebot?', 'Foto der Stelle mit Maßband und Angabe von Wandstärke, Material und Durchmesser senden, wir melden uns mit dem Angebot.'],
    ],
  },
  {
    slug: 'pruefkerne-bohrkerne-beton-entnahme',
    icon: 'drill',
    date: '2026-11-24',
    title: 'Prüfkerne aus Beton: Bohrkernentnahme in Dresden',
    h1: 'Prüfkerne aus Beton entnehmen: Ablauf und Hinweise',
    description: 'Bohrkerne aus Beton zur Prüfung entnehmen: Wann Prüfkerne sinnvoll sind, wie die Entnahme abläuft und was vorab geklärt werden muss. In Dresden und Sachsen.',
    short: 'Bohrkernentnahme zur Betonprüfung: Anlässe, Ablauf, Zuständigkeiten.',
    answer: 'Prüfkerne sind zylindrische Bohrkerne, die mit einer Diamant-Bohrkrone aus Bauteilen aus Beton entnommen werden, um den Beton im Labor oder durch einen Sachverständigen zu prüfen. Wir übernehmen die Entnahme der Kerne an den Stellen, die der Prüfer oder Statiker festlegt. Die Auswertung (zum Beispiel Druckfestigkeit) erfolgt durch ein Prüflabor oder einen Sachverständigen. Preise für die Entnahme nennen wir auf Anfrage.',
    sections: [
      { h: 'Wann werden Prüfkerne entnommen?', ul: [
        'Bei Zweifeln an der Betonqualität, zum Beispiel nach Schäden oder bei auffälligen Prüfergebnissen',
        'Vor Umbau, Aufstockung oder Nutzungsänderung, wenn die Festigkeit im Bestand geprüft werden soll',
        'Zur Beurteilung von Schäden, etwa bei Feuchte, Rissen oder Frost',
        'Wenn Unterlagen zum Bauteil fehlen oder unvollständig sind',
      ] },
      { h: 'Wie läuft die Entnahme ab?', ol: [
        'Der Prüfer, Statiker oder Bauleiter legt fest, wo und wie viele Kerne entnommen werden.',
        'Wir bohren die Kerne mit Diamant-Bohrkrone und Wasserkühlung aus dem Bauteil.',
        'Die Kerne werden beschriftet, geschützt und an das Prüflabor oder den Sachverständigen übergeben.',
        'Die Bohrlöcher werden auf Wunsch von Ihnen oder einer Fachfirma verschlossen.',
      ] },
      { h: 'Wer macht was?', ul: [
        'Statiker, Prüfer oder Bauleiter: Entnahmestellen festlegen, Leitungen und Bewehrung orten, Bohrstellen markieren und freigeben.',
        'Kernbohr-Expert: Kerne sauber aus dem Bauteil bohren. Wir setzen keine Markierungen am Objekt und suchen nicht selbst nach Leitungen oder Bewehrung.',
        'Prüflabor oder Sachverständiger: Kerne untersuchen, zum Beispiel die Druckfestigkeit, und das Ergebnis bewerten.',
      ] },
      { h: 'Worauf Sie achten sollten', p: [
        'Bohrkerne aus Stahlbeton können Bewehrung enthalten. Das beeinflusst die Prüfung und wird deshalb vorab mit dem Prüfer besprochen. Je nach Bauteil sind Statik und Tragfähigkeit zu beachten, besonders bei tragenden Teilen.',
        'Schicken Sie uns vorab Angaben zu Bauteil, Dicke, Anzahl der Kerne und Zugang, am besten mit Foto. Dann erstellen wir ein Angebot. Preise für die Entnahme nennen wir auf Anfrage.',
      ] },
    ],
    faqs: [
      ['Was ist ein Prüfkern?', 'Ein Prüfkern ist ein zylindrischer Bohrkern aus Beton, der zur Untersuchung der Betoneigenschaften, zum Beispiel der Druckfestigkeit, entnommen wird.'],
      ['Prüfen Sie die Kerne auch selbst?', 'Nein. Wir entnehmen die Kerne. Die Prüfung und Bewertung übernimmt ein Prüflabor oder ein Sachverständiger.'],
      ['Wer legt die Entnahmestellen fest?', 'Der Prüfer, Statiker oder Bauleiter. Wir bohren an den markierten und freigegebenen Stellen.'],
      ['Was kostet die Entnahme von Prüfkernen?', 'Die Preise für die Bohrkernentnahme nennen wir auf Anfrage. Senden Sie uns Angaben zum Bauteil und die Anzahl der Kerne, dann erhalten Sie ein Angebot.'],
    ],
  },
];
