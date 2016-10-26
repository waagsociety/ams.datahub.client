import React from 'react'

export default function ItemHeader({ title, creator, description }) {
  return <header className='datasetheader'>
    <h1>{title.join(', ')}</h1>
    <h2>{creator.join(', ')}</h2>
    {description.map((text, index) => <p key={index}>{text}</p>)}
  </header>
}