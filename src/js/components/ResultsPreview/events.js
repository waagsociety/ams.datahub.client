export const eventHandlers = ({ dispatch }) => ({

  loadArticle: event => {

    event.preventDefault()
    const hash = event.target.getAttribute('href')

  },

})