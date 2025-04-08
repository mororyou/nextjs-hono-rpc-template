import * as schema from '@/schemas/db/schema';
import { serverEnv } from '@/utils/env/server';
import { drizzle } from 'drizzle-orm/node-postgres';
import postgres from 'postgres';

export const client = postgres(serverEnv.DATABASE_URL);
export const db = drizzle(client, {
  schema,
});
