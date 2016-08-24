import React from 'react'
import handlers from './events'

export const SearchInput = ({ props }) => {

  const { onFocusChange, onChange } = handlers(props)

  return <div class='menu'>
    <input type='text' name='search' placeholder='Search' autoComplete='off' 
      onFocus={onFocusChange} onBlur={onFocusChange} onChange={onChange} />
  </div>

}