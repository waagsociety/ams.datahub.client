import React from 'react'
import classNames from 'classnames'
import { Feedback } from '../'
import { eventHandlers } from './events'

export default function SearchTag({ props }) {
  
  const { store } = props
  const { view, route } = store
  const { value = '', focus } = view.SearchInput
  const { search = [] } = route.query
  const { searchQuery } = eventHandlers(props)

  const activeValue = search.join('')
  const searchValue = activeValue || value 
  const className = classNames('tag', { 
    enabled: searchValue,
    active: activeValue,
  });

  return <label className={className} disabled={!searchValue}>
    <input type='checkbox' name='search' value={activeValue} onClick={searchQuery} />
    <svg className='icon' viewBox='0 0 18 18'>
      <path d='M10,10 l4,4' /><circle cx='7' cy='7' r='4'/>
    </svg>
    { searchValue || "Start typing to search..." }
    <svg className='shortcut' viewBox='0 0 18 18'>
      <path d='M12,4 v7 h-6 m2,-2.5 l-2.5,2.5 l2.5,2.5' />
    </svg>
  </label>

}