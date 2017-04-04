import React from 'react'
import { eventHandlers } from './events'
import { mapMetadata } from './actions'
import {
  ItemHeader,
  ItemBody,
  ItemInformation,
  ItemDataset,
  ItemPublication,
  ItemProject,
  ItemTool,
  ItemMeta,
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

  const mailto = {
    address: 'amsdatahub@ams-institute.org',
    subject: 'AMS Datahub Feedback',
    source: encodeURI(location.href),
  }
  const href = `mailto:${mailto.address}?subject=${mailto.subject} - ${mailto.source}`

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
    contributor,

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
    temporalResolution,
    spatial,
    spatialResolution,

    access,

    projectPartner,
    projectContact,
    projectMember,
    projectLeader,

  } = data

  const itemType = type && type[0]
  const ItemMeta = ItemTypes[itemType]

  return <article id="dataset" className="Item body">

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

    {ItemMeta ? <ItemMeta data={data}/> : null}

    {ItemBody({ description, author, dspace, reference })}

    {ItemInformation({
      created,
      modified,
      available,
    }, {
      temporal,
      license,
      keyword,
      theme,
    }, {href, type})}
  </article>

}
