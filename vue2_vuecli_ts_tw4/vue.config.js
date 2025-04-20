module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            '@tailwindcss/postcss'
          ]
        }
      }
    }
  },

  configureWebpack: {
    plugins: [
      require('unplugin-vue-define-options/webpack')()
    ]
  }
}
