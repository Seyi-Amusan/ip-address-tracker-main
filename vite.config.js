import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    base: '/ip-address-tracker-main/', // Ensure this matches your GitHub Pages repository name
    define: {
      'process.env.VITE_API_KEY': JSON.stringify(env.VITE_API_KEY),
      'process.env.VITE_API_KEY_MAPTILER': JSON.stringify(env.VITE_API_KEY_MAPTILER),
    },
  };
});
