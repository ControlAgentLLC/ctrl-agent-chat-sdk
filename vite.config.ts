import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5273,
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  build: {
    rollupOptions: {
      input: 'src/modules/script/index.ts',
      output: {
        entryFileNames: 'sdk/script/sdk-script.js',
        format: 'iife',
        name: 'CtrlAgentSDK', // global variable name for IIFE
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || '';
          if (name.endsWith('.css')) {
            return 'sdk/styles/sdk-styles.css';
          }
          return 'sdk/script/[name][extname]';
        },
        chunkFileNames: 'sdk/script/[name].js',
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    minify: true,
    cssMinify: true,
    cssCodeSplit: false, // Force CSS into a single file
  },
});
