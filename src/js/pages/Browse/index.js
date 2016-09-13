import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import * as action from '../../store'
import { GlobalNavigation, SearchPanel, ResultPanel, ArticleBody } from '../../containers'

@connect ((store) => ({ store }))
export default class Browse extends React.Component {

  componentWillMount() {

    const { props } = this
    const { dispatch, store } = props

    dispatch(action.route.initialise(location.hash))

  }

  componentDidUpdate() { // Router

    const { store, dispatch } = this.props
    const { route, search, dataset } = store
    const { query, hash } = route

    if (query.article) { // Open a dataset
      
      const id = parseFloat(query.article.join(''))        
      if (typeof id === 'number') {
        console.log('Dataset', dataset)
      }
      else {
        console.log('Dataset could not be identified') 
        // -> todo: re-route to query
      }

    }
    else if (search.hash !== hash) {
      if (hash) dispatch(action.search.fetch(dispatch)(route)) // Search-query in place
      else dispatch(action.search.clear()) // We’re home
    }
  
  }

  render() {

    const { props } = this
    const { search, dataset, route } = props.store

    let page = ''
    if (!!search.hash) page = 'search'
    else if (!!route.article) console.log(route.article)

    switch (page) {

      case 'search': return <div id='Browse' className='page'>
        <GlobalNavigation/>
        <SearchPanel props={props}/>
        <ResultPanel props={props}/>
      </div>

      case 'article': return <div id='Browse' className='page'>
        <GlobalNavigation/>
        <Article props={props}/>
      </div>

      default: return <div id='Browse' className='page'>
        <GlobalNavigation/>
        <SearchPanel props={props}/>
      </div>

    }

  }

}
