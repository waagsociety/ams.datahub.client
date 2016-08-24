import React from 'react'
import handlers from './events'

export const SearchTags = ({ props }) => {

	const { onChange } = handlers(props)
	const { filtered, groups, match, query, loading } = props.store.filter

	const Suggestions = (results) => {

		const List = ({ value, label, group }) => {
			const name = groups[group]
			return <li key={name+value}>
				<label className='tag' title={label}>
					<input name={name} value={label} type='checkbox' onChange={onChange} hidden /> 
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

		return <div class='content tags'>{ filtered.map((kind) => Group(kind)) }</div>

	}

	const Feedback = (description) =>
		<p className='content feedback'>{description}</p>
	
	console.log(props.store.filter)
	
	if (!loading && query) {
		if (match) return Suggestions(filtered)
		else return Feedback(`There seem to be no tags that match “${query}”.`)
	}
	else return Feedback("Start typing to search...")

}
