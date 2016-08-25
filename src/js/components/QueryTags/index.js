import React from 'react'
import { SearchTag } from '../'

export default function ({ props }) {
    
	const { selection } = props.store.filter

	if (selection.length) return <div class='breadcrumb tags'>{ 
      [ ...selection ].reverse().map((item, i) => <SearchTag key={i} props={props} content={item} /> )
  }</div>
	else return <h1>QueryTags</h1>

}
