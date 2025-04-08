import {
  boolean,
  index,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';

export const users = pgTable(
  'users',
  {
    id: uuid('id')
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    name: text('name'),
    email: text('email').unique(),
    password: text('password'),
    emailVerified: timestamp('email_verified', { mode: 'date' }),
    image: text('image'),
    isTwoFactorEnabled: boolean('is_two_factor_enabled')
      .notNull()
      .default(false),
    role: text('role').notNull().default('guest'),
    status: text('status').notNull().default('active'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (table) => [
    index('user_id_idx').on(table.id),
    index('user_email_idx').on(table.email),
  ],
);
