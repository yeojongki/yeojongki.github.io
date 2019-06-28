import React from 'react'

export default {
  path: '/redux-saga',
  exact: true,
  component: React.lazy(()=> import(/* webpackChunkName: 'redux-saga' */'./main'))
}
