// const webpack = require('webpack')

module.exports = {
  // https://github.com/vuejs/vue-cli/issues/2595
  publicPath: process.env.NODE_ENV === 'production' ? '././' : '/',
  productionSourceMap: false
  // chainWebpack: config => {
  //   const oneOfsMap = config.module.rule('scss').oneOfs.store
  //   oneOfsMap.forEach(item => {
  //     item
  //       .use('sass-resources-loader')
  //       .loader('sass-resources-loader')
  //       .options({
  //         // Or array of paths
  //         resources: ['./src/styles/vars.scss', './src/styles/mixins.scss']
  //       })
  //       .end()
  //   })
  // }
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require('postcss-pxtorem')({
  //           minPixelValue: 2,
  //           rootValue: 20, // 换算的基数
  //           selectorBlackList: ['weui', 'mu', 'my-cat'], // 忽略转换正则匹配项
  //           propList: ['*']
  //         })
  //       ]
  //     }
  //   }
  // }
}
