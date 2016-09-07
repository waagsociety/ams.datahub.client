import axios from 'axios'

export const search = {

  fetch: dispatch => hash => {
    
    // console.log('search query action', hash)

    const query = 'fiets'
    const method = 'get'
    const url = `http://138.201.141.84/solr/search/select?q=dc.subject:(fie*)&wt=json`

    axios({ method, url })
      .then(request => {
        dispatch(search.load(request))
      })
      .catch(error => {
        dispatch(search.error(error))
      })

    const payload = {  hash, loading: true, active: true }

    return {
      type: 'search-fetch',
      payload,
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

}
