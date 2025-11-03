import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const landingSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  hero: z
    .object({
      kicker: z.string().optional(),
      heading: z.string().optional(),
      subheading: z.string().optional(),
      bullets: z.array(z.string()).optional(),
      cta: z
        .object({
          primary: z
            .object({
              text: z.string(),
              href: z.string().optional(),
              color: z.string().optional()
            })
            .optional(),
          secondary: z
            .object({
              text: z.string(),
              href: z.string().optional()
            })
            .optional()
        })
        .optional()
    })
    .optional()
})

export default defineContentConfig({
  collections: {
    content_fr: defineCollection({
      source: {
        include: 'fr/**',
        prefix: '',
      },
      type: 'page',
      schema: landingSchema
    }),
    content_en: defineCollection({
      source: {
        include: 'en/**',
        prefix: '',
      },
      type: 'page',
      schema: landingSchema
    })
  }
})
