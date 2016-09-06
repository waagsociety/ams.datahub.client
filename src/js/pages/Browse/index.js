import React from 'react'
import { connect } from 'react-redux'

import { query, filter } from '../../store'
import { GlobalNavigation, SearchPanel, ResultPanel, ArticleBody } from '../../containers'

@connect ((store) => ({ store }))
export default class Browse extends React.Component {

  componentWillMount() {

    const { props } = this
    const { dispatch } = props

    dispatch(filter.tempInit()) // temp search
    dispatch(query.initialise(location.hash))

  }

  componentDidUpdate() {
    
    const { store } = this.props
    const { query, filter } = store

    // console.log(store.query)

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
