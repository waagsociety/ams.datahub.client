import { route, filter } from '../../store'

export const eventHandlers = ({ dispatch, store }) => ({

  searchQuery({ target }) {
    const { value } = store.filter
    dispatch(route.search(value))
    dispatch(filter.search(value))
  },

})