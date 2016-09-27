import React from 'react'
import { eventHandlers } from './events'
import { resultsPerPage, initialResults } from '../../config'

export default function ResultList({ props }) {

  const { search, route } = props.store
  const { content } = search
  const { results } = route.query
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
  
  const pageInput = <label className='pagenumber'>
    <input type="number" defaultValue={page} name="page" max={pageCount} onKeyUp={skipPage}/>
  </label>

  const pageination = <footer className='pages full primary'>
    <header className='pagenumber'>{page} / {pageCount}</header>
    <button className='previous' type='button' value={page - 1} disabled={page <= 1} onClick={skipPage}>Previous</button>
    <button className='next' type='button' value={page + 1} disabled={page >= pageCount} onClick={skipPage}>Next</button>
  </footer>

  const log = event => console.log(event)
  
  return <div className={className}>
    
    <button className='close' type='button' onClick={closeResults} hidden={!expand}>
      <i class="fa fa-times" aria-hidden="true"></i> close
    </button>

    <header className='menu'>
      <h1>{title}</h1>
    </header>
    <section className='results content' scrollY='0'>

      <ul>{ data.map((item, i) => {
        const title = item['title'] || "Untitled"
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