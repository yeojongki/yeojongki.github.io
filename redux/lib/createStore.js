/**
 *
 * @param {Function} reducer
 * @param {*} preloadedState
 * @param {Function} enhancer
 * @returns {Store}
 */
const createStore = (reducer, preloadedState, enhancer) => {
  if (typeof preloadedState === 'function') {
    enhancer = preloadedState
    preloadedState = undefined
  }

  if (typeof enhancer === 'function') {
    return enhancer(createStore)(reducer, preloadedState)
  }

  let currentState = preloadedState
  let currentReducer = reducer

  const getState = () => currentState

  const currentListeners = []

  const subscribe = listener => {
    currentListeners.push(listener)
  }

  const dispatch = action => {
    currentState = currentReducer(currentState, action)
    currentListeners.forEach(listener => listener())
    return action
  }

  dispatch({ type: `@@redux/INIT}` })

  return {
    getState,
    dispatch,
    subscribe
    // replaceReducer
  }
}

export default createStore
