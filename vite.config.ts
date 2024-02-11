/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@hooks': '/src/hooks',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    alias: [
      {
        find: 'react-redux/es/exports',
        replacement: path.resolve(
          __dirname,
          './node_modules/react-redux/lib/exports',
        ),
      },
    ],
  },
});
