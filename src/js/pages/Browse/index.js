import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { filter, results } from '../../store'
import { GlobalNavigation, SearchPanel, ResultPanel, MapBox, ArticleBody } from '../../containers'
import { ResultsPreview } from '../../components'
import handlers from './events'
import { hashToQuery, queryToHash } from './actions'

@connect ((store) => ({ store }))
export default class Browse extends React.Component {

  componentWillMount() {

    const { props } = this
    const { dispatch } = props
    dispatch(filter.tempInit())


    const query = hashToQuery(location.hash)
    console.log(query, queryToHash(query))

  }

  render() {

    const { props } = this
    const { store, location } = props
    const { onSubmit, onChange, onTest } = handlers(props)

    return <form id='Browse' className='page' method='get' action='/' onSubmit={onSubmit} onChange={onChange} >
      <GlobalNavigation />
      <SearchPanel props={props} />
      <ResultsPreview props={props} />
    </form>

  }

}