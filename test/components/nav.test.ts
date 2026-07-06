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

  const linkAttrs = Array.from(links).map((link) => [
    link.getAttribute('href'),
    link.getAttribute('target'),
  ]);
  expect(linkAttrs).toEqual([
    ['/about', null],
    ['/contact-us', null],
    ['/news', null],
    ['/team', null],
    ['/technology', null],
    ['/timeline', null],
    ['https://us3.campaign-archive2.com/home/?u=845c4ebabb5b5ae7a6372c715&id=1493e3df18', '_blank'],
  ]);
});

test('Nav active link', async () => {
  const container = await AstroContainer.create();
  const htmlContent = await container.renderToString(Nav, {
    request: new Request('http://localhost:4321/about'),
  });

  const dom = new JSDOM(htmlContent);
  const links = dom.window.document.querySelectorAll('ul li a');
  const linkClasses = Array.from(links).map((link) => link.getAttribute('class'));
  expect(linkClasses).toEqual(['active', '', '', '', '', '', null]);
});
