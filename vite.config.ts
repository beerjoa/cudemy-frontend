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
      '#components': '/src/components',
      '#pages': '/src/pages',
      '#layouts': '/src/layouts',
      '#hooks': '/src/hooks',
      '#store': '/src/store',
      '#api': '/src/api',
      '#utils': '/src/utils',
      '#types': '/src/types',
      '#assets': '/src/assets',
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
