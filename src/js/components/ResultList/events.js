import { route, view } from '../../store'

export const eventHandlers = ({ dispatch }) => ({

  viewData(event) {
    event.preventDefault()
    const href = event.target.getAttribute('href').replace(/^\#/, '&')
    dispatch(route.update(location.hash + href))
  },

  showAll() {
    dispatch(route.replace({ results: [1] }))
  },

  skipPage(page) {
    return event => dispatch(route.replace({ results: [page] }))
  },

  closeResults() {
    dispatch(route.remove('results'))
  },

})