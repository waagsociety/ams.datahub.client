import React from 'react'
import { eventHandlers } from './events'
import { resultsPerPage, initialResults } from '../../config'

export default function ResultList({ props }) {

  const { content } = props.store.search
  const { results } = props.store.route.query
  const { docs = [], numFound = 0, loading } = content
  const { viewData, showAll } = eventHandlers(props)
  
  const page = parseInt(results[0]) || false
  const start = page * 0
  const limit = page * resultsPerPage || initialResults
  const expand = page && !props.store.dataset.active

  const title = loading && 'Loading' || numFound + ' Results found'
  const loadClass = loading && 'loading'
  const expandClass = expand && 'expanded'
  const className = [ expandClass, loadClass, 'container floating secondary panel' ].join(' ')

  const data = docs.slice(start, limit)

  // console.log(data.length, resultsPerPage)
  
  return <div className={className}>
    
    <header className='menu'>
      <h1>{title}</h1>
    </header>
    <section className='results content'>

      <ul>{ data.map(item => {
        const title = item['dc.title'] || "Untitled"
        const author = item['author'] || "Author unknown"
        const id = item['search.resourceid']

        return <li key={id}>
          <h1>{title}</h1>
          <p>{author}</p>
          <a href={`#article=${id}`} onClick={viewData} className='primary button'>View dataset</a>
        </li>
      }) }</ul>
      
      <button className='full primary button' onClick={showAll}>View all results</button>

    </section>

  </div>

}