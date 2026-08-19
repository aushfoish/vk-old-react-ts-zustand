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
});
