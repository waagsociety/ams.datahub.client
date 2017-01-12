import React from 'react'
import { eventHandlers } from './events'
import { mapMetadata } from './actions'
import {
  ItemHeader,
  ItemInformation,
} from '../../components'

export default function Item({ props }) {

  const { store } = props
  const { closeItem } = eventHandlers(props)
  const { dataset: item } = store

  const data = mapMetadata(item.content.metadata || [
    { key: 'dc.title', value: 'Loading...' },
    { key: 'dc.description', value: '' },
  ])

  const {
    
    title,
    description,
    publisher,

    author,
    dspace,
    reference,
    theme,
    keyword,

    license,
    created,
    modified,
    available,
    temporal,

  } = data

  return <article id="dataset" className="body content">

    <button className="close button" type="button" onClick={closeItem}>
      <i className="fa fa-times" aria-hidden="true"></i> close
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
