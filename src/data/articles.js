// Ratgeber-Artikel. Allgemeine Fachinformationen; Angaben mit [ ] vom Inhaber bestätigen.
// Hinweis: Kein Rechts- oder Steuerrat. Verbindliche Auskünfte gibt der Fachplaner, Statiker oder Steuerberater.

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
        'Bei einem Monoblock-Gerät führen Heizungsvor- und -rücklauf (gedämmt) sowie Strom durch die Wand. Die Bohrung fällt deshalb meist größer aus, typisch sind etwa 100–200 mm. [Inhaber bestätigen] Maßgeblich sind immer die Angaben des Herstellers und die gewählte Dämmung bzw. das Futterrohr.' ] },
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
      ['Wie lange dauert die Bohrung?', 'Eine Standardbohrung dauert in der Regel wenige Minuten bis etwa eine Stunde inklusive Aufbau. [Inhaber bestätigen]'],
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
        'Normaler Wasseranschluss in der Nähe der Bohrstelle',
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
      ['Brauchen Sie Wasser vor Ort?', 'Ja. Für die Nassbohrung brauchen wir einen normalen Wasseranschluss und Strom auf der Baustelle.'],
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
        'In Vierteln wie Neustadt, Striesen, Blasewitz oder Plauen stehen viele Gebäude mit massiven Ziegelwänden. Die Wände sind oft deutlich dicker als im Neubau, [typisch etwa 38 cm und mehr, Inhaber bestätigen], das Material ist weich, aber die Bohrtiefe groß. Wichtig sind Staubschutz, empfindliche Putze und Stuck sowie die Beachtung von Holzbalkendecken.' ] },
      { h: 'Plattenbau', p: [
        'In Plattenbau-Quartieren wie Gorbitz, Prohlis oder Johannstadt bestehen Wände und Decken aus Betonfertigteilen. Viele dieser Bauteile sind tragend. Eingriffe sind nur nach Abstimmung mit Eigentümer bzw. Wohnungsunternehmen und gegebenenfalls Statiker möglich. Für Leitungsdurchführungen, Lüftung oder Klimageräte gibt es oft vorgesehene Bereiche. [Inhaber prüfen]' ] },
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
];
