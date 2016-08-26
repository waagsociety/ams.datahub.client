import React from 'react'
import { Feedback, SearchFilters } from '../'

export default function ({ props }) {

	const { value, search, suggestions, selection } = props.store.filter
  const filters = value && suggestions || selection

	return <SearchFilters props={props} content={filters} />  
  
}

