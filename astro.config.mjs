// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://projeto-caneta-eight.vercel.app',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('nova-pagina') &&
        !page.includes('pagina2') &&
        !page.includes('pagina3'),
    }),
  ],
  build: {
    inlineStylesheets: 'always',
  },
});
