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
    const nextState = Object.create(null)
    finalReducerKyes.forEach(key => {
      const previousStateForKey = state[key]
      const nextStateForKey = reducers[key](previousStateForKey, action)
      nextState[key] = nextStateForKey
      hasChanged = hasChanged || previousStateForKey !== nextStateForKey
    })
    return hasChanged ? nextState : state
  }
}

export default combineReducer
