import {
  char,
  pgTable,
  serial,
  timestamp,
  unique,
  varchar,
} from 'drizzle-orm/pg-core';

export const passwordResetTokens = pgTable(
  'password_reset_tokens',
  {
    id: serial().primaryKey(),
    email: varchar('email').notNull(),
    token: char('token', { length: 36 }).notNull(),
    expires: timestamp('expires').notNull(),
    ipAddr: varchar('ip_addr').notNull(),
  },
  (t) => [unique().on(t.email, t.token)],
);
