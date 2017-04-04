import React from 'react'

export default function ItemPublication({ data }) {
  const { publicationType, source } = data
  return <section className='ItemPublication content'>
    <h1>Publication</h1>
    <h2>{publicationType.join(', ')}</h2>
    <a href={source} target='_blank'>Find this Publication</a>
  </section>
}