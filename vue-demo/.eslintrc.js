module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    'space-before-function-paren': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    camelcase: 0,
    // allow async-await
    'generator-star-spacing': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
