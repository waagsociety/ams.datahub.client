import React from 'react'
import handlers from './events'

import { SearchTag } from '../../atoms'

export const QueryTags = ({ props }) => {
    
  const { onClick } = handlers(props)
	const { selection } = props.store.filter

	const TagList = (query) => 
		<div class='breadcrumb tags'>{ [ ...query ].reverse().map((item, i) => SearchTag(props, item)) }</div>

	if (selection.length) return TagList(selection)
	else return <h1>QueryTags</h1>

}
