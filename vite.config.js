import { defineConfig } from 'vite';

export default defineConfig({
  base: '/ip-address-tracker-main/', 
  define: {
    'import.meta.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY),
  },
});
