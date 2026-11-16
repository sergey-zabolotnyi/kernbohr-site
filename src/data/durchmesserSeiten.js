// Seiten je gängigem Bohrdurchmesser (/kernbohrung-<mm>-mm/). Preise werden NICHT hier gepflegt,
// sondern in der Seite aus preisliste.js berechnet. Anwendungen passen zu durchmesser.js (Richtwerte).
// Keine erfundenen Zahlen: Beispieltiefen sind als Beispiel gekennzeichnet.
export const durchmesserSeiten = [
  {
    mm: 68,
    kurz: 'Dosenbohrung',
    hero: 'werk-wand-125',
    intro: 'Ø 68 mm ist das Standardmaß für Unterputz-, Hohlraum- und Geräteverbindungsdosen. Wir bohren die Dosenlöcher sauber, rund und in der Tiefe, die Ihre Wand braucht.',
    anwendungen: [
      ['Elektro-Unterputzdosen', 'Das Standardmaß für Schalter-, Steckdosen- und Verbindungsdosen in Beton und Mauerwerk.'],
      ['Mehrere Dosen in Serie', 'Bei Sanierungen oder Neubauten bohren wir viele gleiche Löcher nacheinander. Bohrliste oder Plan genügt für das Angebot.'],
      ['Rohre bis ca. 50 mm', 'Kleine Wasser- und Heizungsrohre mit Dämmung passen je nach Aufbau ebenfalls durch Ø 68 mm.'],
    ],
    tipp: 'Bei Dosenbohrungen in Serie lohnt sich ein Gesamtangebot: Anfahrt und Baustelleneinrichtung fallen nur einmal an.',
    faq: [
      ['Welcher Durchmesser ist für eine Unterputzdose üblich?', 'Standard-Dosen haben einen Bohrdurchmesser von 68 mm. Hohlraumdosen und Geräteverbindungsdosen werden ebenfalls mit Ø 68 mm eingesetzt. Prüfen Sie bei Sonderdosen die Angabe des Herstellers.'],
      ['Lohnt sich eine Kernbohrung für eine einzelne Dose?', 'Der Mindestauftragswert beträgt 250 €. Für eine einzelne Dose ist es deshalb sinnvoll, mehrere Arbeiten zu bündeln, etwa weitere Dosen oder Durchführungen im selben Termin.'],
    ],
  },
  {
    mm: 82,
    kurz: 'Klimagerät und Leitungen',
    hero: 'werk-wand-125',
    intro: 'Ø 82 mm passt zu vielen Split-Klimageräten und zu gedämmten Leitungen für Wasser, Heizung und Kondensat. Wir bohren leicht nach außen abfallend, wenn Kondensat abfließen soll.',
    anwendungen: [
      ['Split-Klimagerät', 'Kältemittelleitungen und Kondensatablauf gehen durch eine Bohrung. Je nach Wandhülse sind Ø 60 bis 82 mm üblich.'],
      ['Wasser- und Heizungsrohre', 'Kupfer- oder Verbundrohre mit Dämmung. Dämmung und Schutzrohr bitte mitrechnen.'],
      ['Kabelbündel', 'Mehrere Leitungen können gemeinsam durch eine Bohrung geführt und anschließend abgedichtet werden.'],
    ],
    tipp: 'Messen Sie die Wandhülse Ihres Klimageräts außen und planen Sie 5 bis 15 mm Luft ein. Bei Unsicherheit senden Sie uns ein Foto mit Maßband.',
    faq: [
      ['Welcher Durchmesser ist für ein Klimagerät richtig?', 'Für Split-Klimageräte sind meist Ø 60 bis 82 mm üblich. Entscheidend sind die Maße der Wandhülse und der Leitungen laut Herstellerangabe.'],
      ['Muss die Bohrung nach außen abfallen?', 'Bei Kondensatablauf sollte die Bohrung leicht nach außen abfallen, damit Wasser nicht ins Haus läuft. Sagen Sie uns die Einbausituation, wir bohren entsprechend.'],
    ],
  },
  {
    mm: 100,
    kurz: 'Leitungen und Kabelbündel',
    hero: 'werk-bohrstaender',
    intro: 'Ø 100 mm ist ein häufig angefragtes Maß für Leitungsbündel, Schutzrohre und Durchführungen mittlerer Größe. Der Preis je Zentimeter liegt hier noch in der günstigsten Stufe der Preisliste.',
    anwendungen: [
      ['Leitungsbündel und Schutzrohre', 'Mehrere Kabel oder Leerrohre lassen sich in einer Bohrung bündeln.'],
      ['Wärmepumpe (kleinere Leitungen)', 'Je nach Hersteller und Mauerkasten kann Ø 100 mm genügen. Die Herstellerangabe entscheidet.'],
      ['Lüftungs- und Abluftleitungen', 'Für Rohre DN 100 mit Dämmung wird meist ein größerer Durchmesser (ab 112 mm) benötigt, siehe unsere Richtwerte.'],
    ],
    tipp: 'Wer zwischen 100 und 125 mm schwankt: Beide liegen im Preis nah beieinander. Messen Sie lieber großzügig, denn eine spätere Vergrößerung kostet einen zweiten Einsatz.',
    faq: [
      ['Was kostet eine Kernbohrung mit 100 mm?', 'Die Preise sehen Sie in der Tabelle oben: je cm Bohrtiefe, abhängig vom Material. Dazu kommen Anfahrt und Pilotbohrung. Der Mindestauftragswert beträgt 250 €.'],
      ['Reicht 100 mm für ein Abluftrohr?', 'Ein Rohr mit 100 mm Außendurchmesser braucht mit Luft und Dämmung meist mehr als 100 mm Bohrung. Prüfen Sie den Außendurchmesser samt Dämmung, in der Regel ist ein größerer Durchmesser nötig.'],
    ],
  },
  {
    mm: 125,
    kurz: 'Abwasser DN 100 und Lüftung',
    hero: 'werk-wand-125',
    intro: 'Ø 125 mm passt typischerweise zu HT-Abwasserrohr DN 100 (Außen-Ø ca. 110 mm) und zu gedämmten Lüftungsrohren DN 100. Bei Abwasser planen wir das Gefälle nach außen mit ein.',
    anwendungen: [
      ['Abwasser, HT-Rohr DN 100', 'Außendurchmesser ca. 110 mm. Mit Luft ergibt sich ein Bohrdurchmesser von rund 122 bis 132 mm.'],
      ['Lüftung DN 100 mit Dämmung', 'Rohr-Außendurchmesser plus Dämmung bestimmen das Maß. Lassen Sie es vom Lüftungsplaner bestätigen.'],
      ['Kleine Wärmepumpen-Durchführungen', 'Je nach Hersteller kann ein kleinerer Mauerkasten durch Ø 125 mm passen.'],
    ],
    tipp: 'Für Dunstabzugshauben mit Abluftrohr DN 125 ist Ø 125 mm zu knapp. Dort sind Ø 130 bis 135 mm üblich, bei Mauerkasten größer.',
    faq: [
      ['Ist 125 mm das richtige Maß für ein Dunstabzugsrohr DN 125?', 'Nein, das Rohr braucht Luft. Für DN 125 sind in der Regel Ø 130 bis 135 mm üblich, bei Mauerkasten noch größer. Mehr dazu auf unserer Seite zum Wanddurchbruch für die Dunstabzugshaube.'],
      ['Wie wird die Bohrung für ein Abwasserrohr gebohrt?', 'Mit leichtem Gefälle nach außen, damit das Wasser abfließen kann. Sagen Sie uns Rohrtyp und Einbaulage, wir stimmen die Bohrung darauf ab.'],
    ],
  },
  {
    mm: 150,
    kurz: 'Wärmepumpe und Lüftung',
    hero: 'werk-bohrkrone-152',
    intro: 'Ø 150 mm ist ein beliebtes Maß für Lüftung, Abluft und kleinere Wärmepumpen-Durchführungen. Bei der Preisliste lohnt ein genauer Blick: Ø 150 und Ø 152 mm liegen in unterschiedlichen Preisstufen.',
    anwendungen: [
      ['Wärmepumpe', 'Leitungen, Kabel und Dämmung gehen oft durch Ø 100 bis 200 mm. Hersteller und Mauerkasten entscheiden.'],
      ['Lüftung DN 125 bis DN 150', 'Rohr-Außendurchmesser plus Dämmung bestimmen das Maß. Bestätigung durch den Lüftungsplaner einholen.'],
      ['Abluft und Dunstabzug', 'Für Abluftrohr DN 125 reicht Ø 150 mm. Für DN 150 sind Ø 160 bis 165 mm üblich.'],
    ],
    tipp: 'Preisstufe beachten: Bis Ø 151 mm gilt die günstigere Stufe, ab Ø 152 mm die nächste. Passt Ihr Bauteil auch durch 150 mm, spart das Geld. Prüfen Sie das aber mit Maßband und Herstellerangabe, nicht nach Gefühl.',
    faq: [
      ['Warum ist Ø 150 mm günstiger als Ø 152 mm?', 'Unsere Preisliste staffelt nach Durchmesser. Ø 132 bis 151 mm bilden eine Stufe, ab Ø 152 mm beginnt die nächste. Die genauen Preise je cm sehen Sie in der Tabelle auf dieser Seite.'],
      ['Reicht Ø 150 mm für eine Wärmepumpe?', 'Das hängt vom Gerät ab. Je nach Hersteller sind Ø 100 bis 200 mm üblich. Maßgeblich sind die Herstellerangabe und der Mauerkasten. Schicken Sie uns ein Foto, wir beraten.'],
    ],
  },
  {
    mm: 200,
    kurz: 'große Wärmepumpen-Durchführung',
    hero: 'werk-oeffnung-schiene',
    intro: 'Ø 200 mm kommt bei großen Wärmepumpen-Durchführungen, Lüftungsanlagen und Sonderlösungen zum Einsatz. Bei großen Durchmessern ist die Vorbereitung wichtig: Standsicherheit des Bohrständers, Wasser und Strom.',
    anwendungen: [
      ['Große Wärmepumpen-Durchführung', 'Wenn mehrere Leitungen oder ein Mauerkasten durch die Wand sollen, ist Ø 200 mm ein gängiges Maß.'],
      ['Lüftung DN 160 und größer', 'Rohr-Außendurchmesser plus Dämmung bestimmen das Maß, vom Planer bestätigen lassen.'],
      ['Sonderdurchführungen', 'Für Technikschächte, Lichtkanäle oder Rohrbündel in Beton und Mauerwerk.'],
    ],
    tipp: 'Bei großen Durchmessern sollte vorab geklärt sein, ob Bewehrung getroffen wird und ob das Bauteil tragend ist. Im Zweifel erst Statiker fragen.',
    faq: [
      ['Wie tief kann eine Ø-200-mm-Bohrung gehen?', 'Wir bohren bis zu 2 m tief. Bei großen Durchmessern und Tiefen planen wir Wasser, Strom und Ständer vorab mit Ihnen ab.'],
      ['Darf ich in eine tragende Wand mit 200 mm bohren?', 'Bei tragenden Bauteilen ist eine statische Prüfung erforderlich. Das klären Sie bitte vorab mit dem Statiker. Wir sprechen uns gern mit ihm ab.'],
    ],
  },
];
