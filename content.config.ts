import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    legalPages: defineCollection({
      type: 'page',
      source: 'pages/*.md',
      schema: z.object({
        locale: z.enum(['en', 'es']),
        slug: z.string(),
        topText: z.string(),
        title: z.string(),
        lastUpdated: z.string(),
        summary: z.array(
          z.object({
            title: z.string(),
            desc: z.string(),
          }),
        ),
        disclaimer: z.string(),
      }),
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        locale: z.enum(['en', 'es']),
        slug: z.string(),
        title: z.string(),
        description: z.string().optional(),
        dateTime: z.string(),
        translationSlug: z.string().optional(),
        categorySlug: z.string().optional(),
      }),
    }),
    blogCategories: defineCollection({
      type: 'page',
      source: 'blog-categories/*.md',
      schema: z.object({
        locale: z.enum(['en', 'es']),
        slug: z.string(),
        name: z.string(),
      }),
    }),
  },
});
