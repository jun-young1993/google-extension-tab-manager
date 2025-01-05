import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        settings: "./index.html",
        tabManager: "./tab-manager.html"
      },
    },
    outDir: 'dist',
  },
})
