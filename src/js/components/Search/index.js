import React from 'react'
import { connect } from 'react-redux'

import { search } from '../../actions'

const eventHandlers = ({ dispatch }) => ({
	
	onChange: (event) => {

		console.log(event)
		const { target } = event

		if (target.value) dispatch(search.query(target.value))
		else dispatch(search.clear())
	},

	onSubmit: (event) => {
		console.log(event)
	},

})

export const Search = ({ props }) => {

	const { onChange, onSubmit } = eventHandlers(props)

	return <form className='menu fixed'>
		<input type='search' name='search' placeholder='Search' onChange={onChange} />
	</form>

}