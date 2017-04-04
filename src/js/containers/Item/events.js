import { route } from '../../store'

export const eventHandlers = ({ dispatch }) => ({

  closeItem: event => {

    event.preventDefault()
    dispatch(route.remove('handle'))

  },

})