import { fileURLToPath, URL } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue2'
import PxdResolver from 'pxd/resolver'
import components from 'unplugin-vue-components/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
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
      dts: './shims/components.d.ts',
      resolvers: [
        PxdResolver(),
      ],
    }),
    DefineOptions(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
