import React from 'react'
import { ItemRelated } from '../../components'

export default function RelatedPanel({ props }) {

  const { related } = props.store.dataset

  return <div className='container floating secondary panel'>

    <header className='menu'>
      
      <h1>Related</h1>
      
    </header>
    <section className='content'>

      {ItemRelated(related)}

    </section>

  </div>

}