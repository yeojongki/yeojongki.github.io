const path = require('path')
const join = (...paths) => path.join(...paths)

module.exports = function rewire(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': join(__dirname, 'src'),
    'images': join('src', 'assets', 'images'),
  }

  return config
}
