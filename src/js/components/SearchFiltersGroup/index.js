import React from 'react'
import { FilterTag } from '../'
import { initialFiltersPerGroup } from '../../config'
import { eventHandlers } from './events'

export default function SearchFilterGroup({ props, content }) {

  const { name, key, tags, data } = content
  const { FilterGroup, SearchInput } = props.store.view
  const { focus } = FilterGroup
  const { value } = SearchInput
  const { focusGroup } = eventHandlers(props)
  const pattern = focus && value && new RegExp(value, 'i')

  const tagData = data
  const amount = data.length



  const slicedTagData = tagData.slice(0, focus ? tagData.length : initialFiltersPerGroup)
  const filteredTagData = focus && value 
    ? slicedTagData.filter(tag => pattern.test(tag.label)) 
    : slicedTagData
  // const moreTags = sortedTagData.length < tagData.length

  // console.log(filteredTagData)

  return <section className='group'>
    { focus ? <button className='close' type='button' value='' onClick={focusGroup}>
      <i class="fa fa-times" aria-hidden="true"></i> close
    </button> : [] }
    <h1>{name}</h1>
    <ul>{ 
      filteredTagData.map(item => <li key={item.value}>
        <FilterTag props={props} item={item} content={{ value: item.value, name, key }}/>
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

const hasContents = value => !!value.label