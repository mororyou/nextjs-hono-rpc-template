import { UserRole } from '@/utils/validations/auth/_utils';
import { DefaultSession } from 'next-auth';

export type ExtendesdUser = DefaultSession['user'] & {
  role: string;
  isOAuth: boolean;
};

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser;
  }

  interface User extends DefaultSession['user'] {
    role?: UserRole;
    isOAuth?: boolean;
  }
}
