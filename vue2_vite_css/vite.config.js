import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue2'
import DefineOptions from 'unplugin-vue-define-options/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    DefineOptions(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
