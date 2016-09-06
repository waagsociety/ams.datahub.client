export const route = {

  initialise: () => {
    const hash = location.hash
    const query = hashToQuery(hash)
    return {
      type: 'route-initialise',
      payload: { hash, query }
    }
  },

  query: ({ name, value, active }) => {

    const query = hashToQuery(location.hash)
    const isActiveParameter = name in query

    // TODO: make sure isActive/active is working properly
    const isActive = isActiveParameter && query[name].some(x => x === value)

    if (isActive) query[name] = query[name].filter(x => x !== value)
    else {
      if (isActiveParameter) query[name].push(value)
      else query[name] = [ value ]
    }

    const hash = queryToHash(query)
    updateLocation(hash)

    return {
      type: 'route-query',
      payload: { hash, query }
    }

  },

  search: value => {
    
    const query = hashToQuery(location.hash)
    query.search = [ value ]
    const hash = queryToHash(query)

    updateLocation(hash)

    return {
      type: 'route-search',
      payload: { hash, query }
    }

  },

}

// Methods
function updateLocation(hash) {
  location.hash = hash
}

function hashToQuery(hash) {

  if (hasProperties(hash)) return decodeURIComponent(hash).split('&').reduce(parameterToProperty, {})
  else return {}

  function hasProperties(hash) {
    return /\W+/g.test(hash)
  }

  function parameterToProperty(query, parameter) {
    const properties = getProperties(...parameter.split('='))
    return { 
      ...query, 
      ...properties
    }
  }

  function getProperties(key, value = '') {
    // created an Object with a sanitised key, and comma separate values
    return { [key.replace(/\W+/g, '')]: value.split(',') }
  }

}

function queryToHash(query) {

  return Object.keys(query).reduce((hash, key) => {
    
    const values = query[key].reduce((result, value) => {
      if (!!value) result.push(encodeURIComponent(value))
      return result
    }, [])

    if (values.length){
      const value = query[key].join(',')
      const parameter = [ encodeURIComponent(key), value ].join('=')
      return [ ...hash, parameter ]
    }
    else return [ ...hash ]

  }, []).join('&')

}