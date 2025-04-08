import { type NextAuthConfig } from 'next-auth';
import facebookProvider from './facebook';
import githubProvider from './github';
import googleProvider from './google';
import lineProvider from './line';

export default {
  providers: [googleProvider, githubProvider, lineProvider, facebookProvider],
} satisfies NextAuthConfig;
