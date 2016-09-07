import React from 'react'
import { SearchInput, SearchFilters } from '../../components'

export default function SearchPanel({ props }) {

  const { filter, view, route } = props.store
  const { value, suggestions, selection } = filter
  const { search } = route.query
  const { focus } = view.SearchInput

  const showSuggestions = value || search || !!selection.length
  const filters = value && suggestions || selection

	return <form method='get' action='/' id='SearchPanel' className='container floating primary panel'>
		<SearchInput props={props} />
		{ showSuggestions && <SearchFilters props={props} content={filters} /> }
	</form>

}
