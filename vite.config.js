
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'build-exit-diagnostic',
      apply: 'build',
      closeBundle() {
        console.log('Vite closeBundle hook completed')
      },
    },
  ],
})
