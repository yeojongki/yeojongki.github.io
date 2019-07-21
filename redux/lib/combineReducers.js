const combineReducer = reducers => {
  const reducerKeys = Object.keys(reducers)
  const finalReducer = Object.create(null)
  reducerKeys.forEach(key => {
    if (typeof reducers[key] === 'function') {
      finalReducer[key] = reducers[key]
    }
  })

  const finalReducerKyes = Object.keys(finalReducer)
  return function combination(state = {}, action) {
    let hasChanged = false
    const nextState = {}
    finalReducerKyes.forEach(key => {
      const previousValue = state[key]
      const nextValue = reducers[key](previousValue, action)
      nextState[key] = nextValue
      hasChanged = hasChanged || previousValue !== nextState
    })
    return hasChanged ? nextState : state
  }
}

export default combineReducer
