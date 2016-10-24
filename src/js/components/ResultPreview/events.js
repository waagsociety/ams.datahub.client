export const eventHandlers = ({ dispatch }) => ({

  loadItem: event => {

    event.preventDefault()
    const hash = event.target.getAttribute('href')

  },

})