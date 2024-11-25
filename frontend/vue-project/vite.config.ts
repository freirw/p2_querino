import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // URL do backend
        changeOrigin: true,
        secure: false, // Se necessário, pode desabilitar o SSL
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Configuração explícita do alias "@"
    },
  },
});
