import * as ActionTypes from '../actions'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'


// 
function indexReducer(state = null, action) {
    return state
}

const rootReducer = combineReducers({
  indexReducer,
  routing
})

export default rootReducer
