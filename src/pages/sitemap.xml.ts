import { services } from '../data/services.js';
import { articles } from '../data/articles.js';

export function GET() {
  const base = 'https://kernbohr-expert.de';
  const paths = [
    '/', '/leistungen/', '/preise/', '/ratgeber/', '/referenzen/', '/ueber-uns/', '/faq/', '/einsatzgebiet/', '/kontakt/',
    ...services.map((s) => `/${s.slug}/`),
    ...articles.map((a) => `/ratgeber/${a.slug}/`),
  ];
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    paths.map((p) => `  <url><loc>${base}${p}</loc></url>`).join('\n') +
    '\n</urlset>\n';
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
