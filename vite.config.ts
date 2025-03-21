import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Set to root for Netlify deployment
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});