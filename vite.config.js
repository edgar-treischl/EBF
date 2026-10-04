import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // Set VITE_BASE when deploying to a GitHub Pages subdirectory.
  // Example: VITE_BASE=/EBF/
  base: process.env.VITE_BASE ?? '/',
})
