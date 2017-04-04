import React from 'react'

export default function ItemProject({ data }) {
  
  const { source, projectLeader, projectPartner, temporal, spatial } = data
  console.log(source)
 
  return <section className='ItemProject content'>
    
    <h1>Project</h1>
    
    <ul>
      <li>
        <header>Project Leader</header>
        { projectLeader.map((item, index) => <span key={index}>{item}</span>) }
      </li>
      <li>
        <header>Project Partner</header>
        { projectPartner.map((item, index) => <span key={index}>{item}</span>) }
      </li>
      <li>
        <header>Project Duration</header>
        { temporal.map((item, index) => <span key={index}>{item}</span>) }
      </li>
      <li>
        <header>Geographical Focus Area</header>
        { spatial.map((item, index) => <span key={index}>{item}</span>) }
      </li>
    </ul>

    { source.length ? <a href={source} target='_blank'>Project Website</a> : null }

  </section>

}