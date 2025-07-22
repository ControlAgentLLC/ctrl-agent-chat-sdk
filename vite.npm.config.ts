import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/modules/npm/index.ts',
      name: 'CtrlAgentChatSDK',
      fileName: (format: string) => `index.${format === 'es' ? 'js' : 'cjs'}`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        exports: 'named',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    outDir: 'dist/npm',
    emptyOutDir: false, // Don't empty the entire dist folder
    sourcemap: true,
    minify: false,
  },
});
