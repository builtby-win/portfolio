import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const noteSchema = z.object({
  title: z.string(),
  date: z.date(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().optional().default(false),
  cover: z.string().optional(),
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: noteSchema,
});

const raw = defineCollection({
  loader: glob({ base: './src/content/raw', pattern: '**/*.{md,mdx}' }),
  schema: noteSchema,
});

export const collections = { blog, raw };
