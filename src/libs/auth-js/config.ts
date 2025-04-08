import {
  accounts,
  authenticators,
  sessions,
  users,
  verificationTokens,
} from '@/schemas/db/schema';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { type NextAuthConfig } from 'next-auth';
import { db } from '../drizzle';
import providers from './providers';

export const authConfig = {
  ...providers,
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
    authenticatorsTable: authenticators,
  }),
  debug: process.env.NODE_ENV === 'development',
  basePath: '/api/auth',
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ session }) {
      // Todos...
      return session;
    },
    async jwt({ token }) {
      // Todos...
      return token;
    },
  },
} satisfies NextAuthConfig;
