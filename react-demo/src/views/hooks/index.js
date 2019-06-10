import Hooks from './hooks'
import UseState from './useState'
import UseReducer from './useReducer'
import UseEffect from './useEffect'
import UseContext from './useContext'

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
    },
    {
      exact: true,
      path: '/hooks/useContext',
      component: UseContext
    }
  ]
}
