import { site } from '../data/site.js';

export const crumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [['Start', '/'], ...items].map(([name, p], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    item: site.url + p,
  })),
});

export const faqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});

export const articleSchema = (a) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: a.h1,
  description: a.description,
  datePublished: a.date,
  dateModified: a.date,
  inLanguage: 'de-DE',
  author: a.autor
    ? { '@type': 'Person', name: a.autor.name, ...(a.autor.url ? { url: a.autor.url } : {}) }
    : { '@type': 'Person', '@id': `${site.url}/#inhaber`, name: site.owner, url: `${site.url}/ueber-uns/` },
  publisher: { '@id': `${site.url}/#business` },
  mainEntityOfPage: `${site.url}/ratgeber/${a.slug}/`,
});

// Kernbohr-Leistungen mit Preis (Preisliste 2026): Angebot als Spanne je cm Bohrtiefe.
const MIT_PREIS = ['kernbohrung', 'kernbohrung-waermepumpe-klimaanlage', 'wanddurchbruch-dunstabzugshaube', 'kamin-sanitaer-anschluesse', 'kernbohrung-notdienst-wochenende'];
export const preisAngebot = (slug) =>
  MIT_PREIS.includes(slug)
    ? {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          priceCurrency: 'EUR',
          minPrice: 1.1,
          maxPrice: 11,
          unitText: 'cm Bohrtiefe',
          description: 'Preisliste 2026: je nach Durchmesser (20–500 mm) und Material. Mindestauftragswert 250 €, Anfahrt 85 € im Umkreis bis ca. 30 km um Dresden.',
        },
        seller: { '@id': site.url + '/#business' },
      }
    : null;

export const videoSchema = (v, base = site.url) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: v.caption,
  description: v.alt,
  thumbnailUrl: `${base}/posters/${v.id}.jpg`,
  contentUrl: `${base}/videos/${v.id}.mp4`,
  // ISO 8601 mit Uhrzeit und Zeitzone (Google verlangt das), Dresden im November = +01:00
  uploadDate: v.id?.startsWith('ikea-') ? '2026-11-17T18:00:00+01:00' : v.id?.startsWith('neustadt-') ? '2026-11-19T17:00:00+01:00' : '2026-11-07T12:00:00+01:00',
});

// HowTo-Schema für den Ablauf (Schritte als [Name, Text]).
export const howToSchema = (name, steps) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name,
  step: steps.map(([n, t], i) => ({ '@type': 'HowToStep', position: i + 1, name: n, text: t })),
});
