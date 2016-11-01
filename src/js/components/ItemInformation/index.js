import React from 'react'

export default function ItemInformation(dates, strings) {

  const { created, modified, available } = dates
  const { temporal, license, keyword, theme } = strings

  dates = [
    { name: "Created", value: created[0] },
    { name: "Modified", value: modified[0] },
  ].filter(item => !!item.value ).map(item => {
    var date = new Date(item.value)
    item.value = toHumanDate(date)
    return item
  })

  strings = [
    { name: "Temporal", value: temporal.join(', ') },
    { name: "License", value: license.join(', ') },
    { name: "Theme", value: theme.join(', ') },
    { name: "Keywords", value: keyword.join(', ') },
  ].filter(item => !!item.value.length)

  return <section className='datasetinformation'>
    <ul className='metadata related'>{
      dates.concat(strings).map(item => <li key={item.name}>
        <header>{item.name}</header>
        {item.value}
      </li>)
    }</ul> 
  </section>

}

function toMonthString(n) {
  return [ 
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November',
    'December'
  ][n]
}

function toDateString(n) {
  if (n > 10 && n < 20) n += 'th'
  else if (!((n - 1) % 10)) n += 'st'
  else if (!((n - 2) % 10)) n += 'nd'
  else if (!((n - 3) % 10)) n += 'rd'
  else n += 'th'
  return n
}

function toHumanDate(value) {

  const date = new Date(value)
  const day = toDateString(date.getDate())
  const month = toMonthString(date.getMonth())
  const year = date.getFullYear()

  return [ month + ' ' + day, year ].join(', ')

}