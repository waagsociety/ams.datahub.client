import { route } from '../../store'

export const eventHandlers = ({ dispatch }) => ({

  viewData(event) {
    event.preventDefault()
    const href = event.target.getAttribute('href').replace(/^\#/, '&')
    dispatch(route.update(location.hash + href))
  },

})