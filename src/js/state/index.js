import { combineReducers } from "redux"
import { routerReducer as routing } from 'react-router-redux'

import { view } from '../reducers/view'
import { filter } from '../reducers/filter'

export default combineReducers({
  routing,
  view,
  filter,
})