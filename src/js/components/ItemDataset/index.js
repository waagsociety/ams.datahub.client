import React from 'react'
import Li from '../Li'

export default function ItemDataset({ data }) {
  const { access, sourceType, spatialResolution, temporalResolution, publisher, creator, contributor, author } = data
  return <section className='ItemDataset content'>

    <h1>Dataset</h1>

    <ul>
      <Li header='Access Level' content={access}/>
      <Li header='Source Type' content={sourceType}/>
      <Li header='Spatial Resolution' content={spatialResolution}/>
      <Li header='Temporal Resolution' content={temporalResolution}/>
      <Li header='Publisher' content={publisher}/>
      <Li header='Creator' content={creator}/>
      <Li header='Author' content={author}/>
      <Li header='Contributors' content={contributor}/>
    </ul>

  </section>
}