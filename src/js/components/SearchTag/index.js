import React from 'react'
import { Feedback } from '../'
import { eventHandlers } from './events'

export default function ({ props }) {
  
  const { value, search } = props.store.filter
  
  const active = !!search
  const { searchQuery } = eventHandlers(props)
  
  const className = [ active ? 'active' : '', 'tag' ].join(' ').trim()

  if (search || value) return <label className={className}>
    <input type='checkbox' name='search' checked={active} value={value} onClick={searchQuery} />
    { search || value }
  </label>
  else return <Feedback content='Type to search...' />

}