import React from 'react'
import handlers from './events'

import { Feedback, SearchFilters } from '../'

export const SearchTags = ({ props }) => {

	const { onChange } = handlers(props)
	const { query, suggestions, selection, groups, match, initialised, error } = props.store.filter

	if (!initialised) return Feedback('Loading...')
	else if (query) { 
		
		if (match) return SearchFilters(props, { groups, suggestions })
		else return Feedback(`No match was found for “${query}”`)

	}
	else return Feedback('Start typing to search...')

}

