import {
  accounts,
  authenticators,
  sessions,
  users,
  verificationTokens,
} from '@/schemas/db/schema';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { type NextAuthConfig } from 'next-auth';
import { match, P } from 'ts-pattern';
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
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
        session.user.isOAuth = token.isOAuth;
      }
      return session;
    },
    async jwt({ token, trigger, account, user, session }) {
      return match(trigger)
        .with('signIn', () => {
          if (!token.sub) return token;
          token.userId = user.id;
          token.role = user.role;
          token.isOAuth = account?.type == 'credentials' ? false : true;
          return token;
        })
        .with('signUp', () => {
          if (!token.sub) {
            throw new Error('token sub is required');
          }
          token.userId = user.id;
          token.role = user.role;
          token.isOAuth = account?.type == 'credentials' ? false : true;
          return token;
        })
        .with('update', () => {
          token = {
            ...token,
            ...session.user,
          };
          return token;
        })
        .with(P.nullish, () => {
          return token;
        })
        .exhaustive();
    },
  },
} satisfies NextAuthConfig;
