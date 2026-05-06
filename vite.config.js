import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'fuyma-website' below with your exact GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: '/fuyma-website/',
})
