import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Real authoring dates — do not backdate to fake freshness (Section 0).
    datePublished: z.string(), // YYYY-MM-DD
    dateModified: z.string().optional(),
    excerpt: z.string(),
  }),
});

export const collections = { blog };
