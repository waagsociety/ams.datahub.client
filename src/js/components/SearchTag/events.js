import { route } from '../../store'

export const eventHandlers = ({ dispatch, store }) => ({

  searchQuery({ target }) {
    const { value, name } = target
    dispatch(route.search(value))
  },

})