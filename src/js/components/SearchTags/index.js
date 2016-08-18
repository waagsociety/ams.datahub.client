import React from 'react'
import { connect } from 'react-redux'

import { filter } from '../../actions'

const eventHandlers = ({ dispatch }) => ({
	onChange: ({ target }) => {
		console.log(target)
		dispatch(filter.update(target))
	},
})

const children = {

	list({ id, label, value, name }) {
		return <li key={id}>
			<label className='tag'>
				<input name={name} value={value} type='checkbox'  /> 
				{label}
			</label>
		</li>
	},

	group({ id, name, tags }) {
		return <section key={id}>
			<h1>{name}</h1>
			<ul>{ tags.map((item) => children.list(item)) }</ul>
		</section>
	},

}

export const SearchTags = ({ props }) => {

	const { onChange } = eventHandlers(props)
	const { results } = props.store.search

	if (results.length) return <form class="tags" onChange={onChange}>
		{ results.map((kind) => children.group(kind)) }
	</form>
	
	else return <h1>Nothing</h1>

}
