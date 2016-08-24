import { combineReducers } from "redux"
import { routerReducer as routing } from 'react-router-redux'

import { view } from './view'
import { search } from './search'
import { query } from './query'
import { suggest } from './suggest'

export default combineReducers({
	routing,
  view,
	search,
	query,
  suggest,
})
