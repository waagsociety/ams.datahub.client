export const eventHandlers = ({ dispatch }, payload) => ({

  toggleActivity({ target }) {
    dispatch({
      type: 'filter-toggle',
      payload,
    })
  },

})