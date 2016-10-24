import axios from 'axios'

import { domain } from '../../config'

export const dataset = {

  fetch: dispatch => id => {

    axios({
      url: `${domain}rest/items/${id}?expand=all`,
      method: 'get',
    }).then(request => {
      // console.log('request', request)
      dispatch(dataset.loaded(request.data))
    }).catch(error => {
      dataset.error(error)
    })

    return {
      type: 'dataset-loading',
      payload: { loading: true, active: true, id },
    }

  },

  activity: active => {
    return {
      type: 'dataset-loading',
      payload: { active, },
    }
  },

  loaded: content => {
    return {
      type: 'dataset-loaded',
      payload: { content, loading: false, error: null },
    }
  },

  error: error => {
    return {
      type: 'dataset-error',
      payload: { error },
    }
  },

}