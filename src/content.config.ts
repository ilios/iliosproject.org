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

const post = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './markdown/posts' }),
  schema: z
    .object({
      title: z.string(),
      description: z.string().optional(),
      date: z.coerce.date(),
      imagePath: z.string().optional(),
      imageAlt: z.string().optional(),
      categories: z.string().transform((val) => val.split(' ')),
    })
    .refine((data) => !data.imagePath || (data.imagePath && data.imageAlt)),
});

export const collections = { page, post };
