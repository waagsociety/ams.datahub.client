import React from 'react'
import { connect } from 'react-redux'

import { query } from '../../actions'

const eventHandlers = ({ dispatch }) => ({
	onChange({ target }) {
		dispatch(query.update(target))
	},
})

export const SearchTags = ({ props }) => {
	
	const { onChange } = eventHandlers(props)
	const { results } = props.store.search

	const Suggestions = (results) => {

		const List = ({ id, label, value, name }) =>
			<li key={id}>
				<label className='tag'>
					<input name={name} value={value} type='checkbox' onChange={onChange} /> 
					{label}
				</label>
			</li>

		const Group = ({ id, name, tags }) =>
			<section key={id}>
				<h1>{name}</h1>
				<ul>{ tags.map((item) => List(item)) }</ul>
			</section>

		return <div class='tags content'>{ results.map((kind) => Group(kind)) }</div>

	}

	const Feedback = ({ title, description, className }) =>
		<div className={className || ''}>
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	
	if (results.length) return Suggestions(results)	
	else return Feedback({ title: "Nothing to see here", description: "Start typing to search for data..." })

}
