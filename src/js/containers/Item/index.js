import React from 'react'
import { eventHandlers } from './events'
import { mapMetadata } from './actions'
import {
  ItemHeader,
  ItemInformation,
  ItemDataset,
  ItemPublication,
  ItemProject,
  ItemTool,
} from '../../components'

const ItemTypes = {
  dataset: ItemDataset,
  publication: ItemPublication,
  project: ItemProject,
  tool: ItemTool,
}

export default function Item({ props }) {

  const { store } = props
  const { closeItem } = eventHandlers(props)
  const { content } = store.dataset

  const size = Object.keys(content).length

  const data = mapMetadata(Object.assign({
    'dc.title': 'Loading...',
  }, content))

  const {
    
    title,
    type,
    source,
    publicationType,
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

    projectPartner,
    projectContact,
    projectMember,
    projectLeader,

  } = data

  const itemType = type && type[0]
  const ItemMeta = ItemTypes[itemType]

  return <article id="dataset" className="body content">

    <button className="close button" type="button" onClick={closeItem}>
      <i className="fa fa-times" aria-hidden="true"></i> close
    </button>

    {ItemHeader({
      title,
      type,
      publisher,
      description,
      author,
      dspace,
      reference
    })}

    <section style={{ padding: '20px 40px' }}>
    { ItemMeta ? <ItemMeta data={data}/> : null }
    </section>

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

    <a href="mailto:amsdatahub@ams-institute.org">Correcties, feedback</a>

  </article>

}
