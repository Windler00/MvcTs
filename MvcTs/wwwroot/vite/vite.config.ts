import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: './src/main.tsx',
        test: './src/test.tsx',
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].[ext]',
        assetFileNames: '[name].[ext]',
      }
    }
  }
})
