import React from 'react'
import { connect } from 'react-redux'

function Counter({
  count,
  onIncrement,
  onDecrement,
  onIncrementAsync,
  onIncrementAsyncLatest,
  onIncrementAsyncLatestByInput
}) {
  return (
    <>
      <button onClick={onIncrement}>+1</button>
      <button onClick={onDecrement}>-1</button>
      <button onClick={onIncrementAsync}>+1 after 1s</button>
      <button onClick={onIncrementAsyncLatest}>+1 latest after 1s</button>
      <button onClick={onIncrementAsyncLatestByInput}>increment latest after 1s by input</button>
      <div>Now: {count} times</div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Counter)
