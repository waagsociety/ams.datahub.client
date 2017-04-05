import React from 'react'
import Li from '../Li'

export default function ItemProject({ data }) {

  const { source, projectLeader, projectPartner, temporal, spatial } = data
  
  return <section className='ItemProject content'>

    <h1>Project</h1>

    <ul>
      <Li header='Project Leader' content={projectLeader}/>
      <Li header='Project Partner' content={projectPartner}/>
      <Li header='Project Duration' content={temporal}/>
      <Li header='Geographical Focus Area' content={spatial}/>
    </ul>

    { source.length ? <a href={source} target='_blank'>Project Website</a> : null }

  </section>

}
