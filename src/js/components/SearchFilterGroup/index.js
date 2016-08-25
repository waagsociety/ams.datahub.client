import React from 'react'
import { SearchTag } from '../../atoms'

export default function (props, { value, key, selection, suggestions }) {

  const filters = [ ...selection, ...suggestions ]

  return <section key={key} className='group'>
    <h1>{value}</h1>
    <ul>{ 
      filters.map(filter => {
        return <li key={ Math.random() }>{ SearchTag(props, filter) }</li>
      })
    }</ul>
  </section>

}