export const eventHandlers = ({ dispatch, store }) => ({

  searchQuery({ target }) {
    const { search, value } = store.filter
    dispatch({
      type: 'filter-search',
      payload: !search && value || '',
    })
  },

})