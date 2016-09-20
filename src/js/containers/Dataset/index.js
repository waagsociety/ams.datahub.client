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
  const { name, metadata = [], bitstreams } = dataset.content

  console.log(dataset.content)

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

  const reduceDate = dates => dates.reduce((result, date) => {
    
    const leftPadZero = value => value.length < 2 ? '0' + value : value
    const dateObject = new Date(date)

    return {
      date: dateObject,
      day: leftPadZero(dateObject.getDate().toString()),
      month: leftPadZero((dateObject.getMonth() + 1).toString()),
      year: dateObject.getFullYear().toString(),
    }

  }, {})

  const issued = reduceDate(meta['dc.date.issued'])
  const published = reduceDate(meta['dc.date.available'])
  const repository = meta['dc.identifier.uri'][0]

  const files = bitstreams.length ? <ul>{
    bitstreams.map((file, i) => <li key={i}>File</li>)
  }</ul> : <p>There are no files linked to this dataset.</p>

  return <article id='dataset' className='body content'>
    <button className='close button' type='button' onClick={closeDataset}><i className="fa fa-times" aria-hidden="true"></i></button>
    <header className='datasetheader'>
      <h1>{name}</h1>
    </header>
    <section className='datasetbody'>
      {description}
      {files}
    </section>
    <footer className='datasetfooter'>
      <ul className='metadata fields'>{fieldMeta}</ul>
      <ul className='metadata related'>
        <li>
          <header>Issued</header>
          <time dateTime={issued.date}><i className="fa fa-clock-o" aria-hidden="true"></i> {issued.day}.{issued.month}.{issued.year}</time>
        </li>
        <li>
          <header>Published</header>
          <time dateTime={published.date}><i className="fa fa-clock-o" aria-hidden="true"></i> {published.day}.{published.month}.{published.year}</time>
        </li>
        <li>
          <header>Repository</header>
          <a className='primary button' target='_blank' href={repository}><i className="fa fa-external-link" aria-hidden="true"></i> View in dSpace</a>
        </li>
      </ul>
    </footer>
  </article>

}
