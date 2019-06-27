import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import reducer from './reducers'
import rootSaga from './saga'

import Counter from './Counter'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
  // other store enhancers if any
)
const store = createStore(reducer, enhancer)
sagaMiddleware.run(rootSaga)

const action = (type, payload) => store.dispatch({ type, payload })

export default () => (
  <Provider store={store}>
    <Counter
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
      onIncrementAsyncLatest={() => action('INCREMENT_ASYNC_LATEST')}
      onIncrementAsyncLatestByInput={() => action('INCREMENT_ASYNC_LATEST_BY_INPUT', { value: store.getState().input })}
    />
    <div>
      <input
        style={{ width: '40%' }}
        type="number"
        placeholder="input a num  & click `IncrementByInput`"
        onChange={e => action('SET_INPUT_VALUE', { value: +e.target.value })}
      />
    </div>
  </Provider>
)
