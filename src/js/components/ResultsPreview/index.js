import React from 'react'

export default function ResultsPreview({ props }) {

  const { results, filter } = props.store
  const { localStorage, loading } = results
  const { search, selection } = filter
  const pattern = new RegExp(search, 'i')

  // Reducer
  const idDictionary = []
  const x = selection.reduce((result, { key, value }) => {

    const resultGroup = localStorage[key]
    const resultList = (resultGroup && resultGroup[value] || []).filter(item => {
      if (!idDictionary[item.id]) return pattern.test(item.name)
      else idDictionary[item.id] = true
    })

    return result.concat(resultList)

  }, [])

  const className = loading && 'loading' || 'done'

  if (x.length) return <div className={className}>
    <header className='menu'>
      <h1>{x.length} Results</h1>
    </header>
    <ul className='results content'>{ x.map(item => 
      <li key={item.id}>
        {item.name}
      </li>)
    }</ul>
  </div>
  else return <h1>ResultsPreview</h1>

}