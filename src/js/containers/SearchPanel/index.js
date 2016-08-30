import React from 'react'
import { SearchInput, SearchSuggestion, SearchSuggestions } from '../../components'

export default function SearchPanel({ props }) {

	return <div id='SearchPanel' className='container floating primary panel'>
		<SearchInput props={props} />
		<SearchSuggestions props={props} />
	</div>

}
