import React from 'react'
import handlers from './events'

export default function ({ props }) {

  const { setFocus, getSuggestions, clearInput } = handlers(props)
  const { value } = props.store.filter

  return <div class='menu'>
    <input type='text' name='search' placeholder='Search' autoComplete='off' value={value || ""} 
      onFocus={setFocus} onBlur={setFocus} onChange={getSuggestions} />
    <button class='inline icon button' onClick={clearInput} disabled={!value}>Clear</button>
  </div>

}