import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jeanlucio.github.io',
  integrations: [sitemap()],
});
