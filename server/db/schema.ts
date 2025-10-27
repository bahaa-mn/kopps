import { boolean, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const subscriptions = pgTable('subscriptions', {
  id: uuid('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  plan: text('plan', { enum: ['pro'] }).notNull(),
  status: text('status').notNull(),
  startedAt: timestamp('started_at').defaultNow(),
  expiresAt: timestamp('expires_at')
})

export const users = pgTable('users', {
  id: uuid('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  username: text('username'),
  subscription: uuid('subscription_id').unique().references(() => subscriptions.id, { onDelete: 'set null' }),
  emailVerified: boolean('email_verified').default(false),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
})
