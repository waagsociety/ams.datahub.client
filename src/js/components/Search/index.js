import React from 'react'
import { connect } from 'react-redux'

import { search } from '../../actions'

export const Search = ({ props }) => {

	return <div class='fixed menu'>
		<input type='text' name='search' placeholder='Search' />
	</div>

}