import React from 'react'
import { eventHandlers } from './events'

export default function ResultPreview({ content }) {

  return <li>
    <h1>{item['dc.title']}</h1>
    <p>{item['dc.description.abstract'] || "No description available"}</p>
    <a href={`#item=x`} className='primary button'>View dataset</a>
  </li>


}

function assignAndJoin(source) {
  return (object, key) => ({
    ...object, [key.split('.').pop()]: [...source[key]].join('')
  })
}
