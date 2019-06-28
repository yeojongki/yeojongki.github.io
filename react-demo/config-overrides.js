const { override, fixBabelImports, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra')
const path = require('path')
const join = (...paths) => path.join(...paths)

module.exports = override(
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
