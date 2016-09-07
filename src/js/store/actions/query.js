import axios from 'axios'

export const query = {

  fetch: dispatch => hash => {

    const query = 'fiets'
    const method = 'get'
    const url = `http://138.201.141.84/solr/search/select?q=dc.subject:(fie*)&wt=json`

    axios({ method, url })
      .then(request => {
        console.log(request.data)
        dispatch(query.load(request))
      })
      .catch(error => ({
        type: 'query-error',
        payload: error,
      }))

    const payload = { 
      hash, 
      loading: true,
    }

    return {
      type: 'query-fetch',
      payload,
    }

  },

  load: request => {

    const { data } = request

    return {
      type: 'query-load',
      payload: {
        data,
        loading: false,
      }
    }

  },

  error: error => {
    
    return {
      type: 'query-error',
      payload: error,
    }

  },

}
