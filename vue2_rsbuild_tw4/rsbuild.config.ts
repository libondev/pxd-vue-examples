import { defineConfig } from '@rsbuild/core';
import { pluginVue2 } from '@rsbuild/plugin-vue2';
import DefineOptions from 'unplugin-vue-define-options/rspack'

export default defineConfig({
  plugins: [pluginVue2()],
  tools: {
    rspack: {
      plugins: [
        DefineOptions()
      ]
    }
  }
});
