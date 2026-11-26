import { defineConfig } from 'astro/config';

export default defineConfig({
  // Links beim Überfahren/Antippen vorab laden: Seitenwechsel wirken sofort, ohne zusätzliches JavaScript-Framework
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  site: 'https://kernbohr-expert.de',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
});
