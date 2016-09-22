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