import React from 'react'
import { Feedback, ResultList } from '../../components'

export default function ResultPanel({ props }) {

  return <div id='ResultPanel' className='container floating secondary panel'>
    <ResultList props={props} />
  </div>

}