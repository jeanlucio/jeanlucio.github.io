import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().default('geral'),
  }),
});

const biblioteca = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    url: z.string(),
    author: z.string().optional(),
    description: z.string(),
    type: z.enum(['article', 'book', 'video', 'tool', 'game', 'course']),
    origin: z.enum(['own', 'curated']),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['pt', 'en']).default('pt'),
    image: z.string().optional(),
  }),
});

export const collections = { blog, biblioteca };
