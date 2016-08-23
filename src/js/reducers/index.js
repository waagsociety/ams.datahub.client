import { combineReducers } from "redux"
import { routerReducer as routing } from 'react-router-redux'

import { search } from './search'
import { query } from './query'
import { suggest } from './suggest'

export default combineReducers({
	routing,
	search,
	query,
    suggest,
})
