export const eventHandlers = ({ dispatch }, payload) => ({

  toggleActivity({ target }) {
    dispatch({
      type: 'filter-toggle',
      payload: {
        ...payload,
        active: target.checked
      }
    })
  },

})