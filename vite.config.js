import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main:      resolve(__dirname, 'index.html'),
        menu:      resolve(__dirname, 'menu.html'),
        contact:   resolve(__dirname, 'contact.html'),
        werkenBij:   resolve(__dirname, 'werken-bij.html'),
        frissenOjjem: resolve(__dirname, 'frissen-ojjem.html'),
      },
    },
  },
})
