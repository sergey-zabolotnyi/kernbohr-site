import { services } from '../data/services.js';
import { articles } from '../data/articles.js';
import { orte } from '../data/orte.js';

export function GET() {
  const base = 'https://kernbohr-expert.de';
  const today = new Date().toISOString().slice(0, 10);
  const paths = [
    '/', '/leistungen/', '/preise/', '/ratgeber/', '/glossar/', '/referenzen/', '/ueber-uns/', '/faq/', '/einsatzgebiet/', '/kontakt/', '/impressum/', '/datenschutzerklaerung/',
    ...services.map((s) => `/${s.slug}/`),
    ...orte.map((o) => `/kernbohrung-in-${o.slug}/`),
    ...articles.map((a) => `/ratgeber/${a.slug}/`),
  ];
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    paths.map((p) => `  <url><loc>${base}${p}</loc><lastmod>${today}</lastmod></url>`).join('\n') +
    '\n</urlset>\n';
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
