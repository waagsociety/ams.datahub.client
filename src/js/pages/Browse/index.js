import React from 'react'
import { connect } from 'react-redux'

import { route, filter } from '../../store'
import { GlobalNavigation, SearchPanel, ResultPanel, ArticleBody } from '../../containers'

@connect ((store) => ({ store }))
export default class Browse extends React.Component {

  componentWillMount() {

    const { props } = this
    const { dispatch } = props

    dispatch(filter.tempInit()) // temp search
    dispatch(route.initialise(location.hash))

  }

  componentDidUpdate() {
    
    const { store } = this.props
    const { route, filter } = store

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
