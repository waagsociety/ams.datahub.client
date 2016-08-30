import React from 'react'

export default function ResultsPreview({ props }) {

  const { results, filter } = props.store
  const { match, selection } = results
  const { search } = filter
  const pattern = new RegExp(search, 'i')

  const list = selection.filter(item => pattern.test(item.name))

  if (match) return <div>
    <header className='menu'>
      <h1>{list.length} Results</h1>
    </header>
    <ul className='results content'>{ list.map(item => 
      <li key={item.id}>
        {item.name}
      </li>)
    }</ul>
  </div>
  else return <h1>ResultsPreview</h1>

}