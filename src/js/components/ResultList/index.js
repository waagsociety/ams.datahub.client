import React from 'react'
import { eventHandlers } from './events'
import { resultsPerPage, initialResults } from '../../config'

export default function ResultList({ props }) {

  const { content } = props.store.search
  const { results } = props.store.route.query
  const { docs = [], numFound = 0, loading } = content
  const { viewData, showAll, skipPage, closeResults } = eventHandlers(props)
  
  const pageCount = Math.ceil(numFound / resultsPerPage)
  let page = parseInt(results && results[0]) || false
  if (page > pageCount) page = pageCount
  const start = page && (page - 1) * resultsPerPage || 0
  const limit = ((page - 1) * resultsPerPage) + resultsPerPage || initialResults
  const expand = page && !props.store.dataset.active

  const title = loading && 'Loading' || numFound + ' Results found'
  const loadClass = loading && 'loading'
  const expandClass = expand && 'expanded'
  const className = [ expandClass, loadClass, 'container floating secondary panel' ].join(' ')

  const data = docs.slice(start, limit)

  const pageination = <footer className='pages full primary'>
    <header>{page} / {pageCount}</header>
    <button className='previous' type='button' disabled={page <= 1} onClick={skipPage(page - 1)}>Previous</button>
    <button className='next' type='button' disabled={page >= pageCount} onClick={skipPage(page + 1)}>Next</button>
  </footer>
  
  return <div className={className}>
    
    <button className='close' type='button' onClick={closeResults} hidden={!expand}>
      <i class="fa fa-times" aria-hidden="true"></i> close
    </button>

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
      
      { expand 
        ? pageination
        : <button className='full primary button' onClick={showAll}>View all results</button>
      }

    </section>

  </div>

}