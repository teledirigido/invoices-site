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
  },
});
