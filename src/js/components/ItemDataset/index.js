import React from 'react'

export default function ItemDataset({ data }) {
  const { source } = data
  return <section>
    <h1>Dataset</h1>
    <a href={source} target='_blank'>Get this Tool</a>
  </section>
}