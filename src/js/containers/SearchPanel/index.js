import React from 'react'
import { connect } from 'react-redux'

import { Search, SearchTags } from '../../components'

export const SearchPanel = ({ props }) => {

	return <div id='search' className='fixed primary panel'>
		<Search props={props} />
		<SearchTags props={props} />
	</div>

}
