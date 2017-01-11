import React from 'react'

function Authors(content) {

  if (content.length) return <section>
    <header>{content.length > 1 ? 'Authors' : 'Author'}</header>
    <ul className="authors">
    { content.map((value, i) => <li key={i}>{value}</li>) }
    </ul>
  </section>
  else return []

}

function Ref(url) {
  if (url.length) return <a href={url} className="external button" target="_blank">View Source</a>
  else return []
}

export default function ItemHeader({ title, publisher, author, description, dspace, reference }) {

  return <header className='datasetheader'>
    <h1>{title}</h1>
    <h2 className="publisher">{publisher.filter(item => !!item).join(', ')}</h2>
    
    {Authors(author)}

    {description.map((text, index) => <p key={index}>{text}</p>)}

    {dspace.map((link, index) => 
      <a key={index} className="primary button" href={link.replace('/xmlui/', '/jspui/')} target='_blank'>View in dSpace</a>
    )}

    {Ref(reference)}

  </header>
}