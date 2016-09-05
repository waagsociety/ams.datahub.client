import { initialState } from './initialise'

export default function(state = initialState, { type, payload }) {

  switch (type) {

    case 'route-initialise': {

      const hash = payload
      const query = hashToQuery(payload) 

      return { ...state, hash, query }

    }

    default: return { ...state }

  }
  
}


function hashToQuery(hash) {

  if (hasProperties(hash)) return decodeURIComponent(hash).split('&').reduce(parameterToProperty, {})
  else return null

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

  if (query) return '#' + Object.keys(query).reduce((hash, key) => {
    const value = query[key].join(',')
    const parameter = [ key, value ].join('=')
    return [ ...hash, parameter ]
  }, []).join('&')

  else return null

}