import React, { lazy, Suspense } from 'react'

const LazySupensePage = lazy(() => import(/* webpackChunkName: 'LazySupensePage' */ './LazySupense'))

export default {
  path: '/LazySupense',
  exact: true,
  component: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <LazySupensePage />
    </Suspense>
  )
}
