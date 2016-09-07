import React from 'react'
import { Link } from 'react-router'

import { Feedback } from '../'
import { tempReducer } from './actions'
import { eventHandlers } from './events'

export default function ResultsPreview({ props }) {

  const { content } = props.store.search
  const { docs, numFound } = content

  const resultList = docs || []
  // console.log(resultList)
  
  const className = [ 'container floating secondary panel' ].join(' ')

  return <div className={className}>
    
    <header className='menu'>
      <h1>ResultsPreview</h1>
    </header>

    <section className='results content'>

      <ul>{
        resultList.map(item => <li key={item.handle}>{item.title.join('')}</li>)
      }</ul>
      
      <button className='full primary button'>View all results</button>
      
    </section>

    

  </div>

  

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