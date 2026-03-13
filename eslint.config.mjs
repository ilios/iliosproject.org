import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  prettier,
  {
    rules: {
      // Add custom rules here if needed
    },
  },
  {
    ignores: ['dist/', 'node_modules/', '.astro/', 'public/**/*'],
  },
];
