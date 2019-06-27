import React, { lazy, Suspense } from 'react'

const LazySuspensePage = lazy(() => import(/* webpackChunkName: 'lazy-suspense' */ './LazySuspense'))

export default {
  path: '/lazy-suspense',
  exact: true,
  component: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <LazySuspensePage />
    </Suspense>
  )
}
