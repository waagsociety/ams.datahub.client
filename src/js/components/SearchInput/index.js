import React from 'react'
import { connect } from 'react-redux'
import handlers from './events'

export const SearchInput = ({ props }) => {

  const { setFocus, clearInput, onChange } = handlers(props)
  const { value } = props.store.filter

  return <div class='menu'>
    <input type='search' name='search' placeholder='Search' autoComplete='off'
      onFocus={setFocus} onBlur={setFocus} onChange={onChange} />
    <button type='button' onClick={clearInput}>Clear Input</button>
  </div>

}