import { route, view } from '../../store'

export const eventHandlers = ({ dispatch }) => ({

  viewData(id) {
    return event => {
      event.preventDefault()
      dispatch(route.replace({ item: [id] }))
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