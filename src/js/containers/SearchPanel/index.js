import React from 'react'
import { connect } from 'react-redux'

import { SearchInput, SearchSuggestion, SearchSuggestions } from '../'

export default function ({ props }) {

	return <div id='search' className='container floating primary panel'>
		<SearchInput props={props} />
		<SearchSuggestions props={props} />
	</div>

}
