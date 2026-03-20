import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import { JSDOM } from 'jsdom';
import Footer from '../../src/components/Footer.astro';

test('Footer', async () => {
  const container = await AstroContainer.create();
  const htmlContent = await container.renderToString(Footer);

  const dom = new JSDOM(htmlContent);
  const images = dom.window.document.querySelectorAll('img');
  expect(images.length).toBe(3);

  const imgAltTexts = Array.from(images).map((img) => img.getAttribute('alt'));
  expect(imgAltTexts).toEqual(['UCSF School of Medicine', 'Medbiquitous Member', 'Netlify']);

  const svgs = dom.window.document.querySelectorAll('svg');
  expect(svgs.length).toBe(3);
});
