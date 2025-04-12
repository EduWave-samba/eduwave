const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack');
module.exports = defineConfig({
  chainWebpack: config => {
    config.plugin('add_flag')
    .use(webpack.DefinePlugin, [
      {
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
      }
    ])
  },
  transpileDependencies: true
})
