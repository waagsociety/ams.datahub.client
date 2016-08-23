import React from 'react'
import { connect } from 'react-redux'

import { search } from '../../actions'

const eventHandlers = ({ dispatch }) => ({
  onFocus(event) {
    // console.log(event) // works
  },
  onChange({ target }) {
    dispatch(search.query(target.value))
  },
})

export const SearchInput = ({ props }) => {

  const { onFocus, onChange } = eventHandlers(props)

  return <div class='menu'>
    <input type='text' name='search' placeholder='Search' onFocus={onFocus} onChange={onChange} autoComplete='off' />
  </div>

}