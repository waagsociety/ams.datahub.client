import React from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

import { query } from '../../actions'

const eventHandlers = ({ dispatch }) => ({
	onChange({ target }) {
		// console.log(target.name)
		// browserHistory.push(`?${target.name}=${target.value}`)
		dispatch(query.update(target))
	},
})

export const SearchTags = ({ props }) => {

	const { onChange } = eventHandlers(props)
	const { results, value, fetched } = props.store.search
	const { filtered, groups } = props.store.suggest

	const Suggestions = (results) => {

		const List = ({ value, label, group }) => {
			const name = groups[group]
			return <li key={name+value}>
				<label className='tag'>
					<input name={name} value={value} type='checkbox' onChange={onChange} hidden /> 
					{label}
				</label>
			</li>
		}

		const Group = ({ group, tags }) => {
			return <section key={group} className='group'>
				<h1>{group}</h1>
				<ul>{ tags.map((item) => List(item)) }</ul>
			</section>
		}

		console.log(filtered)

		return <div class='content tags'>{ filtered.map((kind) => Group(kind)) }</div>

	}

	const Feedback = (description) =>
		<p className='content feedback'>{description}</p>
	
	if (filtered.length) {
		return Suggestions(results)
		// else return Feedback(`There seem to be no tags that match “${value}”.`)
	}
	else return Feedback("Start typing to search...")

}
