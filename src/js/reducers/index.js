import { combineReducers } from "redux"
import { routerReducer as routing } from 'react-router-redux'

import { search } from './search'
import { query } from './query'
import { filter } from './filter'

export default combineReducers({
	routing,
	query,
	search,
	filter,
})
