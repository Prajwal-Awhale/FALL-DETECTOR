import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: [
      'c579-2409-40c2-8017-f0a2-c439-d0d1-12b0-e88f.ngrok-free.app' 
    ]
  }
})
