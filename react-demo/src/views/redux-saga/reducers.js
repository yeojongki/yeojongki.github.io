export default function counter(state = { count: 0, input: '' }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }
    case 'SET_INPUT_VALUE':
      return { ...state, input: action.payload.value }
    case 'INCREMENT_BY_INPUT':
      return { ...state, count: state.count + action.payload.value }
    default:
      return state
  }
}
