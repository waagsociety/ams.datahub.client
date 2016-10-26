import React from 'react'
import { eventHandlers } from './events'
import { getItemType, mapMetadata } from './actions'
import { fieldIndex, domain } from '../../config'
import { 
  ItemHeader,
  ItemInformation,
} from '../../components'

export default function Item({ props }) {

  const { store, dispatch } = props
  const { closeItem } = eventHandlers(props)
  const { dataset: item, route } = store

  const data = mapMetadata(item.content.metadata || [
    { key: 'dc.title', value: "Loading..." },
    { key: 'dc.description', value: "Hello" },
  ])

  // console.log(item.content.metadata)

  const {
    
    title,
    abstract,
    description,
    creator,
    publisher,
    source,

    author,
    dspace,
    sponsor,
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

  if (item.content.metadata) console.log(actualData)

  return <article id='dataset' className='body content'>
    
    <button className='close button' type='button' onClick={closeItem}>
      <i class="fa fa-times" aria-hidden="true"></i> close
    </button>    

    {ItemHeader({ title, creator, description })}

    <section className='datasetbody'>
      
    </section>

    {ItemInformation({ created, modified, available }, { temporal, license })}

    <footer className='datasetfooter'>

      <ul className='metadata fields'></ul>

    </footer>

  </article>

}

//  <section className="datasetinformation">
//     <ul className='metadata related'>
//       <li>
//         <header>Issued</header>
//         <time dateTime={issued.date}><i className="fa fa-clock-o" aria-hidden="true"></i> {issued.day}.{issued.month}.{issued.year}</time>
//       </li>
//       <li>
//         <header>Published</header>
//         <time dateTime={published.date}><i className="fa fa-clock-o" aria-hidden="true"></i> {published.day}.{published.month}.{published.year}</time>
//       </li>
//     </ul>
//   </section>
