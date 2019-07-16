import React from 'react'

export default {
  path: '/swipe-card',
  exact: true,
  component: React.lazy(() => import(/* webpackChunkName: 'swipe-card' */ './swipeCard'))
}

// https://juejin.im/post/5d0b61c3f265da1bc37f153a 的 React 版本Demo
// https://github.com/warpcgd/vue-tantan-stack/issues/1 另一个 vue 的实现
