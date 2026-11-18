// Zuordnung: Originaldatei (ohne Endung, im Ordner "originals") -> ID auf der Website.
// Texte wurden anhand der echten Fotos/Videos geschrieben. Danach `npm.cmd run media` erneut ausführen.
// Hinweis: Auf 003/004 sind Mitarbeiter erkennbar, dafür Einwilligung einholen.

export const entries = [
  // ===== Fotos =====
  { id: 'werk-bohrstaender', file: '001', type: 'image',
    alt: 'Hilti-Kernbohrgerät auf Bohrständer beim Nassbohren in einer Betonbodenplatte', caption: 'Kernbohren mit Bohrständer und Wasserkühlung' },
  { id: 'werk-fassade', file: '002', type: 'image',
    alt: 'Fertige, saubere Kernbohrung in einer verputzten Fassade', caption: 'Fertige Bohrung durch die Außenwand' },
  { id: 'werk-ueberkopf-1', file: '003', type: 'image',
    alt: 'Mitarbeiter bohrt von der Leiter mit einem Kernbohrgerät auf Schiene in der Ecke zwischen Wand und Decke', caption: 'Kernbohrung an der Decke' },
  { id: 'werk-ueberkopf-2', file: '004', type: 'image',
    alt: 'Mitarbeiter führt auf der Leiter eine Kernbohrung an der Decke mit Wasserführung aus', caption: 'Überkopfbohrung mit Wasserführung' },
  { id: 'werk-wand-gross', file: '005', type: 'image',
    alt: 'Kernbohrgerät auf Schiene an einer Betonwand mit zwei großen fertigen Bohrungen', caption: 'Große Durchmesser in der Betonwand' },
  { id: 'werk-wand-125', file: '006', type: 'image',
    alt: 'Fertige Bohrung mit Maßangabe 125 in einer Wand über verlegten Leitungen', caption: 'Bohrung Ø 125 mm für Leitungsdurchführung' },

  { id: 'werk-unterzug', file: '007', type: 'image',
    alt: 'Fertige Kernbohrung in einem Betonunterzug über einer Wohnungstür im Treppenhaus', caption: 'Bohrung im Betonunterzug' },
  { id: 'werk-durchfuehrung-decke', file: '008', type: 'image',
    alt: 'Fertige Kernbohrung in einer Betonwand direkt unter der Decke', caption: 'Durchführung unter der Decke' },
  { id: 'werk-oeffnung-schiene', file: '009', type: 'image',
    alt: 'Kernbohrgerät auf Schiene vor einer Wandöffnung aus mehreren überlappenden Bohrungen', caption: 'Große Öffnung aus überlappenden Kernbohrungen' },
  { id: 'werk-bohrkrone-152', file: '010', type: 'image',
    alt: 'Bohrkrone Ø 152 mm in einer Öffnung aus überlappenden Kernbohrungen', caption: 'Bohrkrone Ø 152 mm in der Öffnung' },
  { id: 'werk-oeffnung-geruest', file: '011', type: 'image',
    alt: 'Hilti-Kernbohrgerät auf Schiene am Gerüst vor einer Öffnung aus drei überlappenden Bohrungen', caption: 'Öffnung aus drei Bohrungen, Arbeit am Gerüst' },

  // ===== Referenz IKEA Dresden (17.11.2026) =====
  { id: 'ikea-dach-bohrstaender', file: 'ikea-01', type: 'image',
    alt: 'Hilti-Kernbohrgerät auf Bohrständer auf dem offenen Parkdeck, im Hintergrund Absperrzaun', caption: 'Kernbohrgerät auf dem Parkdeck' },
  { id: 'ikea-dach-abend', file: 'ikea-02', type: 'image',
    alt: 'Kernbohrgerät auf Bohrständer auf der abgesperrten Parkdeck-Fläche im Abendlicht', caption: 'Parkdeck im Abendlicht, Arbeitsbereich abgesperrt' },
  { id: 'ikea-innen-bohrstaender', file: 'ikea-03', type: 'image',
    alt: 'Kernbohrgerät auf Bohrständer im Innenbereich vor einer Fensterfront', caption: 'Bohrständer im Innenbereich' },
  { id: 'ikea-bohrung-fertig', file: 'ikea-04', type: 'image',
    alt: 'Fertige Kernbohrung Ø 150 mm in einer verputzten Wand', caption: 'Fertige Bohrung Ø 150 mm' },
  { id: 'ikea-bohrung-schiene', file: 'ikea-05', type: 'image',
    alt: 'Kernbohrgerät auf Schiene neben einer fertigen Bohrung in einer Wandecke', caption: 'Schienenbohrgerät an der Wand' },
  { id: 'ikea-bohrkern', file: 'ikea-06', type: 'image',
    alt: 'Diamant-Bohrkrone und ein Bohrkern aus Mauerwerk (Ziegel) nebeneinander', caption: 'Bohrkrone und Bohrkern aus Ziegelmauerwerk' },

  // ===== Videos =====
  { id: 'video-markierung', file: 'video001', type: 'video',
    alt: 'Markierte Schnitt- und Bohrstellen an Wand und Decke in einem Altbauraum', caption: 'Vorbereitung: Bohr- und Schnittstellen markieren' },
  { id: 'video-wandsaege', file: 'video002', type: 'video',
    alt: 'Wandsäge auf Führungsschiene an einer nassen Betonwand', caption: 'Wandsäge im Einsatz' },
  { id: 'video-fugenschneider', file: 'video003', type: 'video',
    alt: 'Fugenschneider mit Wassertank auf einer gepflasterten Fläche', caption: 'Fugenschneider mit Wasserkühlung' },
  { id: 'video-kernbohr-schiene', file: 'video004', type: 'video',
    alt: 'Hilti-Kernbohrgerät auf Schiene vor einer Mauerwerkswand am Fenster', caption: 'Kernbohrgerät auf Schiene in der Mauerwerkswand' },
  { id: 'video-bohrkern-80', file: 'video005', type: 'video',
    alt: 'Betonbohrkern Ø 80 mm, 1 m lang, mit Bewehrungsstahl', caption: 'Bohrkern Ø 80 mm, 1 m tief, mit Bewehrung' },

  { id: 'ikea-video-dach', file: 'ikea-video-dach', type: 'video',
    alt: 'Kernbohrgerät auf Bohrständer auf dem Parkdeck bei IKEA Dresden', caption: 'Parkdeck: Kernbohrgerät im Einsatz' },
  { id: 'ikea-video-bohrung-1', file: 'ikea-video-bohrung-1', type: 'video',
    alt: 'Hilti-Kernbohrgerät auf Schiene bohrt in einer Wand, daneben Bohrkern und Werkzeug', caption: 'Innenbereich: Bohrung mit Schienengerät' },
  { id: 'ikea-video-bohrung-2', file: 'ikea-video-bohrung-2', type: 'video',
    alt: 'Nahaufnahme eines Hilti-Kernbohrgeräts auf Schiene beim Bohren mit Wasserzufuhr', caption: 'Innenbereich: Nassbohren mit Wasserzufuhr' },
];
