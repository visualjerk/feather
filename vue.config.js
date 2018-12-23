const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = {
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.common',
        '@@': path.resolve(__dirname, './system')
      }
    },
    module: {
      rules: [
        {
          resourceQuery: /blockType=docs/,
          loader:
            process.env.DOCS
              ? require.resolve('./system/docs/loader/docs-loader.js')
              : require.resolve('./system/docs/loader/docs-trim-loader.js')
        }
      ]
    },
    plugins: process.env.NODE_ENV === 'production'
      ? [
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false
        })
      ]
      : []
  },
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .options({
        fix: true
      })

    if (process.env.DOCS) {
      config.plugin('html').tap(args => {
        args[0].template = path.join(__dirname, './public/docs.html')
        return args
      })
    }

    /*
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          plugins: [
            {
              removeViewBox: false
            },
            {
              removeDimensions: true
            }
          ]
        }
      })
    */
  }
}
