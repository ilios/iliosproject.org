// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://astroilios.netlify.app/',
  redirects: {
    //redirect from the jekyll website paths to astro ones
    '/updates/[year]/[month]/[day]/[title]': '/news/[year]-[month]-[day]-[title]',
    '/release/[year]/[month]/[day]/[title]': '/news/[year]-[month]-[day]-[title]',
    '/releases/[year]/[month]/[day]/[title]': '/news/[year]-[month]-[day]-[title]',
    '/news/[year]/[month]/[day]/[title]': '/news/[year]-[month]-[day]-[title]',
    '/status/[year]/[month]/[day]/[title]': '/news/[year]-[month]-[day]-[title]',
  },
});
