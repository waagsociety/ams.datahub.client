import React from 'react'
import { connect } from 'react-redux'
import equal from 'deep-equal'

import { route } from '../../store'
import { GlobalNavigation, SearchPanel, ResultPanel, ArticleBody } from '../../containers'

@connect ((store) => ({ store }))
export default class Browse extends React.Component {

  componentWillMount() {

    const { props } = this
    const { dispatch } = props

  }

  componentDidUpdate() {
    
    const { store, dispatch } = this.props
    const { route, fetch, query } = store
    const { article } = route.query


    console.log(store)

    // const activeArticle = article
    
    // if (shouldFetch) dispatch(action.query.fetch(dispatch)(route.hash))

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
