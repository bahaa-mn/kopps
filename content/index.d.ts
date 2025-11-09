import { z } from '@nuxt/content'

export const LandingSchema = z.object({
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

export type LandingContentSchema = z.infer<typeof LandingSchema>
