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
