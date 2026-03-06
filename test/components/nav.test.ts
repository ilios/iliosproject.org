import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import { JSDOM } from 'jsdom';
import Nav from '../../src/components/Nav.astro';

test('Nav', async () => {
  const container = await AstroContainer.create();
  const htmlContent = await container.renderToString(Nav);

  const dom = new JSDOM(htmlContent);
  const links = dom.window.document.querySelectorAll('ul li a');
  expect(links.length).toBe(7);

  const linkHrefs = Array.from(links).map((link) => link.getAttribute('href'));
  expect(linkHrefs).toEqual([
    '/about',
    '/contact-us',
    '/news',
    '/team',
    '/technology',
    '/timeline',
    'https://us3.campaign-archive2.com/home/?u=845c4ebabb5b5ae7a6372c715&id=1493e3df18',
  ]);
});
