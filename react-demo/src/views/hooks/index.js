import UseState from './useState'
import UseReducer from './useReducer'
import UseEffect from './useEffect'
import Hooks from './hooks'

export default {
  path: '/hooks',
  component: Hooks,
  children: [
    {
      exact: true,
      path: '/hooks/useState',
      component: UseState
    },
    {
      exact: true,
      path: '/hooks/useReducer',
      component: UseReducer
    },
    {
      exact: true,
      path: '/hooks/useEffect',
      component: UseEffect
    }
  ]
}
