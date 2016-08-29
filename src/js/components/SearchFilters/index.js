import React from 'react'
import { SearchFilterGroup, Feedback, SearchTag } from '../'
import { createFilterGroups } from './actions'

export default function ({ props, content }) {

  const { groups, match, value } = props.store.filter  
  const filters = createFilterGroups(groups, content)
    .filter(group => group.match) // removes empty groups

  // if (error) return <Feedback content={"An error has occured"} />
  // else 

  const className = [ 'content tags', !!value && 'suggestions' || 'results' ].join(' ')

  return <div className={className}>
    <section className='search group'>
      <SearchTag props={props} />
    </section>
    { filters.map((group, i) => <SearchFilterGroup key={i} props={props} content={group} />) }
  </div>

}