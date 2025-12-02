import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // ← importante para que las rutas de assets sean relativas
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
})
