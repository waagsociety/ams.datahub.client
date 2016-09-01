import { article } from '../../store'
import { hashToQuery } from '../../pages/Browse/actions'

export const eventHandlers = ({ dispatch }) => ({

  loadArticle: (event) => {
    event.preventDefault()
    const hash = event.target.getAttribute('href')
    const query = hashToQuery(hash)
    dispatch(article.load(dispatch)(query))
  },

})