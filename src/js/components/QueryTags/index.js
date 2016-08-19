import React from 'react'
import { connect } from 'react-redux'

// import { filter } from '../../actions'

export const QueryTags = ({ props }) => {

	const { dispatch } = props
	const { query } = props.store

	const Tag = ({ key, value }, i) =>
		<button className='tag' key={i} name={key} value={value}>{value}</button>

	const TagList = (query) => 
		<div class='tags'>{ [ ...query ].reverse().map((item, i) => Tag(item, i)) }</div>
	
	if (query.length) return TagList(query)
	else return <h1>QueryTags</h1>

}
