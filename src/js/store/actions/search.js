import axios from 'axios'

const basepath = 'http://138.201.141.84/solr/search/select?wt=json&q='

const searchKey = 'search'

const fieldIndex = [{
  name: 'Author',
  field: 'author',
  key: 'author',
  tags: [],
}, {
  name: 'Publisher',
  field: 'dc.publisher',
  key: 'publisher',
  tags: [],
}, {
  name: 'Type',
  field: 'dc.type',
  key: 'type',
  tags: [],
}]

const fieldMap = fieldIndex.reduce((result, { key, value, field }) => ({
  ...result, 
  [key]: { value, field },
}), {})

export const search = {

  fetch: dispatch => route => {
    
    const { hash, query } = route
    const searchQuery = (query[searchKey] || []).join('')

    console.log(query)

    const x = basepath + Object.keys(query).map(value => {
      if (value === searchKey) value = `title:(${searchQuery}*) OR dc.description.abstract:(${searchQuery})`
      else if (value in fieldMap && query[value].length) {
        value = `${fieldMap[value].field}:(${query[value].join(' OR ')})`
      }
      return value
    }, basepath).join(' AND ')

    const method = 'get'
    const url = `http://138.201.141.84/solr/search/select?wt=json&q=title:(${searchQuery}*) OR dc.description.abstract:(${searchQuery})`

    console.log(x)

    axios({ method, url: decodeURIComponent(x) })
      .then(request => {
        // console.log(request.data.response.docs[0])
        dispatch(search.load(request))
      })
      .catch(error => {
        dispatch(search.error(error))
      })

    return {
      type: 'search-fetch',
      payload: { hash, loading: true, active: true }
    }

  },

  load: request => {

    const { response } = request.data
    const content = response
    const { docs } = content
    const fields = fieldIndex.map(item => ({ ...item, tags: {} }))

    const metadata = docs.reduce((result, dataset)  => {
      
      return fields.map(group => {
        const { field } = group
        const tagsInDataset = dataset[field]

        if (tagsInDataset) tagsInDataset.forEach(tag => {
          const count = group.tags[tag] || 0
          group.tags[tag] = count + 1
        })

        return group

      })
    }, fields)

    return {
      type: 'search-load',
      payload: { content, metadata, loading: false, match: true }
    }

  },

  error: error => ({
    
    // return {
      type: 'search-error',
      payload: { error, loading: false },
    // }

  }),

  clear: () => ({
    type: 'search-clear',
    payload: null
  }),

}
