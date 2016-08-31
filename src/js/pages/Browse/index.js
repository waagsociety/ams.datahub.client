import React from 'react'
import { connect } from 'react-redux'

import { SearchPanel, ResultPanel, FilterSelection, MapBox } from '../../containers'
import handlers from './events'
import { filter, results } from '../../store' // Temp A

@connect ((store) => ({ store }))
export default class Browse extends React.Component {

  componentWillMount() {

    const { dispatch } = this.props 
    // temp
    dispatch(filter.tempInit())

  }

  render() {

    const { props } = this
    const { onSubmit, onChange, onTest } = handlers(props)
    
    // <FilterSelection props={props} />
    
    return <form id='Browse' className='page' method='get' action='/' onSubmit={onSubmit} onChange={onChange} >
      <SearchPanel props={props} />
      <ResultPanel props={props} />
      
    </form>

  }

}