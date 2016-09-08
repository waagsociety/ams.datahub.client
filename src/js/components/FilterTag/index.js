import React from 'react'
// import style from 'index.css'
import { eventHandlers } from './events'

export default function FilterTag({ props, content }) {

  const { value, name, count } = content
  const { toggleActivity } = eventHandlers(props, content)

  const className = [
    'tag',

  ].join(' ')

  return <label className={className}>
    <input type='checkbox' name={name} value={value} checked={false} onChange={toggleActivity}/>
    <svg viewBox='0 0 18 18'><path d="M9,5 v8 M5,9 h8" /></svg>
    {value}
    <span>{count}</span>
  </label>

}