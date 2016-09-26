import React from 'react'
import { FilterTag } from '../'
import { initialFiltersPerGroup } from '../../config'
import { eventHandlers } from './events'

export default function SearchFilterGroup({ props, content }) {

  const { name, key, tags } = content
  const { focus } = props.store.view.FilterGroup
  const tagData = Object.keys(tags)
  const amount = tagData.length
  const { focusGroup } = eventHandlers(props)

  const sortedTagData = tagData.sort((a, b) => tags[a] < tags[b] ? 1 : -1 )
  const slicedTagData = sortedTagData.slice(0, focus ? sortedTagData.length : initialFiltersPerGroup)
  const moreTags = sortedTagData.length < tagData.length

  return <section className='group'>
    <h1>{name}</h1>
    <ul>{ 
      slicedTagData.filter(hasContents).map((value, i) => <li key={i}>
        <FilterTag props={props} content={{ name, key, value, count: tags[value] }}/>
      </li>)
    }</ul>
    { amount > initialFiltersPerGroup
      ? <button className='tag more' type='button' value={key} onClick={focusGroup}>{
        `Show ${amount - initialFiltersPerGroup} more`
      }</button> 
      : [] 
    }
  </section>

}

const hasContents = value => !!value