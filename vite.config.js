import { defineConfig } from 'vite';

// Load environment variables from .env files
export default defineConfig({
  base: '/your-repo-name/', // Replace with your GitHub repository name
  define: {
    // Environment variables will be loaded automatically
  },
});
