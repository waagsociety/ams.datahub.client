import { combineReducers } from "redux"
import { routerReducer as routing } from 'react-router-redux'

import { view } from './view'
import { filter } from './filter'

export default combineReducers({
	routing,
  view,
  filter,
})
