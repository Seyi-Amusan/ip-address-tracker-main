import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  define: {
    'process.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY)
  },
});
