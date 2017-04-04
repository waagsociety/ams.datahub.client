import React from 'react'

export default function ItemTool({ data }) {
  const { source } = data
  return <section>
    <h1>Tool</h1>
    <a href={source} target='_blank'>Get this Tool</a>
  </section>
}