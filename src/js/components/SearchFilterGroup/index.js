import React from 'react'
import { SearchTag } from '../../atoms'

export default function (props, { value, key, suggestions }) {

  return <section key={key} className='group'>
    <h1>{value}</h1>
    <ul>{ 
      suggestions.map(filter => {
        return <li key={ Math.random() }>{ SearchTag(props, filter) }</li>
      })
    }</ul>
  </section>

}