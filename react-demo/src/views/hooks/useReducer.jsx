import React, { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { count: state.count + 1 }
    case 'minus':
      return { count: state.count - 1 }
    default:
      return state
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'add' })}>+</button>
      <button onClick={() => dispatch({ type: 'minus' })}>-</button>
    </>
  )
}
