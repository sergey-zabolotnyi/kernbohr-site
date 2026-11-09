import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kernbohr-expert.de',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
});
