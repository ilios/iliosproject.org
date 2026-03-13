import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import { JSDOM } from 'jsdom';
import FaIcon from '../../src/components/FaIcon.astro';

test('FaIcon', async () => {
  const container = await AstroContainer.create();
  const htmlContent = await container.renderToString(FaIcon, {
    props: {
      iconName: 'search',
      prefix: 'fas',
    },
  });

  const dom = new JSDOM(htmlContent);
  const svg = dom.window.document.querySelector('svg');
  expect(svg?.classList).toContain('fa-magnifying-glass');
});

test('FaIcon includes passed classes', async () => {
  const container = await AstroContainer.create();
  const htmlContent = await container.renderToString(FaIcon, {
    props: {
      iconName: 'search',
      prefix: 'fas',
      class: 'jayden',
    },
  });

  const dom = new JSDOM(htmlContent);
  const svg = dom.window.document.querySelector('svg');
  expect(svg?.classList).toContain('fa-magnifying-glass');
  expect(svg?.classList).toContain('jayden');
});

test('FaIcon includes passed properties', async () => {
  const container = await AstroContainer.create();
  const htmlContent = await container.renderToString(FaIcon, {
    props: {
      iconName: 'search',
      prefix: 'fas',
      'data-test-best-dog': 'jackson',
      'aria-hidden': 'false',
      alt: 'Jackson is the best dog',
    },
  });

  const dom = new JSDOM(htmlContent);
  const svg = dom.window.document.querySelector('svg');
  expect(svg?.getAttribute('data-test-best-dog')).toBe('jackson');
  expect(svg?.getAttribute('aria-hidden')).toBe('false');
  expect(svg?.getAttribute('alt')).toBe('Jackson is the best dog');
});
