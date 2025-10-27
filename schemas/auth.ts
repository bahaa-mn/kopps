import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.email(),
  password: z.string()
})
export type LoginData = z.infer<typeof LoginSchema>

export const RegisterSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string()
})
export type RegisterData = z.infer<typeof RegisterSchema>
