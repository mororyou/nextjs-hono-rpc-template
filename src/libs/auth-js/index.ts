import NextAuth from 'next-auth';
import { authConfig } from './config';

export const {
  handlers,
  auth,
  signIn,
  signOut,
  unstable_update: update,
} = NextAuth(authConfig);
