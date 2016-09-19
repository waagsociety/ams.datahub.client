import React from 'react'
import { eventHandlers } from './events'

export default function ResultList({ props }) {

  const { content } = props.store.search
  const { docs = [], numFound = 0, loading } = content
  const { viewData } = eventHandlers(props)

  const title = loading && 'Loading' || numFound + ' Results found'
  const loadClass = loading && 'loading'
  const className = [ loadClass, 'container floating secondary panel' ].join(' ')
  
  return <div className={className}>
    
    <header className='menu'>
      <h1>{title}</h1>
    </header>
    <section className='results content'>

      <ul>{ docs.map(item => {
        const title = item['dc.title'] || "Untitled"
        const author = item['author'] || "Author unknown"
        const id = item['search.resourceid']

        return <li key={id}>
          <h1>{title}</h1>
          <p>{author}</p>
          <a href={`#article=${id}`} onClick={viewData} className='primary button'>View dataset</a>
        </li>
      }) }</ul>
      
      <button className='full primary button'>View all results</button>

    </section>

  </div>

  
  // obsolete (reference)
  return <div className={className}>
    <header className='menu'>
      <h1>{loading ? 'Loading...' : resultList.length + ' Results'}</h1>
    </header>
    <section className='results content'>
      <ul>{ resultList.map(item => 
        <li key={item.id}>
          <h1>{item.name}</h1>
          <time dateTime={item.lastModified}>{item.lastModified.substr(0,10).split('-').reverse().join('-')}</time>
          <a href={`#article=${item.id}`} className='primary button'>View dataset</a>
        </li>)
      }</ul>
      { resultList.length ? <button className='full primary button'>View all results</button> : <Feedback content='Nothing here...'/>
      }
    </section>
  </div>

}