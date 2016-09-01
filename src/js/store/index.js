import { combineReducers, applyMiddleware, createStore } from 'redux'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

// Reducers
import * as reducers from './reducers'

export default createStore(
  combineReducers(reducers),
  applyMiddleware(
    promise(), 
    thunk, 
    // logger({ collapsed: true })
  )
)

// Actions
export { view } from './actions/view'
export { filter } from './actions/filter'
export { article } from './actions/article'