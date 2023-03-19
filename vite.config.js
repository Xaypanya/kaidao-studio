import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/kaidao-studio/',
  publicDir: './src/public',
  // root: 'src',
  build: {
    emptyOutDir: true,
    outDir: './dist',
    assetsInclude: ['images/**/*']
  }
})
