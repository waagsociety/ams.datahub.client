import React from 'react'
import { eventHandlers } from './events'

export default function ({ props }) {
  
  const { value } = props.store.filter
  // const { toggleActivity } = eventHandlers(props)
  
  return <label className='tag' >
    <input type='checkbox' name='search' value={value} />
    { value }
  </label>

}