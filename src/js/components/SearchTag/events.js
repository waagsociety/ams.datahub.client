import { route } from '../../store'

export const eventHandlers = ({ dispatch, store }) => ({

  searchQuery({ target }) {
    const { checked } = target
    const { value } = store.view.SearchInput
    const update = checked && value ? '' : value
    dispatch(route.remove('search'))
  },

})