// // import { defineConfig } from 'vite';

// // export default defineConfig({
// //   base: '/ip-address-tracker-main/', // Ensure this matches your GitHub repository name
// // });


// import { defineConfig, loadEnv } from 'vite';

// export default defineConfig(({ command, mode }) => {
//   // Load env file based on `mode` in the current working directory.
//   // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
//   const env = loadEnv(mode, process.cwd(), '');
  
//   // Define your Vite configuration
//   return {
//     // Base configuration
//     base: '/ip-address-tracker-main/', // Ensure this matches your GitHub repository name

//     // Other Vite config options
//     define: {
//       // Your other define options
//     },
//   };
// });


import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    // Base configuration
    base: '/ip-address-tracker-main/', // Ensure this matches your GitHub repository name

    // Other Vite config options
    define: {
      'import.meta.env.VITE_API_KEY': JSON.stringify(env.VITE_API_KEY)
    },
  };
});

