const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
const path = require('path')
const join = (...paths) => path.join(...paths)

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addWebpackAlias({
    '@': join(__dirname, 'src')
  })
)
