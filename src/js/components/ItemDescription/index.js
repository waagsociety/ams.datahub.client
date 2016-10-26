import React from 'react'

export default function ItemDescription(contents) {
  return contents.map((text, index) => <p key={index}>{text}</p>)
}