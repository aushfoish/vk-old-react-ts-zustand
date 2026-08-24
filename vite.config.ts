import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Импортируем встроенный модуль Node.js для работы с путями

export default defineConfig({
  plugins: [react()],
  base: '/vk-old-react-ts-zustand/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), 
    },
  },
  build: {
    rolldownOptions: {
      output: {
        manualChunks(id) {
          // Если код из папки node_modules, выносим его в отдельный чанк vendor
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
});
