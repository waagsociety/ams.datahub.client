import React from 'react'

export default function ItemHeader({ title, type, publisher, author, description, dspace, reference }) {

  return <header className='ItemHeader content datasetheader'>

    <h1>{title}</h1>
    <h2 className="publisher">{publisher.filter(item => !!item).join(', ')}</h2>

  </header>

}