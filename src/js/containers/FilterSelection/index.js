import React from 'react'
import { ActiveFilters } from '../../components'

export default function FilterSelection({ props }) {

	return <nav className='container menu'>
		<ActiveFilters props={props} />
	</nav>

}
