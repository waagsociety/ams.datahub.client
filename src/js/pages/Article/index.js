import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { ArticleBody } from '../../containers'

@connect ((store) => ({ store }))
export default class Article extends React.Component {

  componentWillMount() {

    const { props } = this
    const { dispatch, location } = props
    // dispatch(article.load(dispatch)(location.pathname))
    
  }

  render() {

    const { props } = this

    return <article id='Article' className='page'>
      <ArticleBody props={props} />
    </article>

  }

}