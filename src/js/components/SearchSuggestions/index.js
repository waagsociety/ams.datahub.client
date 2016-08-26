import React from 'react'
import { Feedback, SearchFilters } from '../'

export default function ({ props }) {

	const { value, suggestions, selection } = props.store.filter

	if (value) return <SearchFilters props={props} content={suggestions} />  
  else return <SearchFilters props={props} content={selection} />
  
}

