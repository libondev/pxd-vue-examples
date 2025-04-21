import { defineConfig } from '@rsbuild/core'
import { pluginVue2 } from '@rsbuild/plugin-vue2'
import DefineOptions from 'unplugin-vue-define-options/rspack'

export default defineConfig({
  plugins: [
    pluginVue2({
      vueLoaderOptions: {
        // This is a must, Otherwise the defineOptions macro will not work.
        // 必须设置这个，否则 defineOptions 宏将无法正常工作
        experimentalInlineMatchResource: false,
      },
    }),
  ],
  tools: {
    rspack: {
      plugins: [DefineOptions()],
    },
  },
})
