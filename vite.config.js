import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true,  
    proxy: {
      // Proxy API requests to the backend server
      '/ceodashboard': {
        target: 'http://105.113.2.249:8080',
        changeOrigin: true,
        secure: false,
      }
    } 
  },
  optimizeDeps: {
    include: ['recharts'],  
  },
  build: {
    outDir: 'public',
  }
});
