export const dataset = {

  fetch: dispatch => id => {

    return {
      type: 'dataset-loading',
      payload: { loading: true }
    }

  },

  error: dispatch => id => {
    return {
      type: 'dataset-error',
      payload: { hash, query }
    }
  },

}