import React from 'react'
import { connect } from 'react-redux'
import equal from 'deep-equal'

import * as action from '../../store'
import { GlobalNavigation, SearchPanel, ResultPanel, ArticleBody } from '../../containers'

@connect ((store) => ({ store }))
export default class Browse extends React.Component {

  componentWillMount() {

    const { props } = this
    const { dispatch } = props

    dispatch(action.filter.tempInit()) // temp search
    dispatch(action.route.initialise(location.hash))

  }

  componentDidUpdate() {
    
    const { store, dispatch } = this.props
    const { route, query } = store
    const { article } = route.query

    const shouldFetch = route.hash !== query.hash
    // const activeArticle = article
    
    if (shouldFetch) dispatch(action.query.fetch(dispatch)(route.hash))

  }

  render() {

    const { props } = this
    const { store } = props
    
    return <div id='Browse' className='page'>
      <GlobalNavigation/>
      <SearchPanel props={props}/>
      <ResultPanel props={props}/>
    </div>

  }

}
