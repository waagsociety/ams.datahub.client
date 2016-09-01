import React from 'react'
import { connect } from 'react-redux'

import { SearchPanel, ResultPanel, MapBox } from '../../containers'
import { ResultsPreview } from '../../components'
import handlers from './events'
import { filter, results } from '../../store' // Temp A

@connect ((store) => ({ store }))
export default class Browse extends React.Component {

  componentWillMount() {

    const { props } = this
    const { dispatch } = props
    
    dispatch(filter.tempInit())

  }

  render() {

    const { props } = this
    const { store } = props
    const { onSubmit, onChange, onTest } = handlers(props)
        
    return <form id='Browse' className='page' method='get' action='/' onSubmit={onSubmit} onChange={onChange} >
      <SearchPanel props={props} />
      <ResultsPreview props={props} />
    </form>

  }

}