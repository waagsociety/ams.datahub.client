import React from 'react'
import { eventHandlers } from './events'
import { resultsPerPage, initialResults } from '../../config'

export default function ResultList({ props }) {

  const { search, route } = props.store
  const { content } = search
  const { results, item } = route.query
  const { docs = [], numFound = 0, loading } = content
  const { viewData, showAll, skipPage, closeResults } = eventHandlers(props)
  
  const pageCount = Math.ceil(numFound / resultsPerPage)
  let page = parseInt(results && results[0]) || false
  if (page > pageCount) page = pageCount
  const start = page && (page - 1) * resultsPerPage || 0
  const limit = ((page - 1) * resultsPerPage) + resultsPerPage || initialResults
  const expand = page && !props.store.dataset.active

  const title = loading && 'Loading' || numFound + ' Results found'
  const viewMore = numFound > initialResults
  const moreCount = viewMore ? numFound - initialResults : numFound
  const moreText = viewMore ? `View ${moreCount} more results` : 'Expand result list'
  const loadClass = loading && 'loading'
  const expandClass = expand && 'expanded'
  const className = [ expandClass, loadClass, 'container floating secondary panel' ].join(' ')

  const data = docs.slice(start, limit)
  const itemID = item && parseInt(item[0])

  const pageInput = <label className='pagenumber'>
    <input type="number" defaultValue={page} name="page" max={pageCount} onKeyUp={skipPage}/>
  </label>

  const pageination = pageCount > 1 
    ? <footer className='pages full primary'>
        <header className='pagenumber'>{page} / {pageCount}</header>
        <button className='previous' type='button' value={page - 1} disabled={page <= 1} onClick={skipPage}>Previous</button>
        <button className='next' type='button' value={page + 1} disabled={page >= pageCount} onClick={skipPage}>Next</button>
      </footer>
    : []
  
  return <div className={className}>
    
    <button className='close' type='button' onClick={closeResults} hidden={!expand}>
      <i class="fa fa-times" aria-hidden="true"></i> close
    </button>

    <header className='menu'>
      <h1>{title}</h1>
    </header>
    <section className='results content'>

      <ul>{ data.map((item, i) => {
        const title = item['title'] || "Untitled"
        const id = item['search.resourceid']
        const type = item['dcterms.type'] || "item"
        const isActive = id === itemID

        return <li className={isActive ? 'active' : ''} key={id}>
          <h1>{title}</h1>
          <a href={`#item=${id}`} onClick={viewData(id)} className='primary button'>View {type}</a>
        </li>
      }) }</ul>
      
      { expand 
        ? pageination
        : <button className='full primary button' onClick={showAll}>{moreText}</button>
      }

    </section>

  </div>

}