import { describe, it, vi } from 'vitest';
import { clientEnv } from '../client';

describe('Client Enviroment Variables', () => {
  // mock
  vi.mock('../client', () => ({
    clientEnv: {
      NEXT_PUBLIC_DOMAIN: 'http://test.domain:3000',
    },
  }));

  it('should have correct variables', ({ expect }) => {
    expect(clientEnv.NEXT_PUBLIC_DOMAIN).toBe('http://test.domain:3000');
  });
});
