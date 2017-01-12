import React from 'react'
import { fields } from '../../config'

function targetBlank(event) {
  event.preventDefault()
  const { target } = event
}

export default function(metadata) {

  let { title, description, reference, dspace } = metadata

  title = title.join('')

  reference = reference.map((link, i) => {
    return <a className='primary button' key={i} href='#' onClick={targetBlank} target="_blank">
      <i className="fa fa-external-link" aria-hidden="true"></i> View Source
    </a>
  })

  dspace = dspace.map((link, i) => {
    return <a className='secondary button' key={i} href='#' onClick={targetBlank} target="_blank">
      View in dSpace
    </a>
  })


  const fieldList = fields.tags.reduce((result, item, index) => {
    
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
    </header>

    <section className='datasetbody'>
      {reference}
      {dspace}
    </section>

    <section className="datasetinformation">

    </section>

    <footer className='datasetfooter'>

      <ul className='metadata fields'>{fieldList}</ul>

    </footer>

  </div>

}