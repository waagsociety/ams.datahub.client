import axios from 'axios'
import { fields, domains } from '../../config'

const fieldMap = fields.tags.reduce((result, { key, value, field }) => ({
  ...result, 
  [key]: { value, field },
}), {})

const fieldIndexMap = fields.tags.reduce((map, item, index) => {
  map[item.field] = index
  return map
}, {})

const fieldList = fields.tags.map(x => x.field).join(',')
const fieldParameter = '&fl=' + fieldList + '&facet.field=' + fieldList + '&group.facet=true'

export const search = {

  fetch: dispatch => route => {
        
    const { hash, query } = route

    const method = 'get'
    const searchValue = (query['search'] || []).join('')
    const scope = (query.scope || ["ams"])[0]

    const filterAMS = scope === 'ams'
      ? ' AND (location.coll:24 OR location.coll:22 OR location.coll:23)'
      : ''

    const searchQuery = `(${[      
      'title', 
      'dc.description.abstract', 
      'dc.subject', 
      'dcat.keyword',
      'dcat.theme',
      'dc.subject',
      'dc.contributor.author',
      'dc.creator',
    ].map(field => {
      return `${field}:(*${searchValue}*)`
    }).join(' OR ')})` + filterAMS


    // Load searchQuery
    const searchParameters = Object.keys(query).reduce((result, key) => {
      let parameter = ''
      if (key in fieldMap && query[key].join('')) {
        parameter = `${fieldMap[key].field}:(${query[key].map(string => '"' + string + '"_s').join(' OR ')})`
      }
      if (parameter) result.push(parameter)
      return result
    }, [searchQuery]).join(' AND ')

    const searchURL = domains.solr + searchParameters
    axios({ method, url: searchURL + '&rows=10000&fl=title,handle,search.resourceid,dcterms.type' })
      .then(request => {
        dispatch(search.load(request))
      })
      .catch(error => {
        dispatch(search.error(error))
      })

    // Load metdata filters
    const filterURL = domains.solr + searchQuery + searchParameters + fieldParameter + '&rows=10000'
    axios({ method, url: filterURL })
      .then(request => {
        dispatch(search.loadMeta(request))
      })
      .catch(error => {
        console.log('group error', error)
      })

    return {
      type: 'search-fetch',
      payload: { hash, loading: true, active: true }
    }

  },

  load: request => {

    const { response } = request.data
    return {
      type: 'search-load',
      payload: { content: response, loading: false, match: true }
    }

  },

  loadMeta: request => {

    const { docs } = request.data.response

    const metadata = fields.tags.map(item => ({ ...item, tags: {} }))

    const x = docs.reduce((metadata, item) => {

      fields.tags.forEach(group => {
        
        const { field } = group
        const filters = field && field in item && item[field]

        if (Array.isArray(filters)) {           
            const groupIndex = fieldIndexMap[field]
            filters.forEach(filter => {
              const filterCount = metadata[groupIndex].tags[filter]
              if (filterCount) metadata[groupIndex].tags[filter] += 1 
              else metadata[groupIndex].tags[filter] = 1
            })
        }

      })

      return metadata

    }, metadata)

    return {
      type: 'search-meta',
      payload: { metadata: x }
    }


  },

  error: error => ({
      type: 'search-error',
      payload: { error, loading: false },
  }),

  clear: () => ({
    type: 'search-clear',
    payload: null
  }),

}
