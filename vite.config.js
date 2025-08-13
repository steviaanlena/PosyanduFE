import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'recharts': ['recharts'],
          'react-icons': ['react-icons']
        }
      }
    }
  },
  optimizeDeps: {
    include: [
      'recharts',
      'react-icons/fa'
    ]
  },
  ssr: {
    noExternal: ['recharts', 'react-icons']
  }
})