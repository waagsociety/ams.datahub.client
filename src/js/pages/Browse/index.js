import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router' // Todo A

import { SearchPanel, QueryPath, MapBox } from '../'
import handlers from './events'
import { filter } from '../../actions' // Temp A

@connect ((store) => ({ store }))
export default class Browse extends React.Component {

  componentWillMount() {

    const { props } = this
    const { onSubmit, onChange } = handlers(props)
    
    // Todo A) Get search parameters (filters) from the URL query
    // browserHistory.push('/?a=b')
    // dispatch(query.initialise(location)) 

    // Temp A) Prefetch metadata filters from all dSpace items
    const { dispatch } = this.props 
    dispatch(filter.tempInit())

  }

  render() {

    const { props } = this
    const { onSubmit, onChange, eventLog } = handlers(props)

    return <form id='Browse' className='page' method='get' action='/' onKeyDown={eventLog} onSubmit={onSubmit} onChange={onChange}>
      <SearchPanel props={props} />
      <QueryPath props={props} />
    </form>

  }

}