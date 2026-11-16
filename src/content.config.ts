import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['Prices', 'Hiring a company', 'Construction', 'Condos', 'Retail', 'Warehouses', 'Cameras', 'Careers', 'Local']),
    /** Service slug this post sells (for the sidebar CTA + internal link). */
    service: z.string().default('security-guards'),
    /** Area slug to link to (Vaughan unless told otherwise). */
    area: z.string().default('vaughan'),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
