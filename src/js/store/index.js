import { combineReducers, createStore } from 'redux'

// Reducers
import * as reducers from './reducers'

export default createStore(
  combineReducers(reducers)
)

// Actions
export { view } from './actions/view'
export { route } from './actions/route'
export { search } from './actions/search'
export { dataset } from './actions/dataset'