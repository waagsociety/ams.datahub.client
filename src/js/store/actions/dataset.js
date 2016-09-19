import axios from 'axios'

export const dataset = {

  fetch: dispatch => id => {

    axios({
      url: `http://138.201.141.84/rest/items/${id}?expand=all`,
      method: 'get',
    }).then(request => {
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