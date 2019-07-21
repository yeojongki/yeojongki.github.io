/**
 *
 * @param {Function} reducer
 * @param {*} preloadedState
 * @param {Function} enhancer
 * @returns {Store}
 */
const createStore = (reducer, preloadedState, enhancer) => {
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
