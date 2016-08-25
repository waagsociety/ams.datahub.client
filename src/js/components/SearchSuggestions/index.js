import React from 'react'
import handlers from './events'

import { Feedback, SearchFilters } from '../'

export const SearchTags = ({ props }) => {

	const { onChange } = handlers(props)
	const { value, suggestions, selection, groups } = props.store.filter

	if (value) return <SearchFilters props={props} content={suggestions} />  
  else if (selection.length) return <SearchFilters props={props} content={selection} />
  
  else return <Feedback content={"Start typing to search..."} />

}

