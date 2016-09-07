import React from 'react'
import handlers from './events'

export default function SearchInput({ props }) {
   
  const { filter, route } = props.store
  const { value, initialised } = filter
  const { query } = route
  const { storeFocus, fetchQuery, fetchSuggestions, clearInput } = handlers(props)
  
  // const searchQuery = (query.search || ['']).join('')

  return <div class='menu'>
    <input type='text' name='search' placeholder='Search' value={value}  autoComplete='off' autoFocus={true}
      onFocus={storeFocus} onBlur={storeFocus} onChange={fetchSuggestions} onKeyDown={fetchQuery} />
    <button class='inline icon button' onClick={clearInput} disabled={!value}>
      <svg viewBox='0 0 18 18'>
        <path d='M4,4 l10,10 M14,4 l-10,10'/> 
      </svg>
    </button>
  </div>

}