import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Mini-Project1-React/', // 👈 IMPORTANTE: nombre exacto del repo en GitHub
  build: {
    outDir: 'dist',              // carpeta de salida (coincide con el workflow)
    sourcemap: true,             // opcional, útil para depuración
  },
  server: {
    port: 5173,                  // opcional, puerto local
    open: true                   // abre automáticamente el navegador al iniciar
  }
})
