const { override, fixBabelImports, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra')
const path = require('path')
const join = (...paths) => path.join(...paths)

const noSouceMap = () => config => {
  config.devtool = false
  return config
}

module.exports = override(
  noSouceMap(),
  addDecoratorsLegacy(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addWebpackAlias({
    '@': join(__dirname, 'src')
  })
)
