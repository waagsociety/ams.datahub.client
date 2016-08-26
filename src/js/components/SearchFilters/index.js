import React from 'react'
import { SearchFilterGroup, Feedback, FilterTag } from '../'
import { createFilterGroups } from './actions'

export default function ({ props, content }) {

  const { groups, error, match, value } = props.store.filter  
  const filters = createFilterGroups(groups, content)
    .filter(group => group.match) // removes empty groups

  const xoxo = { 
    id: 1, 
    key: 'search', 
    name: 'search', 
    value: value, 
    active: false 
  }

  if (error) return <Feedback content={"An error has occured"} />

  // <Feedback content={value || "Start Typing to search..."} />
  else return <div className='content tags'>
    <FilterTag props={props} content={xoxo} />
    
    { filters.map((group, i) => <SearchFilterGroup key={i} props={props} content={group} />) }
  </div>

}