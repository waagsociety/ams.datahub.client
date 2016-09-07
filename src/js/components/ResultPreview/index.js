import React from 'react'

import { eventHandlers } from './events'

export default function ResultPreview({ content }) {

  // return <li>x</li>

  const keys = [ 'handle', 'title', 'dc.contributor.author' ]
  const item = keys.reduce(assignAndJoin(content), {})

  const {
    handle,
    title = 'Untitled', 
    author = 'Author unknown',
  } = item

  return <li>
    <h1>{title}</h1>
    <p>{author}</p>
    <a href={`#article=x`} className='primary button'>View dataset</a>
  </li>


}

function assignAndJoin(source) {
  return (object, key) => ({
    ...object, [key.split('.').pop()]: [...source[key]].join('')
  })
}