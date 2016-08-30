// 
export const createFilterGroups = (groups, filters) => {

  const groupMap = groups.map(item => ({ 
    ...item,
    filters: [],
    match: false
  }))

  return filters.reduce((result, filter) => {  

    const { index } = filter
    const group = result[index]
    
    group.filters.push(filter)
    group.match = true

    return result

  }, groupMap)

}