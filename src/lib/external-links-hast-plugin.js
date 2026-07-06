import { defineHastPlugin } from 'satteri';

// Adds `target="_blank"` attribute to all external links.
// @see https://satteri.bruits.org/docs/plugins/#hast-plugins
export default defineHastPlugin({
  name: 'external-links',
  element: {
    filter: ['a'],
    visit(node, ctx) {
      const href = node.properties.href;
      if (typeof href === 'string' && href.startsWith('http')) {
        ctx.setProperty(node, 'target', '_blank');
      }
    },
  },
});
