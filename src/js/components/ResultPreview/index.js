import React from 'react'

import { eventHandlers } from './events'

export default function ResultPreview({ content }) {

  const keys = [ 'handle', 'title', 'dc.contributor.author' ]
  const item = keys.reduce(spreadAndJoin(content), {})
  
  const { 
    handle = null,
    title = 'Untitled', 
    author = 'Author unknown',
  } = item

  if (handle) return <li>
    <h1>{title}</h1>
    <p>{author}</p>
    <a href={`#article=${handle}`} className='primary button'>View dataset</a>
  </li>


}

function spreadAndJoin(source) {
  return (object, key) => ({
    ...object, [key.split('.').pop()]: [...source[key]].join('')
  })
}