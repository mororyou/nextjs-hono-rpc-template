import { pgTable, serial, unique, uuid } from 'drizzle-orm/pg-core';
import { users } from './users';

export const twoFactorConfirmations = pgTable(
  'two_factor_confirmations',
  {
    id: serial().primaryKey(),
    userId: uuid('user_id').references(() => users.id, {
      onDelete: 'cascade',
    }),
  },
  (table) => [unique().on(table.userId)],
);
