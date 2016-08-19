import React from 'react'
import { connect } from 'react-redux'

import { query, search } from '../../actions'
import { SearchPanel, QueryPath, MapBox } from '../../containers'

@connect ((store) => ({ store }))
export default class Browse extends React.Component {

  componentWillMount() {
    const { dispatch, location } = this.props
    dispatch(query.initialise(location))
  }

  eventHandlers() {    
    return {     
      onSubmit: (event) => {
        event.preventDefault() 
      },
      onChange: (event) => {
        const { dispatch } = this.props
        const { name, value } = document.activeElement
        if (name === 'search') dispatch(search.query(value))
      },
      testHandler: (event) => {

      },
    }
  }

  render() {

    const { props } = this
    const { onSubmit, testHandler } = this.eventHandlers.call(this)

    return <form id='Browse' className='page' method='get' action='/' onSubmit={onSubmit} onChange={testHandler}>
      <SearchPanel props={props} />
      <QueryPath props={props} />
    </form>

  }

}