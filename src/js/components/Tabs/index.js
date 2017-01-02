import React from 'react'

export default function Tabs({ items, events = {} }) {

  return <ul className='tabs'>
  {
    items.map(item => {
      return <li key={item.name} style={{ width: 100 / items.length + '%' }}>
        <button type='button' className={item.active ? 'active' : ''} {...events(item)}>{item.name}</button>
      </li>
    })
  }
  </ul>

}