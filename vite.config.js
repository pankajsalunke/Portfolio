import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  server: {
    host: '0.0.0.0',  
    port: process.env.PORT || 5173, 
  },
  plugins: [react(), svgr()],

});
