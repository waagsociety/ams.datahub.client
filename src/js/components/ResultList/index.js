import React from 'react'
import { Pagination } from '../'
import { eventHandlers } from './events'
import { resultsPerPage, initialResults } from '../../config'

export default function ResultList({ props }) {

  const { search, route } = props.store
  const { content } = search
  const { results, handle } = route.query
  const { docs = [], numFound = 0, loading } = content
  const { viewData, showAll, skipPage, closeResults } = eventHandlers(props)
  
  const pageCount = Math.ceil(numFound / resultsPerPage)
  const multiplePages = pageCount > 1

  let page = parseInt(results && results[0]) || 1
  if (page > pageCount) page = pageCount
  const start = page && (page - 1) * resultsPerPage || 0
  const limit = ((page - 1) * resultsPerPage) + resultsPerPage || initialResults
  const expand = true //page && !props.store.dataset.active

  const title = loading && 'Loading' || numFound + ' Results found'
  const viewMore = numFound > initialResults
  const moreCount = viewMore ? numFound - initialResults : numFound
  const moreText = viewMore ? `View ${moreCount} more results` : 'Expand result list'
  const loadClass = loading && 'loading'
  const expandClass = expand ? 'expanded' : ''
  const paginationClass = multiplePages ? 'paginated' : ''

  const className = [ expandClass, loadClass, paginationClass, 'container floating secondary panel' ].join(' ')

  const data = docs.slice(start, limit)
  const activeHandle = handle && parseInt(handle[0])

  const pageInput = <label className='pagenumber'>
    <input type="number" defaultValue={page} name="page" max={pageCount} onKeyUp={skipPage}/>
  </label>
  
  return <div className={className}>

    <header className='menu'>
      <h1>{title}</h1>
    </header>
    <section className='results content'>

      <ul>{ data.map((item, i) => {
        const title = item['title'] || "Untitled"
        // const id = item['search.resourceid']
        const handle = item['handle']
        const type = item['dcterms.type'] || "item"
        const isActive = handle === activeHandle

        return <li className={isActive ? 'active' : ''} key={handle}>
          <h1>{title}</h1>
          <a href={`#handle=${handle}`} onClick={viewData(handle)} className='primary button'>View {type}</a>
        </li>
      }) }</ul>
      
      { pageCount > 1 ? <Pagination content={{ page, pageCount }} events={{ skipPage }} /> : null }
      
    </section>

  </div>

}