import React from 'react'
import { FilterTag } from '../'

export default function SearchFilterGroup({ props, content }) {

  const { name, key, tags } = content
  const tagData = Object.keys(tags)

  return <section className='group'>
    <h1>{name}</h1>
    <ul>{ 
      tagData.map(value => <li key={value}>
        <FilterTag props={props} content={{ name, key, value, count: tags[value] }}/>
      </li>)
    }</ul>
  </section>

}