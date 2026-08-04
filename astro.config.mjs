// @ts-check
import { defineConfig } from 'astro/config';
import pagefind from 'astro-pagefind';
import { satteri } from '@astrojs/markdown-satteri';
import externalLinks from './src/lib/external-links-hast-plugin';

// https://astro.build/config
export default defineConfig({
  site: 'https://astroilios.netlify.app/',
  markdown: {
    processor: satteri({
      hastPlugins: [externalLinks],
    }),
  },
  integrations: [pagefind()],
});
