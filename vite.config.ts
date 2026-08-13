import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Импортируем встроенный модуль Node.js для работы с путями

export default defineConfig({
  plugins: [react()],
  base: '',
  resolve: {
    alias: {
      // Маппим символ '@' на реальную физическую папку './src' на диске
      '@': path.resolve(__dirname, './src'), 
    },
  },
});
