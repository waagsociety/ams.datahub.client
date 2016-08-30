import React from 'react'

export default function ResultsPreview({ props }) {

  const { results } = props.store
  const { match, collection } = results

  if (match) return <ul className='results content'>{ collection.map(item => 
    <li key={item.id}>
      {item.name}
    </li>)
  }</ul>
  else return <h1>ResultsPreview</h1>

}