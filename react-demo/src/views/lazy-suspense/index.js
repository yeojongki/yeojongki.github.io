import React from 'react'

const LazySuspensePage = React.lazy(() => import(/* webpackChunkName: 'lazy-suspense' */ './LazySuspense'))

export default {
  path: '/lazy-suspense',
  exact: true,
  component: LazySuspensePage
}
