export default () => ({ dispatch, getState }) => next => action => {
  console.log('-------[redux-logMiddleware]-------')
  console.log('before：', getState())
  next(action)
  console.log('after：', getState())
  console.log('-------[redux-logMiddleware]-------')
}
