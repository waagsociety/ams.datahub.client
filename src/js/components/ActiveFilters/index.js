import React from 'react'
import { FilterTag } from '../'

export default function ActiveFilters({ props }) {
    
	const { selection } = props.store.filter

	return <div class='breadcrumb tags'>{ 
      [ ...selection ].reverse().map((item, i) => <FilterTag key={i} props={props} content={item} /> )
  }</div>

}
