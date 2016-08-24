import React from 'react'
import handlers from './events'

export const SearchInput = ({ props }) => {

  const { setFocus, getSuggestions } = handlers(props)

  return <div class='menu'>
    <input type='text' name='search' placeholder='Search' autoComplete='off' 
      onFocus={setFocus} onBlur={setFocus} onChange={getSuggestions} />
  </div>

}