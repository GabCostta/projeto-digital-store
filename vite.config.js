import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/ui/Components', 
      '@pages': '/src/ui/pages',
      '@styles': '/src/styles',
      '@assets': '/src/assets',
    },
  },
  css: {
    postcss: {},
  },
});
