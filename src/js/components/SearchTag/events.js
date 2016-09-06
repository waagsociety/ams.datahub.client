import { route, filter } from '../../store'

export const eventHandlers = ({ dispatch, store }) => ({

  searchQuery({ target }) {
    const { value, name } = target
    const active = target.checked
    dispatch(route.search(value))
    dispatch(filter.search(value))
  },

})