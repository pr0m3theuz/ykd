import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Tailwind 4 uses Vite plugin instead of PostCSS
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
      '@sections': path.resolve(__dirname, './src/components/sections'),
      '@assets': path.resolve(__dirname, './src/assets'),
    }
  },
  server: {
    port: 3000,
    host: true,
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['motion'],
          'chart-vendor': ['recharts'],
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'motion', 'lucide-react', 'recharts']
  }
});
