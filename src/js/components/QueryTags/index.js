import React from 'react'
import { connect } from 'react-redux'

import handlers from './events'

export const QueryTags = ({ props }) => {
    
  const { onClick } = handlers(props)
	const { selection } = props.store.filter

	const Tag = ({ key, value }, i) =>
		<button className='tag' key={i} name={key} value={value} onClick={onClick}>{value}</button>

	const TagList = (tags) => 
		<div class='breadcrumb tags'>{ [ ...tags ].reverse().map((item, i) => Tag(item, i)) }</div>
	
	if (selection.length) return TagList(selection)
	else return <h1>QueryTags</h1>

}
