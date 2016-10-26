import React from 'react'
import { fieldIndex } from '../../config'

export default function({ metadata }) {

  let { 
    title,
    abstract,
    reference,
  } = metadata

  title = title.join('')
  abstract = abstract.map((text, i) => <p key={i}>{text}</p>)
  reference = reference.map((link, i) => {
    return <a className='primary button' key={i} href={reference} target='_blank'>
      <i className="fa fa-external-link" aria-hidden="true"></i> View Source
    </a>
  })

  const fields = fieldIndex.reduce((result, item, index) => {
    
    const { key } = item
    const data = metadata[key]
    
    if (data.length) { 
      const list = <li key={index}>
        <header>{item.name}</header>
        <ul>{
          data.map((item, index) => {
            return <li key={index}>
              <a className='tag' href={`#${key}=${item}`}>{item}</a>
            </li>
          })
        }</ul>
      </li>
      result.push(list)
    }

    return result

  }, [])

  return <div>

    <header className='datasetheader'>
      <h1>{title}</h1>
      {abstract}
    </header>

    <section className='datasetbody'>
      {reference}
    </section>

    <section className="datasetinformation">

    </section>

    <footer className='datasetfooter'>

      <ul className='metadata fields'>{fields}</ul>

    </footer>

  </div>

}