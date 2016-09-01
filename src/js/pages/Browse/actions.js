const itemKey = 'article'

export const hashToQuery = (hash) => {

  return decodeURIComponent(hash).split('&').reduce(parameterToProperty, {})

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

export const queryToHash = (query) => {

  return Object.keys(query).reduce((hash, key) => {
    const value = query[key].join(',')
    const parameter = [ key, value ].join('=')
    return [ ...hash, parameter ]
  }, []).join('&')

}