import { eq } from 'drizzle-orm'
import { RegisterSchema } from '~~/schemas/auth'
import { db } from '../db/db'
import { users } from '../db/schema'

export default defineEventHandler(async (event) => {
  const { name, email, password } = await readValidatedBody(event, RegisterSchema.parse)

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1)

  if (existingUser[0]) {
    throw createError({
      statusCode: 409
    })
  }

  const hashedPassword = await hashPassword(password)

  const newUser = await db
    .insert(users)
    .values({
      name,
      email,
      password: hashedPassword
    })
    .returning({
      id: users.id,
      email: users.email,
      name: users.name
    })

  await setUserSession(event, {
    user: newUser[0],
    loggedInAt: new Date()
  })

  return {
    user: newUser[0]
  }
})
