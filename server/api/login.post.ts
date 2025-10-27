import { eq } from 'drizzle-orm'
import { LoginSchema } from '~~/schemas/auth'
import { db } from '../db/db'
import { users } from '../db/schema'

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, LoginSchema.parse)

  const userSelect = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1)
  const user = userSelect[0]

  if (!user) {
    throw createError({
      statusCode: 404
    })
  }

  const isPasswordValid = await verifyPassword(user.password, password)

  if (!isPasswordValid) {
    throw createError({
      statusCode: 401
    })
  }

  // if (!user.emailVerified) {
  //   throw createError({
  //     statusCode: 403,
  //   })
  // }

  await setUserSession(event, {
    user: {
      id: user.id,
      email: user.email,
      name: user.name
    },
    loggedInAt: new Date()
  })

  return {
    user: {
      id: user.id,
      email: user.email,
      name: user.name
    }
  }
})
