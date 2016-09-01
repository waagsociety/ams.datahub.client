import React from 'react'

export default function GlobalNavigation({ props }) {

  return <nav class='page global'>
    <a class='logo' href="http://138.201.141.84/ams/">datahub</a>
    <ul>
      <li><a href="http://138.201.141.84/ams/information">Information</a></li>
      <li><a href="http://138.201.141.84/ams/browse-data" class='active'>Browse data</a></li>
    </ul>
  </nav>

}