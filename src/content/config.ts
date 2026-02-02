import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    variant: z.enum(['white', 'black', 'lavender', 'blue', 'peach']),
    span: z.number(),
  }),
});

export const collections = {
  blog,
};
