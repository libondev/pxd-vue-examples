import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import components from 'unplugin-vue-components/vite'
import PxdResolver from 'pxd/resolver'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vue': ['vue'],
          'pxd': ['pxd'],
        },
      },
    },
  },
  plugins: [
    vue(),
    tailwindcss(),
    components({
      dts: './src/styles/components.d.ts',
      resolvers: [
        PxdResolver(),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
