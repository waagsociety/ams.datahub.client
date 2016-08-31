import React from 'react'
import { Link } from 'react-router'

export default function ResultsPreview({ props }) {

  const { results, filter } = props.store
  const { localStorage, loading } = results
  const { search, value, selection, initialised } = filter
  const pattern = new RegExp(search, 'i')
  
  if (!initialised) console.log('loading initial data')

  // TempReducer
  const activeFilters = selection.length

  const y = (!activeFilters && localStorage['dc.type'] && localStorage['dc.type'].dataset || []).filter(item => pattern.test(item.name))
  const idDictionary = []
  const x = selection.reduce((result, { key, value }) => {

    const resultGroup = localStorage[key]
    const resultList = (resultGroup && resultGroup[value] || []).filter(item => {
      if (idDictionary[item.id]) return false
      else idDictionary[item.id] = true
      return pattern.test(item.name)
    })

    return result.concat(resultList)

  }, [])

  const actualList = activeFilters && x || y

  actualList.forEach(item => {
    if (item.parentCollection) console.log(item)
  })

  const className = loading && 'loading' || 'done'

  if (search || selection.length) return <div className={className}>
    <header className='menu'>
      <h1>{actualList.length} Results</h1>
    </header>
    <section className='results content'>
      <ul>{ actualList.map(item => 
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