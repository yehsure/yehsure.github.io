import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/yehsure.github.io/",
  plugins: [react()],
})