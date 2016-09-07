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

    return {
      type: 'search-load',
      payload: { content, loading: false, match: true }
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
