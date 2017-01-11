import React from 'react'

export default function ItemFilters(...content) {
  
  return <footer className='datasetfooter'>

    <ul className='metadata fields'>{
      
      content.map((group, i) => {
        return <li key={i}>lala</li>
      })

    }</ul>

  </footer>
}