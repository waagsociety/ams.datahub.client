import React from 'react'
import { Link } from 'react-router'
import { tempReducer } from './actions'

export default function ResultsPreview({ props }) {

  const { results, filter } = props.store
  const { localStorage, loading } = results
  const { search, value, selection, initialised } = filter
  
  const resultList = tempReducer({ results, filter })
  const className = initialised && loading ? 'loading' : 'done'

  if (search || selection.length) return <div className={className}>
    <header className='menu'>
      <h1>{resultList.length} Results</h1>
    </header>
    <section className='results content'>
      <ul>{ resultList.map(item => 
        <li key={item.id}>
          <h1>{item.name}</h1>
          <time dateTime={item.lastModified}>{item.lastModified.substr(0,10).split('-').reverse().join('-')}</time>
          <Link to={`#${item.handle}`} ><button className='primary button'>View dataset</button></Link>
        </li>)
      }</ul>
      <button className='full primary button'>View all results</button>
    </section>
  </div>
  else return <h1>ResultsPreview</h1>

}