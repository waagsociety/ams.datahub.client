import React from 'react'
import { FilterTag } from '../'
import { initialFiltersPerGroup } from '../../config'
import { eventHandlers } from './events'

export default function SearchFilterGroup({ props, content }) {

  const { name, key, tags } = content
  const { FilterGroup, SearchInput } = props.store.view
  const { focus } = FilterGroup
  const { value } = SearchInput
  const { focusGroup } = eventHandlers(props)
  const pattern = focus && value && new RegExp(value, 'i')

  const tagData = Object.keys(tags)
  const amount = tagData.length

  const sortedTagData = tagData.sort((a, b) => tags[a] < tags[b] ? 1 : -1 )
  const slicedTagData = sortedTagData.slice(0, focus ? sortedTagData.length : initialFiltersPerGroup)
  const filteredTagData = focus && value 
    ? slicedTagData.filter(tag => pattern.test(tag)) 
    : slicedTagData
  const moreTags = sortedTagData.length < tagData.length

  return <section className='group'>
    { focus ? <button className='close' type='button' value='' onClick={focusGroup}>Close</button> : [] }
    <h1>{name}</h1>
    <ul>{ 
      filteredTagData.filter(hasContents).map((value, i) => <li key={i}>
        <FilterTag props={props} content={{ name, key, value, count: tags[value] }}/>
      </li>)
    }</ul>
    { amount > initialFiltersPerGroup && !focus
      ? <button className='tag more' type='button' value={key} onClick={focusGroup}>{
        `Show ${amount - initialFiltersPerGroup} more`
      }</button> 
      : [] 
    }
  </section>

}

const hasContents = value => !!value