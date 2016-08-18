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

  onKeyUp(event) {
    console.log(event)
  }

  onChange(event) {
    const { dispatch } = this.props
    const { name, value } = document.activeElement
    if (name === 'search') dispatch(search.query(value))
  }

  onSubmit(event) {
    event.preventDefault()
  }
  
  render() {

    const { props } = this
    const { onChange, onSubmit, onKeyUp } = this

    return <form method='post' onChange={onChange.bind(this)} onSubmit={onSubmit.bind(this)}>
      <SearchPanel props={props} />
      <QueryPath props={props} />
    </form>

  }

}