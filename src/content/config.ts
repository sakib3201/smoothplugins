import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    dateISO: z.string().optional(), // ISO 8601 format for structured data
    author: z.string().default('Smooth Plugins Team'),
    variant: z.enum(['white', 'black', 'lavender', 'blue', 'peach']),
    span: z.number(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog,
};
