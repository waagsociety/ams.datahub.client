import React from 'react'
import { FilterTag } from '../'

export default function SearchFilterGroup({ props, content }) {

  const { name, key, tags } = content
  const tagData = Object.keys(tags)
  const amount = tagData.length

  const sortedTagData = tagData.sort((a, b) => tags[a] < tags[b] ? 1 : -1 ).slice(0, 8)
  const moreTags = sortedTagData.length < tagData.length

  return <section className='group'>
    <h1>{name}</h1>
    <ul>{ 
      sortedTagData.map((value, i) => <li key={i}>
        <FilterTag props={props} content={{ name, key, value, count: tags[value] }}/>
      </li>)
    }</ul>
  </section>

}