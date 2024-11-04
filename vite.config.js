import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true,  // Ensure HMR is enabled
  }, 
  optimizeDeps: {
    include: ['recharts'],  // Force Vite to optimize recharts
  },  
  build: {
    outDir: 'public', // This is the default, ensure it's set
  },
})
