import { defineCollection, defineContentConfig } from '@nuxt/content'

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
