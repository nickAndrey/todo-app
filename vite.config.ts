import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@ui', replacement: '/src/components/UI' },
      { find: '@layout', replacement: '/src/components/Layout' },
    ],
  },
});
