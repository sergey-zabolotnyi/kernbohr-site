// Staging: alles gesperrt. Produktion (`npm run build:prod`): offen + Sitemap.
export function GET() {
  const noindex = import.meta.env.PUBLIC_NOINDEX !== 'false';
  const body = noindex
    ? 'User-agent: *\nDisallow: /\n'
    : 'User-agent: *\nAllow: /\n\nSitemap: https://kernbohr-expert.de/sitemap.xml\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
