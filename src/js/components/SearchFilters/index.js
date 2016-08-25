import React from 'react'
import { SearchFilterGroup } from '../'
import { Feedback } from '../'

export default function ({ props, content }) {

  const { groups, error, match } = props.store.filter
  
  const filters = createFilterGroups(groups, content)
    .filter(group => group.match) // removes empty groups

  if (error) return <Feedback content={"An error has occured"} />

  return <div className='content tags'>{ 
    filters.map((group, i) => <SearchFilterGroup key={i} props={props} content={group} />) 
  }</div>


  return <h1>Okay</h1>

}

function createFilterGroups(groups, filters) {

  const groupMap = groups.map(item => ({ 
    ...item,
    filters: [],
    match: false
  }))

  return filters.reduce((result, filter) => {    

    const { index } = filter
    const group = result[index]
    
    group.filters.push(filter)
    group.match = true

    return result

  }, groupMap)

}
