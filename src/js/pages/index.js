import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import * as action from '../store'
import { 
  GlobalNavigation, 
  SearchPanel, 
  ResultPanel, 
  ResultBrowser, 
  RelatedPanel, 
  Item,
  // MapBox
} from '../containers'

// import BrowserMap from '../components/BrowserMap'
// const Map = MapBox

@connect ((store) => ({ store }))
export default class Index extends React.Component {

  componentWillMount() {
    const { props } = this
    const { dispatch } = props
    dispatch(action.route.initialise())
    onhashchange = event => dispatch(action.route.initialise())
  }

  componentDidUpdate() {



    // Route
    const { store, dispatch } = this.props
    const { route, search, dataset } = store
    const { query, hash } = route

    if (Object.keys(query).length === 1 && query.scope) location.hash = ''

    else if (query.item) { // Open a dataset
      const id = query.item.join('')
      if (dataset.id !== id) dispatch(action.dataset.fetch(dispatch)(id))
    }
    
    else if (search.hash !== hash) { 
      
      if (hash) dispatch(action.search.fetch(dispatch)(route)) // Search-query in place
      else dispatch(action.search.clear()) // We’re home

    }

  }

  render() {

    const { props } = this
    const { search, dataset, route, view } = props.store
    const { query } = route
    const hasResults = route.query.results !== undefined

    switch(true) {

      case !!query.item: return <div id='article' className='page container cover'>
        <Item props={props}/>
        <RelatedPanel props={props}/>
      </div>

      case !!search.hash: return  <div id='search' className='page container cover'>
        <SearchPanel props={props}/>
        <ResultPanel props={props}/>
      </div>      

      default: return <div id='search' className='page container cover clear'>
        <SearchPanel props={props}/>
      </div>
    
    }

  }
}
