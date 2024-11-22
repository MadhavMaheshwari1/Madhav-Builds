import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    hot: true, // Ensure HMR is enabled
    watch: {
      usePolling: true, // Use polling to detect file changes in WSL
      interval: 500, // Check for changes every second
    },
  },
});
