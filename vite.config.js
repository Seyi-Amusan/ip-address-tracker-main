import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd());

  return {
    base: '/ip-address-tracker-main/', // Ensure this matches your GitHub repository name
    define: {
      // 'process.env.VITE_API_KEY': JSON.stringify(env.VITE_API_KEY),
    },
  };
});
