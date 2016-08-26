import React from 'react'
import { ActiveFilters } from '../'

export default function ({ props }) {

	return <nav className='container menu'>
		<ActiveFilters props={props} />
	</nav>

}
