/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  // @ts-expect-error -- Astro's getViteConfig type does not include Vitest `test`
  test: {
    include: ['./test/components/*.test.ts'],
  },
});
