import React from 'react'
import { connect } from 'react-redux'

import { SearchInput, SearchTags } from '../'

export const SearchPanel = ({ props }) => {

	return <div id='search' className='container floating primary panel'>
		<SearchInput props={props} />
		<SearchTags props={props} />
	</div>

}
