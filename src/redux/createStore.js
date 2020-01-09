import thunk from 'redux-thunk'
import { makeRootReducer } from '../redux/reducers'
import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
import unauthorizedMiddleware from './middlewares/unauthorizedMiddleware'
// import { ErrorHandler } from '../middleware'
import ErrorHandler from './middlewares/error'

const createStore = (initialState = {}) => {
  const middleware = [unauthorizedMiddleware, ErrorHandler, thunk]

  const enhancers = []
  let composeEnhancers = compose

  if (__DEV__) { //eslint-disable-line
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') { // eslint-disable-line no-undef
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line no-undef
    }
  }

  const store = createReduxStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )

  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}

export default createStore
