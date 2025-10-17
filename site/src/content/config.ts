import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string().min(10),
    role: z.string(),
    tech: z.array(z.string()).min(1),
    tags: z.array(z.string()).default([]),
    outcomes: z.array(z.string()).default([]),
    github: z.string().url().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(3).trim(),
    description: z.string().min(20).trim(),
    published: z.date(),
    updated: z.date().optional(),
    tags: z.array(z.string().trim().min(1)).min(1),
    draft: z.boolean().default(false),
    hero: z.string().optional(),
  }),
});

export const collections = { pages, projects, posts };
