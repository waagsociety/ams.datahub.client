import React from 'react'
import { connect } from 'react-redux'

import { QueryTags } from '../../components'

export const QueryPath = ({ props }) => {

	return <nav id='queries' className='fixed menu'>
		<QueryTags props={props} />
	</nav>

}
