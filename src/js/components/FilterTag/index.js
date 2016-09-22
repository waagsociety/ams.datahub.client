import React from 'react'
import classNames from 'classnames'
import { eventHandlers } from './events'

export default function FilterTag({ props, content }) {

  const { route } = props.store
  const { key, value, name, count } = content
  const { toggleActivity } = eventHandlers(props, content)
  const { query } = route

  let active = false
  const queryKey = query[key] || []
  active = queryKey.includes(value)

  const className = classNames('tag', {
    active: active
  })

  return <label className={className} style={getCountPadding(count)} title={value}>
    <input type='checkbox' name={name} value={value} checked={active} onChange={toggleActivity}/>
    <svg viewBox='0 0 18 18'><path d="M9,5 v8 M5,9 h8" /></svg>
    {value}
    <span className='count'>{count}</span>
  </label>

}

function getCountPadding(count) {
  let padding = 2
  const characterWidth = 0.5
  const countLength = ('' + count).length
  return { paddingRight: (padding + (characterWidth * countLength)) + 'em' }
}