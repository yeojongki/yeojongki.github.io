import { all, delay, call, put, takeEvery, takeLatest } from 'redux-saga/effects'

const request = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
  })
}

export function* helloSaga() {
  yield console.log('hello Sagas!')
}

export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

export function* incrementAsyncByInput({ payload }) {
  yield delay(1000)
  yield put({ type: 'INCREMENT_BY_INPUT', payload: { value: payload.value } })
}

export function* incrementAsyncSelf() {
  yield call(request)
  yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* watchIncrementAsyncLatest() {
  yield takeLatest('INCREMENT_ASYNC_LATEST', incrementAsyncSelf)
  yield takeLatest('INCREMENT_ASYNC_LATEST_BY_INPUT', incrementAsyncByInput)
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync(), watchIncrementAsyncLatest()])
}
