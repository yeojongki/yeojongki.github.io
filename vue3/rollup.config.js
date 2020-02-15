import path from 'path'
import ts from 'rollup-plugin-typescript2'

const resolve = p => path.resolve(__dirname, p)

const tsPlugin = ts({
  check: process.env.NODE_ENV === 'production' && !hasTSChecked,
  tsconfig: path.resolve(__dirname, 'tsconfig.json'),
  cacheRoot: path.resolve(__dirname, 'node_modules/.rts2_cache'),
})

const name = 'myVue3'

export default {
  input: resolve('reactivity/index.ts'),
  output: {
    name,
    file: resolve(`dist/${name}.global.js`),
    format: `iife`
  },
  plugins: [tsPlugin]
}