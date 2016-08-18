import React from 'react'
import { connect } from 'react-redux'

// import { filter } from '../../actions'

export const QueryTags = ({ props }) => {

	const { dispatch } = props
	const { query } = props.store
	const keys = Object.keys(query)

	if (keys.length) return <div>
		{ keys.map((key, i) => {
			console.log(query[key])
			return <h1 key={key+i}>{ 

				query[key].map((value, i) => {
					return <button key={i+value}>{value}</button>
				})

			}</h1>
		}) }
	</div>

	return <h1>QueryTags</h1>

}
