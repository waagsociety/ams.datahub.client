import React from 'react'
import { SearchInput, SearchFilters } from '../../components'

export default function SearchPanel({ props }) {

  const { filter, view } = props.store
  const { value, search, suggestions, selection } = filter
  const { focus } = view.SearchInput

  const showSuggestions = focus || value || search
  const filters = value && suggestions || selection

	return <div id='SearchPanel' className='container floating primary panel'>
		<SearchInput props={props} />
		{ showSuggestions && <SearchFilters props={props} content={filters} /> }
	</div>

}
