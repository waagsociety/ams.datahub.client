import React from 'react'
import { SearchInput, SearchFilters } from '../../components'

export default function SearchPanel({ props }) {

  const { view } = props.store
  // const { value, search, suggestions, selection } = filter
  const { focus } = view.SearchInput

  // const showSuggestions = value || search || !!selection.length
  // const filters = value && suggestions || selection

	return <form method='get' action='/' id='SearchPanel' className='container floating primary panel'>
		<SearchInput props={props} />
		{ <SearchFilters props={props} /> }
	</form>

}
