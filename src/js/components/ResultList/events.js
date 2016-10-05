import { route, view } from '../../store'

export const eventHandlers = ({ dispatch }) => ({

  viewData(id) {
    return event => {
      event.preventDefault()
      dispatch(route.replace({ article: [id] }))
    }
  },

  showAll() {
    dispatch(route.replace({ results: [1] }))
  },

  skipPage(event) {
    let { value, min, max } = event.target
    if (value < min) {
      console.log(value)
      value = min
    }

    dispatch(route.replace({ results: [value] }))
  },

  closeResults() {
    dispatch(route.remove('results'))
  },

})