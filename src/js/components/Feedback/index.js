import React from 'react'

export default function Feedback(textContent) {

  return <article className='feedback content'>
    <p>{ textContent || 'No description.' }</p>
  </article>

}