import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        blocks: 'blocks.html',
        controls: 'controls.html',
        settings: 'settings.html'
      },
    },
  },
})