import React from 'react'
import validUrl from 'valid-url'

console.log(validUrl)

export default function ItemTool({ data }) {
  
  const { source } = data
  const sources = source.filter(validUrl.is_uri)

  return <section className='ItemTool content'>
    
    <h1>Tool</h1>
    
    { sources.length ? <a href={sources[0]} target='_blank'>Get this Tool</a> : null }

  </section>
  
}