import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import commonReducer from '../common/reducers'
import statisticsReducer from '../routes/Statistics/redux'
export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    common: commonReducer,
    statisticees: statisticsReducer,
    form: formReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) {
    return
  }

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

