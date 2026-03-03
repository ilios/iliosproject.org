// @ts-check
import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
  site: 'https://astroilios.netlify.app/',
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          properties: { target: '_blank', rel: [] },
        },
      ],
    ],
  },
  integrations: [pagefind()],
});
