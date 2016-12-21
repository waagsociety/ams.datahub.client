import React from 'react'
import { Feedback, SearchFiltersGroup, SearchTag } from '../'

export default function SearchFilters({ props }) {

  const { search, view, route } = props.store
  const { focus } = view.FilterGroup
  const { metadata = [] } = search
  const className = [ 'content tags' ].join(' ')
  const showSearchTag = view.SearchInput.value || search.active

  const focusMetadata = focus && metadata.filter(group => group.key === focus)

  if (focus && focusMetadata) return <div className='content tags'>
    <SearchFiltersGroup key={focus} props={props} content={focusMetadata[0]}/> 
  </div>

  else return <div className='content tags'>
    <section className='search group' hidden={!showSearchTag}>
      <h1>Search</h1>
      <SearchTag props={props} />
    </section>
    { metadata.filter(({ tags }) => !!Object.keys(tags).length).map(group =>
      <SearchFiltersGroup key={group.key} props={props} content={group}/>) 
    }
  </div>

  // else return ""

}
