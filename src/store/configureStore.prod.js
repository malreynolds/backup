import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import apiMiddleware from 'redux-api-middleware'
import rootReducer from '../reducers'

const enhancer = applyMiddleware(think, apiMiddleware);

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    enhancer
  )
}
