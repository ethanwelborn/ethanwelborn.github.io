import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ethanwelborn.github.io/dist',
  plugins: [react()],
})
