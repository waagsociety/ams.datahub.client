import React from 'react'
import { eventHandlers } from './events'
import { getItemType, mapMetadata } from './actions'
import { fieldIndex, domain } from '../../config'
import { 
  ItemHeader,
  ItemRelated,
  ItemInformation,
  ItemFilters,
} from '../../components'

export default function Item({ props }) {

  const { store, dispatch } = props
  const { closeItem } = eventHandlers(props)
  const { dataset: item, route } = store

  const data = mapMetadata(item.content.metadata || [
    { key: 'dc.title', value: "Loading..." },
    { key: 'dc.description', value: "Hello" },
  ])

  const {
    
    title,
    abstract,
    description,
    publisher,
    source,

    author,
    dspace,
    reference,
    theme,
    keyword,

    type,
    license,

    created,
    modified,
    available,
    temporal,
    
    relatedDataset,
    relatedProject,
    relatedPaper,

  } = data

  const actualData = Object.keys(data).reduce((result, key) => {
    return data[key].length 
      ? Object.assign(result, { [key]: data[key] })
      : result
  }, {})

  if (item.content.metadata) {
    // console.log('lala', item)
  }

  return <article id='dataset' className='body content'>
    
    <button className='close button' type='button' onClick={closeItem}>
      <i class="fa fa-times" aria-hidden="true"></i> close
    </button>   

    {ItemHeader({ 
      title, 
      publisher, 
      description, 
      author, 
      dspace, 
      reference 
    })}

    {ItemInformation({ 
      created, 
      modified, 
      available, 
    }, { 
      temporal, 
      license,
      keyword,
      theme,
    })}

  </article>

}
