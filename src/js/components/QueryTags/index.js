import React from 'react'
import { connect } from 'react-redux'

import { query } from '../../actions'

const eventHandlers = ({ dispatch }) => ({
    onClick({ target }) {
        dispatch(query.remove(target))
    },
})

export const QueryTags = ({ props }) => {
    
    const { onClick } = eventHandlers(props)
	const { query } = props.store

    console.log(query)

	const Tag = ({ key, value }, i) =>
		<button className='tag' key={i} name={key} value={value} onClick={onClick}>{value}</button>

	const TagList = (query) => 
		<div class='tags'>{ [ ...query ].reverse().map((item, i) => Tag(item, i)) }</div>
	
	if (query.length) return TagList(query)
	else return <h1>QueryTags</h1>

}
