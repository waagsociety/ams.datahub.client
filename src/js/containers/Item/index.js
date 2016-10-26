import React from 'react'
import { eventHandlers } from './events'
import { getItemType, getMetadata } from './actions'
import { SearchFiltersGroup, ItemProject, ItemPaper, ItemDataset, ItemDefault } from '../../components'
import { fieldIndex, domain } from '../../config'

export default function Item({ props }) {

  const { store, dispatch } = props
  const { closeItem } = eventHandlers(props)
  const { dataset: item, route } = store
  const { content = {} } = item

  console.log(content)

  const itemComponent = getItemType(content) ? ItemPaper : ItemDefault
  
  return <article id='dataset' className='body content'>
    
    <button className='close button' type='button' onClick={closeItem}>
      <i class="fa fa-times" aria-hidden="true"></i> close
    </button>
    
    { 
      getItemType(content) 
        ? ItemProject(getMetadata(content)) 
        : ItemDefault(content) 
    }

  </article>

}
