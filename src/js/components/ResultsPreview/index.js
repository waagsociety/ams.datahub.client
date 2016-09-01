import React from 'react'
import { Link } from 'react-router'

import { Feedback } from '../'
import { tempReducer } from './actions'
import { eventHandlers } from './events'

export default function ResultsPreview({ props }) {

  const { results, filter } = props.store
  const { localStorage, loading } = results
  const { search, value, selection, initialised } = filter  
  const resultList = tempReducer({ results, filter })

  const { loadArticle } = eventHandlers(props)

  const isLoading = !initialised || loading ? 'loading' : 'done'
  const isVisible = (search || selection.length) ? 'visible' : 'hidden'
  const className = [ isLoading, isVisible, 'container floating secondary panel' ].join(' ')

  return <div className={className}>
    <header className='menu'>
      <h1>{loading ? 'Loading...' : resultList.length + ' Results'}</h1>
    </header>
    <section className='results content'>
      <ul>{ resultList.map(item => 
        <li key={item.id}>
          <h1>{item.name}</h1>
          <time dateTime={item.lastModified}>{item.lastModified.substr(0,10).split('-').reverse().join('-')}</time>
          <a href={`#article=${item.id}`} className='primary button' onClick={loadArticle}>View dataset</a>
        </li>)
      }</ul>
      { resultList.length ? <button className='full primary button'>View all results</button> : <Feedback content='Nothing here...'/>
      }
    </section>
  </div>

}