import React from 'react'
import { connect } from 'react-redux'

import { query, search } from '../../actions'
import { SearchPanel, MapBox } from '../../containers'

@connect ((store) => ({ store }))
export default class Browse extends React.Component {

  componentWillMount() {
    const { dispatch, location } = this.props
    dispatch(query.initialise(location))
  }

  onChange(event) {

    const { dispatch } = this.props
    const { name, value } = document.activeElement

    if (name === 'search'){
      if (value) dispatch(search.query(value))
      else dispatch(search.clear())
    }

  }

  onSubmit(event) {
    event.preventDefault()
    console.log(event)
  }
  
  render() {

    const { props } = this
    const { onChange, onSubmit } = this

    return <form onChange={onChange.bind(this)} onSubmit={onSubmit.bind(this)}>
      <MapBox />
      <SearchPanel props={props} />
    </form>

  }

}