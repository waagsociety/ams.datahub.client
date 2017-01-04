import React from 'react'

export default function Pagination({ content, events = {} }) {

  const { page, pageCount } = content
  const { skipPage } = events
  
  return <footer className='pages full primary'>
    <header className='pagenumber'>{page} / {pageCount}</header>
    <button className='previous' type='button' value={page - 1} disabled={page <= 1} onClick={skipPage(page - 1)}>Previous</button>
    <button className='next' type='button' value={page + 1} disabled={page >= pageCount} onClick={skipPage(page + 1)}>Next</button>
  </footer>

}