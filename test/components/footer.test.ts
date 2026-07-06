import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import { JSDOM } from 'jsdom';
import Footer from '../../src/components/Footer.astro';

test('Footer', async () => {
  const container = await AstroContainer.create();
  const htmlContent = await container.renderToString(Footer);

  const dom = new JSDOM(htmlContent);
  const images = dom.window.document.querySelectorAll('img');
  const links = dom.window.document.querySelectorAll('a');
  expect(images.length).toBe(3);

  const imgAltTexts = Array.from(images).map((img) => img.getAttribute('alt'));
  expect(imgAltTexts).toEqual(['UCSF School of Medicine', 'Medbiquitous Member', 'Netlify']);
  const linkAttrs = Array.from(links).map((link) => [
    link.getAttribute('href'),
    link.getAttribute('target'),
  ]);
  expect(linkAttrs).toEqual([
    ['https://medschool.ucsf.edu/', '_blank'],
    ['https://www.medbiq.org/', '_blank'],
    ['/acr', null],
    ['/feed.xml', null],
    ['https://github.com/ilios', '_blank'],
    ['https://www.netlify.com', '_blank'],
  ]);

  const svgs = dom.window.document.querySelectorAll('svg');
  expect(svgs.length).toBe(3);
});
