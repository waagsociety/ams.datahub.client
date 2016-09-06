import { query, filter } from '../../store'

export const eventHandlers = ({ dispatch, store }) => ({

  searchQuery({ target }) {
    const { value } = store.filter
    dispatch(query.search(value))
    dispatch(filter.search(value))
  },

})