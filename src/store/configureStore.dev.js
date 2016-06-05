import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { apiMiddleware } from 'redux-api-middleware'
import rootReducer from '../reducers'
import DevTools from '../containers/devtools'

const enhancer = compose(
    // Development middlewares
    applyMiddleware(thunk, apiMiddleware, createLogger()),
    // Enable React DevTools
    DevTools.instrument()
)

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        enhancer
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

