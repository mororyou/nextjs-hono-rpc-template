import { serverEnv } from '@/utils/env/server';
import Facebook from 'next-auth/providers/facebook';

const facebookProvider = Facebook({
  clientId: serverEnv.AUTH_FACEBOOK_CLIENT_ID,
  clientSecret: serverEnv.AUTH_FACEBOOK_CLIENT_SECRET,
});

export default facebookProvider;
