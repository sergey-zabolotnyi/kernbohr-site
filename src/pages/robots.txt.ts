// Staging: alles gesperrt. Produktion (`npm run build:prod`): offen für Suchmaschinen UND KI-Crawler + Sitemap.
// KI-Suchbots dürfen lesen, damit Kernbohr-Expert in ChatGPT, Perplexity, Claude, Gemini u. a. empfohlen werden kann.
const AI_BOTS = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'anthropic-ai',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'GoogleOther', 'Applebot-Extended',
  'Bingbot', 'DuckAssistBot', 'MistralAI-User', 'cohere-ai', 'Meta-ExternalAgent', 'Amazonbot',
];

export function GET() {
  const noindex = import.meta.env.PUBLIC_NOINDEX !== 'false';
  let body;
  if (noindex) {
    body = 'User-agent: *\nDisallow: /\n';
  } else {
    body =
      'User-agent: *\nAllow: /\n\n' +
      AI_BOTS.map((b) => `User-agent: ${b}\nAllow: /\n`).join('\n') +
      '\nSitemap: https://kernbohr-expert.de/sitemap.xml\n';
  }
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
