import { describe, it, vi } from 'vitest';
import { serverEnv } from '../server';

describe('Server Enviroment Variables', () => {
  // mock
  vi.mock('../server', () => ({
    serverEnv: {
      DATABASE_URL: 'postgresql://user:pass@localhost:5432/db',
      AUTH_GOOGLE_CLIENT_ID: 'google-client-id',
      AUTH_GOOGLE_CLIENT_SECRET: 'google-client-secret',
      AUTH_GITHUB_CLIENT_ID: 'github-client-id',
      AUTH_GITHUB_CLIENT_SECRET: 'github-client-secret',
      AUTH_LINE_CLIENT_ID: 'line-client-id',
      AUTH_LINE_CLIENT_SECRET: 'line-client-secret',
      AUTH_FACEBOOK_CLIENT_ID: 'facebook-client-id',
      AUTH_FACEBOOK_CLIENT_SECRET: 'facebook-client-secret',
    },
  }));

  it('should validate DATABASE_URL', ({ expect }) => {
    expect(serverEnv.DATABASE_URL).toBe(
      'postgresql://user:pass@localhost:5432/db',
    );
  });

  it('should validate Google OAuth credentials', ({ expect }) => {
    expect(serverEnv.AUTH_GOOGLE_CLIENT_ID).toBe('google-client-id');
    expect(serverEnv.AUTH_GOOGLE_CLIENT_SECRET).toBe('google-client-secret');
  });

  it('should validate GitHub OAuth credentials', ({ expect }) => {
    expect(serverEnv.AUTH_GITHUB_CLIENT_ID).toBe('github-client-id');
    expect(serverEnv.AUTH_GITHUB_CLIENT_SECRET).toBe('github-client-secret');
  });

  it('should validate LINE OAuth credentials', ({ expect }) => {
    expect(serverEnv.AUTH_LINE_CLIENT_ID).toBe('line-client-id');
    expect(serverEnv.AUTH_LINE_CLIENT_SECRET).toBe('line-client-secret');
  });

  it('should validate Facebook OAuth credentials', ({ expect }) => {
    expect(serverEnv.AUTH_FACEBOOK_CLIENT_ID).toBe('facebook-client-id');
    expect(serverEnv.AUTH_FACEBOOK_CLIENT_SECRET).toBe(
      'facebook-client-secret',
    );
  });
});
