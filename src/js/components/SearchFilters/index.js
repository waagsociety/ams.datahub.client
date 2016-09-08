import React from 'react'
import { Feedback, SearchFiltersGroup, SearchTag } from '../'
import { createFilterGroups } from './actions'

export default function SearchFilters({ props, content }) {

  const { filter, search } = props.store
  const { metadata = [] } = search
  const { groups, match, value, error, loading } = filter

  return <div className={className}>
    <section className='search group'>
      <SearchTag props={props} />
    </section>
    { metadata.map(group => <SearchFiltersGroup key={group.key} props={props} content={group}/>) }
  </div>



  const filters = createFilterGroups(groups, content).filter(group => group.match)
  const className = [ 'content tags', !!value && 'suggestions' || 'selection' ].join(' ')

  if (error) return <Feedback content={"An error has occured"} />
  else if (loading) return <Feedback content={"Loading..."} />
  else return <div className={className}>
    <section className='search group'>
      <SearchTag props={props} />
    </section>
    { filters.map(group => 
      <SearchFiltersGroup key={group.key} props={props} content={group} />
    )}
  </div>

}