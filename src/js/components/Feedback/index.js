import React from 'react'

export default function Feedback({ content }) {

  return <article className='feedback content'>
    <p>{ content || 'No description.' }</p>
  </article>

}