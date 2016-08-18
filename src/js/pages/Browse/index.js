import React from 'react'
import { connect } from 'react-redux'

import { query } from '../../actions'
import { SearchPanel } from '../../containers'

@connect ((store) => ({ store }))
export default class Browse extends React.Component {

	componentWillMount() {
		const { dispatch, location } = this.props
		dispatch(query.initialise(location))
	}
	
  render() {
	  return <div>
	    <SearchPanel props={this.props}/>
	  </div>
	}

}