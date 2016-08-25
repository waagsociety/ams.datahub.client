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
    selection: [],
    suggestions: [],
    match: false
  }))

  return suggestions.reduce((result, filter, i) => {    

    const { index, active } = filter
    const group = result[index]
    
    if (active) group.selection.push(filter)
    else group.suggestions.push(filter)

    group.match = true

    return result

  }, groupMap)

}
