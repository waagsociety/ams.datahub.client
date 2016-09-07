export const tempReducer = ({ results, filter }) => {

  const { search, value, selection } = filter
  const { localStorage } = results

  const pattern = new RegExp(search, 'i')
  const globalSearch = selection.length < 1
  const idDictionary = []

  if (globalSearch) return getItemIndex(localStorage).filter(item => pattern.test(item.name))
  else return selection.reduce((result, { key, value }) => {

    const resultGroup = localStorage[key]
    const resultList = (resultGroup && resultGroup[value] || []).filter(item => {
      if (idDictionary[item.id]) return false
      else idDictionary[item.id] = true
      return pattern.test(item.name)
    })

    return result.concat(resultList)

  }, [])

  function getItemIndex(localStorage) {
    return (localStorage['dc.type'] && localStorage['dc.type'].dataset) || []
  }

}