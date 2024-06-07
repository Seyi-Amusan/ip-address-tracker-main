import { defineConfig } from 'vite';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config(); // Load environment variables from .env file in non-production environments
}

export default defineConfig({
  base: '/ip-address-tracker-main/', // Replace with your GitHub repository name
  define: {
    'import.meta.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY),
  },
});
