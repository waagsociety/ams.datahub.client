import React from 'react'
import { connect } from 'react-redux'
import handlers from './events'

export const SearchInput = ({ props }) => {

  const { onFocus, onChange } = handlers(props)

  return <div class='menu'>
    <input type='text' name='search' placeholder='Search' onFocus={onFocus} onChange={onChange} autoComplete='off' />
  </div>

}