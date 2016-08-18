import React from 'react'
import { connect } from 'react-redux'

import { filter } from '../../actions'

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

	const { results } = props.store.search
	console.log(results)

	if (results.length) return <div class="tags">
		{ results.map((kind) => children.group(kind)) }
	</div>
	
	else return <h1>Nothing</h1>

}
