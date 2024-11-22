import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // For environments like WSL, Docker, or network drives
      interval: 500, // Adjust polling interval as needed
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]', // Retain original file names for assets
      },
    },
  },
  assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.otf'], // Ensure fonts are included in the build
});
