import axios from 'axios'
import { fields, domains } from '../../config'

const domain = 'http://amsdatahub.waag.org/dspace/solr/search/select'
const amsCollection = [23, 24, 30, 31, 32, 33]
const requestFields = ['title', 'handle', 'dcterms.type',  'dc.subject', 'dc.creator']

const joinAnd = joinQuery(' AND ')
const joinOr = joinQuery(' OR ')

const select = createQuery(domain, {
  wt: 'json',
  rows: 10000,
  fl: requestFields,
})

export const search = {

  fetch: dispatch => route => {
    
    const { hash, query } = route

    // limit search to AMS data
    const scope = head(query.scope) !== 'all' && joinOr(amsCollection)

    // search options
    const options = queryOptions({
      'withdrawn': 'false',
      'location.coll': scope,
    })

    const parameters = fields.tags.reduce((result, tag) => {
      const value = (query[tag.key] || []).map(x => '"' + x + '"')
      console.log(value)
      if (value && value.length) result.push(tag.field + ':' + joinAnd(value))
      return result
    }, query.search || [])

    // combine options with search query
    const url = select({ 
      q: joinAnd(parameters.concat(options))
    })
    
    axios.get(url)
      .then(getRequestContent)
      .then(facetMetadata)
      .then(data => {
        dispatch(search.load(data))
      })
      .catch(error => dispatch(search.error(error)))

    return {
      type: 'search-fetch',
      payload: { hash, loading: true, active: true }
    }

  },

  load: ({ content, metadata }) => ({
    type: 'search-load',
    payload: { content, metadata, loading: false, match: true }
  }),

  error: error => ({
      type: 'search-error',
      payload: { error, loading: false },
  }),

  clear: () => ({
    type: 'search-clear',
    payload: null
  }),

}

function facetMetadata(content) {
  const metadata = storeFields(content)
  return { content, metadata }
}

function storeFields(content) {

  const createStore = data => ({
    data,
    add(value) {
      const key = value.toLowerCase().trim()
      data[key] = (data[key] || 0) + 1
      return data
    }
  })
  
  return fields.tags.map(function({ key, field, name }) {
    
    const store = createStore({})
    content.forEach(function(row) {
      const values = row[field]
      if (values) values.forEach(store.add)
    })

    const data = Object.keys(store.data).map(function(key) {
      const count = store.data[key]
      return { value: key, count }
    }).sort(function(a, b) {
      return a.count === b.count ? 0 : a.count > b.count ? -1 : 1
    })

    return { key, field, name, data }

  })

}

function getRequestContent(request) {
  return request.data.response.docs
}

function queryOptions(object) {
  return Object.keys(object).reduce(function(result, key) {
    const value = object[key]
    if (value && value.length) result.push(key + ':' + value)
    return result
  }, [])
}

function head(array) {
  return (array || [])[0]
}

function joinQuery(separator) {
  return function(array) {
    return '(' + array.join(separator) + ')'
  }
}

function createQuery(domain, setup) {
  
  const defaultParameters = createParameters(setup)

  return function(query) {
    const parameters = createParameters(query)
    return domain + '?' + defaultParameters.concat(parameters).join('&')
  }

  function createParameters(object) {
    return Object.keys(object || {}).map(function(parameter) {
      return parameter + '=' + object[parameter]
    })
  }
  
}