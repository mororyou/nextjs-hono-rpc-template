import * as schema from '@/schemas/db/schema';
import { serverEnv } from '@/utils/env/server';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

export const client = new Pool({
  connectionString: serverEnv.DATABASE_URL,
});

export const db = drizzle(client, {
  schema,
});
