import {
  char,
  index,
  pgTable,
  serial,
  timestamp,
  unique,
  varchar,
} from 'drizzle-orm/pg-core';

export const twoFactorTokens = pgTable(
  'two_factor_tokens',
  {
    id: serial().primaryKey(),
    email: varchar('email').notNull().unique(),
    token: char('token', { length: 6 }).notNull(),
    expires: timestamp('expires').notNull(),
    ipAddr: varchar('ip_addr').notNull(),
  },
  (table) => [
    index('two_factor_tokens_idx').on(table.id),
    index('two_factor_tokens_email_token_idx').on(table.email, table.token),
    unique().on(table.email, table.token),
  ],
);
