import React, { useContext, useReducer } from 'react'

// 1. 创建上下文
const CounterContext = React.createContext()

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

// 2. 创建Provider
const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return <CounterContext.Provider value={{ state, dispatch }}>{props.children}</CounterContext.Provider>
}

function Counter() {
  let { state, dispatch } = useContext(CounterContext)
  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'add' })}>+</button>
      <button onClick={() => dispatch({ type: 'minus' })}>-</button>
    </>
  )
}

export default () => (
  <ContextProvider>
    <Counter />
  </ContextProvider>
)
