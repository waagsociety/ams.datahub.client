import React from 'react'
import { connect } from 'react-redux'

import { search } from '../../actions'

const eventHandlers = ({ dispatch }) => ({
	onFocus(event) {
		console.log(event)
	},
})

export const SearchInput = ({ props }) => {

	const { onFocus } = eventHandlers(props)

	return <div class='fixed menu'>
		<input type='text' name='search' placeholder='Search' onFocus={onFocus}  autocomplete='off' />
	</div>

}