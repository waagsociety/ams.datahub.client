import React from 'react'
import Li from '../Li'

export default function ItemPublication({ data }) {
  
  const { publicationType, source } = data
  
  return <section className='ItemPublication content'>
    
    <h1>Publication</h1>
    
    <ul>
      <Li header='Publication Type' content={publicationType}/>
    </ul>
    
    { source.length ? <a href={source} target='_blank'>Find this Publication</a> : null }

  </section>

}