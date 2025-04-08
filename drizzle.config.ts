import { serverEnv } from '@/utils/env/server';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/schemas/db/schema.ts',
  dialect: 'postgresql',
  out: './drizzle',
  dbCredentials: {
    url: serverEnv.DATABASE_URL,
  },
  verbose: true,
  strict: true,
});
