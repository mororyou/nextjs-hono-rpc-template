import { serverEnv } from '@/utils/env/server';
import GitHub from 'next-auth/providers/github';

const githubProvider = GitHub({
  clientId: serverEnv.AUTH_GITHUB_CLIENT_ID,
  clientSecret: serverEnv.AUTH_GITHUB_CLIENT_SECRET,
});

export default githubProvider;
