import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ssd3900_github_pages_cicd/',
  server: {
    host: '0.0.0.0',
    port: 5173, // Optional: Ensure the port matches your setup
  },
});
