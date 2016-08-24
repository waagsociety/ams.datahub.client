import React from 'react'
import { connect } from 'react-redux'

import { SearchPanel, QueryPath, MapBox } from '../../containers'
import handlers from './events'
import { search } from '../../actions' // temp.a (untill search works properly)

@connect ((store) => ({ store }))
export default class Browse extends React.Component {

  componentWillMount() {

    // Prefetch metadata filters from all dSpace items (temp.a)
    const { dispatch } = this.props 
    dispatch(search.tempInit())
    
    // get search parameters (filters) from the URL query
    // dispatch(query.initialise(location)) 

  }

  render() {

    const { props } = this
    const { onSubmit, onChange } = handlers(props)

    return <form id='Browse' className='page' method='get' action='/' onSubmit={onSubmit} onChange={onChange}>
      <SearchPanel props={props} />
      <QueryPath props={props} />
    </form>

  }

}