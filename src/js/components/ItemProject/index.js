import React from 'react'

export default function ItemProject({ data }) {
  const { source } = data
  return <section>
    <h1>Project</h1>
    <a href={source} target='_blank'>Find this Publication</a>
  </section>
}