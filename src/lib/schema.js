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
  author: { '@type': 'Organization', name: site.company, url: site.url },
  publisher: { '@id': site.url + '/#business' },
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
          description: 'Preisliste 2026: je nach Durchmesser (14–501 mm) und Material. Mindestpreis 250 € je Auftrag, Anfahrt 85 €.',
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
  uploadDate: '2026-11-07',
  publisher: { '@id': site.url + '/#business' },
});
