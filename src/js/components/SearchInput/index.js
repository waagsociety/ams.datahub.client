import React from 'react'
import handlers from './events'

export default function ({ props }) {

  const { storeFocus, fetchQuery, fetchSuggestions, clearInput } = handlers(props)
  const { value } = props.store.filter

  return <div class='menu'>
    <input type='text' name='search' placeholder='Search' autoComplete='off' autoFocus={true} value={value || ""} 
      onFocus={storeFocus} onBlur={storeFocus} onChange={fetchSuggestions} onKeyDown={fetchQuery} />
    <button class='inline icon button' onClick={clearInput} disabled={!value}>
      <svg viewBox='0 0 16 16'>
        <path d='m4,4 l8,8'/> 
        <path d='m12,4 l-8,8'/> 
      </svg>
    </button>
  </div>

}