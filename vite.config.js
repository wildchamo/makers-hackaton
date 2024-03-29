import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    devSourcemap: true,
  },
  resolve:{
    alias:{
      '@root' : path.resolve(__dirname, './src'),
      '@assets' : path.resolve(__dirname, './src/assets'),
      '@globalStyles' : path.resolve(__dirname, './src/styles'),
      '@globalComponents' : path.resolve(__dirname, './src/components'),
      '@router' : path.resolve(__dirname, './src/router'),
      '@store' : path.resolve(__dirname, './src/store'),
      '@config' : path.resolve(__dirname, './src/config'),
    },
  },
  plugins: [react(),svgr()],
});
