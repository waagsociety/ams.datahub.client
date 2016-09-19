import React from 'react'
import { eventHandlers } from './events'
import { fieldIndex, domain } from '../../config'

export default function Dataset({ props }) {

  const { store, dispatch } = props
  const { dataset, route } = store

  const atCurrentDataset = route.query.article[0] === dataset.id

  if (dataset.loading || !atCurrentDataset) return <h1>Loading</h1>

  const { closeDataset } = eventHandlers(props)
  const { name, metadata = [] } = dataset.content

  const meta = metadata.reduce((result, { key, value }) => {
    const data = result[key] || []
    result[key] = data.concat([ value ])
    return result
  }, {})

  const description = meta['dc.description.abstract'].map((content, i) => {
    return <p key={i}>{content}</p>
  })

  const fieldMeta = fieldIndex.reduce((result, item) => {

    const { field } = item
    if (field in meta){ 
      console.log(item)
      result.push(item)
    }

    return result
  }, []) 
  
  console.log(fieldMeta)

  return <article id='dataset' className='content'>
    <section className='body content'>
      <button className='close button' type='button' onClick={closeDataset}>Close</button>
      <header>
        <h1>{name}</h1>
        {description}
      </header>
    </section>
  </article>

}