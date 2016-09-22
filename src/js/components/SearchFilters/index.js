import React from 'react'
import { Feedback, SearchFiltersGroup, SearchTag } from '../'

export default function SearchFilters({ props }) {

  const { search, view } = props.store
  const { metadata = [] } = search
  const className = [ 'content tags' ].join(' ')
  const showSearchTag = view.SearchInput.value || search.active

  return <div className={className}>
    <section className='search group' hidden={!showSearchTag}>
      <SearchTag props={props} />
    </section>
    { metadata.filter(({ tags }) => !!Object.keys(tags).length).map(group =>
      <SearchFiltersGroup key={group.key} props={props} content={group}/>) 
    }
  </div>

}