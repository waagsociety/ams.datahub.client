import React from 'react'
import { connect } from 'react-redux'

import { QueryTags } from '../'

export const QueryPath = ({ props }) => {

	return <nav className='container menu'>
		<QueryTags props={props} />
	</nav>

}
