import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const page = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { page };
