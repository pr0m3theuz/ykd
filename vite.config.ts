import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0', // Required for Docker
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true, // Enable polling for file changes in Docker
      interval: 1000
    },
    hmr: {
      clientPort: 5173
    }
  }
})
