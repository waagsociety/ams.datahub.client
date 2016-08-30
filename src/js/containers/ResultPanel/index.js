import React from 'react'
import { Feedback, ResultsPreview } from '../../components'

export default function ResultPanel({ props }) {

  return <div id='ResultPanel' className='container floating secondary panel'>
    <ResultsPreview props={props} />
  </div>

}