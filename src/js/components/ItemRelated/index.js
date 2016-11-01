import React from 'react'

function RelatedItem(item) {
  
  console.log(item);
  const { handle } = item
  const id = item['search.resourceid']
  const title = item['dc.title']
  
  return <li key={handle}>
    <a href={`#item=${id}`}>{title}</a>
  </li>

}

function RelatedList(content) {
  const { data, title } = content
  return <li key={content.title}>
    <header>{title}</header>
    { data.length
    ? <ul>{data.map(item => RelatedItem(item))}</ul>
    : <p>There are no related {title.toLowerCase()}.</p>
    }
  </li>
}

export default function ItemRelated(related) {

  const { content, loaded } = related
  const keys = content && Object.keys(content)

  return <section className='datasetrelated'>
      { loaded && content
      ? <ul className='metadata related'>
        { keys.map(key => RelatedList(content[key])) }
        </ul> 
      : <h1>Loading</h1>
      }
      
    </section>

}