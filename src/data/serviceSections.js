// Ausführliche Textabschnitte je Leistungsseite (nach "Auf einen Blick"). Format: { h, p: [Absätze], liste?: [Punkte], tabelle?: { kopf, zeilen } }
// Hinweis: Richtwerte sind allgemeine Fachangaben, keine Zusagen. Inhaber bitte gegenlesen. Preise nur aus preisliste.js.
export const serviceSections = {
  wanddurchbruch: [
    {
      h: 'So läuft ein Wanddurchbruch ab',
      p: ['Ein Durchbruch ist Handwerk mit Vorbereitung. Je klarer die Ausgangslage, desto schneller und sauberer ist die Öffnung fertig.'],
      liste: [
        'Bestandsaufnahme per Foto oder vor Ort: Wandstärke, Material, Lage der Öffnung, Zugang für Gerät und Abtransport.',
        'Klärung, ob die Wand tragend ist. Bei tragenden Wänden und Decken geben Statiker oder Architekt die Öffnung und die nötige Abfangung (Sturz, Träger) vor.',
        'Markierung der Öffnung und Freigabe durch Sie, bevor der erste Schnitt gesetzt wird.',
        'Schutz von Boden, Möbeln und Treppenhaus, Staubschutz und Absaugung.',
        'Ausführung: Die Ecken werden meist gebohrt, dann folgt der Schnitt mit der Wandsäge auf Führungsschiene. Große Teile werden in handhabbare Stücke geteilt.',
        'Abtransport der Teile und aufgeräumte Übergabe.',
      ],
    },
    {
      h: 'Tragende oder nicht tragende Wand?',
      p: [
        'Ob eine Wand trägt, lässt sich von außen nicht sicher beurteilen. Hinweise geben Bauunterlagen, Statik oder eine Prüfung durch den Statiker. Außenwände und Wände, auf denen Decken oder Träger aufliegen, sind häufig tragend. Bei Altbauten ist der Aufbau oft nicht dokumentiert.',
        'Bei tragenden Bauteilen sind eine statische Berechnung und meist eine Abfangung der Lasten erforderlich. In Eigentümergemeinschaften und Mietobjekten kommt die Zustimmung von Eigentümer oder WEG hinzu, bei Denkmalschutz die der Behörde. Wir arbeiten gern mit Ihrem Statiker oder Architekten zusammen und setzen seine Vorgaben um.',
      ],
    },
    {
      h: 'Kernbohrung, Wandsäge oder Stemmen: Was passt?',
      tabelle: {
        kopf: ['Verfahren', 'Geeignet für', 'Besonderheit'],
        zeilen: [
          ['Kernbohrung', 'Runde Durchführungen für Rohre, Lüftung, Wärmepumpe', 'Schnell und günstig, Ø 14–500 mm, auch zum Vorbohren der Ecken'],
          ['Wandsäge (Betonschneiden)', 'Türen, Fenster, große eckige Öffnungen in Wand und Decke', 'Gerade, exakte Schnitte, wenig Vibration, Wasserkühlung'],
          ['Stemmen und Meißeln', 'Kleine Korrekturen in weichem Mauerwerk', 'Mehr Erschütterung und Staub, ungenauere Kanten'],
        ],
      },
      p: ['Mehr zum Vergleich finden Sie im Ratgeber zu Kernbohrung oder Meißeln.'],
    },
    {
      h: 'Was bestimmt den Preis eines Wanddurchbruchs?',
      p: ['Maßgeblich sind Größe und Tiefe der Öffnung, Material (Mauerwerk, Beton oder Stahlbeton mit Bewehrung), Zugang und Höhe, Schutz- und Entsorgungsaufwand sowie die statischen Maßnahmen. Für runde Bohrungen gilt unsere Preisliste online. Für Sägearbeiten und Durchbrüche erstellen wir nach Foto oder Maßen ein kostenloses Angebot. Die Preisfaktoren erklärt der Ratgeber zu den Kosten eines Wanddurchbruchs.'],
    },
  ],

  betonsaegen: [
    {
      h: 'So arbeitet die Wandsäge',
      p: [
        'Bei der Wandsäge wird eine Diamant-Sägeblatt-Einheit auf einer Führungsschiene an der Wand befestigt. Das Blatt wird mit Wasser gekühlt, deshalb entsteht wenig Staub, dafür Schlamm, den wir auffangen und absaugen. Der Schnitt ist gerade und die Kante sauber, die Erschütterung für das Gebäude ist gering.',
        'Bei Öffnungen werden die Ecken in der Regel vorgebohrt, damit sich das Blatt nicht verklemmt und die Ecken sauber werden. Die herausgeschnittenen Teile werden vorher gesichert und in transportable Stücke geteilt.',
      ],
    },
    {
      h: 'Typische Einsatzfälle',
      liste: [
        'Türöffnung in einer Innen- oder Außenwand',
        'Fensteröffnung vergrößern oder neu schaffen',
        'Deckenöffnung, zum Beispiel für Treppe oder Schacht',
        'Teilrückbau von Wänden bei Sanierung und Umbau',
        'Trennschnitte, wenn Bauteile getrennt oder entfernt werden sollen',
      ],
    },
    {
      h: 'Gewicht beachten: Was wiegt das ausgeschnittene Teil?',
      p: ['Als grobe Faustregel wiegt Stahlbeton etwa 2.400 bis 2.500 kg je Kubikmeter. Ein Wandstück von 1 m² bei 20 cm Dicke wiegt damit rund 500 kg. Deshalb planen wir Teilung, Abtransport und Absicherung der Stücke vorab mit Ihnen. Bei Decken kommen Unterstützung und Auffangen der Teile hinzu.'],
    },
    {
      h: 'Das sollten Sie vorbereiten',
      liste: [
        'Strom (230 V, bei großen Geräten eventuell 400 V) und Zugang zur Wand',
        'Wasser: Ist keines vorhanden, bringen wir es in Kanistern mit. Sagen Sie uns vorab Bescheid.',
        'Wertvolles und Möbel aus dem Arbeitsbereich entfernen',
        'Freie Wege für Abtransport, bei Obergeschossen Hinweis auf Treppen oder Aufzug',
        'Klärung der Statik bei tragenden Wänden und Decken',
      ],
    },
    {
      h: 'Preis für Betonsägen',
      p: ['Der Preis richtet sich nach Schnittlänge, Tiefe, Material (Beton, Stahlbeton, Mauerwerk), Zugang und Entsorgung. Senden Sie uns Maße oder ein Foto der Wand, dann erhalten Sie ein kostenloses Angebot. Für runde Bohrungen rechnen Sie selbst im Kernbohr-Rechner.'],
    },
  ],

  fugenschneiden: [
    {
      h: 'Welche Fugen gibt es?',
      tabelle: {
        kopf: ['Fugenart', 'Zweck', 'Typischer Einsatz'],
        zeilen: [
          ['Scheinfuge', 'Sollbruchstelle: Der Beton reißt kontrolliert in der Fuge statt irgendwo in der Fläche', 'Bodenplatten, Hallenböden, Garagenzufahrten'],
          ['Dehnfuge (Bewegungsfuge)', 'Nimmt Längenänderung durch Temperatur auf', 'Große Flächen, Anschlüsse an Bauteile'],
          ['Trennschnitt', 'Trennt Bauteile oder Flächen, zum Beispiel bei Umbau', 'Sanierung, Rückbau'],
        ],
      },
    },
    {
      h: 'Wann und wie tief wird geschnitten?',
      p: [
        'Beton schwindet beim Aushärten. Damit er dabei nicht unkontrolliert reißt, wird die Fuge zeitnah nach dem Betonieren geschnitten, sobald der Beton begehbar und schneidbar ist. Der Zeitpunkt hängt von Mischung, Temperatur und Witterung ab. Wir stimmen ihn mit Ihnen ab, Sie sollten uns den Betoniertermin deshalb früh nennen.',
        'Als Richtwert für Scheinfugen wird häufig etwa ein Viertel bis ein Drittel der Plattendicke genannt. Maßgeblich sind die Vorgaben von Planer oder Statiker für Ihre Fläche.',
      ],
    },
    {
      h: 'Was wir für das Angebot brauchen',
      liste: [
        'Fläche oder Fugenlänge in Metern, Plattendicke und gewünschtes Fugenraster',
        'Betoniertermin oder Alter des Betons',
        'Zugang für das Fugenschneid-Gerät, Wasser und Strom vor Ort',
        'Ein Foto der Fläche',
      ],
    },
    {
      h: 'Typische Flächen',
      p: ['Garagen- und Hofeinfahrten, Hallen- und Industrieböden, Bodenplatten, Terrassen und Gehwege. Wir arbeiten in Dresden und Sachsen, größere Flächen auch bundesweit nach Absprache.'],
    },
  ],

  'rueckbau-teilabbruch': [
    {
      h: 'Entkernung und Teilrückbau im Bestand',
      p: [
        'Bei einer Sanierung oder Modernisierung geht es meist nicht um den Abriss ganzer Gebäude, sondern um gezielten Rückbau: einzelne Wände, Wandöffnungen, Estrich, Bodenbeläge oder Einbauten werden entfernt, der Rest bleibt unberührt. Das nennt man selektiven Rückbau oder Entkernung. Unser Schwerpunkt sind Teilabbrüche und Rückbau im Bestand, auch in bewohnten Objekten und bei laufendem Betrieb.',
        'Gerade im Altbau lohnt sich eine saubere Trennung der Arbeitsschritte: erst Schnitte und Bohrungen, dann das Entfernen der Bauteile in Stücken, dann Abtransport. Das ist leiser und staubärmer als das großflächige Aufstemmen.',
      ],
    },
    {
      h: 'Typische Leistungen',
      liste: [
        'Entfernen nicht tragender Innenwände',
        'Wand- und Deckendurchbrüche mit Wandsäge und Kernbohrung',
        'Schlitze und Öffnungen für neue Leitungen',
        'Rückbau einzelner Bauteile aus Beton und Mauerwerk',
        'Fachgerechte Entsorgung und Schutzmaßnahmen nach Absprache',
      ],
    },
    {
      h: 'Wichtig bei älteren Gebäuden: Schadstoffe',
      p: ['In Gebäuden aus früheren Jahrzehnten können Schadstoffe wie Asbest oder alte Mineralwolle verbaut sein. Besteht ein Verdacht, muss vorab eine Untersuchung erfolgen, und Sanierung sowie Entsorgung übernehmen dafür zugelassene Fachfirmen. Sprechen Sie uns darauf an, wir planen den Ablauf mit Ihnen ab.'],
    },
    {
      h: 'Ablauf bei Rückbauarbeiten',
      liste: [
        'Foto oder Besichtigung: Was soll weg, was muss bleiben?',
        'Angebot mit Leistungsumfang, Schutzmaßnahmen und Entsorgung',
        'Statik und Genehmigungen, wo erforderlich, gemeinsam mit Ihrem Planer',
        'Ausführung, mit Staubschutz und lärmarmer Technik',
        'Abtransport und aufgeräumte Übergabe',
      ],
    },
  ],

  schlitzfraesen: [
    {
      h: 'Wofür werden Schlitze gefräst?',
      p: ['Schlitze nehmen Leitungen auf, ohne dass sie auf der Wand liegen: Elektrokabel und Leerrohre, Wasser- und Heizungsleitungen, Anschlüsse im Bad oder in der Küche. Wer nachträglich Leitungen verlegt, muss die Wand dafür öffnen. Mit der Schlitzfräse geht das gerade, in einer definierten Breite und Tiefe.'],
    },
    {
      h: 'Schlitzfräse oder Stemmen?',
      tabelle: {
        kopf: ['', 'Schlitzfräse', 'Stemmen mit Hammer und Meißel'],
        zeilen: [
          ['Kanten', 'Gerade und sauber', 'Unregelmäßig'],
          ['Erschütterung', 'Gering', 'Hoch, kann Putz und Wand belasten'],
          ['Staub', 'Mit Absaugung und Abdeckung gut beherrschbar', 'Viel Staub und Schutt'],
          ['Tempo bei langen Strecken', 'Schnell', 'Langsam und anstrengend'],
        ],
      },
    },
    {
      h: 'Das sollten Sie vorab klären',
      liste: [
        'Verlauf der Leitung: waagerecht, senkrecht, Anschlussdosen',
        'Wandart: Beton, Stahlbeton, Ziegel, Kalksandstein oder Altbau-Mischmauerwerk',
        'Tragende Wände: Schlitztiefe und -breite sind begrenzt, bitte mit dem Statiker klären',
        'Vorhandene Leitungen: Wenn möglich, vorher Leitungsverlauf prüfen',
      ],
    },
    {
      h: 'Wie bekomme ich ein Angebot?',
      p: ['Senden Sie uns einen Grundriss oder Foto mit der Streckenlänge. Wir nennen Ihnen den Preis nach Länge, Tiefe und Material. Schlitze lassen sich gut mit Kernbohrungen für Dosen im selben Termin kombinieren.'],
    },
  ],

  'wanddurchbruch-dunstabzugshaube': [
    {
      h: 'Welcher Bohrdurchmesser für die Abzugshaube?',
      tabelle: {
        kopf: ['Abluftrohr der Haube', 'Typischer Bohrdurchmesser', 'Hinweis'],
        zeilen: [
          ['DN 125 (Außen-Ø ca. 125 mm)', 'Ø 130–135 mm', 'Mit Mauerkasten größer bohren'],
          ['DN 150 (Außen-Ø ca. 150 mm)', 'Ø 160–165 mm', 'Mit Mauerkasten größer bohren'],
        ],
      },
      p: ['Das Rohr braucht etwas Luft, damit es sich einschieben und abdichten lässt. Prüfen Sie den Außendurchmesser Ihres Abluftrohrs oder Mauerkastens. Wenn Sie unsicher sind, senden Sie uns ein Foto mit Maßband.'],
    },
    {
      h: 'Abluft nach außen: Das gehört dazu',
      liste: [
        'Bohrung mit leichtem Gefälle nach außen, damit kein Regenwasser eindringt',
        'Mauerkasten oder Futterrohr mit Rückstauklappe, damit keine kalte Luft zurückströmt (je nach Haube und Hersteller)',
        'Außenblende oder Wetterschutzgitter an der Fassade',
        'Abdichtung der Fuge zwischen Rohr und Wand',
      ],
    },
    {
      h: 'Ablauf und Vorbereitung',
      p: ['Wir markieren die Bohrstelle mit Ihnen, decken Küche und Arbeitsbereich ab und bohren nass und staubarm, auf Wunsch mit Wassersauger. Die Küche bleibt dabei sauber, die Bohrung dauert in der Regel nur kurz. Bitte räumen Sie den Bereich vor dem Termin frei und prüfen Sie, ob in der Wand Leitungen verlaufen. Bei Mietwohnungen und Eigentümergemeinschaften klären Sie vorab die Zustimmung.'],
    },
    {
      h: 'Was kostet der Durchbruch für die Dunstabzugshaube?',
      p: ['Eine Bohrung für die Abzugshaube ist eine normale Kernbohrung. Der Preis hängt von Durchmesser, Wandstärke und Material ab. Einen Richtpreis erhalten Sie im Kernbohr-Rechner, ein verbindliches Angebot nach einem Foto der Stelle.'],
    },
  ],

  'kamin-sanitaer-anschluesse': [
    {
      h: 'Kaminofen und Ofenrohr: Wanddurchführung',
      p: [
        'Für den Anschluss eines Kaminofens an den Schornstein wird häufig eine Wand durchbohrt, durch die das Ofenrohr zum Schornstein geführt wird. Üblich sind Durchmesser von 130 bis 200 mm. Der Durchmesser hängt vom Ofenrohr und einer eventuell nötigen Wandhülse ab. Die Herstellerangabe des Ofens ist maßgeblich.',
        'Bevor gebohrt wird, sollte der Bezirksschornsteinfeger den Anschluss geprüft und freigegeben haben. Auch Abstände zu brennbaren Bauteilen und die Beschaffenheit des Schornsteins gehören in diese Prüfung. Wir führen die Bohrung fachgerecht aus, die Abnahme des Anschlusses klären Sie vorab.',
      ],
    },
    {
      h: 'Sanitär und Abwasser: passende Durchmesser',
      tabelle: {
        kopf: ['Anwendung', 'Typischer Bohrdurchmesser', 'Hinweis'],
        zeilen: [
          ['Abwasser, HT-Rohr DN 50', 'Ø 62–72 mm', 'Gefälle nach außen einplanen'],
          ['Abwasser, HT-Rohr DN 100', 'Ø 122–132 mm', 'Gefälle nach außen einplanen'],
          ['Wasser- und Heizungsrohre mit Dämmung', 'Ø 40–72 mm', 'Dämmung und Schutzrohr mitrechnen'],
          ['Lüftungsrohr DN 100 bis DN 160', 'Ø 112–172 mm', 'Maß vom Lüftungsplaner bestätigen lassen'],
        ],
      },
    },
    {
      h: 'So bereiten Sie den Termin vor',
      liste: [
        'Foto der Bohrstelle mit Maßband (Wandstärke, Abstand zu Decke und Ecke)',
        'Rohr- oder Hülsenmaß: Außendurchmesser messen, nicht den Innendurchmesser',
        'Bei Schornstein: Freigabe oder Termin mit dem Bezirksschornsteinfeger',
        'Strom vor Ort, Wasser nach Absprache (sonst bringen wir es mit)',
        'Bereich frei räumen, empfindliche Möbel abdecken',
      ],
    },
  ],
};
