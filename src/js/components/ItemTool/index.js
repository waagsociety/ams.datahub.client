import React from 'react'

export default function ItemTool({ data }) {
  
  const { source } = data

  return <section className='ItemTool content'>
    
    <h1>Tool</h1>
    
    { source.length ? <a href={source} target='_blank'>Get this Tool</a> : null }

  </section>
  
}