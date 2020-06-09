import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

module.exports = {
  input: './src/index.js',
  output: {
    file: "dist/rollup.bundle.js"
  },
  plugins: [
    babel(),
    terser(),
  ]
}
