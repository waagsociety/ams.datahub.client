import React from 'react'

export default function ResultsPreview({ props }) {

  const { results } = props.store
  const { match, selection } = results

  if (match) return <div>
    <header className='menu'>
      <h1>{selection.length} Results</h1>
    </header>
    <ul className='results content'>{ selection.map(item => 
      <li key={item.id}>
        {item.name}
      </li>)
    }</ul>
  </div>
  else return <h1>ResultsPreview</h1>

}