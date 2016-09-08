import axios from 'axios'

export const search = {

  fetch: dispatch => route => {
    
    const { hash, query } = route
    const searchQuery = query.search.join('')

    const method = 'get'
    const url = `http://138.201.141.84/solr/search/select?q=(${searchQuery}*)&wt=json`

    axios({ method, url })
      .then(request => {
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

    const fields = [{
      name: 'Author',
      key: 'author',
      tags: {},
    }, {
      name: 'Publisher',
      key: 'dc.publisher',
      tags: {},
    }, {
      name: 'Type',
      key: 'dc.type',
      tags: {},
    }]

    const metadata = docs.reduce((result, dataset)  => {
      
      return fields.map(kind => {
        const { key } = kind
        const tagsInDataset = dataset[key]

        if (tagsInDataset) tagsInDataset.forEach(tag => {
          const count = kind.tags[tag] || 0
          kind.tags[tag] = count + 1
        })

        return kind

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
