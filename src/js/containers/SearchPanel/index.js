import React from 'react'
import { SearchInput, SearchFilters } from '../../components'

export default function SearchPanel({ props }) {

	return <form method='get' action='/' id='SearchPanel' className='container floating primary panel'>
		<SearchInput props={props} />
		<SearchFilters props={props}/>
	</form>

}
