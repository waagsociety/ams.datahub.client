export const eventHandlers = ({ dispatch }, payload) => ({

  toggleQuery({ target }) {
    dispatch({
      type: 'filter-toggle',
      payload: {
        ...payload,
        active: target.checked
      }
    })
  },

})