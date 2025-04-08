import { serverEnv } from '@/utils/env/server';
import Line from 'next-auth/providers/line';

const lineProvider = Line({
  clientId: serverEnv.AUTH_LINE_CLIENT_ID,
  clientSecret: serverEnv.AUTH_LINE_CLIENT_SECRET,
});

export default lineProvider;
