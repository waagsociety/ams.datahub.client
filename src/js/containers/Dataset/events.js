import { route } from '../../store'

export const eventHandlers = ({ dispatch }) => ({

  closeDataset: event => {

    event.preventDefault()
    dispatch(route.remove('article'))

  },

})