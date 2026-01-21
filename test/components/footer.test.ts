import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import { JSDOM } from 'jsdom';
import Footer from '../../src/components/Footer.astro';

test('Footer', async () => {
  const container = await AstroContainer.create();
  const htmlContent = await container.renderToString(Footer);

  const dom = new JSDOM(htmlContent);
  const images = dom.window.document.querySelectorAll('img');
  expect(images.length).toBe(5);

  const altTexts = Array.from(images).map((img) => img.getAttribute('alt'));
  expect(altTexts).toEqual([
    'UCSF School of Medicine',
    'Medbiquitous Member',
    'Universal Access, Accessibility Conformance Report',
    'Subscribe to Ilios News',
    'Netlify',
  ]);
});
