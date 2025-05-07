import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  test: {
    environment: 'jsdom', // Simulates a browser-like environment for testing.
    globals: true,
    setupFiles: 'tests/setup.ts',
  },
});
