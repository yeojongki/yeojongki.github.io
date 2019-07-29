import React from 'react'

export default {
  path: '/inheritance-inversion',
  exact: true,
  component: React.lazy(() => import(/* webpackChunkName: 'inheritance-inversion' */ './inheritanceInversion'))
}
