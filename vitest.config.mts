import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    coverage: {
      all: true,
      clean: true,
      exclude: ['**/node_modules/**', 'build/**'],
      reporter: ['text', 'html', 'json-summary', 'cobertura'],
    },
  },
});
