import React from 'react'
import { SearchFilterGroup } from '../'

export default function (props, content) {

  const filters = createFilterGroups(content).filter(group => group.match)

  return <div className='content tags'>{ 
    filters.map(group => SearchFilterGroup(props, group)) 
  }</div>


  return <h1>Okay</h1>

}

function createFilterGroups({ groups, suggestions }) {
  
  const groupMap = groups.map(item => ({ 
    ...item,
    suggestions: [],
    match: false
  }))

  return suggestions.reduce((result, filter) => {    

    const { index } = filter
    const group = result[index]
    
    group.suggestions.push(filter)
    group.match = true

    return result

  }, groupMap)

}
