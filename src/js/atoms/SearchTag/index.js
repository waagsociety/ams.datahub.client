import React from 'react'
import { eventHandlers } from './events'

export default function (props, content) {
  
  const { id, name, key, value, active } = content
  const { toggleActivity } = eventHandlers(props, content)
  
  const className = [ active ? 'active' : '', 'tag' ].join(' ').trim()

  return <label className={className} >
    <input type='checkbox' name={name} value={value} checked={active} onChange={toggleActivity} />
    { value }
  </label>

}