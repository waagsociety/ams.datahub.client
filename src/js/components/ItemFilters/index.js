import React from 'react'

export default function ItemFilters(...content) {
  
  return <footer className='datasetfooter'>

    <ul className='metadata fields'>{
      
      content.map((group, i) => {
        console.log(group)
        return <li key={i}>lala</li>
      })

    }</ul>

  </footer>
}