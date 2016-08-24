import React from 'react'
import { connect } from 'react-redux'

import handlers from './events'

export const QueryTags = ({ props }) => {
    
    const { onClick } = handlers(props)
	const { query } = props.store

	const Tag = ({ key, value }, i) =>
		<button className='tag' key={i} name={key} value={value} onClick={onClick}>{value}</button>

	const TagList = (query) => 
		<div class='breadcrumb tags'>{ [ ...query ].reverse().map((item, i) => Tag(item, i)) }</div>
	
	if (query.length) return TagList(query)
	else return <h1>QueryTags</h1>

}
