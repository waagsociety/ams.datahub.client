import { route, view } from '../../store'

export const eventHandlers = ({ dispatch }) => ({

  viewData(handle) {
    return event => {
      event.preventDefault()
      dispatch(route.replace({ handle: [handle] }))
    }
  },

  showAll() {
    dispatch(route.replace({ results: [1] }))
  },

  skipPage(value) {
    return event => dispatch(route.replace({ results: [value] }))
  },

  closeResults() {
    dispatch(route.remove('results'))
  },

})