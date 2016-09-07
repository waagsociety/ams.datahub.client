import React from 'react'
import { Feedback } from '../'
import { eventHandlers } from './events'

export default function SearchTag({ props }) {
  
  const { store } = props
  const { search } = store.route.query
  const { value } = store.filter
  const { focus } = store.view.SearchInput
  const { searchQuery } = eventHandlers(props)

  const currentValue = (search || []).join('')

  const active = !!currentValue
  const enabled = active || value

  const className = [ 
    active ? 'active' : '', 
    enabled ? 'enabled' : 'disabled',
    focus && !!value ? 'focus' : '',
    'tag'
  ].join(' ').trim()

  return <label className={className} disabled={!enabled}>
    <input type='checkbox' name='search' checked={active} value={value} onChange={searchQuery}/>
    <svg className='icon' viewBox='0 0 18 18'>
      <path d='M10,10 l4,4' /><circle cx='7' cy='7' r='4'/>
    </svg>
    { currentValue || value || "Start typing to search..." }
    <svg className='shortcut' viewBox='0 0 18 18'>
      <path d='M12,4 v7 h-6 m2,-2.5 l-2.5,2.5 l2.5,2.5' />
    </svg>
  </label>

}