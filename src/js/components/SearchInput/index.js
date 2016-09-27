import React from 'react'
import handlers from './events'

export default function SearchInput({ props }) {
   
  const { route, view } = props.store
  const { SearchInput, FilterGroup } = view
  const { value } = SearchInput
  const { focus } = FilterGroup
  const { storeFocus, fetchQuery, fetchSuggestions, clearInput } = handlers(props, focus)

  const placeholder = focus ? `Filter ${focus}` : 'Search'

  return <div class='menu'>
    <input type='text' name='search' placeholder={placeholder} value={value}  autoComplete='off' autoFocus={true}
      onFocus={storeFocus} onBlur={storeFocus} onChange={fetchSuggestions} onKeyDown={fetchQuery} />
    <button class='inline icon button' onClick={clearInput} disabled={!value}>
      <svg viewBox='0 0 18 18'>
        <path d='M4,4 l10,10 M14,4 l-10,10'/> 
      </svg>
    </button>
  </div>

}