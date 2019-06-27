import React, { lazy, Suspense } from 'react'

const LazySuspensePage = lazy(() => import(/* webpackChunkName: 'lazy-suspense' */ '../lazy-suspense/LazySuspense'))

/**
 * 如果一个 class 组件中定义了 static getDerivedStateFromError() 或 componentDidCatch()
 * 这两个生命周期方法中的任意一个（或两个）时，那么它就变成一个错误边界。
 */
export default class App extends React.Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError(e) {
    console.log('getDerivedStateFromError', e)
    return { hasError: true }
  }

  componentDidCatch(e) {
    console.log('componentDidCatch', e)
  }

  render() {
    if (this.state.hasError) {
      return <div>something error...</div>
    }
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LazySuspensePage name="error-boundaries" />
      </Suspense>
    )
  }
}
