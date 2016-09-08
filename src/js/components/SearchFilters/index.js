import React from 'react'
import { Feedback, SearchFiltersGroup, SearchTag } from '../'

export default function SearchFilters({ props }) {

  const { search } = props.store
  const { metadata = [] } = search
  const className = [ 'content tags' ].join(' ')

  return <div className={className}>
    <section className='search group'>
      <SearchTag props={props} />
    </section>
    { metadata.map(group => <SearchFiltersGroup key={group.key} props={props} content={group}/>) }
  </div>

}