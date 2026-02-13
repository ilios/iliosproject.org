// @ts-check
import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';

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
});
