import React from 'react'
import { FilterTag } from '../'

export default function ({ props, content }) {

  const { value, key, filters } = content

  const childNodes = filters.map((content, i) =>
    <li key={i}><FilterTag props={props} content={content} /></li> 
  )

  return <section key={key} className='group'>
    <h1>{value}</h1>
    <ul>{childNodes}</ul>
  </section>

}