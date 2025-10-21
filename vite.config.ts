import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), 
  ],
   server: {
    port: 3000, // Change to your preferred port
    allowedHosts: ['web3securitysummitafrica.com'],
  },
})
