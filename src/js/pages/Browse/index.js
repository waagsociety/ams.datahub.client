import React from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'

import { route, filter, results, article } from '../../store'
import { GlobalNavigation, SearchPanel, ResultPanel, MapBox, ArticleBody } from '../../containers'
import { ResultsPreview } from '../../components'
import { hashToQuery, queryToHash } from './actions'
import handlers from './events'


@connect ((store) => ({ store }))
export default class Browse extends React.Component {

  componentWillMount() {

    const { props } = this
    const { dispatch } = props
    dispatch(filter.tempInit()) // temp search

    dispatch(route.initialise(dispatch)(location.hash))

  }

  render() {

    const { props } = this
    const { store, history } = props
    const { onSubmit, onChange, onTest } = handlers(props)


    const article = store.route && store.route.query
    if (article) return <ArticleBody props={props} />

    return <form id='Browse' className='page' method='post' action='/' onChange={onChange} >
      <GlobalNavigation />
      <SearchPanel props={props} />
      <ResultsPreview props={props} />
    </form>

  }

}