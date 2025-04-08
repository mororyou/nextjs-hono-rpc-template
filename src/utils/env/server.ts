import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const serverEnv = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    AUTH_GOOGLE_CLIENT_ID: z.string(),
    AUTH_GOOGLE_CLIENT_SECRET: z.string(),
    AUTH_GITHUB_CLIENT_ID: z.string(),
    AUTH_GITHUB_CLIENT_SECRET: z.string(),
    AUTH_LINE_CLIENT_ID: z.string(),
    AUTH_LINE_CLIENT_SECRET: z.string(),
    AUTH_FACEBOOK_CLIENT_ID: z.string(),
    AUTH_FACEBOOK_CLIENT_SECRET: z.string(),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    AUTH_GOOGLE_CLIENT_ID: process.env.AUTH_GOOGLE_CLIENT_ID,
    AUTH_GOOGLE_CLIENT_SECRET: process.env.AUTH_GOOGLE_CLIENT_SECRET,
    AUTH_GITHUB_CLIENT_ID: process.env.AUTH_GITHUB_CLIENT_ID,
    AUTH_GITHUB_CLIENT_SECRET: process.env.AUTH_GITHUB_CLIENT_SECRET,
    AUTH_LINE_CLIENT_ID: process.env.AUTH_LINE_CLIENT_ID,
    AUTH_LINE_CLIENT_SECRET: process.env.AUTH_LINE_CLIENT_SECRET,
    AUTH_FACEBOOK_CLIENT_ID: process.env.AUTH_FACEBOOK_CLIENT_ID,
    AUTH_FACEBOOK_CLIENT_SECRET: process.env.AUTH_FACEBOOK_CLIENT_SECRET,
  },
});
