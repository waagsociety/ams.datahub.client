import React from 'react'
import { Feedback } from '../'
import { eventHandlers } from './events'

export default function ({ props }) {
  
  const { value, search } = props.store.filter
  const { searchQuery } = eventHandlers(props)

  const active = !!search
  const enabled = active || value

  const className = [ 
    active ? 'active' : '', 
    enabled ? 'enabled' : 'disabled',
    'tag'
  ].join(' ').trim()

  return <label className={className}>
    <input type='checkbox' name='search' checked={active} value={value} onClick={searchQuery}/>
    { search || value || "Type to search..." }
  </label>

}