import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this repo at /personal-portfolio/.
// For a custom domain or Vercel/Netlify root deploy, change base to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/personal-portfolio/',
})
