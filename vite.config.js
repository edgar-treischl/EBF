import { defineConfig } from 'vite'

export default defineConfig({
  // Set VITE_BASE env var when deploying to a GitHub Pages subdirectory,
  // e.g. VITE_BASE=/EBF/ (handled automatically by the deploy workflow)
  base: process.env.VITE_BASE ?? '/',
})
