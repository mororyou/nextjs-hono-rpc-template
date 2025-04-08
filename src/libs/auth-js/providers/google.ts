import { serverEnv } from '@/utils/env/server';
import Google from 'next-auth/providers/google';

const googleProvider = Google({
  clientId: serverEnv.AUTH_GOOGLE_CLIENT_ID,
  clientSecret: serverEnv.AUTH_GOOGLE_CLIENT_SECRET,
});

export default googleProvider;
