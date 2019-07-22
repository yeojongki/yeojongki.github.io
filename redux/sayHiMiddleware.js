export default () => ({ dispatch, getState }) => next => action => {
  console.log('-------[redux-sayHiMiddleware]-------')
  next(action)
  console.log('hi~', getState())
  console.log('-------[redux-sayHiMiddleware]-------')
}
