import React from 'react'

export default function Li({ header, content }) {
  return content.length
    ? <li>
        <header>{header}</header>
        {content.join(', ')}
      </li>
    : <li hidden='true'></li>
}