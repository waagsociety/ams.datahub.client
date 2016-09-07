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

    // dispatch(action.filter.tempInit()) // temp search
    dispatch(action.route.initialise(location.hash))

  }

  componentDidUpdate() { // Router

    const { store, dispatch } = this.props
    const { route, search, dataset } = store
    const { query, hash } = route

    if (hash) { // We’re onto something

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
      else { // Open a search query
        
        if (search.hash !== hash) { // not in cache
          dispatch(action.search.fetch(dispatch)(hash))
        }
        // else console.log(search)

      }

    }
    else { // Homepage
      console.log('We’re home')
    }
    
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
