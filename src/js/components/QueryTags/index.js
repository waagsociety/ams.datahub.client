import React from 'react'
import handlers from './events'

import { SearchTag } from '../../atoms'

export const QueryTags = ({ props }) => {
    
  const { onClick } = handlers(props)
	const { selection } = props.store.filter

	const TagList = (selection) => 
		<div class='breadcrumb tags'>{ 
      [ ...selection ].reverse().map((item, i) => <SearchTag key={i} props={props} content={item} /> )
    }</div>

	if (selection.length) return TagList(selection)
	else return <h1>QueryTags</h1>

}
