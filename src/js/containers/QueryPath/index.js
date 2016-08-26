import React from 'react'
import { ActiveFilters } from '../'

export const QueryPath = ({ props }) => {

	return <nav className='container menu'>
		<ActiveFilters props={props} />
	</nav>

}
