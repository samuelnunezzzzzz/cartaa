import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Mini-Project1-React/', // 👈 IMPORTANTE: nombre exacto del repo en GitHub
})
