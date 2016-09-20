import React from 'react'
import { eventHandlers } from './events'
import { SearchFiltersGroup } from '../../components'
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

    const { field, key } = item
    if (field in meta && meta[field].length){
      item.tags = meta[field]
      result.push(<li key={field}>
        <header>{item.name}</header>
        <ul className='group'>{ meta[field].map((filter, i) => 
          <li key={i}><a className='tag' href={`#${key}=${filter}`}>{filter}</a></li>
        )}</ul>
      </li>)
    }
    return result

  }, []) 
  
  return <article id='dataset' className='content'>
    <section className='body content'>
      <button className='close button' type='button' onClick={closeDataset}>Close</button>
      <header className="datasetheader">
        <h1>{name}</h1>
        {description}
      </header>
      <section className='footercontainer'>
        <ul className='metadata'>{fieldMeta}</ul>
      </section>
    </section>
  </article>

}
